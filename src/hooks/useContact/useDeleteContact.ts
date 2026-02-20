import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ContactService } from "@/Services/contactService";

export const useDeleteContact = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: (id: string) => ContactService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
};