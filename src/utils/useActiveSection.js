import { useEffect, useState } from "react";

const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

    useEffect(() => {
        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (!elements.length) return undefined;

        // A thin band at 40% of the viewport: whichever section crosses it is active.
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);

                if (visible) {
                    setActiveSection(visible.target.id);
                }
            },
            { rootMargin: "-40% 0px -59% 0px", threshold: 0 }
        );

        elements.forEach((element) => observer.observe(element));

        // The last section may be too short to ever reach the band.
        const handleScroll = () => {
            const atBottom =
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

            if (atBottom) {
                setActiveSection(sectionIds[sectionIds.length - 1]);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionIds]);

    return activeSection;
};

export default useActiveSection;
