import { motion, type Transition } from "framer-motion";
const transition = {
  duration: 0.8,
  ease: "linear",
  repeat: Infinity,
} as Transition<Record<string, string>>;

const DashboardLoader = () => {
  return (
    <div className="max-w-5xl w-11/12 mx-auto flex flex-1 flex-col gap-4 px-4 py-10">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video">
          <motion.div
            initial={{ backgroundPositionX: -100 }}
            animate={{ backgroundPositionX: 250 }}
            transition={transition}
            className="rounded-xl bg-[linear-gradient(90deg,_#dddddd_0%,_#eeeeee_20%,_#dddddd_40%)] dark:bg-[linear-gradient(90deg,_#333333_0%,_#444444_20%,_#333333_40%)] h-full"
          />
        </div>
        <div className="aspect-video">
          <motion.div
            initial={{ backgroundPositionX: -100 }}
            animate={{ backgroundPositionX: 250 }}
            transition={transition}
            className="rounded-xl bg-[linear-gradient(90deg,_#dddddd_0%,_#eeeeee_20%,_#dddddd_40%)] dark:bg-[linear-gradient(90deg,_#333333_0%,_#444444_20%,_#333333_40%)] h-full"
          />
        </div>
        <div className="aspect-video">
          <motion.div
            initial={{ backgroundPositionX: -100 }}
            animate={{ backgroundPositionX: 250 }}
            transition={transition}
            className="rounded-xl bg-[linear-gradient(90deg,_#dddddd_0%,_#eeeeee_20%,_#dddddd_40%)] dark:bg-[linear-gradient(90deg,_#333333_0%,_#444444_20%,_#333333_40%)] h-full"
          />
        </div>
      </div>
      <div className="flex-1 rounded-xl hidden md:block">
        <motion.div
          initial={{ backgroundPositionX: -200 }}
          animate={{ backgroundPositionX: 800 }}
          transition={{ ...transition, duration: 1.2 }}
          className="rounded-xl bg-[linear-gradient(90deg,_#dddddd_0%,_#eeeeee_20%,_#dddddd_40%)] dark:bg-[linear-gradient(90deg,_#333333_0%,_#444444_20%,_#333333_40%)] h-full hidden md:flex"
        />
      </div>
    </div>
  );
};

export default DashboardLoader;
