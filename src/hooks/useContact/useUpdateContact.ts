import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ContactService } from "@/Services/contactService";
import type { IContact } from "@/types/IContact";

export const useUpdateContact = () => {
  const queryClient = useQueryClient();

  return useMutation<IContact, Error, IContact>({
    mutationFn: (updatedContact: IContact) =>
      ContactService.update(updatedContact),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
};