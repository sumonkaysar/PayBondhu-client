import { Card } from "@/components/ui/card";
import { features } from "@/consts/features.const";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="container mx-auto px-6 text-primary my-12">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center">
        Features
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 pb-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-gradient-to-br from-green-300 via-emerald-300 to-teal-400 dark:from-gray-900 dark:via-slate-900 dark:to-slate-950 text-center p-5 rounded-xl hover:scale-105 transition-transform shadow-xl py-10 gap-0 h-full">
              <feature.icon
                className={`mx-auto w-10 h-10 ${feature.iconColor}`}
              />
              <h3 className="mt-5 font-semibold md:text-lg">{feature.title}</h3>
              <p className="text-sm opacity-80 mt-2">{feature.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
