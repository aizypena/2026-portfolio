import Image from "next/image";
import mnmkStudioImage from "@/app/assets/mnmk-ss.png";
import smiImage from "@/app/assets/smi-ss.png";
import henschaImage from "@/app/assets/henscha-ss.png";
import gggImage from "@/app/assets/ggg-ss.png";
import cleanupImage from "@/app/assets/cleanup-ss.png";
import { MacWindow } from "@/components/MacWindow";

export default function Home() {
  const projectItems = [
    {
      title: "MNMK STUDIO",
      description:
        "A unified brand experience that brings together graphic design, photography, videography, UI/UX, motion design, and digital marketing — all under one cohesive system. Every touchpoint tells the same story.",
      stack: ["PHP", "Laravel", "Tailwind CSS", "MySQL", "Responsive UI"],
      accent: "from-emerald-500/20 to-emerald-400/10",
      align: "left",
      image: mnmkStudioImage,
      link: "https://www.mnmkstudio.com/",
    },
    {
      title: "SMI Institute Inc.",
      description:
        "A TESDA-accredited training platform for SMI Institute Inc., empowering Filipino talents through quality technical education and skills development programs in hospitality and culinary arts.",
      stack: ["React", "Laravel", "MySQL", "Tailwind CSS", "Business Analytics", "Gemini AI Integration"],
      accent: "from-blue-500/20 to-blue-400/10",
      align: "right",
      image: smiImage,
      link: "https://www.smitracked.cloud/",
    },
    {
      title: "Henscha Philippines, Inc.",
      description:
        "A professional construction and land development platform for Henscha Philippines, Inc., a major general contractor with a strong legacy in major projects across the Philippines — delivering reliable, high-quality engineering solutions with modern equipment and skilled expertise.",
      stack: ["Laravel", "Tailwind CSS", "MySQL", "Responsive UI"],
      accent: "from-amber-500/20 to-amber-400/10",
      align: "right",
      image: henschaImage,
      link: "https://www.henschaphils.com/",
    },
    {
      title: "Good Game Guild (GGG)",
      description:
        "A trustless tournament prize-escrow protocol on Stellar Soroban — create tournaments, players join with XLM, and a smart contract auto-splits the pool 60/30/10 to 1st, 2nd, and 3rd. No custodian. No middleman. On-chain in seconds.",
      stack: ["Next.js", "PostgreSQL", "Redis", "Railway", "LLM", "Blockchain", "Web3"],
      accent: "from-purple-500/20 to-purple-400/10",
      align: "right",
      image: gggImage,
      link: "https://www.ggg.quest/",
    },
    {
      title: "Clean Up Australia",
      description:
        "A community-driven environmental platform supporting Clean Up Australia's mission to inspire and mobilise communities to care for and protect our environment, eliminate litter, and end waste — building a cleaner, more sustainable future.",
      stack: ["CodeIgniter", "Bootstrap", "PHP", "Curator.io"],
      accent: "from-green-500/20 to-green-400/10",
      align: "left",
      image: cleanupImage,
      link: "https://www.cleanup.org.au/",
    },
  ];

  const experienceItems = [
    {
      company: "Feelancing",
      role: "Full-stack Software Engineer",
      location: "Remote",
      dates: "January 2022 - Present",
    },
    {
      company: "The Blocklabs Inc.",
      role: "Full-stack Engineer Intern",
      location: "Remote",
      dates: "April 2026 - July 2026",
    },
    {
      company: "Teratomo Corporations",
      role: "Software Engineer Intern",
      location: "Fairview, Quezon City, Philippines",
      dates: "December 2025 - April 2026",
    },
  ];

  const contactLinks = [
    { label: "GitHub", href: "https://github.com/aizypena" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/julyza-pe%C3%B1a/",
    },
  ];

  return (
    <main
      className="w-full"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-84px)] w-full items-center px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-5xl">
          <p className="mb-6 text-sm tracking-[0.25em] text-emerald-300/90">
            Hi, my name is
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Julyza Peña.
          </h1>
          <h2 className="mt-2 max-w-4xl text-4xl font-semibold leading-tight text-emerald-100/55 sm:text-6xl lg:text-7xl">
            I build thoughtful full-stack web and mobile experiences.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-emerald-100/65 sm:text-xl">
            I am a software engineer focused on building accessible, reliable,
            and human-centered products across the entire stack — from database
            to interface.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-md border border-emerald-400/50 px-6 py-3 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/10"
            >
              Check out my work
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center rounded-md border border-emerald-100/20 px-6 py-3 text-sm font-medium text-emerald-100/75 transition hover:border-emerald-200/40 hover:text-emerald-100"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="mx-auto w-full max-w-6xl px-6 pb-24 pt-8 sm:px-10 lg:px-16 lg:pb-32"
      >
        <div className="grid items-start gap-12 border-t border-white/10 pt-16 lg:grid-cols-[1.3fr_0.9fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 text-emerald-300/90">
              <span className="text-sm font-semibold tracking-[0.25em]">
                01.
              </span>
              <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                About Me
              </h3>
            </div>

            <div className="mt-10 space-y-5 text-sm leading-8 text-emerald-100/60 sm:text-base">
              <p>
                Hello! I'm Julyza, a full-stack software engineer who enjoys
                building clean, useful, and polished digital products
                end-to-end. I focus on crafting thoughtful experiences across
                web and mobile, from the user interface down to the server and
                database.
              </p>

              <p>
                I like working across the entire product stack — designing
                interfaces, building responsive frontends, developing robust
                backend services, designing APIs, and integrating with databases
                and third-party services to create seamless, scalable
                applications.
              </p>

              <p>
                I'm especially drawn to projects that combine solid engineering
                with a strong visual feel, because the best products are both
                reliable under the hood and enjoyable to use.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:ml-auto lg:max-w-md">
            <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl border border-emerald-400/70" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/30">
              <Image
                src="/my-pic.jpeg"
                alt="Portrait of Julyza Peña"
                width={800}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32"
      >
        <div className="border-t border-white/10 pt-16">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300/90">
              02.
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Some Things I&apos;ve Built
            </h3>
          </div>

          <div className="mt-14 space-y-14">
            {projectItems.map((project, index) => {
              const isReversed = project.align === "right" && index % 2 === 1;

              return (
                <article
                  key={project.title}
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                    isReversed ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div
                    className={`${
                      isReversed ? "lg:[direction:ltr] lg:text-left" : ""
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                      Featured Project
                    </p>
                    <h4 className="mt-3 text-3xl font-semibold text-white">
                      {project.title}
                    </h4>

                    <div className="mt-6 rounded-xl border border-white/8 bg-white/4 p-6 text-sm leading-7 text-emerald-100/65 shadow-lg shadow-black/20 sm:p-7">
                      {project.description}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs tracking-[0.18em] text-emerald-100/45">
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className={`${isReversed ? "lg:[direction:ltr]" : ""}`}>
                    <div className="relative mx-auto w-full max-w-xl">
                      <div
                        className={`absolute inset-0 rounded-2xl bg-linear-to-br ${project.accent} blur-2xl`}
                      />
                      {project.image && project.link ? (
                        <MacWindow accent={project.accent}>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block overflow-hidden"
                          >
                            <Image
                              src={project.image}
                              alt={`${project.title} preview`}
                              className="h-full w-full object-cover transition duration-300 hover:scale-105"
                              placeholder="blur"
                            />
                          </a>
                        </MacWindow>
                      ) : (
                        <MacWindow accent={project.accent}>
                          <div className="relative aspect-16/10 overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),rgba(255,255,255,0.04)_35%,rgba(0,0,0,0.12)_70%,rgba(0,0,0,0.2)_100%)] p-6">
                            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,0.18),transparent_35%,rgba(16,185,129,0.15)_72%,transparent_100%)]" />
                            <div className="relative flex h-full items-center justify-center">
                              <div className="rounded-2xl border border-white/10 bg-black/20 px-8 py-6 text-center text-white/80 shadow-xl backdrop-blur-sm">
                                <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">
                                  Project Preview
                                </p>
                                <p className="mt-3 text-lg font-semibold">
                                  {project.title}
                                </p>
                              </div>
                            </div>
                          </div>
                        </MacWindow>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32"
      >
        <div className="border-t border-white/10 pt-16">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300/90">
              03.
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Where I&apos;ve Worked
            </h3>
          </div>

          <div className="mt-12 space-y-5">
            {experienceItems.map((item) => (
              <article
                key={`${item.company}-${item.dates}`}
                className="group rounded-2xl border border-white/8 bg-white/4 px-6 py-6 transition duration-200 hover:border-emerald-400/25 hover:bg-white/6 sm:px-8"
              >
                <div className="grid gap-6 md:grid-cols-[1.4fr_0.9fr_auto] md:items-center">
                  <div>
                    <h4 className="text-xl font-semibold text-white sm:text-2xl">
                      {item.company}
                    </h4>
                    <p className="mt-2 text-sm text-emerald-300 sm:text-base">
                      {item.role}
                    </p>
                  </div>

                  <div className="text-sm leading-7 text-emerald-100/60 md:text-right">
                    <p>{item.location}</p>
                    <p>{item.dates}</p>
                  </div>

                  <div className="flex items-center justify-start text-2xl text-blue-400 transition group-hover:translate-x-1 md:justify-end">
                    →
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mx-auto w-full max-w-5xl px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32"
      >
        <div className="border-t border-white/10 pt-16">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
              04.
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Get In Touch
            </h3>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-emerald-100/60 sm:text-base">
              I&apos;m always open to connecting. Whether you want to talk about web
              or mobile development, full-stack projects, potential
              collaborations, or just say hello, feel free to reach out.
            </p>

            <a
              href="mailto:jbpena101@gmail.com"
              className="mt-10 inline-flex items-center rounded-md border border-emerald-400/60 px-6 py-3 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/10"
            >
              Say Hello
            </a>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md border border-white/8 bg-white/4 px-4 py-2 text-sm text-emerald-100/70 transition hover:border-emerald-400/25 hover:text-emerald-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
