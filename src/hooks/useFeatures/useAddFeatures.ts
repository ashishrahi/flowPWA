import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FeatureService } from "@/Services/featureService";
import type{ IFeature } from "@/types/IFeatures";

export const useAddFeature = () => {
  const queryClient = useQueryClient();

  return useMutation<IFeature, Error, Omit<IFeature, "_id">>({
    mutationFn: (newFeature) => FeatureService.create(newFeature),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["features"] });
    },
  });
};
