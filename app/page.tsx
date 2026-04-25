import Image from "next/image";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 backdrop-blur-sm bg-slate-950/80">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-slate-100">Winston Underwood</span>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#about" className="hover:text-slate-100 transition-colors">About</a>
            <a href="#projects" className="hover:text-slate-100 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-slate-100 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>

        {/* Hero */}
        <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">

          {/* Background glow blobs */}
          <div className="absolute top-1/3 -left-20 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6 py-24">
            <p
              className="animate-fade-up text-indigo-400 text-sm font-medium tracking-widest uppercase mb-6"
              style={{ animationDelay: '0ms' }}
            >
              Data Scientist & Analytics Leader
            </p>
            <h1
              className="animate-fade-up text-6xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white to-indigo-400 bg-clip-text text-transparent"
              style={{ animationDelay: '100ms' }}
            >
              Hi, I&apos;m Winston<br />Underwood.
            </h1>
            <p
              className="animate-fade-up text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
              style={{ animationDelay: '200ms' }}
            >
              I build analytical systems and data tools that turn complex information into clear business decisions.
              Currently leading marketing data science at Allstate, based in Columbus, Ohio.
            </p>
            <div
              className="animate-fade-up flex gap-4 flex-wrap"
              style={{ animationDelay: '300ms' }}
            >
              <a
                href="https://linkedin.com/in/winston722"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href="https://github.com/Winston722"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 rounded-lg text-sm font-medium transition-colors"
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-sm font-medium tracking-widest uppercase text-indigo-400 mb-12">About</h2>
            <div className="grid md:grid-cols-2 gap-16 items-start">

              <Image
                src="/self.jpg"
                alt="Winston Underwood"
                width={320}
                height={320}
                className="w-full max-w-xs rounded-2xl object-cover"
              />

              <div className="space-y-5 text-slate-400 leading-relaxed">
                <p>
                  I&apos;m a dad, a data science leader, a marketer, and an amateur general contractor. 
                </p>
                <p>
                  At Allstate, I lead a team of marketing data scientists focused on driving measurable performance
                  improvements by optimizing our digital media programs. Before that, I worked at Root Inc and 
                  Nationwide Insurance, doing everything from media buying to machine learning operations.
                </p>
                <p>
                  Outside of work, I enjoy working with my hands on residential construction projects, particularly 
                  electrical and drywall. When I need a reset, I like backpacking in the last remaining pockets of 
                  the country that still don&apos;t have cell service. But above all, most of my time is spent raising
                  two boys as best as I can. 
                </p>

                <div className="pt-2 space-y-6">
                  <div>
                    <h3 className="text-slate-200 font-medium mb-3">Education</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>MS, Applied Statistics</span>
                        <span className="text-slate-500">Colorado State University</span>
                      </li>
                      <li className="flex justify-between">
                        <span>BS, Business Administration</span>
                        <span className="text-slate-500">The Ohio State University</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-slate-200 font-medium mb-3">Certifications & Extracurriculars</h3>
                    <ul className="space-y-2 text-sm">
                      <li>AWS Cloud Practitioner</li>
                      <li>Neural Networks & Deep Learning — Coursera</li>
                      <li>Data Science for All Mentor — Correlation One</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-sm font-medium tracking-widest uppercase text-indigo-400 mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">

              <a
                href="https://zonk.winstonunderwood.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 bg-slate-900/50 hover:bg-slate-900 hover:shadow-[0_0_24px_rgba(99,102,241,0.15)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 text-lg font-bold">
                    Z
                  </div>
                  <span className="text-slate-600 group-hover:text-slate-400 transition-colors">
                    <ExternalLinkIcon />
                  </span>
                </div>
                <h3 className="text-slate-100 font-semibold mb-2">Zonk</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  An app that syncs with your fantasy draft in Sleeper to track your own custom player rankings
                </p>
                <div className="mt-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-400">Web App</span>
                </div>
              </a>

              <a
                href="https://cfb.winstonunderwood.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 bg-slate-900/50 hover:bg-slate-900 hover:shadow-[0_0_24px_rgba(99,102,241,0.15)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 text-sm font-bold">
                    WU
                  </div>
                  <span className="text-slate-600 group-hover:text-slate-400 transition-colors">
                    <ExternalLinkIcon />
                  </span>
                </div>
                <h3 className="text-slate-100 font-semibold mb-2">Worster-Underwood CFB</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  College football rankings combining a margin-based power rating (Underwood) and a win/loss résumé ranking (Worster) into a unified ensemble
                </p>
                <div className="mt-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-400">Web App</span>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-sm font-medium tracking-widest uppercase text-indigo-400 mb-12">Contact</h2>
            <div className="max-w-lg">
              <p className="text-3xl font-bold text-slate-100 mb-4">Let&apos;s connect.</p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Whether you have a question, a project in mind, or just want to talk data — my inbox is open.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:winston722@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-slate-100 transition-colors"
                >
                  <MailIcon />
                  winston722@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/winston722"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-slate-100 transition-colors"
                >
                  <LinkedInIcon />
                  linkedin.com/in/winston722
                </a>
                <a
                  href="https://github.com/Winston722"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-slate-100 transition-colors"
                >
                  <GitHubIcon />
                  github.com/Winston722
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-600">
          © 2026 Winston Underwood
        </div>
      </footer>

    </div>
  );
}
