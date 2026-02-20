import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PlanService } from "@/Services/planService";

export const useDeletePlan = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: (id: string) => PlanService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["plans"] });
    },
  });
};