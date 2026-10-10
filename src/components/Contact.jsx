import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { socialLinks } from "../constants";
import SocialLinks from "./SocialLinks";

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
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
            <motion.div variants={fadeIn("", "tween", 0, 0.5)} className="min-w-0 md:pt-3">
                <h2 className={styles.sectionHeadText}>Let&apos;s Work Together</h2>
                <p className={`${styles.bodyText} mt-2 max-w-sm`}>
                    If you&apos;re interested in working together, please leave a message.
                </p>
                <SocialLinks className="mt-3" />
            </motion.div>

            <motion.form
                variants={fadeIn("", "tween", 0.1, 0.5)}
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 min-w-0"
                noValidate
            >
                <div className="flex flex-col">
                    <label htmlFor="contact-name" className="sr-only">
                        Name
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Name"
                        aria-invalid={errors.name}
                        className="input-field"
                    />
                    {errors.name && <span className="form-error">Enter your name.</span>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="contact-email" className="sr-only">
                        Email
                    </label>
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        aria-invalid={errors.email}
                        className="input-field"
                    />
                    {errors.email && <span className="form-error">Enter your email.</span>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="contact-message" className="sr-only">
                        Message
                    </label>
                    <textarea
                        id="contact-message"
                        rows={4}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        aria-invalid={errors.message}
                        className="input-field resize-y min-h-[96px]"
                    />
                    {errors.message && <span className="form-error">Message cannot be empty.</span>}
                </div>

                <div>
                    <button type="submit" className="btn btn-primary">
                        Send me a message
                        <span aria-hidden="true">→</span>
                    </button>
                    <p className="text-muted text-xs mt-2">Opens your email client with the message pre-filled.</p>
                </div>
            </motion.form>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
