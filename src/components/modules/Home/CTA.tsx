import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Ready to Get Started?
        </h3>
        <p className="text-xl mb-8 text-blue-100">
          Join millions of users who trust PayBondhu for their daily
          transactions
        </p>
        <Link
          to="/register"
          className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
        >
          Create Free Account
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
