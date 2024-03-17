import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["Bookings"],
    queryFn: getBookings,
  });
  return { bookings, isLoading, error };
}

export default useBookings;
