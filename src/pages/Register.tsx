import Logo from "@/assets/images/Logo";
import registerBg from "@/assets/images/auth/money-register.jpg";
import RegisterForm from "@/components/modules/Auth/RegisterForm";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <img
          src={registerBg}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-50"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
