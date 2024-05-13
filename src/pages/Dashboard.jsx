import { Fragment } from "react";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import { motion } from "framer-motion";
function Dashboard() {
  return (
    <Fragment>
      <Row type="horizontal">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Heading as="h1">Dashboard</Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <DashboardFilter />
        </motion.div>
      </Row>
      <DashboardLayout />
    </Fragment>
  );
}

export default Dashboard;
