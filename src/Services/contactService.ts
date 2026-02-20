import axiosInstance from "../Services/apiClient";
import type { IContact } from "@/types/IContact";

// Pagination type
export interface Pagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}

// API response type for getAll
export interface ContactsApiResponse {
  data: IContact[];
  pagination: Pagination;
}

export const ContactService = {
  // Fetch all contacts with pagination & optional filters
  getAll: async (params?: {
    page?: number;
    limit?: number;
    name?: string;
    email?: string;
    isRead?: boolean;
  }): Promise<ContactsApiResponse> => {
    const response = await axiosInstance.get<ContactsApiResponse>(
      "/v1/contacts",
      { params }
    );
    return response.data;
  },

  // Fetch single contact by ID
  getById: async (id: string): Promise<IContact> => {
    const response = await axiosInstance.get<{ data: IContact }>(
      `/v1/contacts/${id}`
    );
    return response.data.data;
  },

  // Create new contact (usually public form)
  create: async (
    contact: Omit<IContact, "_id" | "isRead" | "createdAt">
  ): Promise<IContact> => {
    const response = await axiosInstance.post<{ data: IContact }>(
      "/v1/contacts",
      contact
    );
    return response.data.data;
  },

  // Update contact (mostly for isRead toggle)
  update: async (contact: {
    _id: string;
    isRead?: boolean;
  }): Promise<IContact> => {
    const response = await axiosInstance.put<{ data: IContact }>(
      `/v1/contacts/${contact._id}`,
      contact
    );
    return response.data.data;
  },

  // Delete contact
  delete: async (id: string): Promise<void> => {
    await axiosInstance.delete(`/v1/contacts/${id}`);
  },
};