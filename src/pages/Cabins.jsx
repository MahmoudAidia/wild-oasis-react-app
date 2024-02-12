import { Fragment, useState } from "react";

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  // In our layout we always need the pages to be placed without a parent components in order to make the styles work, so that's why we use the Fragment.

  const [showForm, setShowFrom] = useState(false);
  return (
    <Fragment>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button
          onClick={() => {
            setShowFrom((showForm) => !showForm);
          }}
        >
          {showForm ? "Close Form" : "Add a new cabin"}
        </Button>

        {showForm && <CreateCabinForm />}
      </Row>
    </Fragment>
  );
}

export default Cabins;
