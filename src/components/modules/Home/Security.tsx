import {
  AlertTriangleIcon,
  EyeOffIcon,
  LockIcon,
  ShieldCheckIcon,
} from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheckIcon,
    title: "Military-Grade Encryption",
    description: "All your data is encrypted with AES-256 encryption standard",
  },
  {
    icon: LockIcon,
    title: "Two-Factor Authentication",
    description: "Add an extra layer of security with 2FA for all transactions",
  },
  {
    icon: EyeOffIcon,
    title: "Privacy Protected",
    description: "We never share your personal information with third parties",
  },
  {
    icon: AlertTriangleIcon,
    title: "Fraud Detection",
    description: "Advanced AI monitors suspicious activities 24/7",
  },
];

const Security = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Your Security is Our Priority
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              We implement industry-leading security measures to protect your
              money and personal information at all times.
            </p>
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      System Status: Secure
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Encryption Level
                      </span>
                      <span className="font-semibold text-green-600">
                        AES-256
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Authentication
                      </span>
                      <span className="font-semibold text-green-600">
                        2FA Enabled
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Last Security Audit
                      </span>
                      <span className="font-semibold text-green-600">
                        Today
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      100%
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Secure Transactions
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      24/7
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Fraud Monitoring
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

export default Security;
