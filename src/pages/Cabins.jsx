import { Fragment } from "react";

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  // In our layout we always need the pages to be placed without a parent components in order to make the styles work, so that's why we use the Fragment.
  return (
    <Fragment>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </Fragment>
  );
}

export default Cabins;
