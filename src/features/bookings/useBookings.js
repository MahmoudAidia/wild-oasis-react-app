import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  let filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : {
          field: "status",
          value: filterValue,
        };
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["Bookings", filter],
    queryFn: () => getBookings({ filter }),
  });
  return { bookings, isLoading, error };
}

export default useBookings;
