import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Projects, Tech } from "./components";

const App = () => {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <a href="#about" className="skip-link">
                Skip to content
            </a>

            <div className="relative z-0 bg-bg text-fg overflow-x-hidden transition-colors duration-200">
                <Navbar />
                <Hero />

                <main>
                    <Projects />
                    <About />
                    <Tech />
                    <Experience />
                    <Contact />
                </main>

                <footer className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                        <div>
                            <p className="text-fg text-sm font-semibold">Building things people actually use.</p>
                            <p className="text-muted text-xs mt-1">
                                © Santiago Alvarez <time dateTime="2026">2026</time>. All rights reserved.
                            </p>
                        </div>
                        <a href="#home" className="text-fg text-lg font-black tracking-tight" aria-label="Back to top">
                            SA.
                        </a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
};

export default App;
