// import { useState, useEffect } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useReducedMotion,
//   useScroll,
//   useSpring,
// } from "framer-motion";
// import {
//   Menu,
//   X,
//   ArrowUpRight,
//   ArrowRight,
//   Mail,
//   Phone,
//   Code,
//   Server,
//   ShoppingBag,
//   LifeBuoy,
//   Check,
//   Download,
// } from "lucide-react";

// /* ============================================================
//    CONFIG — edit everything personal here
//    ============================================================ */
// const CONFIG = {
//   name: "Ayush Singh",
//   role: "Freelance Web Developer",
//   email: "ayushsingh8692@gmail.com",
//   // REPLACE: your real profile URLs
//   phone: "+91-9082081937",
//   github: "https://github.com/Ayush4158",
//   // Optional: put a public link to your resume PDF (e.g. "/Ayush-Singh-Resume.pdf"
//   // placed in your /public folder). Leave "" to hide the button.
//   resumeUrl: "",
//   availability:
//     "Available for morning freelance collaboration, project-based work, and ongoing development support.",
// };

// const FREELANCE_PROJECTS = [
//   {
//     name: "Itrani",
//     url: "https://itrani.com",
//     platform: "Shopify",
//     scope: "Full website revamp",
//     role: "Website revamp and development",
//     theme: "dark", // "dark" | "sand"
//     coverLines: ["itrani"],
//     label: "Featured case",
//     description:
//       "I independently worked on a major revamp of the Itrani Shopify website, contributing across the website's implementation and overall storefront experience.",
//     highlights: [
//       "Handled the revamp independently",
//       "Worked across the site's implementation, not one isolated change",
//     ],
//     tags: ["Shopify", "Liquid", "Storefront"],
//     screenshot: "", // e.g. "/itrani.png" — replaces the CSS cover
//     screenshotAlt: "Screenshot of the Itrani Shopify storefront",
//   },
//   {
//     name: "Studio Banera",
//     url: "https://studiobanera.com/",
//     platform: "Shopify",
//     scope: "Custom theme sections",
//     role: "Shopify developer: customized sections",
//     theme: "sand",
//     coverLines: ["studio", "banera"],
//     label: "Focused scope",
//     description:
//       "A smaller engagement on Studio Banera's Shopify store, a women's clothing brand. I built customized theme sections using Liquid, so the team could manage them from the theme editor.",
//     highlights: [
//       "Built customized sections with Liquid",
//       "Smaller, clearly scoped piece of work within an existing store",
//     ],
//     tags: ["Shopify", "Liquid", "Theme sections"],
//     screenshot: "",
//     screenshotAlt: "Screenshot of the Studio Banera Shopify storefront",
//   },
// ];


// const PRO_WORK = {
//   title: "Professional work",
//   intro:
//     "I'm currently a web developer at a software company, building enterprise web applications. Details stay general for confidentiality, but this is the kind of work I do there.",
//   how: "I started on the frontend and now own backend features end to end: APIs, business logic, database tables, validation and logging, in a Controller–Service–Repository structure.",
//   projects: [
//     {
//       n: "01",
//       title: "Planning & budgeting platform",
//       category: "Enterprise web app",
//       points: [
//         "Built ERP-style planning screens in React for multi-level budget forecasting and department-wise data entry, using reusable components.",
//         "Designed REST APIs and PostgreSQL schemas for budget versioning, rollups and audit trails.",
//         "Built an Excel import flow that creates or extends plans from existing data, then generates a summary PDF and emails it.",
//         "Embedded Power BI dashboards and a Gemini-powered AI chatbot with function calling for conversational budget queries.",
//         "Implemented semantic response caching using embeddings in PostgreSQL to reduce redundant LLM calls and token usage."
//       ],
//       stack: ["ASP.NET Core", "React", "PostgreSQL", "Power BI", "Gemini"],
//     },
//     {
//       n: "02",
//       title: "Timesheet & invoicing management system",
//       category: "Enterprise web app",
//       points: [
//         "Built employee and project master management, allowing administrators to manage workforce and project data through the UI.",
//         "Implemented timesheet creation and submission workflows, enabling employees to log working hours against assigned projects.",
//         "Designed hierarchical Workforce Group Management to map employees with supervisors and supervisors with administrators, enforcing role-based data visibility.",
//         "Developed approval and rejection workflows with supervisor-level review and administrative processing.",
//         "Integrated timesheet exports with invoice management, tracking exported records through status flags and enabling invoice generation from processed timesheets."
//       ],
//       stack: ["ASP.NET Core", "React", "PostgreSQL", "RBAC", "Workflow Management"],
//     },
//     {
//       n: "03",
//       title: "Document governance platform",
//       category: "Enterprise web app",
//       points: [
//         "Document management with version control, metadata and full audit history.",
//         "Implemented role-based access control and multi-level approval workflows.",
//         "Built an AI chatbot with function calling, conversation history, response caching and token-efficient processing."
//       ],
//       stack: ["ASP.NET Core", "React", "PostgreSQL", "RBAC", "Gemini"],
//     },
//   ],
// };


// const NAV = [
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Work", href: "#work" },
//   { label: "Contact", href: "#contact" },
// ];

// const STACK = [
//   "React",
//   "TypeScript",
//   "Node.js",
//   "Express",
//   "ASP.NET Core",
//   "PostgreSQL",
//   "Redis",
//   "Shopify",
//   "WordPress",
// ];

// const SERVICES = [
//   {
//     icon: Code,
//     title: "Frontend Development",
//     text: "React and TypeScript interfaces built from designs or specs. Responsive layouts, reusable components, and clean API integration on the client side.",
//     tags: ["React", "TypeScript", "Responsive UI"],
//   },
//   {
//     icon: Server,
//     title: "Backend Development",
//     text: "REST APIs with Node.js and Express, or ASP.NET Core when the project calls for it. JWT authentication, role-based access, and PostgreSQL-backed features.",
//     tags: ["Node.js", "ASP.NET Core", "Auth & RBAC"],
//   },
//   {
//     icon: ShoppingBag,
//     title: "Shopify & WordPress",
//     text: "Store customization, full website revamps, responsive fixes, integrations, and ongoing maintenance for client sites.",
//     tags: ["Shopify", "WordPress", "Maintenance"],
//   },
//   {
//     icon: LifeBuoy,
//     title: "Existing Project Support",
//     text: "Bug fixes, new features, code cleanup, and extra capacity when your team's backlog outgrows your sprint.",
//     tags: ["Bug fixing", "Features", "Team capacity"],
//   },
// ];

// const STEPS = [
//   {
//     n: "01",
//     title: "Understand the project",
//     text: "Review requirements, existing code, and priorities.",
//   },
//   {
//     n: "02",
//     title: "Align on scope",
//     text: "Agree on deliverables, timelines, communication, and payment.",
//   },
//   {
//     n: "03",
//     title: "Build and communicate",
//     text: "Implement features, share progress, and raise issues early.",
//   },
//   {
//     n: "04",
//     title: "Deliver and iterate",
//     text: "Test the work, address agreed feedback, and support the next milestone.",
//   },
// ];

// const WHY = [
//   "Comfortable with both frontend and backend tasks",
//   "Experience with real client websites",
//   "Can contribute to existing projects, not only build from scratch",
//   "Clear communication and defined deliverables",
//   "Flexible, project-based collaboration",
//   "Cost-effective support for small teams",
// ];

// const TIMELINE = [
//   {
//     when: "2025",
//     title: "Web developer intern",
//     text: "Worked on multiple client e-commerce sites with Shopify and WordPress. Improved load times by 25–35% and Lighthouse scores by about 20% through script optimization and image compression.",
//   },
//   {
//     when: "2025 → now",
//     title: "Web developer, software company",
//     text: "Building enterprise web apps with React, ASP.NET Core and PostgreSQL: planning tools, document workflows with RBAC, and AI-powered features.",
//   },
//   {
//     when: "Alongside",
//     title: "Freelance",
//     text: "Delivered work for roughly 3–4 independent clients, including a major Shopify revamp.",
//   },
// ];

// /* ============================================================
//    Styles (fonts, background, marquee, reduced-motion)
//    ============================================================ */
// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
// :root{--accent:#c8f169;--bg:#0a0a0b;--line:rgba(255,255,255,.09);}
// html{scroll-behavior:smooth;}
// body{margin:0;background:var(--bg);}
// section[id]{scroll-margin-top:84px;}
// .pf-root{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:#ededed;}
// .f-display{font-family:'Bricolage Grotesque','Inter',system-ui,sans-serif;letter-spacing:-0.035em;}
// .f-mono{font-family:'JetBrains Mono',ui-monospace,Menlo,monospace;}
// .t-accent{color:var(--accent);}
// .bg-accent{background:var(--accent);}
// .b-line{border-color:var(--line);}
// .grid-bg{background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:56px 56px;-webkit-mask-image:radial-gradient(ellipse at 50% 30%,#000 10%,transparent 70%);mask-image:radial-gradient(ellipse at 50% 30%,#000 10%,transparent 70%);}
// .orb{position:absolute;border-radius:9999px;filter:blur(110px);pointer-events:none;}
// @keyframes drift{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(30px,-24px,0)}}
// @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
// @keyframes ping-soft{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.6);opacity:0}}
// @keyframes blink{50%{opacity:0}}
// .orb-a{animation:drift 16s ease-in-out infinite;}
// .orb-b{animation:drift 20s ease-in-out infinite reverse;}
// .marquee-track{animation:marquee 34s linear infinite;width:max-content;}
// .ping{animation:ping-soft 2.2s ease-out infinite;}
// .cursor{animation:blink 1s step-end infinite;}
// .focus-ring:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:6px;}
// @media (prefers-reduced-motion: reduce){
//   html{scroll-behavior:auto;}
//   .orb-a,.orb-b,.marquee-track,.ping,.cursor{animation:none !important;}
// }
// `;

// /* ============================================================
//    Small reusable pieces
//    ============================================================ */
// const GithubIcon = ({ className = "h-5 w-5" }) => (
//   <svg
//     viewBox="0 0 24 24"
//     className={className}
//     fill="currentColor"
//     aria-hidden="true"
//   >
//     <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.1 3.3 9.42 7.87 10.95.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.65 18.35.5 12 .5Z" />
//   </svg>
// );

// const LinkedinIcon = ({ className = "h-5 w-5" }) => (
//   <svg
//     viewBox="0 0 24 24"
//     className={className}
//     fill="currentColor"
//     aria-hidden="true"
//   >
//     <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
//   </svg>
// );

// const Reveal = ({ children, delay = 0, className = "", as = "div" }) => {
//   const reduce = useReducedMotion();
//   const Comp = motion[as] || motion.div;
//   return (
//     <Comp
//       className={className}
//       initial={reduce ? false : { opacity: 0, y: 28 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-70px" }}
//       transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
//     >
//       {children}
//     </Comp>
//   );
// };

// const Eyebrow = ({ children }) => (
//   <p className="f-mono mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-neutral-400">
//     <span className="bg-accent inline-block h-px w-8" aria-hidden="true" />
//     {children}
//   </p>
// );

// const SectionTitle = ({ eyebrow, children }) => (
//   <div className="mb-14 max-w-3xl">
//     <Reveal>
//       <Eyebrow>{eyebrow}</Eyebrow>
//     </Reveal>
//     <Reveal delay={0.08}>
//       <h2 className="f-display text-4xl font-bold leading-[1.02] text-white sm:text-5xl md:text-6xl">
//         {children}
//       </h2>
//     </Reveal>
//   </div>
// );

// const Availability = ({ children, compact = false }) => (
//   <span
//     className={`inline-flex items-center gap-2.5 rounded-full border b-line bg-white/[0.03] ${
//       compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
//     } text-neutral-300`}
//   >
//     <span className="relative flex h-2 w-2" aria-hidden="true">
//       <span className="ping bg-accent absolute inset-0 rounded-full" />
//       <span className="bg-accent relative h-2 w-2 rounded-full" />
//     </span>
//     {children}
//   </span>
// );

// const Pill = ({ children }) => (
//   <span className="f-mono rounded-full border b-line px-3 py-1 text-[11px] text-neutral-300">
//     {children}
//   </span>
// );

// /* ============================================================
//    Navigation
//    ============================================================ */
// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 16);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
//         scrolled || open
//           ? "border-b b-line bg-[#0a0a0b]/85 backdrop-blur-md"
//           : "border-b border-transparent"
//       }`}
//     >
//       <nav
//         className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
//         aria-label="Primary"
//       >
//         <a
//           href="#top"
//           className="focus-ring flex items-center gap-2.5"
//           aria-label="Ayush Singh, back to top"
//         >
//           <span className="f-display bg-accent grid h-8 w-8 place-items-center rounded-md text-sm font-extrabold text-black">
//             AS
//           </span>
//           <span className="f-display hidden text-base font-bold text-white sm:block">
//             {CONFIG.name}
//           </span>
//         </a>

//         <ul className="hidden items-center gap-9 md:flex">
//           {NAV.map((n) => (
//             <li key={n.href}>
//               <a
//                 href={n.href}
//                 className="focus-ring text-sm text-neutral-400 transition-colors hover:text-white"
//               >
//                 {n.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="flex items-center gap-3">
//           <span className="hidden lg:block">
//             <Availability compact>Open for select projects</Availability>
//           </span>
//           <button
//             type="button"
//             className="focus-ring grid h-10 w-10 place-items-center rounded-md border b-line text-white md:hidden"
//             onClick={() => setOpen((o) => !o)}
//             aria-expanded={open}
//             aria-controls="mobile-menu"
//             aria-label={open ? "Close menu" : "Open menu"}
//           >
//             {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </button>
//         </div>
//       </nav>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             id="mobile-menu"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             className="overflow-hidden md:hidden"
//           >
//             <ul className="space-y-1 px-5 pb-6 pt-2">
//               {NAV.map((n) => (
//                 <li key={n.href}>
//                   <a
//                     href={n.href}
//                     onClick={() => setOpen(false)}
//                     className="f-display block border-b b-line py-4 text-3xl font-bold text-white"
//                   >
//                     {n.label}
//                   </a>
//                 </li>
//               ))}
//               <li className="pt-5">
//                 <Availability compact>Open for select projects</Availability>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// /* ============================================================
//    Hero
//    ============================================================ */
// const TerminalPanel = () => {
//   const reduce = useReducedMotion();
//   const lines = [
//     { k: "status", v: "open for select projects", accent: true },
//     { k: "hours", v: "mornings (IST)" },
//     { k: "frontend", v: "React · TypeScript" },
//     { k: "backend", v: "Node.js · Express · .NET" },
//     { k: "commerce", v: "Shopify · WordPress" },
//     { k: "fits_into", v: "your repo, your workflow" },
//   ];
//   return (
//     <motion.div
//       initial={reduce ? false : { opacity: 0, y: 40, rotateX: 8 }}
//       animate={{ opacity: 1, y: 0, rotateX: 0 }}
//       transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
//       className="relative"
//     >
//       <div
//         className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/20 to-transparent opacity-40"
//         aria-hidden="true"
//       />
//       <div className="relative overflow-hidden rounded-xl border b-line bg-[#101012] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
//         <div className="flex items-center justify-between border-b b-line px-4 py-3">
//           <div className="flex gap-1.5" aria-hidden="true">
//             <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
//             <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
//             <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
//           </div>
//           <span className="f-mono text-[11px] text-neutral-500">
//             ayush — dev-support.sh
//           </span>
//           <span className="w-10" aria-hidden="true" />
//         </div>
//         <div className="f-mono space-y-2.5 p-5 text-[13px] leading-relaxed sm:p-6 sm:text-sm">
//           <motion.p
//             initial={reduce ? false : { opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.9 }}
//             className="text-neutral-500"
//           >
//             <span className="t-accent">$</span> ./plug-into-team --role="extra
//             developer"
//           </motion.p>
//           {lines.map((l, i) => (
//             <motion.p
//               key={l.k}
//               initial={reduce ? false : { opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 1.2 + i * 0.18, duration: 0.4 }}
//               className="flex flex-wrap gap-x-3"
//             >
//               <span className="w-24 shrink-0 text-neutral-500">{l.k}</span>
//               <span className={l.accent ? "t-accent" : "text-neutral-200"}>
//                 {l.v}
//               </span>
//             </motion.p>
//           ))}
//           <motion.p
//             initial={reduce ? false : { opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 2.5 }}
//             className="pt-2 text-neutral-500"
//           >
//             <span className="t-accent">$</span>{" "}
//             <span
//               className="cursor inline-block h-4 w-2 translate-y-0.5 bg-white/70"
//               aria-hidden="true"
//             />
//           </motion.p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Hero = () => {
//   const reduce = useReducedMotion();
//   const container = {
//     hidden: {},
//     show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
//   };
//   const item = {
//     hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 30 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
//       <div className="grid-bg absolute inset-0" aria-hidden="true" />
//       <div
//         className="orb orb-a bg-accent left-[-10%] top-[-10%] h-[420px] w-[420px] opacity-[0.10]"
//         aria-hidden="true"
//       />
//       <div
//         className="orb orb-b right-[-8%] top-[30%] h-[380px] w-[380px] bg-violet-500 opacity-[0.10]"
//         aria-hidden="true"
//       />

//       <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:pb-32">
//         <motion.div variants={container} initial="hidden" animate="show">
//           <motion.div variants={item}>
//             <Availability>
//               Mornings open for freelance collaboration
//             </Availability>
//           </motion.div>

//           <motion.h1
//             variants={item}
//             className="f-display mt-8 text-[clamp(2.7rem,8vw,6.2rem)] font-extrabold leading-[0.95] text-white"
//           >
//             Your extra developer.
//             <br />
//             <span className="t-accent">Without the overhead.</span>
//           </motion.h1>

//           <motion.p
//             variants={item}
//             className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-400"
//           >
//             I help software agencies and small teams build, improve, and
//             maintain web applications and client websites. I plug into your
//             workflow, ship what we agreed on, and keep you posted along the way.
//           </motion.p>

//           <motion.p
//             variants={item}
//             className="f-mono mt-6 text-sm tracking-wide text-neutral-300"
//           >
//             React · Node.js · .NET · Shopify
//           </motion.p>

//           <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
//             <motion.a
//               href="#contact"
//               whileHover={reduce ? undefined : { y: -2 }}
//               whileTap={reduce ? undefined : { scale: 0.97 }}
//               className="focus-ring bg-accent group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-black"
//             >
//               Let's Work Together
//               <ArrowRight
//                 className="h-4 w-4 transition-transform group-hover:translate-x-1"
//                 aria-hidden="true"
//               />
//             </motion.a>
//             <motion.a
//               href="#work"
//               whileHover={reduce ? undefined : { y: -2 }}
//               whileTap={reduce ? undefined : { scale: 0.97 }}
//               className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50"
//             >
//               Explore My Work
//             </motion.a>
//           </motion.div>

//           <motion.p
//             variants={item}
//             className="mt-8 max-w-md text-sm leading-relaxed text-neutral-500"
//           >
//             {CONFIG.availability}
//           </motion.p>
//         </motion.div>

//         <TerminalPanel />
//       </div>
//     </section>
//   );
// };

// /* ============================================================
//    Stack strip
//    ============================================================ */
// const StackStrip = () => {
//   const items = [...STACK, ...STACK];
//   return (
//     <section
//       aria-label="Technologies I work with"
//       className="border-y b-line bg-white/[0.015]"
//     >
//       <div className="overflow-hidden py-6">
//         <div className="marquee-track flex gap-14">
//           {items.map((s, i) => (
//             <span
//               key={`${s}-${i}`}
//               className="f-display flex items-center gap-14 whitespace-nowrap text-2xl font-bold text-neutral-500 sm:text-3xl"
//               aria-hidden={i >= STACK.length ? "true" : undefined}
//             >
//               {s}
//               <span className="t-accent text-lg" aria-hidden="true">
//                 ✦
//               </span>
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ============================================================
//    About
//    ============================================================ */
// const About = () => (
//   <section id="about" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
//     <SectionTitle eyebrow="About">
//       A developer who fits into your team, not around it.
//     </SectionTitle>

//     <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
//       <div className="space-y-6 text-lg leading-relaxed text-neutral-400">
//         <Reveal>
//           <p>
//             I'm Ayush, a web developer who works across the frontend and
//             backend. Day to day I build with React, TypeScript, Node.js and
//             ASP.NET Core, with PostgreSQL underneath and some AI-powered
//             features on top.
//           </p>
//         </Reveal>
//         <Reveal delay={0.08}>
//           <p>
//             I've worked on production projects, and during my internship I
//             handled Shopify and WordPress sites for several clients. Since then
//             I've also delivered work for independent freelance clients.
//           </p>
//         </Reveal>
//         <Reveal delay={0.16}>
//           <p className="text-white">
//             What I'm best at: picking up an existing codebase, understanding how
//             your team works, and getting tasks done without needing
//             hand-holding.
//           </p>
//         </Reveal>

//         <Reveal delay={0.24}>
//           <div className="f-mono mt-8 overflow-x-auto rounded-lg border b-line bg-[#101012] p-5 text-[13px] leading-7">
//             <div className="text-neutral-500">// how I like to work</div>
//             <div>
//               <span className="text-violet-300">const</span>{" "}
//               <span className="text-white">ayush</span> = {"{"}
//             </div>
//             <div className="pl-5">
//               <span className="text-neutral-400">communication:</span>{" "}
//               <span className="t-accent">"clear, early, honest"</span>,
//             </div>
//             <div className="pl-5">
//               <span className="text-neutral-400">workflow:</span>{" "}
//               <span className="t-accent">"yours — Git, PRs, tickets"</span>,
//             </div>
//             <div className="pl-5">
//               <span className="text-neutral-400">scope:</span>{" "}
//               <span className="t-accent">"agreed before I start"</span>,
//             </div>
//             <div>{"}"};</div>
//           </div>
//         </Reveal>
//       </div>

//       <ol className="relative space-y-10 border-l b-line pl-8">
//         {TIMELINE.map((t, i) => (
//           <Reveal as="li" key={t.title} delay={i * 0.1} className="relative">
//             <span
//               className="bg-accent absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-[#0a0a0b]"
//               aria-hidden="true"
//             />
//             <p className="f-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
//               {t.when}
//             </p>
//             <h3 className="f-display mt-2 text-2xl font-bold text-white">
//               {t.title}
//             </h3>
//             <p className="mt-2 max-w-lg leading-relaxed text-neutral-400">
//               {t.text}
//             </p>
//           </Reveal>
//         ))}
//       </ol>
//     </div>
//   </section>
// );

// /* ============================================================
//    Services
//    ============================================================ */
// const Services = () => {
//   const reduce = useReducedMotion();
//   return (
//     <section id="services" className="border-t b-line bg-white/[0.015]">
//       <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
//         <SectionTitle eyebrow="Services">
//           What I can take off your plate.
//         </SectionTitle>

//         <ul className="grid gap-5 md:grid-cols-2">
//           {SERVICES.map((s, i) => (
//             <Reveal as="li" key={s.title} delay={(i % 2) * 0.1}>
//               <motion.article
//                 whileHover={reduce ? undefined : { y: -6 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 24 }}
//                 className="group relative h-full overflow-hidden rounded-xl border b-line bg-[#0f0f11] p-8 transition-colors hover:border-white/25 sm:p-10"
//               >
//                 <span className="f-mono absolute right-8 top-8 text-xs text-neutral-600">
//                   0{i + 1}
//                 </span>
//                 <div className="grid h-12 w-12 place-items-center rounded-lg border b-line text-[color:var(--accent)] transition-colors group-hover:bg-[color:var(--accent)] group-hover:text-black">
//                   <s.icon className="h-5 w-5" aria-hidden="true" />
//                 </div>
//                 <h3 className="f-display mt-8 text-3xl font-bold text-white">
//                   {s.title}
//                 </h3>
//                 <p className="mt-3 leading-relaxed text-neutral-400">
//                   {s.text}
//                 </p>
//                 <div className="mt-7 flex flex-wrap gap-2">
//                   {s.tags.map((t) => (
//                     <Pill key={t}>{t}</Pill>
//                   ))}
//                 </div>
//               </motion.article>
//             </Reveal>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// /* ============================================================
//    Work
//    ============================================================ */
// const SubHead = ({ label, note }) => (
//   <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-3 border-b b-line pb-4">
//     <h3 className="f-display text-2xl font-bold text-white sm:text-3xl">
//       {label}
//     </h3>
//     {note && <p className="f-mono text-xs text-neutral-500">{note}</p>}
//   </Reveal>
// );

// const FreelanceCase = ({ p, reverse = false }) => {
//   const reduce = useReducedMotion();
//   const sand = p.theme === "sand";
//   return (
//     <Reveal>
//       <motion.article
//         whileHover={reduce ? undefined : { y: -4 }}
//         transition={{ type: "spring", stiffness: 260, damping: 24 }}
//         className={`grid overflow-hidden rounded-2xl border b-line bg-[#0f0f11] ${
//           reverse
//             ? "lg:grid-cols-[0.75fr_1.25fr]"
//             : "lg:grid-cols-[1.25fr_0.75fr]"
//         }`}
//       >
//         {/* Cover: set p.screenshot to swap in a real image */}
//         <div
//           className={`relative min-h-[280px] overflow-hidden border-b b-line lg:min-h-[440px] lg:border-b-0 ${
//             reverse ? "lg:order-2 lg:border-l" : "lg:border-r"
//           } ${sand ? "bg-[#ebd7be]" : "bg-[#0c0c0e]"}`}
//         >
//           {p.screenshot ? (
//             <img
//               src={p.screenshot}
//               alt={p.screenshotAlt}
//               className="h-full w-full object-cover"
//               loading="lazy"
//             />
//           ) : (
//             <>
//               {!sand && (
//                 <div
//                   className="grid-bg absolute inset-0 opacity-60"
//                   aria-hidden="true"
//                 />
//               )}
//               {!sand && (
//                 <div
//                   className="orb bg-accent right-[-10%] top-[-20%] h-72 w-72 opacity-[0.16]"
//                   aria-hidden="true"
//                 />
//               )}
//               <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
//                 <span
//                   className={`f-mono inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${
//                     sand
//                       ? "border-black/20 text-[#2a2118]"
//                       : "b-line text-neutral-300"
//                   }`}
//                 >
//                   <ShoppingBag
//                     className={`h-3.5 w-3.5 ${sand ? "text-[#2a2118]" : "t-accent"}`}
//                     aria-hidden="true"
//                   />
//                   {p.platform} storefront
//                 </span>
//                 <div>
//                   <p
//                     className={`f-display text-[clamp(3.2rem,11vw,8rem)] font-extrabold lowercase leading-[0.9] ${
//                       sand ? "text-[#2a2118]" : "text-white"
//                     }`}
//                   >
//                     {p.coverLines.map((l, i) => (
//                       <span key={l} className="block">
//                         {l}
//                         {i === p.coverLines.length - 1 && (
//                           <span
//                             className={sand ? "text-[#2a2118]/50" : "t-accent"}
//                           >
//                             .
//                           </span>
//                         )}
//                       </span>
//                     ))}
//                   </p>
//                   <p
//                     className={`f-mono mt-3 text-xs ${sand ? "text-[#2a2118]/60" : "text-neutral-500"}`}
//                   >
//                     {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
//                   </p>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>

//         <div className="flex flex-col justify-between p-8 sm:p-10">
//           <div>
//             <p className="f-mono text-xs uppercase tracking-[0.2em] t-accent">
//               {p.label}
//             </p>
//             <h3 className="f-display mt-4 text-4xl font-bold text-white">
//               {p.name}
//             </h3>
//             <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
//               <div>
//                 <dt className="f-mono text-xs uppercase tracking-widest text-neutral-500">
//                   Platform
//                 </dt>
//                 <dd className="mt-1 text-neutral-200">{p.platform}</dd>
//               </div>
//               <div>
//                 <dt className="f-mono text-xs uppercase tracking-widest text-neutral-500">
//                   Scope
//                 </dt>
//                 <dd className="mt-1 text-neutral-200">{p.scope}</dd>
//               </div>
//               <div className="col-span-2">
//                 <dt className="f-mono text-xs uppercase tracking-widest text-neutral-500">
//                   My role
//                 </dt>
//                 <dd className="mt-1 text-neutral-200">{p.role}</dd>
//               </div>
//             </dl>
//             <p className="mt-6 leading-relaxed text-neutral-400">
//               {p.description}
//             </p>
//             <ul className="mt-5 space-y-2 text-sm text-neutral-300">
//               {p.highlights.map((h) => (
//                 <li key={h} className="flex gap-3">
//                   <span
//                     className="bg-accent mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
//                     aria-hidden="true"
//                   />
//                   {h}
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-6 flex flex-wrap gap-2">
//               {p.tags.map((t) => (
//                 <Pill key={t}>{t}</Pill>
//               ))}
//             </div>
//           </div>
//           <a
//             href={p.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="focus-ring bg-accent group mt-10 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black"
//           >
//             Visit Live Website
//             <ArrowUpRight
//               className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//               aria-hidden="true"
//             />
//             <span className="sr-only">(opens in a new tab)</span>
//           </a>
//         </div>
//       </motion.article>
//     </Reveal>
//   );
// };

// const ProfessionalWork = () => (
//   <div className="mt-28">
//     <SubHead
//       label={PRO_WORK.title}
//       note="Details kept general for confidentiality"
//     />
//     <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
//       <div className="lg:sticky lg:top-28 lg:self-start">
//         <Reveal>
//           <p className="text-lg leading-relaxed text-neutral-300">
//             {PRO_WORK.intro}
//           </p>
//         </Reveal>
//         <Reveal delay={0.1}>
//           <p className="mt-5 leading-relaxed text-neutral-500">
//             {PRO_WORK.how}
//           </p>
//         </Reveal>
//       </div>

//       <ol className="divide-y divide-white/10 border-y b-line">
//         {PRO_WORK.projects.map((p, i) => (
//           <Reveal
//             as="li"
//             key={p.n}
//             delay={i * 0.06}
//             className="grid gap-5 py-9 sm:grid-cols-[auto_1fr] sm:gap-8"
//           >
//             <p className="f-display text-4xl font-extrabold text-white/20">
//               {p.n}
//             </p>
//             <div>
//               <p className="f-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
//                 {p.category}
//               </p>
//               <h4 className="f-display mt-2 text-2xl font-bold text-white">
//                 {p.title}
//               </h4>
//               <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-neutral-400">
//                 {p.points.map((pt) => (
//                   <li key={pt} className="flex gap-3">
//                     <span
//                       className="bg-accent mt-2.5 h-1 w-3 shrink-0"
//                       aria-hidden="true"
//                     />
//                     {pt}
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-5 flex flex-wrap gap-2">
//                 {p.stack.map((s) => (
//                   <Pill key={s}>{s}</Pill>
//                 ))}
//               </div>
//             </div>
//           </Reveal>
//         ))}
//       </ol>
//     </div>
//   </div>
// );

// const Work = () => (
//   <section id="work" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
//     <SectionTitle eyebrow="Selected work">
//       Real client work, described honestly.
//     </SectionTitle>

//     <SubHead label="Freelance" note="Shopify · client websites" />
//     <div className="space-y-6">
//       {FREELANCE_PROJECTS.map((p, i) => (
//         <FreelanceCase key={p.name} p={p} reverse={i % 2 === 1} />
//       ))}
//     </div>

//     <ProfessionalWork />
//   </section>
// );

// /* ============================================================
//    Process
//    ============================================================ */
// const Process = () => (
//   <section id="process" className="border-t b-line bg-white/[0.015]">
//     <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
//       <SectionTitle eyebrow="How I collaborate">
//         A simple process that works inside yours.
//       </SectionTitle>

//       <ol className="grid gap-px overflow-hidden rounded-xl border b-line bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-4">
//         {STEPS.map((s, i) => (
//           <Reveal
//             as="li"
//             key={s.n}
//             delay={i * 0.08}
//             className="bg-[#0a0a0b] p-8"
//           >
//             <p className="f-display text-5xl font-extrabold t-accent">{s.n}</p>
//             <h3 className="f-display mt-8 text-xl font-bold text-white">
//               {s.title}
//             </h3>
//             <p className="mt-3 text-[15px] leading-relaxed text-neutral-400">
//               {s.text}
//             </p>
//           </Reveal>
//         ))}
//       </ol>

//       <Reveal delay={0.1}>
//         <p className="mt-10 max-w-2xl text-lg leading-relaxed text-neutral-400">
//           I'm happy to work with your existing team, follow your workflow, and
//           contribute to an established codebase: your branches, your reviews,
//           your tools.
//         </p>
//       </Reveal>
//     </div>
//   </section>
// );

// /* ============================================================
//    Why work with me
//    ============================================================ */
// const Why = () => (
//   <section id="why" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
//     <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
//       <div>
//         <Reveal>
//           <Eyebrow>Why work with me</Eyebrow>
//         </Reveal>
//         <Reveal delay={0.08}>
//           <h2 className="f-display text-4xl font-bold leading-[1.02] text-white sm:text-5xl md:text-6xl">
//             Practical help, <span className="t-accent">no drama.</span>
//           </h2>
//         </Reveal>
//       </div>
//       <ul className="divide-y divide-white/10 border-y b-line">
//         {WHY.map((w, i) => (
//           <Reveal
//             as="li"
//             key={w}
//             delay={i * 0.06}
//             className="flex items-center gap-5 py-5"
//           >
//             <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[color:var(--accent)] text-black">
//               <Check className="h-4 w-4" aria-hidden="true" />
//             </span>
//             <span className="text-lg text-neutral-200">{w}</span>
//           </Reveal>
//         ))}
//       </ul>
//     </div>
//   </section>
// );

// /* ============================================================
//    Contact
//    ============================================================ */
// const Contact = () => {
//   const reduce = useReducedMotion();
//   const mailto = `mailto:${CONFIG.email}?subject=${encodeURIComponent(
//     "Project enquiry",
//   )}&body=${encodeURIComponent(
//     "Hi Ayush,\n\nWe'd like to talk about a project.\n\nProject type:\nTimeline:\nStack:\n\nThanks,",
//   )}`;

//   return (
//     <section id="contact" className="relative overflow-hidden border-t b-line">
//       <div
//         className="orb orb-a bg-accent left-1/2 top-[-30%] h-[460px] w-[460px] -translate-x-1/2 opacity-[0.09]"
//         aria-hidden="true"
//       />
//       <div className="relative mx-auto max-w-5xl px-5 py-28 text-center sm:px-8 sm:py-40">
//         <Reveal>
//           <Eyebrow>Contact</Eyebrow>
//         </Reveal>
//         <Reveal delay={0.08}>
//           <h2 className="f-display text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-[0.97] text-white">
//             Need an extra developer on your{" "}
//             <span className="t-accent">next project?</span>
//           </h2>
//         </Reveal>
//         <Reveal delay={0.16}>
//           <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
//             If your team needs help with a frontend feature, backend API,
//             Shopify store, or ongoing client work, let's discuss how I can
//             contribute.
//           </p>
//         </Reveal>

//         <Reveal delay={0.24}>
//           <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
//             <motion.a
//               href={mailto}
//               whileHover={reduce ? undefined : { y: -2 }}
//               whileTap={reduce ? undefined : { scale: 0.97 }}
//               className="focus-ring bg-accent inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold text-black"
//             >
//               <Mail className="h-5 w-5" aria-hidden="true" />
//               {CONFIG.email}
//             </motion.a>
//             {CONFIG.phone && (
//               <a
//                 href={`tel:${CONFIG.phone.replace(/[^+\d]/g, "")}`}
//                 className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white/50"
//               >
//                 <Phone className="h-4 w-4" aria-hidden="true" />
//                 {CONFIG.phone}
//               </a>
//             )}
//             <a
//               href={CONFIG.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white/50"
//             >
//               <GithubIcon className="h-4 w-4" /> GitHub
//               <span className="sr-only">(opens in a new tab)</span>
//             </a>
//             {CONFIG.resumeUrl && (
//               <a
//                 href={CONFIG.resumeUrl}
//                 download
//                 className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white/50"
//               >
//                 <Download className="h-4 w-4" aria-hidden="true" /> Resume
//               </a>
//             )}
//           </div>
//         </Reveal>

//         <Reveal delay={0.32}>
//           <p className="mx-auto mt-10 max-w-md text-sm text-neutral-500">
//             {CONFIG.availability}
//           </p>
//         </Reveal>
//       </div>
//     </section>
//   );
// };

// /* ============================================================
//    Footer
//    ============================================================ */
// const Footer = () => (
//   <footer className="border-t b-line">
//     <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
//       <div>
//         <p className="f-display text-lg font-bold text-white">{CONFIG.name}</p>
//         <p className="text-sm text-neutral-500">Web Developer</p>
//       </div>
//       <p className="text-sm text-neutral-500">
//         © {new Date().getFullYear()} {CONFIG.name}. Thanks for stopping by.
//         Let's build something solid.
//       </p>
//       <div className="flex gap-3">
//         {CONFIG.phone && (
//           <a
//             href={`tel:${CONFIG.phone.replace(/[^+\d]/g, "")}`}
//             aria-label={`Call ${CONFIG.phone}`}
//             className="focus-ring grid h-10 w-10 place-items-center rounded-full border b-line text-neutral-400 transition-colors hover:text-white"
//           >
//             <Phone className="h-4 w-4" />
//           </a>
//         )}
//         {CONFIG.github && (
//           <a
//             href={CONFIG.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub (opens in a new tab)"
//             className="focus-ring grid h-10 w-10 place-items-center rounded-full border b-line text-neutral-400 transition-colors hover:text-white"
//           >
//             <GithubIcon className="h-4 w-4" />
//           </a>
//         )}
//       </div>
//     </div>
//   </footer>
// );

// /* ============================================================
//    App
//    ============================================================ */
// export default function App() {
//   const { scrollYProgress } = useScroll();
//   const progress = useSpring(scrollYProgress, {
//     stiffness: 120,
//     damping: 30,
//     mass: 0.3,
//   });

//   return (
//     <div className="pf-root min-h-screen overflow-x-hidden antialiased">
//       <style>{CSS}</style>
//       <motion.div
//         className="bg-accent fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
//         style={{ scaleX: progress }}
//         aria-hidden="true"
//       />
//       <Navbar />
//       <main>
//         <Hero />
//         <StackStrip />
//         <About />
//         <Services />
//         <Work />
//         <Process />
//         <Why />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }




import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Mail,
  Phone,
  Code,
  Server,
  ShoppingBag,
  LifeBuoy,
  Check,
  Download,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

/* ============================================================
   CONFIG — edit everything personal here
   ============================================================ */
const CONFIG = {
  name: "Ayush Singh",
  role: "Freelance Web Developer",
  email: "ayushsingh8692@gmail.com",
  // REPLACE: your real profile URLs
  phone: "+91-9082081937",
  github: "https://github.com/Ayush4158",
  // Optional: put a public link to your resume PDF (e.g. "/Ayush-Singh-Resume.pdf"
  // placed in your /public folder). Leave "" to hide the button.
  resumeUrl: "",
  availability:
    "Available for morning freelance collaboration, project-based work, and ongoing development support.",
};

const FREELANCE_PROJECTS = [
  {
    name: "Itrani",
    url: "https://itrani.com",
    platform: "Shopify",
    scope: "Full website revamp",
    role: "Website revamp and development",
    theme: "dark", // "dark" | "sand"
    coverLines: ["itrani"],
    label: "Featured case",
    description:
      "I independently worked on a major revamp of the Itrani Shopify website, contributing across the website's implementation and overall storefront experience.",
    highlights: [
      "Handled the revamp independently",
      "Worked across the site's implementation, not one isolated change",
    ],
    tags: ["Shopify", "Liquid", "Storefront"],
    screenshot: "", // e.g. "/itrani.png" — replaces the CSS cover
    screenshotAlt: "Screenshot of the Itrani Shopify storefront",
  },
  {
    name: "Studio Banera",
    url: "https://studiobanera.com/",
    platform: "Shopify",
    scope: "Custom theme sections",
    role: "Shopify developer: customized sections",
    theme: "sand",
    coverLines: ["studio", "banera"],
    label: "Focused scope",
    description:
      "A smaller engagement on Studio Banera's Shopify store, a women's clothing brand. I built customized theme sections using Liquid, so the team could manage them from the theme editor.",
    highlights: [
      "Built customized sections with Liquid",
      "Smaller, clearly scoped piece of work within an existing store",
    ],
    tags: ["Shopify", "Liquid", "Theme sections"],
    screenshot: "",
    screenshotAlt: "Screenshot of the Studio Banera Shopify storefront",
  },
];

/* ------------------------------------------------------------
   PRO_WORK screens: desktop screenshots, 16:10 (e.g. 1600x1000).
   Put files in /public/screens/ and set src to "/screens/xyz.png".
   Leave src: "" to show a placeholder. Keep 2–3 per project.
   Blur/replace any company names, logos, people and real figures.
   ------------------------------------------------------------ */
const PRO_WORK = {
  title: "Professional work",
  intro:
    "I'm currently a web developer at a software company, building enterprise web applications. Details stay general for confidentiality, but this is the kind of work I do there.",
  how: "I started on the frontend and now own backend features end to end: APIs, business logic, database tables, validation and logging, in a Controller–Service–Repository structure.",
  projects: [
    {
      n: "01",
      title: "Planning & budgeting platform",
      category: "Enterprise web app",
      points: [
        "Built ERP-style planning screens in React for multi-level budget forecasting and department-wise data entry, using reusable components.",
        "Designed REST APIs and PostgreSQL schemas for budget versioning, rollups and audit trails.",
        "Built an Excel import flow that creates or extends plans from existing data, then generates a summary PDF and emails it.",
        "Embedded Power BI dashboards and a Gemini-powered AI chatbot with function calling for conversational budget queries.",
        "Implemented semantic response caching using embeddings in PostgreSQL to reduce redundant LLM calls and token usage.",
      ],
      stack: ["ASP.NET Core", "React", "PostgreSQL", "Power BI", "Gemini"],
      screens: [
        { src: "/screens/planning-image1.png", alt: "Budget planning", caption: "Multi-level budget entry grid" },
        { src: "/screens/planning-image2.png", alt: "Bud/Eac Detail", caption: "Bud/Eac Detail" },
        { src: "/screens/planning-image3.png", alt: "Role Right Scree", caption: "We can give rights at user or role level" },
      ],
    },
    {
      n: "02",
      title: "Timesheet & invoicing management system",
      category: "Enterprise web app",
      points: [
        "Built employee and project master management, allowing administrators to manage workforce and project data through the UI.",
        "Implemented timesheet creation and submission workflows, enabling employees to log working hours against assigned projects.",
        "Designed hierarchical Workforce Group Management to map employees with supervisors and supervisors with administrators, enforcing role-based data visibility.",
        "Developed approval and rejection workflows with supervisor-level review and administrative processing.",
        "Integrated timesheet exports with invoice management, tracking exported records through status flags and enabling invoice generation from processed timesheets.",
      ],
      stack: ["ASP.NET Core", "React", "PostgreSQL", "RBAC", "Workflow Management"],
      screens: [
        { src: "/screens/tms-image1.png", alt: "Timesheet entry", caption: "Timesheet entry and submission" },
        { src: "/screens/tms-image2.png", alt: "Approval workflow", caption: "Supervisor approval workflow" },
        { src: "/screens/tms-image3.png", alt: "Invoice generation", caption: "Invoice generation from timesheets" },
      ],
    },
    {
      n: "03",
      title: "Document governance platform",
      category: "Enterprise web app",
      points: [
        "Document management with version control, metadata and full audit history.",
        "Implemented role-based access control and multi-level approval workflows.",
        "Built an AI chatbot with function calling, conversation history, response caching and token-efficient processing.",
      ],
      stack: ["ASP.NET Core", "React", "PostgreSQL", "RBAC", "Gemini"],
      screens: [
        { src: "", alt: "Document library", caption: "Document library with versions" },
        { src: "", alt: "Approval flow", caption: "Multi-level approvals" },
        { src: "", alt: "AI chatbot", caption: "AI assistant with function calling" },
      ],
    },
  ],
};

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const STACK = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "ASP.NET Core",
  "PostgreSQL",
  "Redis",
  "Shopify",
  "WordPress",
];

const SERVICES = [
  {
    icon: Code,
    title: "Frontend Development",
    text: "React and TypeScript interfaces built from designs or specs. Responsive layouts, reusable components, and clean API integration on the client side.",
    tags: ["React", "TypeScript", "Responsive UI"],
  },
  {
    icon: Server,
    title: "Backend Development",
    text: "REST APIs with Node.js and Express, or ASP.NET Core when the project calls for it. JWT authentication, role-based access, and PostgreSQL-backed features.",
    tags: ["Node.js", "ASP.NET Core", "Auth & RBAC"],
  },
  {
    icon: ShoppingBag,
    title: "Shopify & WordPress",
    text: "Store customization, full website revamps, responsive fixes, integrations, and ongoing maintenance for client sites.",
    tags: ["Shopify", "WordPress", "Maintenance"],
  },
  {
    icon: LifeBuoy,
    title: "Existing Project Support",
    text: "Bug fixes, new features, code cleanup, and extra capacity when your team's backlog outgrows your sprint.",
    tags: ["Bug fixing", "Features", "Team capacity"],
  },
];

const STEPS = [
  {
    n: "01",
    title: "Understand the project",
    text: "Review requirements, existing code, and priorities.",
  },
  {
    n: "02",
    title: "Align on scope",
    text: "Agree on deliverables, timelines, communication, and payment.",
  },
  {
    n: "03",
    title: "Build and communicate",
    text: "Implement features, share progress, and raise issues early.",
  },
  {
    n: "04",
    title: "Deliver and iterate",
    text: "Test the work, address agreed feedback, and support the next milestone.",
  },
];

const WHY = [
  "Comfortable with both frontend and backend tasks",
  "Experience with real client websites",
  "Can contribute to existing projects, not only build from scratch",
  "Clear communication and defined deliverables",
  "Flexible, project-based collaboration",
  "Cost-effective support for small teams",
];

const TIMELINE = [
  {
    when: "2025",
    title: "Web developer intern",
    text: "Worked on multiple client e-commerce sites with Shopify and WordPress. Improved load times by 25–35% and Lighthouse scores by about 20% through script optimization and image compression.",
  },
  {
    when: "2025 → now",
    title: "Web developer, software company",
    text: "Building enterprise web apps with React, ASP.NET Core and PostgreSQL: planning tools, document workflows with RBAC, and AI-powered features.",
  },
  {
    when: "Alongside",
    title: "Freelance",
    text: "Delivered work for roughly 3–4 independent clients, including a major Shopify revamp.",
  },
];

/* ============================================================
   Styles (fonts, background, marquee, reduced-motion)
   ============================================================ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
:root{--accent:#c8f169;--bg:#0a0a0b;--line:rgba(255,255,255,.09);}
html{scroll-behavior:smooth;}
body{margin:0;background:var(--bg);}
section[id]{scroll-margin-top:84px;}
.pf-root{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:#ededed;}
.f-display{font-family:'Bricolage Grotesque','Inter',system-ui,sans-serif;letter-spacing:-0.035em;}
.f-mono{font-family:'JetBrains Mono',ui-monospace,Menlo,monospace;}
.t-accent{color:var(--accent);}
.bg-accent{background:var(--accent);}
.b-line{border-color:var(--line);}
.grid-bg{background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:56px 56px;-webkit-mask-image:radial-gradient(ellipse at 50% 30%,#000 10%,transparent 70%);mask-image:radial-gradient(ellipse at 50% 30%,#000 10%,transparent 70%);}
.orb{position:absolute;border-radius:9999px;filter:blur(110px);pointer-events:none;}
@keyframes drift{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(30px,-24px,0)}}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes ping-soft{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.6);opacity:0}}
@keyframes blink{50%{opacity:0}}
.orb-a{animation:drift 16s ease-in-out infinite;}
.orb-b{animation:drift 20s ease-in-out infinite reverse;}
.marquee-track{animation:marquee 34s linear infinite;width:max-content;}
.ping{animation:ping-soft 2.2s ease-out infinite;}
.cursor{animation:blink 1s step-end infinite;}
.focus-ring:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:6px;}
@media (prefers-reduced-motion: reduce){
  html{scroll-behavior:auto;}
  .orb-a,.orb-b,.marquee-track,.ping,.cursor{animation:none !important;}
}
`;


const ShotImage = ({ src, alt = "", className = "", label }) => {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) return <MockScreen label={label} />;

  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={className}
      onError={() => {
        console.warn("Screenshot failed to load:", src);
        setFailed(true);
      }}
    />
  );
};

/* ============================================================
   Small reusable pieces
   ============================================================ */
const GithubIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.1 3.3 9.42 7.87 10.95.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const Reveal = ({ children, delay = 0, className = "", as = "div" }) => {
  const reduce = useReducedMotion();
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
};

const Eyebrow = ({ children }) => (
  <p className="f-mono mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-neutral-400">
    <span className="bg-accent inline-block h-px w-8" aria-hidden="true" />
    {children}
  </p>
);

const SectionTitle = ({ eyebrow, children }) => (
  <div className="mb-14 max-w-3xl">
    <Reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="f-display text-4xl font-bold leading-[1.02] text-white sm:text-5xl md:text-6xl">
        {children}
      </h2>
    </Reveal>
  </div>
);

const Availability = ({ children, compact = false }) => (
  <span
    className={`inline-flex items-center gap-2.5 rounded-full border b-line bg-white/[0.03] ${
      compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
    } text-neutral-300`}
  >
    <span className="relative flex h-2 w-2" aria-hidden="true">
      <span className="ping bg-accent absolute inset-0 rounded-full" />
      <span className="bg-accent relative h-2 w-2 rounded-full" />
    </span>
    {children}
  </span>
);

const Pill = ({ children }) => (
  <span className="f-mono rounded-full border b-line px-3 py-1 text-[11px] text-neutral-300">
    {children}
  </span>
);

/* ============================================================
   Navigation
   ============================================================ */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b b-line bg-[#0a0a0b]/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="focus-ring flex items-center gap-2.5"
          aria-label="Ayush Singh, back to top"
        >
          <span className="f-display bg-accent grid h-8 w-8 place-items-center rounded-md text-sm font-extrabold text-black">
            AS
          </span>
          <span className="f-display hidden text-base font-bold text-white sm:block">
            {CONFIG.name}
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="focus-ring text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden lg:block">
            <Availability compact>Open for select projects</Availability>
          </span>
          <button
            type="button"
            className="focus-ring grid h-10 w-10 place-items-center rounded-md border b-line text-white md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="space-y-1 px-5 pb-6 pt-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="f-display block border-b b-line py-4 text-3xl font-bold text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="pt-5">
                <Availability compact>Open for select projects</Availability>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

/* ============================================================
   Hero
   ============================================================ */
const TerminalPanel = () => {
  const reduce = useReducedMotion();
  const lines = [
    { k: "status", v: "open for select projects", accent: true },
    { k: "hours", v: "mornings (IST)" },
    { k: "frontend", v: "React · TypeScript" },
    { k: "backend", v: "Node.js · Express · .NET" },
    { k: "commerce", v: "Shopify · WordPress" },
    { k: "fits_into", v: "your repo, your workflow" },
  ];
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div
        className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/20 to-transparent opacity-40"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-xl border b-line bg-[#101012] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
        <div className="flex items-center justify-between border-b b-line px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="f-mono text-[11px] text-neutral-500">
            ayush — dev-support.sh
          </span>
          <span className="w-10" aria-hidden="true" />
        </div>
        <div className="f-mono space-y-2.5 p-5 text-[13px] leading-relaxed sm:p-6 sm:text-sm">
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-neutral-500"
          >
            <span className="t-accent">$</span> ./plug-into-team --role="extra
            developer"
          </motion.p>
          {lines.map((l, i) => (
            <motion.p
              key={l.k}
              initial={reduce ? false : { opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.18, duration: 0.4 }}
              className="flex flex-wrap gap-x-3"
            >
              <span className="w-24 shrink-0 text-neutral-500">{l.k}</span>
              <span className={l.accent ? "t-accent" : "text-neutral-200"}>
                {l.v}
              </span>
            </motion.p>
          ))}
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="pt-2 text-neutral-500"
          >
            <span className="t-accent">$</span>{" "}
            <span
              className="cursor inline-block h-4 w-2 translate-y-0.5 bg-white/70"
              aria-hidden="true"
            />
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
  };
  const item = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="orb orb-a bg-accent left-[-10%] top-[-10%] h-[420px] w-[420px] opacity-[0.10]"
        aria-hidden="true"
      />
      <div
        className="orb orb-b right-[-8%] top-[30%] h-[380px] w-[380px] bg-violet-500 opacity-[0.10]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:pb-32">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Availability>
              Mornings open for freelance collaboration
            </Availability>
          </motion.div>

          <motion.h1
            variants={item}
            className="f-display mt-8 text-[clamp(2.7rem,8vw,6.2rem)] font-extrabold leading-[0.95] text-white"
          >
            Your extra developer.
            <br />
            <span className="t-accent">Without the overhead.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-400"
          >
            I help software agencies and small teams build, improve, and
            maintain web applications and client websites. I plug into your
            workflow, ship what we agreed on, and keep you posted along the way.
          </motion.p>

          <motion.p
            variants={item}
            className="f-mono mt-6 text-sm tracking-wide text-neutral-300"
          >
            React · Node.js · .NET · Shopify
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="focus-ring bg-accent group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-black"
            >
              Let's Work Together
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </motion.a>
            <motion.a
              href="#work"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50"
            >
              Explore My Work
            </motion.a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 max-w-md text-sm leading-relaxed text-neutral-500"
          >
            {CONFIG.availability}
          </motion.p>
        </motion.div>

        <TerminalPanel />
      </div>
    </section>
  );
};

/* ============================================================
   Stack strip
   ============================================================ */
const StackStrip = () => {
  const items = [...STACK, ...STACK];
  return (
    <section
      aria-label="Technologies I work with"
      className="border-y b-line bg-white/[0.015]"
    >
      <div className="overflow-hidden py-6">
        <div className="marquee-track flex gap-14">
          {items.map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="f-display flex items-center gap-14 whitespace-nowrap text-2xl font-bold text-neutral-500 sm:text-3xl"
              aria-hidden={i >= STACK.length ? "true" : undefined}
            >
              {s}
              <span className="t-accent text-lg" aria-hidden="true">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   About
   ============================================================ */
const About = () => (
  <section id="about" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
    <SectionTitle eyebrow="About">
      A developer who fits into your team, not around it.
    </SectionTitle>

    <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
      <div className="space-y-6 text-lg leading-relaxed text-neutral-400">
        <Reveal>
          <p>
            I'm Ayush, a web developer who works across the frontend and
            backend. Day to day I build with React, TypeScript, Node.js and
            ASP.NET Core, with PostgreSQL underneath and some AI-powered
            features on top.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p>
            I've worked on production projects, and during my internship I
            handled Shopify and WordPress sites for several clients. Since then
            I've also delivered work for independent freelance clients.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-white">
            What I'm best at: picking up an existing codebase, understanding how
            your team works, and getting tasks done without needing
            hand-holding.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="f-mono mt-8 overflow-x-auto rounded-lg border b-line bg-[#101012] p-5 text-[13px] leading-7">
            <div className="text-neutral-500">// how I like to work</div>
            <div>
              <span className="text-violet-300">const</span>{" "}
              <span className="text-white">ayush</span> = {"{"}
            </div>
            <div className="pl-5">
              <span className="text-neutral-400">communication:</span>{" "}
              <span className="t-accent">"clear, early, honest"</span>,
            </div>
            <div className="pl-5">
              <span className="text-neutral-400">workflow:</span>{" "}
              <span className="t-accent">"yours — Git, PRs, tickets"</span>,
            </div>
            <div className="pl-5">
              <span className="text-neutral-400">scope:</span>{" "}
              <span className="t-accent">"agreed before I start"</span>,
            </div>
            <div>{"}"};</div>
          </div>
        </Reveal>
      </div>

      <ol className="relative space-y-10 border-l b-line pl-8">
        {TIMELINE.map((t, i) => (
          <Reveal as="li" key={t.title} delay={i * 0.1} className="relative">
            <span
              className="bg-accent absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-[#0a0a0b]"
              aria-hidden="true"
            />
            <p className="f-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
              {t.when}
            </p>
            <h3 className="f-display mt-2 text-2xl font-bold text-white">
              {t.title}
            </h3>
            <p className="mt-2 max-w-lg leading-relaxed text-neutral-400">
              {t.text}
            </p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

/* ============================================================
   Services
   ============================================================ */
const Services = () => {
  const reduce = useReducedMotion();
  return (
    <section id="services" className="border-t b-line bg-white/[0.015]">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <SectionTitle eyebrow="Services">
          What I can take off your plate.
        </SectionTitle>

        <ul className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 2) * 0.1}>
              <motion.article
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative h-full overflow-hidden rounded-xl border b-line bg-[#0f0f11] p-8 transition-colors hover:border-white/25 sm:p-10"
              >
                <span className="f-mono absolute right-8 top-8 text-xs text-neutral-600">
                  0{i + 1}
                </span>
                <div className="grid h-12 w-12 place-items-center rounded-lg border b-line text-[color:var(--accent)] transition-colors group-hover:bg-[color:var(--accent)] group-hover:text-black">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="f-display mt-8 text-3xl font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-400">
                  {s.text}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

/* ============================================================
   Work
   ============================================================ */
const SubHead = ({ label, note }) => (
  <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-3 border-b b-line pb-4">
    <h3 className="f-display text-2xl font-bold text-white sm:text-3xl">
      {label}
    </h3>
    {note && <p className="f-mono text-xs text-neutral-500">{note}</p>}
  </Reveal>
);

const FreelanceCase = ({ p, reverse = false }) => {
  const reduce = useReducedMotion();
  const sand = p.theme === "sand";
  return (
    <Reveal>
      <motion.article
        whileHover={reduce ? undefined : { y: -4 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className={`grid overflow-hidden rounded-2xl border b-line bg-[#0f0f11] ${
          reverse
            ? "lg:grid-cols-[0.75fr_1.25fr]"
            : "lg:grid-cols-[1.25fr_0.75fr]"
        }`}
      >
        {/* Cover: set p.screenshot to swap in a real image */}
        <div
          className={`relative min-h-[280px] overflow-hidden border-b b-line lg:min-h-[440px] lg:border-b-0 ${
            reverse ? "lg:order-2 lg:border-l" : "lg:border-r"
          } ${sand ? "bg-[#ebd7be]" : "bg-[#0c0c0e]"}`}
        >
          {p.screenshot ? (
            <img
              src={p.screenshot}
              alt={p.screenshotAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <>
              {!sand && (
                <div
                  className="grid-bg absolute inset-0 opacity-60"
                  aria-hidden="true"
                />
              )}
              {!sand && (
                <div
                  className="orb bg-accent right-[-10%] top-[-20%] h-72 w-72 opacity-[0.16]"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
                <span
                  className={`f-mono inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${
                    sand
                      ? "border-black/20 text-[#2a2118]"
                      : "b-line text-neutral-300"
                  }`}
                >
                  <ShoppingBag
                    className={`h-3.5 w-3.5 ${sand ? "text-[#2a2118]" : "t-accent"}`}
                    aria-hidden="true"
                  />
                  {p.platform} storefront
                </span>
                <div>
                  <p
                    className={`f-display text-[clamp(3.2rem,11vw,8rem)] font-extrabold lowercase leading-[0.9] ${
                      sand ? "text-[#2a2118]" : "text-white"
                    }`}
                  >
                    {p.coverLines.map((l, i) => (
                      <span key={l} className="block">
                        {l}
                        {i === p.coverLines.length - 1 && (
                          <span
                            className={sand ? "text-[#2a2118]/50" : "t-accent"}
                          >
                            .
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                  <p
                    className={`f-mono mt-3 text-xs ${sand ? "text-[#2a2118]/60" : "text-neutral-500"}`}
                  >
                    {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col justify-between p-8 sm:p-10">
          <div>
            <p className="f-mono text-xs uppercase tracking-[0.2em] t-accent">
              {p.label}
            </p>
            <h3 className="f-display mt-4 text-4xl font-bold text-white">
              {p.name}
            </h3>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="f-mono text-xs uppercase tracking-widest text-neutral-500">
                  Platform
                </dt>
                <dd className="mt-1 text-neutral-200">{p.platform}</dd>
              </div>
              <div>
                <dt className="f-mono text-xs uppercase tracking-widest text-neutral-500">
                  Scope
                </dt>
                <dd className="mt-1 text-neutral-200">{p.scope}</dd>
              </div>
              <div className="col-span-2">
                <dt className="f-mono text-xs uppercase tracking-widest text-neutral-500">
                  My role
                </dt>
                <dd className="mt-1 text-neutral-200">{p.role}</dd>
              </div>
            </dl>
            <p className="mt-6 leading-relaxed text-neutral-400">
              {p.description}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-neutral-300">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span
                    className="bg-accent mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    aria-hidden="true"
                  />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </div>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring bg-accent group mt-10 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black"
          >
            Visit Live Website
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </motion.article>
    </Reveal>
  );
};

/* ============================================================
   Screenshot gallery (used inside Professional work)
   ============================================================ */

/* Skeleton shown until you add a real screenshot */
const MockScreen = ({ label }) => (
  <div className="absolute inset-0 flex gap-3 p-4" aria-hidden="true">
    <div className="hidden w-1/5 space-y-2 sm:block">
      <div className="h-3 w-2/3 rounded bg-white/10" />
      {[0, 1, 2, 3, 4].map((n) => (
        <div key={n} className="h-2.5 rounded bg-white/[0.06]" />
      ))}
    </div>
    <div className="flex-1 space-y-3">
      <div className="flex gap-2">
        {[0, 1, 2].map((n) => (
          <div key={n} className="h-12 flex-1 rounded-md bg-white/[0.06]" />
        ))}
      </div>
      <div className="h-24 rounded-md bg-gradient-to-br from-[color:var(--accent)]/20 to-transparent" />
      <div className="space-y-1.5">
        {[0, 1, 2].map((n) => (
          <div key={n} className="h-2.5 rounded bg-white/[0.06]" />
        ))}
      </div>
    </div>
    {label && (
      <span className="f-mono absolute bottom-2 right-3 text-[10px] text-neutral-600">
        {label}
      </span>
    )}
  </div>
);

/* Browser-style frame around every screenshot */
const ScreenFrame = ({ shot, contain = false, className = "" }) => (
  <div
    className={`overflow-hidden rounded-lg border b-line bg-[#101012] ${className}`}
  >
    <div
      className="flex items-center gap-1.5 border-b b-line px-3 py-2"
      aria-hidden="true"
    >
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="h-2 w-2 rounded-full bg-white/15" />
    </div>
    <div className="relative aspect-[16/10] bg-[#0c0c0e]">
      {shot.src ? (
        <ShotImage
          src={shot.src}
          alt={shot.alt}
          label={`not found: ${shot.src}`}
          className={`h-full w-full ${
            contain ? "object-contain" : "object-cover object-top"
          }`}
        />
      ) : (
        <MockScreen label="screenshot placeholder" />
      )}
    </div>
  </div>
);

/* Full-screen viewer: arrows / swipe / Esc, smooth slide between shots */
const Lightbox = ({ shots, index, title, onClose, onStep }) => {
  const reduce = useReducedMotion();
  const closeRef = useRef(null);
  const [dir, setDir] = useState(1);

  const step = useCallback(
    (d) => {
      setDir(d);
      onStep(d);
    },
    [onStep],
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, step]);

  const shot = shots[index];
  const slide = {
    enter: (d) => ({ opacity: 0, x: reduce ? 0 : d * 70, scale: 0.98 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d) => ({ opacity: 0, x: reduce ? 0 : d * -70, scale: 0.98 }),
  };

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
      className="pf-root fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(5,5,6,0.9)", backdropFilter: "blur(8px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div
  className="w-full"
  style={{ maxWidth: "min(64rem, calc((100vh - 13rem) * 1.6))" }}
  onClick={(e) => e.stopPropagation()}
>
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="f-mono truncate text-xs uppercase tracking-[0.18em] text-neutral-400">
            {title}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close screenshots"
            className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-white/50"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={dir} initial={false}>
            <motion.div
              key={index}
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              drag={shots.length > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) step(1);
                else if (info.offset.x > 80) step(-1);
              }}
            >
              <ScreenFrame
                shot={shot}
                contain
                className="shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-sm text-neutral-300">{shot.caption}</p>
          {shots.length > 1 && (
            <div className="flex items-center gap-3">
              <span className="f-mono text-xs text-neutral-500">
                {index + 1} / {shots.length}
              </span>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous screenshot"
                className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-white/50"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next screenshot"
                className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-white/50"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>,
    document.body,
  );
};

/* Large desktop preview + thumbnail switcher for one project */
const ProjectScreens = ({ shots = [], title }) => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  const list = shots.slice(0, 3);
  const stepIdx = useCallback(
    (d) => setActive((i) => (i + d + list.length) % list.length),
    [list.length],
  );

  if (!list.length) return null;
  const cur = list[active] ?? list[0];

  return (
    <div>
      <p className="f-mono mb-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
        Desktop screens · click to enlarge
      </p>

      {/* Large desktop preview */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge screenshot: ${cur.caption || cur.alt || title}`}
        className="focus-ring group relative block w-full text-left"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScreenFrame
              shot={cur}
              className="shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)] transition-colors group-hover:border-white/30"
            />
          </motion.div>
        </AnimatePresence>
        <span
          className="f-mono absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-[11px] text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        >
          <Maximize2 className="h-3 w-3" /> Enlarge
        </span>
      </button>

      {cur.caption && (
        <p className="mt-3 text-sm text-neutral-400">{cur.caption}</p>
      )}

      {/* Thumbnail switcher */}
      {list.length > 1 && (
        <div className="mt-4 flex gap-3">
          {list.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show screenshot ${i + 1}: ${s.caption || s.alt || ""}`}
              aria-pressed={i === active}
              className={`focus-ring relative aspect-[16/10] w-24 overflow-hidden rounded-md border bg-[#0c0c0e] transition-all sm:w-28 ${
                i === active
                  ? "border-[color:var(--accent)] opacity-100"
                  : "b-line opacity-50 hover:opacity-90"
              }`}
            >
              {s.src ? (
                <ShotImage
                  src={s.src}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <MockScreen />
              )}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {open && (
          <Lightbox
            shots={list}
            index={active}
            title={title}
            onClose={close}
            onStep={stepIdx}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
const ProfessionalWork = () => (
  <div className="mt-24">
    <SubHead
      label={PRO_WORK.title}
      note="Details kept general for confidentiality"
    />

    <div className="mb-4 grid gap-6 lg:grid-cols-2 lg:gap-12">
      <Reveal>
        <p className="text-lg leading-relaxed text-neutral-300">
          {PRO_WORK.intro}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="leading-relaxed text-neutral-500">{PRO_WORK.how}</p>
      </Reveal>
    </div>

    <ol className="divide-y divide-white/10 border-y b-line">
      {PRO_WORK.projects.map((p, i) => (
        <Reveal
          as="li"
          key={p.n}
          delay={i * 0.05}
          className="grid items-start gap-8 py-10 lg:grid-cols-2 lg:gap-12"
        >
          {/* Left: text */}
          <div className="min-w-0">
            <p className="f-mono flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
              <span className="f-display text-2xl font-extrabold tracking-normal text-white/25">
                {p.n}
              </span>
              {p.category}
            </p>
            <h4 className="f-display mt-3 text-2xl font-bold text-white">
              {p.title}
            </h4>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-400">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span
                    className="bg-accent mt-2 h-1 w-3 shrink-0"
                    aria-hidden="true"
                  />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>

          {/* Right: screenshots */}
          <div className="min-w-0 lg:sticky lg:top-24">
            <ProjectScreens shots={p.screens} title={p.title} />
          </div>
        </Reveal>
      ))}
    </ol>
  </div>
);


const Work = () => (
  <section id="work" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
    <SectionTitle eyebrow="Selected work">
      Real client work, described honestly.
    </SectionTitle>

    <SubHead label="Freelance" note="Shopify · client websites" />
    <div className="space-y-6">
      {FREELANCE_PROJECTS.map((p, i) => (
        <FreelanceCase key={p.name} p={p} reverse={i % 2 === 1} />
      ))}
    </div>

    <ProfessionalWork />
  </section>
);

/* ============================================================
   Process
   ============================================================ */
const Process = () => (
  <section id="process" className="border-t b-line bg-white/[0.015]">
    <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <SectionTitle eyebrow="How I collaborate">
        A simple process that works inside yours.
      </SectionTitle>

      <ol className="grid gap-px overflow-hidden rounded-xl border b-line bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal
            as="li"
            key={s.n}
            delay={i * 0.08}
            className="bg-[#0a0a0b] p-8"
          >
            <p className="f-display text-5xl font-extrabold t-accent">{s.n}</p>
            <h3 className="f-display mt-8 text-xl font-bold text-white">
              {s.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-400">
              {s.text}
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-neutral-400">
          I'm happy to work with your existing team, follow your workflow, and
          contribute to an established codebase: your branches, your reviews,
          your tools.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ============================================================
   Why work with me
   ============================================================ */
const Why = () => (
  <section id="why" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <Reveal>
          <Eyebrow>Why work with me</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="f-display text-4xl font-bold leading-[1.02] text-white sm:text-5xl md:text-6xl">
            Practical help, <span className="t-accent">no drama.</span>
          </h2>
        </Reveal>
      </div>
      <ul className="divide-y divide-white/10 border-y b-line">
        {WHY.map((w, i) => (
          <Reveal
            as="li"
            key={w}
            delay={i * 0.06}
            className="flex items-center gap-5 py-5"
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[color:var(--accent)] text-black">
              <Check className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-lg text-neutral-200">{w}</span>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

/* ============================================================
   Contact
   ============================================================ */
const Contact = () => {
  const reduce = useReducedMotion();
  const mailto = `mailto:${CONFIG.email}?subject=${encodeURIComponent(
    "Project enquiry",
  )}&body=${encodeURIComponent(
    "Hi Ayush,\n\nWe'd like to talk about a project.\n\nProject type:\nTimeline:\nStack:\n\nThanks,",
  )}`;

  return (
    <section id="contact" className="relative overflow-hidden border-t b-line">
      <div
        className="orb orb-a bg-accent left-1/2 top-[-30%] h-[460px] w-[460px] -translate-x-1/2 opacity-[0.09]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-5 py-28 text-center sm:px-8 sm:py-40">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="f-display text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-[0.97] text-white">
            Need an extra developer on your{" "}
            <span className="t-accent">next project?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
            If your team needs help with a frontend feature, backend API,
            Shopify store, or ongoing client work, let's discuss how I can
            contribute.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={mailto}
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="focus-ring bg-accent inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold text-black"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              {CONFIG.email}
            </motion.a>
            {CONFIG.phone && (
              <a
                href={`tel:${CONFIG.phone.replace(/[^+\d]/g, "")}`}
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white/50"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {CONFIG.phone}
              </a>
            )}
            <a
              href={CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white/50"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            {CONFIG.resumeUrl && (
              <a
                href={CONFIG.resumeUrl}
                download
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white/50"
              >
                <Download className="h-4 w-4" aria-hidden="true" /> Resume
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="mx-auto mt-10 max-w-md text-sm text-neutral-500">
            {CONFIG.availability}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

/* ============================================================
   Footer
   ============================================================ */
const Footer = () => (
  <footer className="border-t b-line">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="f-display text-lg font-bold text-white">{CONFIG.name}</p>
        <p className="text-sm text-neutral-500">Web Developer</p>
      </div>
      <p className="text-sm text-neutral-500">
        © {new Date().getFullYear()} {CONFIG.name}. Thanks for stopping by.
        Let's build something solid.
      </p>
      <div className="flex gap-3">
        {CONFIG.phone && (
          <a
            href={`tel:${CONFIG.phone.replace(/[^+\d]/g, "")}`}
            aria-label={`Call ${CONFIG.phone}`}
            className="focus-ring grid h-10 w-10 place-items-center rounded-full border b-line text-neutral-400 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" />
          </a>
        )}
        {CONFIG.github && (
          <a
            href={CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
            className="focus-ring grid h-10 w-10 place-items-center rounded-full border b-line text-neutral-400 transition-colors hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  </footer>
);

/* ============================================================
   App
   ============================================================ */
export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <div className="pf-root min-h-screen overflow-x-hidden antialiased">
      <style>{CSS}</style>
      <motion.div
        className="bg-accent fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <Navbar />
      <main>
        <Hero />
        <StackStrip />
        <About />
        <Services />
        <Work />
        <Process />
        <Why />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
