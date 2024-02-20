import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  // Get access to the query client to invalidate any cache
  const queryClient = useQueryClient();

  // Posting the form data to Supabase
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: (newCabin) => {
      // Post the data using createCabin from the apiCabin services
      createEditCabin(newCabin);
    },
    onSuccess: () => {
      // InValidate the cache to make react query refetches the new data from Supabase
      queryClient.invalidateQueries({ queryKey: ["cabins"] });

      // Notify the user that the process was successful
      toast.success("New cabin successfully created.");
    },

    onError: (err) => {
      // Notify the user that the process failed
      toast.error(err.message);
    },
  });

  return {
    isCreating,
    createCabin,
  };
}
