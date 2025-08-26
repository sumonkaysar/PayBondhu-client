import Logo from "@/assets/images/Logo";
import { footerData } from "@/consts/footer.const";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto space-y-8 py-10 md:py-16 px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div>
              <Logo className="w-32" />
            </div>
            <p className="mt-4 max-w-xs text-muted-foreground">
              {footerData.description}
            </p>
            <ul className="mt-8 flex gap-6">
              {footerData.socialSection.map(({ label, Icon, href }, i) => (
                <li key={i}>
                  <a href={href} rel="noreferrer" target="_blank">
                    <span className="sr-only">{label}</span>
                    <Icon className="w-6 h-6 text-primary transition hover:text-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            {footerData.linkSection.map(({ section, links }, i) => (
              <div key={i}>
                <p className="font-medium text-foreground/90 hover:text-foreground">
                  {section}
                </p>
                <ul className="mt-6 space-y-4 text-sm">
                  {links.map(({ label, to }, i2) => (
                    <li key={i2}>
                      <Link
                        to={to}
                        className="text-foreground/80 transition hover:text-foreground"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} PayBondhu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
