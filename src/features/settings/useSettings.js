import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

function useSettings() {
  const { data: settings, isLoading: isLoading } = useQuery({
    queryFn: getSettings,
    queryKey: ["settings"],
  });

  return { isLoading, settings };
}

export default useSettings;
