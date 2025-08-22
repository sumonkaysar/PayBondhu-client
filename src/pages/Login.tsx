import Logo from "@/assets/images/Logo";
import loginBg from "@/assets/images/auth/money-login.jpg";
import LoginForm from "@/components/modules/Auth/LoginForm";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={loginBg}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover brightness-[1.5] dark:brightness-100"
        />
      </div>
    </div>
  );
};

export default Login;
