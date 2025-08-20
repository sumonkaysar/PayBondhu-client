import logo from "./pay-bondhu.svg";

interface ILogoProps {
  className: string;
}

const Logo = ({ className }: ILogoProps) => {
  return <div className={className || "w-28"}>{logo}</div>;
};

export default Logo;
