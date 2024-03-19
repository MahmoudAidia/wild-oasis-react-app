import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import { Fragment } from "react";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <Fragment>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </Fragment>
  );
}

export default Bookings;
