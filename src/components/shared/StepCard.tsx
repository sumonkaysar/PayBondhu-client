const StepCard = ({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) => (
  <div className="card p-6 text-center rounded-xl bg-emerald-600 dark:bg-emerald-950">
    <div className="text-3xl font-bold text-white dark:text-primary mb-3">
      {step}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-800 dark:text-gray-300">{desc}</p>
  </div>
);

export default StepCard;
