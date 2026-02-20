import { useQuery } from "@tanstack/react-query";
import { ContactService } from "@/Services/contactService";
import type { IContact } from "@/types/IContact";

export const useContact = (id: string) => {
  return useQuery<IContact, Error>({
    queryKey: ["contact", id],
    queryFn: () => ContactService.getById(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id, // prevent API call if id is empty
  });
};