import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ContactService } from "@/Services/contactService";
import type { IContact } from "@/types/IContact";

export const useAddContact = () => {
  const queryClient = useQueryClient();

  return useMutation<IContact, Error, Omit<IContact, "_id">>({
    mutationFn: (newContact) => ContactService.create(newContact),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
};