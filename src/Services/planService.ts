import axiosInstance from "../Services/apiClient";
import type { IPlan } from "@/types/IPlan";

// Pagination type
export interface Pagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}

// API response type for getAll
export interface PlansApiResponse {
  data: IPlan[];
  pagination: Pagination;
}

export const PlanService = {
  // Fetch all plans with pagination & optional filters
  getAll: async (params?: {
    page?: number;
    limit?: number;
    name?: string;
    period?: string;
    isActive?: boolean;
    popular?: boolean;
  }): Promise<PlansApiResponse> => {
    const response = await axiosInstance.get<PlansApiResponse>(
      "/v1/plans",
      { params }
    );
    return response.data;
  },

  // Fetch a single plan by ID
  getById: async (id: string): Promise<IPlan> => {
    const response = await axiosInstance.get<{ data: IPlan }>(
      `/v1/plans/${id}`
    );
    return response.data.data;
  },

  // Create a new plan
  create: async (plan: Omit<IPlan, "_id">): Promise<IPlan> => {
    const response = await axiosInstance.post<{ data: IPlan }>(
      "/v1/plans",
      plan
    );
    return response.data.data;
  },

  // Update an existing plan
  update: async (plan: IPlan): Promise<IPlan> => {
    const response = await axiosInstance.put<{ data: IPlan }>(
      `/v1/plans/${plan._id}`,
      plan
    );
    return response.data.data;
  },

  // Delete a plan by ID
  delete: async (id: string): Promise<void> => {
    await axiosInstance.delete(`/v1/plans/${id}`);
  },
};