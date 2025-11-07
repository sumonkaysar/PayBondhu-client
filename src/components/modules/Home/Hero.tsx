import {
  ArrowRightIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  ZapIcon,
} from "lucide-react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900 dark:to-green-900 transition-colors">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400 dark:bg-emerald-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400 dark:bg-teal-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative container mx-auto py-16 md:py-24 px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <ShieldCheckIcon className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Bank-level Security
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Your Digital Wallet,{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Reimagined
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Send money, pay bills, and manage your finances seamlessly.
              Experience the future of digital payments with PayBondhu.
            </p>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center space-x-2">
                <ZapIcon className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Instant Transfers
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCardIcon className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Zero Fees
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheckIcon className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  100% Secure
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/register"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/features"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                Explore Features
              </Link>
            </div>
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Trusted by over 1 million users worldwide
              </p>
              <div className="flex items-center space-x-8 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    1M+
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Active Users
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    $2B+
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Transactions
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    150+
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Countries
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:block">
            <div className="relative">
              <div className="relative mx-auto w-72 sm:w-80">
                <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 flex justify-between items-center text-white text-xs">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-3 bg-white rounded-sm"></div>
                        <div className="w-4 h-3 bg-white rounded-sm"></div>
                        <div className="w-4 h-3 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Available Balance
                        </div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                          $12,458.50
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-xl font-medium">
                          Send Money
                        </button>
                        <button className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-4 rounded-xl font-medium">
                          Request
                        </button>
                      </div>
                      <div className="space-y-3 pt-4">
                        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Recent Transactions
                        </div>
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                  John Doe
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Today, 2:30 PM
                                </div>
                              </div>
                            </div>
                            <div className="text-sm font-semibold text-green-600">
                              +$250
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 left-0 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <ShieldCheckIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Security
                    </div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      100% Safe
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 right-0 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl animate-float animation-delay-2000">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <ZapIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Speed
                    </div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      Instant
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
