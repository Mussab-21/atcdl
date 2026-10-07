import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Cpu,
  Network,
  Layers,
  Check,
  Plus,
  Sparkles,
} from "lucide-react";
import { SystemPlayground } from "@/components/sections/SystemPlayground";
import { Reveal } from "@/components/motion/Reveal";
import { PROJECTS } from "@/content/data";
import { PRODUCTS_LAB_DATA } from "@/content/products-lab-data";
export const metadata = {
  title: "Technology that moves your business forward",
  description:
    "AI systems, custom software and connected operations. Explore the work, products and engineering approach of ATC Digital Labs.",
};
const services = [
  {
    n: "01",
    icon: Cpu,
    title: "Put intelligence to work.",
    text: "Make knowledge accessible. Turn documents into decisions. Give your people useful AI, built around their work.",
    tags: "Private AI · Document intelligence · AI agents",
    href: "/solutions/custom-ai",
    color: "mint",
  },
  {
    n: "02",
    icon: Layers,
    title: "Build what comes next.",
    text: "Software shaped around your operations, from customer-facing experiences to the platforms behind them.",
    tags: "Enterprise software · Web · Mobile",
    href: "/solutions/enterprise-software",
    color: "lilac",
  },
  {
    n: "03",
    icon: Network,
    title: "Connect the moving parts.",
    text: "Bring disconnected systems and teams into one flow. Less re-keying, clearer handoffs, better visibility.",
    tags: "Integrations · Cloud · Managed services",
    href: "/services#integration",
    color: "sand",
  },
];
export default function Home() {
  return (
    <div className="studio-home">
      <section className="hero-section container-custom">
        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow">
              <span className="signal-dot" /> INDEPENDENT THINKING. CONNECTED
              TECHNOLOGY.
            </div>
            <h1>
              Complex technology.
              <br />
              <em>Clear possibilities.</em>
            </h1>
            <p className="hero-description">
              We build AI systems, software, and connected operations that help
              your business move forward.
            </p>
            <div className="hero-actions">
              <Link
                href="/contact?intent=project"
                className="studio-button"
                data-track="hero_cta_clicked"
              >
                Discuss your project <ArrowUpRight size={19} />
              </Link>
              <Link href="/work" className="text-link">
                Explore our work <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-assurance">
              <span>
                <Check size={14} /> Built around your business
              </span>
              <span>
                <Check size={14} /> From strategy to delivery
              </span>
            </div>
          </Reveal>
        </div>
        <div className="hero-visual">
          <SystemPlayground />
        </div>
        <div className="hero-bottom">
          <span>AI & SOFTWARE ENGINEERING</span>
          <span>Discover what’s possible ↓</span>
          <span>ATC DIGITAL LABS / 01</span>
        </div>
      </section>
      <div className="expertise-ribbon">
        <div className="container-custom">
          <span>
            From the first question.
            <br />
            <strong>To the working system.</strong>
          </span>
          {[
            "AI & intelligence",
            "Custom software",
            "System integration",
            "Cloud & operations",
          ].map((x) => (
            <span key={x}>
              <Plus size={14} />
              {x}
            </span>
          ))}
        </div>
      </div>
      <section className="studio-section container-custom" id="expertise">
        <Reveal>
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / WHAT WE DO</span>
              <h2>
                Built for the way
                <br />
                your business works.
              </h2>
            </div>
            <p>
              You bring the challenge. We bring the engineering to turn it into
              something useful.
            </p>
          </div>
        </Reveal>
        <div className="service-grid">
          {services.map((s) => (
            <Reveal key={s.n}>
              <Link href={s.href} className={`service-tile ${s.color}`}>
                <div className="tile-top">
                  <s.icon size={28} />
                  <span>{s.n}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="tile-footer">
                  <span>{s.tags}</span>
                  <ArrowUpRight size={23} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Link href="/services" className="text-link section-follow">
          Explore all seven services <ArrowRight size={17} />
        </Link>
      </section>
      <section className="work-section">
        <div className="container-custom studio-section">
          <Reveal>
            <div className="section-heading">
              <div>
                <span className="eyebrow">02 / SELECTED WORK</span>
                <h2>
                  Ideas become valuable
                  <br />
                  when they become real.
                </h2>
              </div>
              <Link className="text-link" href="/work">
                View all work <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
          <div className="work-grid">
            {PROJECTS.filter((p) => p.featured)
              .slice(0, 3)
              .map((p, i) => (
                <Reveal key={p.slug}>
                  <Link className="work-tile" href={`/work/${p.slug}`}>
                    <div
                      className={`work-art work-art-${i}`}
                      aria-hidden="true"
                    >
                      <div className="work-art-label">
                        ATC / ENGINEERING STUDY 0{i + 1}
                      </div>
                      {i === 0 ? (
                        <div className="talent-art">
                          <div className="art-avatar" />
                          <div>
                            <span />
                            <span />
                            <span />
                          </div>
                          <div className="art-match">
                            <Check size={18} />
                            Skill mapping
                          </div>
                        </div>
                      ) : i === 1 ? (
                        <div className="knowledge-art">
                          <div>Where can I find our team guidelines?</div>
                          <div>
                            <Sparkles size={18} />
                            Search your company knowledge.
                            <small>Source-linked answers</small>
                          </div>
                        </div>
                      ) : (
                        <div className="operations-art">
                          <div />
                          <div />
                          <div />
                          <div />
                          <span>
                            <Network size={30} />
                            Connected operations
                          </span>
                        </div>
                      )}
                      <span className="art-footnote">
                        Illustrative interface
                      </span>
                      <div className="work-arrow">
                        <ArrowUpRight size={22} />
                      </div>
                    </div>
                    <div className="work-meta">
                      <span>{p.category}</span>
                      <span>{p.status}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.problem}</p>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>
      <section className="studio-section container-custom">
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 / A CLEAR WAY FORWARD</span>
            <h2>
              Close collaboration.
              <br />
              Visible progress.
            </h2>
          </div>
          <p>
            From the first conversation to the handover, every stage has a
            purpose and a tangible next step.
          </p>
        </div>
        <div className="process-list">
          {[
            [
              "Discover",
              "Start with the right problem.",
              "We map your workflows, constraints, and goals to agree what success should look like.",
            ],
            [
              "Design",
              "Make the approach tangible.",
              "We shape the architecture and experience, so your team can evaluate the direction before the build.",
            ],
            [
              "Build",
              "See the work take shape.",
              "Working iterations and regular reviews keep decisions grounded in software you can try.",
            ],
            [
              "Operate",
              "Plan for life after launch.",
              "Deployment, documentation, and an agreed support plan help your team take the next step.",
            ],
          ].map(([title, sub, body], i) => (
            <details key={title} className="process-row" open={i === 0}>
              <summary>
                <span className="process-index">0{i + 1}</span>
                <h3>{title}</h3>
                <span>{sub}</span>
                <Plus size={22} />
              </summary>
              <p>{body}</p>
            </details>
          ))}
        </div>
        <Link href="/process" className="text-link section-follow">
          Our delivery approach <ArrowRight size={17} />
        </Link>
      </section>
      <section className="product-section">
        <div className="container-custom studio-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">04 / INSIDE THE LAB</span>
              <h2>
                Built from curiosity.
                <br />
                Focused on real problems.
              </h2>
            </div>
            <div>
              <p>
                Explore our prototypes and product concepts. See what’s being
                developed, and start a conversation about early access.
              </p>
              <Link href="/products" className="text-link section-follow">
                Explore the product lab <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <div className="lab-grid">
            {PRODUCTS_LAB_DATA.products.slice(0, 4).map((p, i) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="lab-item"
              >
                <span className="lab-number">0{i + 1}</span>
                <div>
                  <span className="lab-status">{p.status}</span>
                  <h3>{p.name}</h3>
                  <p>{p.tagline}</p>
                </div>
                <ArrowUpRight size={22} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="studio-section container-custom">
        <div className="closing-section">
          <div>
            <span className="eyebrow">YOUR NEXT CHAPTER</span>
            <h2>
              Let’s make
              <br />
              what’s next <em>work.</em>
            </h2>
            <p>
              A challenge, an idea, or a system that needs to work better.
              <br />
              Tell us where you want to go.
            </p>
          </div>
          <div>
            <Link href="/contact?intent=project" className="studio-button">
              Let’s talk about it <ArrowUpRight size={20} />
            </Link>
            <Link href="/estimate" className="text-link">
              Explore a project estimate <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
