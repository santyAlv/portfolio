import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Projects, Tech } from "./components";
import { styles } from "./styles";

const App = () => {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <a href="#about" className="skip-link">
                Skip to content
            </a>

            <div className="relative z-0 bg-primary overflow-x-hidden">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>

                <main>
                    <About />
                    <Tech />
                    <Experience />
                    <Projects />
                    <Contact />
                </main>

                <footer className={`${styles.paddingX} py-8 sm:py-10 border-t border-accent/10`}>
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                        <p className="font-display text-white/80 text-sm font-semibold tracking-tight">
                            Santiago Alvarez
                        </p>
                        <p className="font-mono text-secondary text-xs">
                            <time dateTime="2026">2026</time>
                        </p>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
};

export default App;
