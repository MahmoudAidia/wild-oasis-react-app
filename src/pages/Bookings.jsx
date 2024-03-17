import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import { Fragment } from "react";

function Bookings() {
  return (
    <Fragment>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <p>TEST</p>
      </Row>
      <BookingTable />
    </Fragment>
  );
}

export default Bookings;
