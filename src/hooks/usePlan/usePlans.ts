import { useQuery } from "@tanstack/react-query";
import { PlanService } from "@/Services/planService";
import type { IPlan } from "@/types/IPlan";

interface PlansApiResponse {
  data: IPlan[];
  pagination: {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
  };
}

export const usePlans = (
  page: number,
  limit: number,
  filters?: Partial<IPlan>
) => {
  return useQuery<PlansApiResponse, Error>({
    queryKey: ["plans", page, limit, filters],
    queryFn: () => PlanService.getAll({ page, limit, ...filters }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};