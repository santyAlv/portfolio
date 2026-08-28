import { Icon } from "@iconify/react";

const SOCIAL_ICONS = {
    GitHub: "mdi:github",
    Email: "mdi:email-outline",
    Instagram: "mdi:instagram",
};

const SocialIcon = ({ name, className = "w-6 h-6" }) => (
    <Icon icon={SOCIAL_ICONS[name]} className={className} aria-hidden="true" />
);

export default SocialIcon;
