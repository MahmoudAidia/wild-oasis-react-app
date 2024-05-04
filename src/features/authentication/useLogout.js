import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      //  we can simply navigate to the login page and erace the navigation history (the place where we were)
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
    onError: () => {
      toast.error("Error happened while logout");
    },
  });
  return { logout, isLoading };
}

export default useLogout;
