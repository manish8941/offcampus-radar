import { useState } from "react";

const WHATSAPP_CHANNEL_LINK = "https://whatsapp.com/channel/0029Vb8ngp53bbV6s5ccR635";
const GOOGLE_SHEET_WEB_APP_URL = "";
const LOCAL_LEADS_KEY = "offcampusRadarLeads";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const saveLeadLocally = (lead) => {
  try {
    const savedEntries = JSON.parse(localStorage.getItem(LOCAL_LEADS_KEY) || "[]");
    const entries = Array.isArray(savedEntries) ? savedEntries : [];
    localStorage.setItem(LOCAL_LEADS_KEY, JSON.stringify([...entries, lead]));
    return true;
  } catch (error) {
    console.warn("Could not save lead locally", error);
    return false;
  }
};

const sendLeadToGoogleSheet = async (lead) => {
  if (!GOOGLE_SHEET_WEB_APP_URL) {
    return false;
  }

  await fetch(GOOGLE_SHEET_WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams(lead).toString()
  });

  return true;
};

function Hero() {
  const trustSignals = ["Official links preferred", "Suspicious posts filtered", "Student-first alerts"];
  const sourceCards = [
    ["Career pages", "Official apply paths", "92%"],
    ["LinkedIn posts", "Recruiter updates", "78%"],
    ["Job platforms", "Role and batch checks", "84%"]
  ];
  const opportunityCards = ["Internship", "Fresher Job", "Off-Campus Drive", "Verified"];

  return (
    <header className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#e3f7ff_0,#f6fbff_34%,#ffffff_72%)] pb-14 pt-10 sm:pb-20 lg:pb-24 lg:pt-14">
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-cyan-200/45 blur-3xl" />
        <div className="absolute right-[7%] top-28 h-64 w-64 rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,198,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,198,0.08)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_86%)]" />
      </div>

      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-white/85 px-3 py-2 shadow-sm backdrop-blur">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-navy text-sm font-black text-white">OR</span>
            <span className="pr-2 text-sm font-bold text-cyan-800">Trusted hiring research for tech students</span>
          </div>
          <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.18em] text-cyan-700">OffCampus Radar</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight tracking-normal text-navy sm:text-5xl lg:text-6xl">
            Verified Tech Hiring Alerts, Researched Before We Share
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            OffCampus Radar helps students and freshers discover genuine tech internships, fresher jobs,
            off-campus drives, direct apply links, and recruiter-based opportunities from multiple job
            platforms, filtered, verified, and shared in one place.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {trustSignals.map((signal) => (
              <span key={signal} className="rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                {signal}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="primary-button" onClick={() => scrollToSection("join")}>
              Get Hiring Alerts
            </button>
            <button className="secondary-button" onClick={() => scrollToSection("verification")}>
              How We Verify Openings
            </button>
          </div>
          <p className="mt-5 text-sm font-medium text-slate-500">
            Built for students, freshers, and early-career developers who want cleaner hiring signals.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/90" />
          <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/80" />
          <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/90" />
          <div className="absolute left-1/2 top-1/2 h-1 w-40 origin-left -translate-y-1/2 rotate-12 rounded-full bg-gradient-to-r from-cyan-400 to-transparent shadow-[0_0_28px_rgba(14,165,198,0.65)]" />
          <div className="relative rounded-lg border border-white/80 bg-white/90 p-4 shadow-soft backdrop-blur">
            <div className="rounded-lg bg-gradient-to-br from-navy via-slate-800 to-cyan-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-cyan-100">Live research board</p>
                  <p className="text-2xl font-extrabold">Hiring signal scan</p>
                </div>
                <div className="grid h-16 w-16 place-items-center rounded-full border border-cyan-300/40 bg-cyan-400/15">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-cyan-300 text-sm font-black text-navy">OR</div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {sourceCards.map(([source, detail, score]) => (
                  <div key={source} className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-lg bg-white/10 p-4 ring-1 ring-white/10">
                    <div>
                      <p className="text-sm font-bold">{source}</p>
                      <p className="mt-1 text-xs text-cyan-100">{detail}</p>
                    </div>
                    <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-extrabold text-emerald-100">{score}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {opportunityCards.map((item) => (
                <div key={item} className="rounded-lg border border-slate-100 bg-white p-4">
                  <p className="text-sm font-bold text-navy">{item}</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">Matched and organized</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3">
              {["Apply Link Checked", "HR Contact Verified", "Deadline Confirmed"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-lg border border-slate-100 bg-white p-4">
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-trust">Checked</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Stats() {
  const stats = ["10+ Sources", "Daily Alerts", "Verified Links", "Student Focused"];
  return (
    <section className="-mt-9 bg-transparent">
      <div className="section-shell">
        <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat} className="rounded-lg bg-slate-50 p-5 text-center">
              <p className="text-xl font-extrabold text-navy">{stat}</p>
              <p className="mt-1 text-sm text-slate-500">Built for reliable hiring discovery</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    ["For Students", "Find internships, fresher roles, and off-campus drives without wasting hours searching everywhere."],
    ["For Freshers", "Get role-wise updates, eligibility details, application guidance, and deadline reminders."],
    ["For Serious Applicants", "Premium members get direct apply links, recruiter/HR contacts where available, and ready-to-send application formats."]
  ];
  return (
    <section className="bg-mist py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">What is OffCampus Radar?</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            OffCampus Radar is a tech hiring alert community built for students, freshers, and early-career
            developers. We help candidates save time by researching job openings from company career pages,
            LinkedIn hiring posts, job platforms, startup pages, and recruiter updates. Instead of sending
            random job links, we filter and organize openings based on role, batch, skills, location,
            deadline, and trust level.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map(([title, description]) => (
            <article className="card p-6" key={title}>
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-cyan-50 font-bold text-cyan-700">✓</div>
              <h3 className="text-xl font-bold text-navy">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VerificationProcess() {
  const steps = [
    ["Explore Multiple Sources", "We scan company career pages, LinkedIn hiring posts, trusted job platforms, startup career pages, and recruiter updates."],
    ["Check Role Details", "We check the role name, job type, skills required, batch eligibility, location, stipend/CTC, and application deadline."],
    ["Verify Apply Path", "We prefer official career pages, trusted application links, or verified recruiter posts. Suspicious or payment-based links are avoided."],
    ["Filter and Organize", "We sort openings by role, batch, urgency, and relevance so students can quickly find opportunities that match them."],
    ["Share Actionable Alerts", "We share clear hiring alerts with important details. Premium alerts may include direct apply links, HR/recruiter emails where publicly available, and application mail formats."]
  ];
  return (
    <section id="verification" className="bg-white py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">How We Research and Verify Openings</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We do not simply forward random job posts. Every opportunity goes through a basic research and
            trust-check process before being shared.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {steps.map(([title, description], index) => (
            <article className="card relative p-6" key={title}>
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-navy text-sm font-extrabold text-white">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl rounded-lg border border-emerald-100 bg-emerald-50 p-5 text-center text-sm font-medium leading-6 text-emerald-800">
          We only use public, professional, and trusted sources. We do not encourage spam or misuse of recruiter
          contact information.
        </p>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    ["Tech Internships", "Role-wise internship alerts for web development, software engineering, QA, data, cloud, and more."],
    ["Fresher Jobs", "Entry-level opportunities for students and fresh graduates looking for their first tech role."],
    ["Off-Campus Drives", "Company-wise and batch-wise drives with eligibility and deadline details."],
    ["Direct Apply Links", "Clear application links so users do not waste time searching manually."],
    ["HR/Recruiter Contacts", "Professional recruiter or HR contact details only when available from trusted or public sources."],
    ["Resume & Email Guidance", "Role-specific keywords and ready-to-use mail formats to improve application quality."]
  ];
  return (
    <section className="bg-mist py-20">
      <div className="section-shell">
        <h2 className="text-center text-3xl font-extrabold text-navy sm:text-4xl">What You Get</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([title, description]) => (
            <article className="card p-6" key={title}>
              <h3 className="text-xl font-bold text-navy">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FreePremium() {
  const plans = [
    {
      title: "Free Channel",
      price: "₹0",
      features: ["Daily hiring updates", "Internship and fresher role alerts", "Batch eligibility", "Basic deadline alerts", "Career tips"],
      highlighted: false,
      button: "Join Free Channel"
    },
    {
      title: "Premium Alerts",
      price: "Coming Soon / Launch Offer",
      features: [
        "Early hiring alerts",
        "Direct apply links",
        "Verified HR/recruiter emails where available",
        "Ready-to-send application mail formats",
        "Resume keywords for each role",
        "Weekly application support",
        "Curated high-priority openings"
      ],
      highlighted: true,
      button: "Register Interest"
    }
  ];
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <h2 className="text-center text-3xl font-extrabold text-navy sm:text-4xl">Free Alerts and Premium Advantage</h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              className={`rounded-lg border p-7 shadow-card ${plan.highlighted ? "border-cyan-300 bg-gradient-to-br from-cyan-50 to-white" : "border-slate-200 bg-white"}`}
              key={plan.title}
            >
              <h3 className="text-2xl font-extrabold text-navy">{plan.title}</h3>
              <p className="mt-3 text-3xl font-extrabold text-cyan-700">{plan.price}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li className="flex gap-3 text-slate-700" key={feature}>
                    <span className="mt-0.5 text-trust">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="primary-button mt-7 w-full" onClick={() => scrollToSection("join")}>
                {plan.button}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    batch: "2026",
    role: "Software Developer",
    updateType: "Both",
    message: ""
  });

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSaving(true);
    setFormError("");
    setFormMessage("");

    const lead = {
      ...formData,
      submittedAt: new Date().toISOString(),
      source: "OffCampus Radar website"
    };

    try {
      const savedLocally = saveLeadLocally(lead);
      const sentToSheet = await sendLeadToGoogleSheet(lead);

      setSubmitted(true);
      setFormMessage(
        sentToSheet
          ? "Thanks! Your details have been saved. Join our official WhatsApp channel to start receiving hiring alerts."
          : savedLocally
            ? "Thanks! Your details have been saved in this browser. Join our official WhatsApp channel to start receiving hiring alerts."
            : "Thanks! Your form was submitted, but this browser blocked local saving. Please join the WhatsApp channel for alerts."
      );
    } catch (error) {
      console.error("Lead submission failed", error);
      setFormError("Something went wrong while saving your details. Please try again or join the WhatsApp channel directly.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section id="join" className="bg-gradient-to-br from-mist via-white to-cyan-50 py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow">Join the radar</span>
          <h2 className="mt-5 text-3xl font-extrabold text-navy sm:text-4xl">Get Hiring Alerts from OffCampus Radar</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Save your details so we can understand your batch, role interest, and job preference. Then join our
            official channel for regular verified hiring updates.
          </p>
          <a
            className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold shadow-card transition hover:-translate-y-0.5 sm:w-auto ${
              submitted ? "bg-trust text-white hover:bg-emerald-700" : "bg-white text-navy ring-1 ring-slate-200 hover:text-cyan-800"
            }`}
            href={WHATSAPP_CHANNEL_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Join WhatsApp Channel
          </a>
          {formMessage && (
            <p className="mt-5 rounded-lg border border-emerald-100 bg-emerald-50 p-4 text-sm font-semibold leading-6 text-emerald-800">
              {formMessage}
            </p>
          )}
          {formError && (
            <p className="mt-5 rounded-lg border border-red-100 bg-red-50 p-4 text-sm font-semibold leading-6 text-red-700">
              {formError}
            </p>
          )}
        </div>

        <form className="card p-5 sm:p-7" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block" htmlFor="fullName">
              <span className="text-sm font-bold text-slate-700">Full Name</span>
              <input id="fullName" className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="fullName" value={formData.fullName} onChange={updateField} required />
            </label>
            <label className="block" htmlFor="email">
              <span className="text-sm font-bold text-slate-700">Email Address</span>
              <input id="email" className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" type="email" name="email" value={formData.email} onChange={updateField} required />
            </label>
            <label className="block" htmlFor="whatsapp">
              <span className="text-sm font-bold text-slate-700">WhatsApp Number</span>
              <input id="whatsapp" className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="whatsapp" value={formData.whatsapp} onChange={updateField} required />
            </label>
            <label className="block" htmlFor="batch">
              <span className="text-sm font-bold text-slate-700">Graduation Year / Batch</span>
              <select id="batch" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="batch" value={formData.batch} onChange={updateField}>
                {["2025", "2026", "2027", "2028", "2029", "Other"].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="block" htmlFor="role">
              <span className="text-sm font-bold text-slate-700">Interested Role</span>
              <select id="role" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="role" value={formData.role} onChange={updateField}>
                {["Software Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "React Developer", "Java Developer", "QA Tester", "Data Analyst", "Data Scientist", "DevOps", "Cloud", "Cybersecurity", "Other"].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="block" htmlFor="updateType">
              <span className="text-sm font-bold text-slate-700">Preferred Update Type</span>
              <select id="updateType" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="updateType" value={formData.updateType} onChange={updateField}>
                {["Free Alerts", "Premium Alerts", "Both"].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>
          <label className="mt-5 block" htmlFor="message">
            <span className="text-sm font-bold text-slate-700">Message / Goal</span>
            <textarea id="message" className="mt-2 min-h-32 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="message" value={formData.message} onChange={updateField} placeholder="Tell us what type of roles you are looking for..." />
          </label>
          <button className="primary-button mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={isSaving}>
            {isSaving ? "Saving Details..." : "Save My Details"}
          </button>
        </form>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="section-shell text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Stop searching everywhere. Start applying smarter.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-cyan-50">
          OffCampus Radar brings verified tech hiring updates, role-wise alerts, and application support to one place.
        </p>
        <button className="mt-7 rounded-full bg-cyan-400 px-7 py-3 text-sm font-extrabold text-navy shadow-card transition hover:-translate-y-0.5 hover:bg-cyan-300" onClick={() => scrollToSection("join")}>
          Join OffCampus Radar
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 py-10 text-slate-300">
      <div className="section-shell">
        <p className="max-w-4xl leading-7">
          OffCampus Radar is a hiring alert and career update community for students and freshers. We research
          opportunities from public and trusted sources before sharing. Candidates should always read eligibility
          carefully and apply through official or trusted links.
        </p>
        <div className="mt-6 flex flex-col gap-2 text-sm font-semibold sm:flex-row sm:items-center sm:justify-between">
          <span>OffCampus Radar</span>
          <span>Verified Tech Hiring Alerts</span>
          <span>Internships • Fresher Jobs • Off-Campus Drives</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <VerificationProcess />
      <Benefits />
      <FreePremium />
      <JoinForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}
