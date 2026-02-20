import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PlanService } from "@/Services/planService";
import type { IPlan } from "@/types/IPlan";

export const useAddPlan = () => {
  const queryClient = useQueryClient();

  return useMutation<IPlan, Error, Omit<IPlan, "_id">>({
    mutationFn: (newPlan) => PlanService.create(newPlan),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["plans"] });
    },
  });
};