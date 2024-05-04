import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: ({ user }) => {
      queryClient.setQueriesData(["user"], user);
      navigate("/");
    },

    onError: (err) => {
      toast.error("Provided email or password is incorrect");
      console.log("Error", err);
    },
  });

  return { login, isLoading };
}

export default useLogin;
