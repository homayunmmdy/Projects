import { Twitter, Instagram, GitHub, Linkedin } from "react-feather";
import siteConfig from "@/data/siteConfig";
import { cx } from "@/lib/utils";
import { ThemeSelect } from "@/components/ThemeSelect";

const iconProps = { className: "w-4 h-4" };

const SOCIAL_ICONS: { [key: string]: React.ReactNode } = {
  twitter: <Twitter {...iconProps} />,
  instagram: <Instagram {...iconProps} />,
  github: <GitHub {...iconProps} />,
  linkedin: <Linkedin {...iconProps} />,
};

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-8">
      <div className="mt-8 flex justify-center">
        <ThemeSelect />
      </div>
    </footer>
  );
};
