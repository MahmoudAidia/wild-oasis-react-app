import { Fragment } from "react";
import Stat from "./Stat";
import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import { motion } from "framer-motion";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, item) => item.totalPrice + acc, 0);
  // console.log(sales);

  // 3.
  const checkins = confirmedStays.length;

  // 4.
  const occupation =
    confirmedStays.reduce((acc, item) => acc + item.numNights, 0) /
    (numDays * cabinCount);

  //  num checkin nights / available nights(num days * num cabins)
  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Stat
          title="Bookings"
          color="blue"
          icon={<HiOutlineBriefcase />}
          value={numBookings}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Stat
          title="Sales"
          color="green"
          icon={<HiOutlineBanknotes />}
          value={formatCurrency(sales)}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Stat
          title="Check ins"
          color="indigo"
          icon={<HiOutlineCalendarDays />}
          value={checkins}
        />{" "}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Stat
          title="Occupancy rate"
          color="yellow"
          icon={<HiOutlineChartBar />}
          value={Math.round(occupation * 100) + "%"}
        />
      </motion.div>
    </Fragment>
  );
}

export default Stats;
