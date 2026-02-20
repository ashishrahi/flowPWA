import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PlanService } from "@/Services/planService";
import type { IPlan } from "@/types/IPlan";

export const useUpdatePlan = () => {
  const queryClient = useQueryClient();

  return useMutation<IPlan, Error, IPlan>({
    mutationFn: (updatedPlan: IPlan) =>
      PlanService.update(updatedPlan),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["plans"] });
    },
  });
};