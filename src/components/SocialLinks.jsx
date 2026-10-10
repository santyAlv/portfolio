import { socialLinks } from "../constants";
import SocialIcon from "./SocialIcon";

const socialButtons = [
    { href: socialLinks.github, icon: "GitHub", label: "GitHub", external: true },
    { href: `mailto:${socialLinks.email}`, icon: "Email", label: "Email", external: false },
    { href: socialLinks.instagram, icon: "Instagram", label: "Instagram", external: true },
];

const SocialLinks = ({ className = "" }) => (
    <ul className={`flex items-center gap-1 list-none -ml-2 ${className}`} role="list">
        {socialButtons.map(({ href, icon, label, external }) => (
            <li key={label}>
                <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={label}
                    className="icon-btn"
                >
                    <SocialIcon name={icon} />
                </a>
            </li>
        ))}
    </ul>
);

export default SocialLinks;
