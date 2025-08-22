import walletImage from "@/assets/images/home/wallet-2.jpg";
// import walletImage from "@/assets/images/home/wallet.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="border-b">
      <div className="lg:flex items-center justify-between py-16 md:py-24 px-6 container mx-auto">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Your Trusted <span className="text-primary">Digital Wallet</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Send, receive, deposit, and manage your money easily with{" "}
            <span className="text-primary">PayBondhu</span>. Secure, fast, and
            built for everyone.
          </p>
          <div className="flex gap-4 mb-10">
            <Button className="py-6 text-white">
              <Link
                to="/register"
                className="btn-primary flex items-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-10 md:mt-0 w-[500px] overflow-hidden rounded-2xl hidden lg:block">
          <img
            src={walletImage}
            alt="Digital Wallet Illustration"
            className="w-full drop-shadow-lg hover:scale-150 transition-transform"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
