import type { JSX } from "react";

const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
}) => (
  <div className="card p-6 text-center bg-emerald-600 dark:bg-emerald-950 rounded-xl">
    <div className="flex justify-center mb-4 dark:text-primary text-white">
      {icon}
    </div>
    <h4 className="text-lg md:text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-800 dark:text-gray-300">{desc}</p>
  </div>
);

export default FeatureCard;
