"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./section";
import {
  LuGithub,
  LuLinkedin,
  LuMail,
  LuDownload,
  LuSend,
  LuCircleCheckBig,
  LuEye,
  LuLoaderCircle,
  LuCircleAlert,
} from "react-icons/lu";

// ⚠️  Get your FREE access key at https://web3forms.com
//     Paste it here to enable real message delivery.
const WEB3FORMS_KEY = "06b7d84a-5b53-4419-b7d5-33d014d1100b";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email,
          message,
          subject: `Portfolio inquiry from ${name}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's build something."
      description="Have a project in mind, or just want to say hi? My inbox is always open."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        {/* ─── Left Card ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 rounded-2xl p-8 flex flex-col justify-between"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div>
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-white/90"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </span>
            <h3 className="mt-6 text-2xl font-semibold text-white">
              Find me online
            </h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">
              The fastest way to reach me is email. I usually respond within 24
              hours.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                {
                  Icon: LuGithub,
                  href: "https://github.com/the-rishav01580/",
                  label: "GitHub",
                },
                {
                  Icon: LuLinkedin,
                  href: "https://www.linkedin.com/in/rishav-kumar-garg-532828235/",
                  label: "LinkedIn",
                },
                {
                  Icon: LuMail,
                  href: "mailto:rishavgarg01580@gmail.com",
                  label: "Email",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex overflow-hidden items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#0A0515] text-white shadow hover:bg-[#110D1F] h-12 px-4 py-3 whitespace-pre group relative gap-2 rounded-xl transition-all duration-300 ease-out hover:ring-2 hover:ring-[#8B5CF6] hover:ring-offset-2 hover:ring-offset-[#030014]"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
              <div className="flex items-center gap-2 relative z-10">
                <LuEye size={16} /> View Resume
              </div>
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex-1 flex overflow-hidden items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#0A0515] text-white shadow hover:bg-[#110D1F] h-12 px-4 py-3 whitespace-pre group relative gap-2 rounded-xl transition-all duration-300 ease-out hover:ring-2 hover:ring-[#8B5CF6] hover:ring-offset-2 hover:ring-offset-[#030014]"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
              <div className="flex items-center gap-2 relative z-10">
                <LuDownload size={16} /> Download
              </div>
            </a>
          </div>
        </motion.div>

        {/* ─── Right Card — Contact Form ──────────────────────────────── */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={onSubmit}
          className="lg:col-span-3 rounded-2xl p-8 space-y-6"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-white/50 font-medium">
                Name
              </label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/25 outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/30 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-white/50 font-medium">
                Email
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/25 outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/30 transition-all"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-white/50 font-medium">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/25 outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/30 transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full sm:w-auto flex overflow-hidden items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#0A0515] text-white shadow hover:bg-[#110D1F] h-12 px-7 py-3 whitespace-pre group relative gap-2 rounded-xl transition-all duration-300 ease-out hover:ring-2 hover:ring-[#8B5CF6] hover:ring-offset-2 hover:ring-offset-[#030014]"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
            <div className="flex items-center gap-2 relative z-10">
              {status === "sending" ? (
                <>
                  <LuLoaderCircle size={16} className="animate-spin" /> Sending...
                </>
              ) : status === "sent" ? (
                <>
                  <LuCircleCheckBig size={16} /> Message sent!
                </>
              ) : status === "error" ? (
                <>
                  <LuCircleAlert size={16} /> Failed — try again
                </>
              ) : (
                <>
                  <LuSend size={16} /> Send message
                </>
              )}
            </div>
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
