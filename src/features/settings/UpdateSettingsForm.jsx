import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import useSettings from "./useSettings";
import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  const { settings, isLoading } = useSettings();
  const { register, handleSubmit } = useForm();

  if (isLoading) return <Spinner />;

  const {
    maxBookingLength,
    minBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  } = settings;

  function formSubmit() {}
  return (
    <Form onSubmit={handleSubmit(formSubmit)}>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          {...register("minBookingLength,", {
            required: "This input is required",
          })}
          defaultValue={minBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          {...register("maxBookingLength,", {
            required: "This input is required",
          })}
          defaultValue={maxBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          {...register("maxGuestsPerBooking,", {
            required: "This input is required",
          })}
          defaultValue={maxGuestsPerBooking}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          {...register("breakfastPrice", {
            required: "This field is required",
          })}
          defaultValue={breakfastPrice}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
