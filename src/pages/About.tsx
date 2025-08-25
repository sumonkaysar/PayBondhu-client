import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Rocket, Target, Users } from "lucide-react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto w-11/12 py-10"
    >
      <Card className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl rounded-2xl text-white">
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold">About Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-bold">Finexa</span>, your modern,
            secure, and seamless digital wallet solution. We empower users and
            agents to make instant transactions, manage finances, and grow
            effortlessly.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 dark:bg-white/5 p-5 text-center rounded-xl shadow-md">
              <Users className="mx-auto w-10 h-10 text-blue-400" />
              <h3 className="mt-3 font-semibold text-lg">Our Team</h3>
              <p className="text-sm opacity-80">
                A passionate group of innovators, designers, and engineers
                building next-gen fintech solutions.
              </p>
            </Card>
            <Card className="bg-white/10 dark:bg-white/5 p-5 text-center rounded-xl shadow-md">
              <Target className="mx-auto w-10 h-10 text-green-400" />
              <h3 className="mt-3 font-semibold text-lg">Our Mission</h3>
              <p className="text-sm opacity-80">
                To simplify digital transactions and make money transfers
                accessible for everyone.
              </p>
            </Card>
            <Card className="bg-white/10 dark:bg-white/5 p-5 text-center rounded-xl shadow-md">
              <Rocket className="mx-auto w-10 h-10 text-pink-400" />
              <h3 className="mt-3 font-semibold text-lg">Our Vision</h3>
              <p className="text-sm opacity-80">
                Leading the future of fintech with a secure, scalable, and
                user-friendly platform.
              </p>
            </Card>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default About;
