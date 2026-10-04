import { useEffect } from "react";
import "./App.css";

const GITHUB = "https://github.com/RrHemanth";
const LINKEDIN = "https://www.linkedin.com/in/hemanthreddyreddy/";

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

const simple = (name: string) =>
  `https://cdn.simpleicons.org/${name}`;

function Icon({
  children,
  size = 20,
}: {
  children: React.ReactNode;
  size?: number;
}) {
  return (
    <span
      className="inline-icon"
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 .7A11.3 11.3 0 0 0 8.4 22.8c.6.1.8-.2.8-.6v-2.1c-3.4.7-4.1-1.4-4.1-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.7-.3-5.6-1.4-5.6-6a4.7 4.7 0 0 1 1.3-3.3 4.4 4.4 0 0 1 .1-3.3s1-.3 3.4 1.3a11.8 11.8 0 0 1 6.2 0c2.4-1.6 3.4-1.3 3.4-1.3a4.4 4.4 0 0 1 .1 3.3 4.7 4.7 0 0 1 1.3 3.3c0 4.7-2.9 5.7-5.6 6 .4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A11.3 11.3 0 0 0 12 .7Z"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M5.3 7.8H1.8V22h3.5V7.8ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22.2 13.8c0-4.3-2.3-6.3-5.3-6.3-2.5 0-3.6 1.4-4.2 2.3v-2H9.2V22h3.5v-7c0-1.8.4-3.6 2.7-3.6 2.3 0 2.3 2.1 2.3 3.7V22h3.5l1-8.2Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path
        d="M3 5.5h18v13H3zM3.8 6.4 12 13l8.2-6.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function Arrow() {
  return <span className="arrow">→</span>;
}

/* -------------------------------------------------------------------------- */
/* HERO DATA WAVE                                                              */
/* -------------------------------------------------------------------------- */

function DataWave() {
  return (
    <div className="data-scene" aria-hidden="true">
      <svg viewBox="0 0 900 520">
        <defs>
          <linearGradient id="wave" x1="0" x2="1">
            <stop stopColor="#24b8ff" stopOpacity=".08" />
            <stop offset=".5" stopColor="#31e8c0" stopOpacity=".8" />
            <stop offset="1" stopColor="#31e8c0" stopOpacity=".05" />
          </linearGradient>
        </defs>

        {Array.from({ length: 15 }).map((_, i) => (
          <path
            key={i}
            d={`M 0 ${260 + i * 7}
               C 170 ${100 + i * 9},
                 290 ${410 - i * 5},
                 470 ${230 + i * 3}
               S 720 ${80 + i * 10},
                 900 ${230 + i * 5}`}
            fill="none"
            stroke="url(#wave)"
            strokeWidth="1"
            opacity={0.22 + i * 0.025}
          />
        ))}

        {Array.from({ length: 85 }).map((_, i) => {
          const x = (i * 97) % 880;
          const y =
            260 +
            Math.sin(i * 0.62) * 75 +
            ((i * 37) % 90) -
            45;

          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 8 === 0 ? 2.8 : 1.3}
              fill={i % 4 === 0 ? "#55f1cd" : "#38baf7"}
              opacity={i % 8 === 0 ? ".95" : ".45"}
            />
          );
        })}
      </svg>

      <div className="signal s1">
        <i /> DATA
      </div>

      <div className="signal s2">
        <i /> MODELS
      </div>

      <div className="signal s3">
        <i /> SYSTEMS
      </div>
      
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* PROJECT VISUALS                                                             */
/* -------------------------------------------------------------------------- */

function RagVisual() {
  return (
    <div className="rag-visual">
      <div className="rag-main">
        {["Query", "Rewrite", "Retrieve", "Rerank", "LLM"].map(
          (item, index) => (
            <div className="rag-piece" key={item}>
              <div>{item}</div>
              {index < 4 && <span>→</span>}
            </div>
          )
        )}
      </div>

      <div className="rag-loop">
        <span>Evaluate</span>
        <b>→</b>
        <span>Experience Memory</span>
        <b>→</b>
        <span>Improve Retrieval</span>
        <b>↗</b>
      </div>
    </div>
  );
}

const clusterData = [
  [74, 68, "a"], [89, 78, "a"], [105, 61, "a"], [115, 84, "a"],
  [94, 100, "a"], [127, 69, "a"], [80, 91, "a"],

  [213, 122, "b"], [229, 110, "b"], [246, 129, "b"],
  [260, 105, "b"], [237, 144, "b"], [276, 127, "b"],

  [338, 62, "c"], [355, 76, "c"], [370, 54, "c"],
  [386, 83, "c"], [361, 98, "c"], [402, 67, "c"],

  [420, 154, "d"], [442, 138, "d"], [458, 165, "d"],
  [475, 145, "d"], [447, 181, "d"], [493, 160, "d"],
];

function ClusterVisual() {
  return (
    <div className="cluster-visual">
      <svg viewBox="0 0 560 230">
        <line x1="45" y1="190" x2="525" y2="190" />
        <line x1="45" y1="30" x2="45" y2="190" />

        {[1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="45"
            y1={30 + i * 32}
            x2="525"
            y2={30 + i * 32}
            className="grid-line"
          />
        ))}

        {clusterData.map(([x, y, c], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="6"
            className={`cluster-${c}`}
          />
        ))}
      </svg>

      <div className="cluster-legend">
        <span><i className="ca" /> Segment 1</span>
        <span><i className="cb" /> Segment 2</span>
        <span><i className="cc" /> Segment 3</span>
        <span><i className="cd" /> Segment 4</span>
      </div>
    </div>
  );
}

function TumorVisual() {
  return (
    <div className="tumor-visual">
      <div className="tumor-side benign-side">
        <div className="cell-field">
          {Array.from({ length: 14 }).map((_, i) => <i key={i} />)}
        </div>
        <strong>BENIGN</strong>
        <span>Class 0</span>
      </div>

      <div className="classifier">
        <span>ML</span>
        <small>CLASSIFIER</small>
      </div>

      <div className="tumor-side malignant-side">
        <div className="cell-field">
          {Array.from({ length: 14 }).map((_, i) => <i key={i} />)}
        </div>
        <strong>MALIGNANT</strong>
        <span>Class 1</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DATA                                                                         */
/* -------------------------------------------------------------------------- */

const experiences = [
  {
    date: "Jul 2024 — Aug 2026",
    place: "Bengaluru, India",
    role: "AI Software Development Engineer",
    company: "TELUS Digital",
    logo: "/assets/telus-logo.png",
    logoClass: "telus",
    bullets: [
      "Developed a synthetic data generation pipeline using CycleGAN and Stable Diffusion for image-to-image translation, generating photorealistic weather variants that supported domain adaptation and improved the robustness of downstream autonomous vehicle perception models.",
      "Engineered the migration of a legacy computer vision pipeline from AWS EC2 to an event-driven AWS Lambda architecture, eliminating idle compute time and reducing infrastructure overhead by $60,000 annually.",
      "Built a fault-tolerant serverless framework using multiprocessing and thread pools to accelerate CPU-heavy ML workloads, integrating Amazon CloudWatch and isolation boundaries to prevent pipeline failures.",
    ],
    tags: [
      "Python",
      "Computer Vision",
      "CycleGAN",
      "Stable Diffusion",
      "AWS",
      "Lambda",
      "EC2",
      "CloudWatch",
    ],
  },
  {
    date: "Jul 2023 — Jul 2024",
    place: "Bengaluru, India",
    role: "Solutions Engineer Intern",
    company: "TELUS Digital",
    logo: "/assets/telus-logo.png",
    logoClass: "telus",
    bullets: [
      "Fine-tuned a MarianMT Transformer via LoRA on a 100K-sentence English-Nordic parallel corpus, optimizing domain-specific machine translation for low-resource Nordic languages.",
      "Evaluated translation quality using the COMET metric, delivering a 15% accuracy gain that measurably reduced downstream manual post-editing efforts.",
      "Developed a data-pruning pipeline using DINOv2 embeddings and cosine similarity to strip out redundant images, cutting dataset volume by 70% while preserving 90% of the original semantic coverage.",
    ],
    tags: ["Transformers", "LoRA", "MarianMT", "DINOv2", "COMET"],
  },
  {
    date: "May 2022 — Jul 2022",
    place: "Secunderabad, India",
    role: "Project Intern",
    company: "Military College of Electronics and Mechanical Engineering",
    logo: "/assets/mceme-logo.png",
    logoClass: "mceme",
    bullets: [
      "Fine-tuned a pretrained YOLOv5 model to classify drones from birds using an annotated 1,500-image aerial dataset and image augmentation techniques, achieving 87.2% mAP@0.5.",
    ],
    tags: ["YOLOv5", "Computer Vision", "Deep Learning"],
  },
];

const projects = [
  {
  title: "Video Anonymization Pipeline",
  category: "Computer Vision · Deep Learning",
  description:
    "Automatically detects and anonymizes faces and license plates in video while maintaining temporal consistency across frames.",
  tags: ["YOLOv11", "BoT-SORT", "CUDA", "Apple Silicon / MPS"],
  github: "https://github.com/RrHemanth/video-anonymization-system",
  visual: (
    <img
      src="/assets/video-anonymization.png"
      alt="Video anonymization showing detections before processing and blurred faces and license plates after anonymization"
      className="project-image"
    />
  ),
},
  {
    title: "Self-Improving RAG Agent",
    category: "NLP · Generative AI",
    description:
      "An AI question-answering system that learns from retrieval mistakes and adapts how it searches for information to produce better answers over time.",
    tags: ["RAG", "BM25", "FAISS", "LangChain", "LLMs"],
    github: "https://github.com/RrHemanth/self-improving-rag",
    visual: <RagVisual />,
  },
  {
    title: "Credit Card Customer Segmentation",
    category: "Data Mining · Unsupervised Learning",
    description:
  "Used unsupervised clustering algorithms to uncover groups of customers with similar spending behavior, including PCA for dimensionality reduction, turning a large customer dataset into clearer and more meaningful segments.",
    tags: [
  "Unsupervised Learning",
  "Clustering",
  "PCA",
  "Data Mining",
],
    visual: <ClusterVisual />,
  },
  {
    title: "Tumor Classification",
    category: "Machine Learning · Statistical Modeling",
    description:
  "Built tumor classification models using classical machine learning algorithms including LDA, Logistic Regression, and Perceptron to distinguish between benign and malignant tumors.",
    tags: ["Machine Learning", "Statistical Modeling", "Binary Classification"],
    visual: <TumorVisual />,
  },
];

const skillGroups = [
  {
    title: "Machine Learning & AI",
    skills: [
      ["PyTorch", devicon("pytorch/pytorch-original.svg")],
      ["TensorFlow", devicon("tensorflow/tensorflow-original.svg")],
      ["Scikit-learn", devicon("scikitlearn/scikitlearn-original.svg")],
      ["Hugging Face", "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"],
      ["Transformers", "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"],
      ["LangChain", simple("langchain")],
    ],
  },
  {
    title: "ML Systems & Cloud",
    skills: [
      ["CUDA", simple("nvidia")],
      ["MLX", simple("apple")],
      ["MLflow", simple("mlflow")],
      ["AWS", "/assets/aws-logo.png"],
      ["Azure", devicon("azure/azure-original.svg")],
      ["Apache Kafka", devicon("apachekafka/apachekafka-original.svg")],
      ["Docker", devicon("docker/docker-original.svg")],
      ["FastAPI", devicon("fastapi/fastapi-original.svg")],
    ],
  },
  {
    title: "Programming & Development",
    skills: [
      ["Python", devicon("python/python-original.svg")],
      ["SQL", devicon("azuresqldatabase/azuresqldatabase-original.svg")],
      ["JavaScript", devicon("javascript/javascript-original.svg")],
      ["MATLAB", devicon("matlab/matlab-original.svg")],
      ["VS Code", devicon("vscode/vscode-original.svg")],
      ["Git", devicon("git/git-original.svg")],
      ["Jupyter", devicon("jupyter/jupyter-original.svg")],
    ],
  },
];

/* -------------------------------------------------------------------------- */

export default function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      <header>
        <nav className="container nav">
          <a href="#home" className="brand">
            Hemanth <span>Reddy</span>
          </a>

          <div className="navlinks">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="resume" href="/resume.pdf" target="_blank">
            Resume ↓
          </a>
        </nav>
      </header>

      {/* HERO */}

      <section id="home" className="hero grid-bg">
        <DataWave />

        <div className="container hero-inner">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">MACHINE LEARNING ENGINEER</p>

            <h1>
              Hello, I’m
              <br />
              <span>Hemanth Reddy.</span>
            </h1>

            <h2>
              I build machine learning systems across computer vision,
              NLP, and generative AI.
            </h2>

            <p className="lead">
              M.S. Applied Machine Learning student at the University of
              Maryland with professional experience building ML pipelines,
              models, and production infrastructure.
            </p>

            <div className="actions">
              <a className="primary" href="#contact">
                Contact Me <Arrow />
              </a>

              <a className="secondary" href="#projects">
                View My Work <Arrow />
              </a>
            </div>

            <div className="socials">
              <a href={LINKEDIN} target="_blank" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>

              <a href={GITHUB} target="_blank" aria-label="GitHub">
                <GithubIcon />
              </a>

              <a
                href="mailto:reddyreddyhemanth2002@gmail.com"
                aria-label="Email"
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="section grid-bg">
        <div className="container about">
          <div className="about-copy" data-reveal>
            <p className="eyebrow">ABOUT ME</p>

            <h2>Building ML systems end-to-end.</h2>

            <p>
              I’m a machine learning engineer currently pursuing an M.S.
              in Applied Machine Learning at the University of Maryland.
            </p>

            <p>
              My work has primarily been across computer vision, NLP, and
              generative AI. I’ve worked on projects involving synthetic
              data generation, image understanding, machine translation,
              retrieval systems, and ML infrastructure.
            </p>

            <p>
              I enjoy working across different parts of an ML system,
              from preparing data and training models to building the
              pipelines and infrastructure around them.
            </p>

            <a className="outline-btn" href="/resume.pdf" target="_blank">
              Download Resume ↓
            </a>
          </div>

          <div className="about-panels">
            <article className="education panel" data-reveal>
              <h3>Education</h3>

              <div className="school">
                <div className="school-logo">
                  <img src="/assets/umd-logo.png" alt="University of Maryland" />
                </div>

                <div>
                  <strong>M.S. Applied Machine Learning</strong>
                  <span>University of Maryland</span>
                  <small>Aug 2026 — May 2028 (Expected)</small>
                </div>
              </div>

              <div className="school">
                <div className="school-logo">
                  <img src="/assets/bits-logo.png" alt="BITS Pilani" />
                </div>

                <div>
                  <strong>B.E. Mechanical Engineering</strong>
                  <span>BITS Pilani, Hyderabad Campus</span>
                  <small>Aug 2020 — May 2024 · CGPA 8.31/10</small>
                </div>
              </div>
            </article>

            <article className="panel" data-reveal>
              <span className="panel-icon">◈</span>
              <h3>Previous Work</h3>

              <ul className="focus">
                <li>Computer Vision</li>
                <li>NLP & LLMs</li>
                <li>Generative AI</li>
                <li>ML Systems</li>
              </ul>
            </article>

            <article className="panel" data-reveal>
              <span className="panel-icon">◎</span>
              <h3>Current Focus</h3>

              <ul className="focus">
                <li>Vision-Language Models</li>
                <li>Cross-Modal Representation Learning</li>
                <li>Multimodal ML</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}

      <section id="experience" className="section grid-bg">
        <div className="container">
          <div className="section-head" data-reveal>
            <p className="eyebrow">PROFESSIONAL EXPERIENCE</p>
            <h2>Where I’ve built.</h2>
          </div>

          <div className="timeline">
            {experiences.map((exp, i) => (
              <article
                className="experience"
                key={exp.role}
                data-reveal
                style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="experience-date">
                  <strong>{exp.date}</strong>
                  <span>{exp.place}</span>
                </div>

                <div className="timeline-point">
                  <i />
                </div>

                <div className="experience-card">
                  <div className={`company-logo ${exp.logoClass}`}>
                    <img src={exp.logo} alt={exp.company} />
                  </div>

                  <div className="experience-content">
                    <h3>{exp.role}</h3>
                    <p className="company">{exp.company}</p>

                    <ul>
                      {exp.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>

                    <div className="tags">
                      {exp.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects" className="section grid-bg">
        <div className="container">
          <div className="projects-heading" data-reveal>
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Projects</h2>
            </div>

            <a className="outline-btn" href={GITHUB} target="_blank">
              View GitHub <Arrow />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project, i) => (
              <article
                className="project"
                key={project.title}
                data-reveal
                style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}
              >
                <div className="project-visual">{project.visual}</div>

                <div className="project-info">
                  <h3>{project.title}</h3>

                  <span className="project-type">{project.category}</span>

                  <p>{project.description}</p>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  {project.github && (
                    <a className="source" href={project.github} target="_blank">
                      <Icon>
                        <GithubIcon />
                      </Icon>
                      Source Code <Arrow />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section id="skills" className="section grid-bg">
        <div className="container">
          <div className="section-head" data-reveal>
            <p className="eyebrow">TECH STACK</p>
            <h2>Skills & Technologies</h2>

            <p className="section-description">
              Tools I use across model development, experimentation,
              deployment, and ML engineering.
            </p>
          </div>

          <div className="skill-groups">
            {skillGroups.map((group, groupIndex) => (
              <article
                className="skill-group"
                key={group.title}
                data-reveal
                style={
                  {
                    "--delay": `${groupIndex * 80}ms`,
                  } as React.CSSProperties
                }
              >
                <h3>{group.title}</h3>

                <div className="skills">
                  {group.skills.map(([name, logo]) => (
                    <div className="skill" key={name}>
                      <div className={`skill-logo ${name === "AWS" ? "aws-skill" : ""}`}>
                        <img src={logo} alt={`${name} logo`} />
                      </div>

                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="section contact grid-bg">
        <div className="container contact-grid">
          <div data-reveal>
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Let’s Connect</h2>

            <p className="section-description">
              Feel free to reach out about machine learning, AI engineering,
              research, or opportunities to work together.
            </p>

            <div className="contact-items">
              <a href="mailto:reddyreddyhemanth2002@gmail.com">
                <MailIcon />
                <span>
                  <small>Email</small>
                  reddyreddyhemanth2002@gmail.com
                </span>
              </a>

              <a href="tel:+13013097595">
                <b>☎</b>
                <span>
                  <small>Phone</small>
                  +1 301-309-7595
                </span>
              </a>

              <div>
                <b>⌖</b>
                <span>
                  <small>Location</small>
                  College Park, Maryland
                </span>
              </div>
            </div>
          </div>

          <div className="terminal" data-reveal>
            <div className="terminal-bar">
              <i />
              <i />
              <i />
              <span>hemanth@ml:~</span>
            </div>

            <pre>
              <span>$</span> current_focus{"\n"}
              <b>→</b> Vision-Language Models{"\n"}
              <b>→</b> Cross-Modal Representation Learning{"\n"}
              <b>→</b> Multimodal ML{"\n\n"}
              <span>$</span> status{"\n"}
              <b>→</b> building, learning, shipping_
            </pre>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer">
          <span>© 2026 Hemanth Reddy</span>

          <div className="socials">
            <a href={LINKEDIN} target="_blank">
              <LinkedinIcon />
            </a>
            <a href={GITHUB} target="_blank">
              <GithubIcon />
            </a>
            <a href="mailto:reddyreddyhemanth2002@gmail.com">
              <MailIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}