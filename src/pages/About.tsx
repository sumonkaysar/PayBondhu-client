import { Card } from "@/components/ui/card";
import { aboutData } from "@/consts/about.const";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto px-6 text-primary my-12">
      <h2 className="text-2xl md:text-4xl font-extrabold mb-6">About Us</h2>
      <p className="md:text-lg leading-relaxed text-neutral-700 dark:text-foreground">
        Welcome to <span className="font-bold text-primary">PayBondhu</span>,
        your modern, secure, and seamless digital wallet solution. We empower
        users and agents to make instant transactions, manage finances, and grow
        effortlessly.
      </p>
      <div className="mt-8 pb-10">
        <div className="grid md:grid-cols-3 gap-6">
          {aboutData.map((about, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-green-300 via-emerald-300 to-teal-400 dark:from-gray-900 dark:via-slate-900 dark:to-slate-950 px-5 py-10 gap-0 text-center rounded-xl shadow-md">
                <about.icon
                  className={`mx-auto w-10 h-10 ${about.iconColor}`}
                />
                <h3 className="mt-4 font-semibold text-lg">{about.title}</h3>
                <p className="text-sm opacity-80 text-foreground mt-2">
                  {about.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
