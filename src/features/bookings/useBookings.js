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

  // SORT
  let sortByRow = searchParams.get("sortBy") || "startDate-desc";

  const [field, direction] = sortByRow.split("-");
  let sortBy = { field, direction };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["Bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });
  return { bookings, isLoading, error };
}

export default useBookings;
