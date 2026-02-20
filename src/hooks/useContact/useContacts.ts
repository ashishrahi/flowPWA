import { useQuery } from "@tanstack/react-query";
import { ContactService } from "@/Services/contactService";
import type { IContact } from "@/types/IContact";

interface ContactsApiResponse {
  data: IContact[];
  pagination: {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
  };
}

export const useContacts = (
  page: number,
  limit: number,
  filters?: Partial<IContact>
) => {
  return useQuery<ContactsApiResponse, Error>({
    queryKey: ["contacts", page, limit, filters],
    queryFn: () =>
      ContactService.getAll({ page, limit, ...filters }),
    staleTime: 1000 * 60 * 5,
  });
};