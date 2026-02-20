import { useQuery } from "@tanstack/react-query";
import { PlanService } from "@/Services/planService";
import type { IPlan } from "@/types/IPlan";

export const usePlan = (id: string) => {
  return useQuery<IPlan, Error>({
    queryKey: ["plan", id],
    queryFn: () => PlanService.getById(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!id, // prevent call if id is empty
  });
};