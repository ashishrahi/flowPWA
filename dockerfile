# 1️⃣ Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first (cache layer)
COPY package.json package-lock.json ./
RUN npm ci

# Copy all files
COPY . .

# Build the Next.js app with Turbopack
RUN npm run build

# -----------------------------------------
# 2️⃣ Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy built app from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/node_modules ./node_modules

# Expose default Next.js port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
