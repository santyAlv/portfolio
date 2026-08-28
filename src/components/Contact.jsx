import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { socialLinks } from "../constants";
import SocialIcon from "./SocialIcon";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            name: form.name === "",
            email: form.email === "",
            message: form.message === "",
        };

        setErrors(newErrors);

        if (newErrors.name || newErrors.email || newErrors.message) {
            return;
        }

        const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
        window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
    };

    return (
        <>
            <motion.div variants={slideIn("up", "tween", 0.1, 0.8)} className="mb-8 sm:mb-10">
                <p className={styles.sectionSubText}>Contact</p>
                <h2 className={`${styles.sectionHeadText} mt-3`}>
                    Get in <span className="text-accent">touch</span>
                </h2>
            </motion.div>

            <div className="flex flex-col-reverse xl:flex-row gap-6 sm:gap-8 xl:gap-10">
                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className="flex-1 xl:flex-[0.75] contact-panel p-5 sm:p-8 min-w-0"
                >
                    <h3 className={`${styles.cardTitle} mb-1`}>Send a message</h3>
                    <p className="text-secondary text-sm mb-8">Opens your email client with the message pre-filled.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                        <div className="flex flex-col">
                            <label htmlFor="contact-name" className="font-mono text-xs text-accent/80 uppercase tracking-wider mb-2">
                                Name
                            </label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                aria-invalid={errors.name}
                                className="input-field"
                            />
                            {errors.name && <span className="form-error">Enter your name.</span>}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="contact-email" className="font-mono text-xs text-accent/80 uppercase tracking-wider mb-2">
                                Email
                            </label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@email.com"
                                aria-invalid={errors.email}
                                className="input-field"
                            />
                            {errors.email && <span className="form-error">Enter your email.</span>}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="contact-message" className="font-mono text-xs text-accent/80 uppercase tracking-wider mb-2">
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                rows={5}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What do you want to build?"
                                aria-invalid={errors.message}
                                className="input-field resize-y min-h-[120px]"
                            />
                            {errors.message && <span className="form-error">Message cannot be empty.</span>}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-gradient cyan-blue-gradient w-full sm:w-fit px-8 py-3 text-[14px] font-bold"
                        >
                            Send message
                        </button>
                    </form>
                </motion.div>

                <motion.aside
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className="flex-1 min-w-0"
                    aria-label="Social links and contact"
                >
                    <div className="contact-panel p-5 sm:p-8 h-full flex flex-col gap-4 sm:gap-5">
                        <div>
                            <h3 className={styles.cardTitle}>Connect</h3>
                            <p className="text-secondary text-sm mt-2">Prefer a direct channel? Pick one below.</p>
                        </div>

                        <a
                            href={`mailto:${socialLinks.email}`}
                            className="social-row flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 min-w-0 no-link-style"
                        >
                            <SocialIcon name="Email" className="w-9 h-9 shrink-0 text-white" />
                            <div className="min-w-0">
                                <p className="font-mono text-accent/70 text-[10px] uppercase tracking-widest">Email</p>
                                <p className="text-white font-medium text-sm sm:text-[15px] break-all mt-0.5">
                                    {socialLinks.email}
                                </p>
                            </div>
                        </a>

                        <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-row flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 no-link-style"
                        >
                            <SocialIcon name="GitHub" className="w-9 h-9 shrink-0 text-white" />
                            <div>
                                <p className="font-mono text-accent/70 text-[10px] uppercase tracking-widest">GitHub</p>
                                <p className="text-white font-medium text-sm sm:text-[15px] mt-0.5">santyAlv</p>
                            </div>
                        </a>

                        <a
                            href={socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-row flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 no-link-style"
                        >
                            <SocialIcon name="Instagram" className="w-9 h-9 shrink-0 text-white" />
                            <div>
                                <p className="font-mono text-accent/70 text-[10px] uppercase tracking-widest">Instagram</p>
                                <p className="text-white font-medium text-sm sm:text-[15px] mt-0.5">@sssanti.a</p>
                            </div>
                        </a>
                    </div>
                </motion.aside>
            </div>
        </>
    );
};

export default SectionWrapper(Contact, "contact");
