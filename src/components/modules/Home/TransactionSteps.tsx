import StepCard from "@/components/shared/StepCard";

const TransactionSteps = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-100 dark:bg-[#0a100f]">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
          How <span className="text-primary">PayBondhu</span> Works
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          <StepCard
            step="1"
            title="Register"
            desc="Create your account easily as User or Agent."
          />
          <StepCard
            step="2"
            title="Add Money"
            desc="Deposit via agents or your bank account."
          />
          <StepCard
            step="3"
            title="Start Transacting"
            desc="Send, receive, cash-in, or withdraw instantly."
          />
        </div>
      </div>
    </section>
  );
};

export default TransactionSteps;
