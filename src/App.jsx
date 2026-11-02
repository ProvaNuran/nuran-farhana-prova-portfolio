import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin, Download,
  Code2, BrainCircuit, GraduationCap, Award, ExternalLink, Menu, X,
  Sparkles, Terminal, Database, Globe, FileText, Sun, Moon, Copy, Check
} from 'lucide-react'

const projects = [
  {
    number: '01', name: 'AgroMart', type: 'FULL-STACK WEB APPLICATION',
    description: 'An agricultural supply chain platform with onboarding and login flows, weather-aware pricing, product provenance tracking, and IoT-based monitoring.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Express', 'Supabase', 'PostgreSQL'],
    featured: true, link: 'https://github.com/ProvaNuran/AgroMart', image: '/projects/agromart.png'
  },
  {
    number: '02', name: 'Tic Tac Toe — Java Swing', type: 'DESKTOP APPLICATION',
    description: 'A Java Swing game featuring a Minimax-based AI opponent, multiple visual themes, and an in-game hint system.',
    stack: ['Java', 'Java Swing', 'Minimax Algorithm'], link: 'https://github.com/ProvaNuran/Tic-Tac-Toe', image: '/projects/tic-tac-toe.png'
  },
  {
    number: '03', name: 'KALKE KORBO — Git Standup AI', type: 'AI-POWERED CLI TOOL',
    description: 'A Python CLI multi-agent tool that converts Git commit history into AI-generated daily standup reports.',
    stack: ['Python', 'AI', 'Git'], link: 'https://github.com/ProvaNuran/KALKE-KORBO-', image: '/projects/kalke-korbo.png'
  },
  {
    number: '04', name: 'Vehicle Management System', type: 'DATABASE APPLICATION',
    description: 'A web-based vehicle management system built in Oracle APEX with a SQL backend for record and transaction management.',
    stack: ['Oracle APEX', 'SQL'], link: 'https://github.com/ProvaNuran/Vehicle-Managment-System'
  },
  {
    number: '05', name: 'Penguin Jump — Multiplication Race', type: 'C CONSOLE GAME',
    description: 'A console game that teaches multiplication tables while reinforcing registers, memory management, and file I/O concepts.',
    stack: ['C', 'File I/O', 'Memory Management'], link: 'https://github.com/ProvaNuran/Multiplication-Game-', image: '/projects/multiplication-game.png'
  },
]

const skillGroups = [
  { title: 'Frontend', icon: Code2, items: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion'] },
  { title: 'Backend & Database', icon: Database, items: ['Express.js', 'REST APIs', 'Supabase', 'PostgreSQL', 'MySQL', 'SQL'] },
  { title: 'AI & Machine Learning', icon: BrainCircuit, items: ['PyTorch', 'Self-Supervised Learning', 'SimCLR', 'BYOL', 'MAE', 'Knowledge Distillation'] },
  { title: 'Programming & Tools', icon: Terminal, items: ['Python', 'Java', 'C', 'Git', 'GitHub', 'Kaggle', 'LaTeX', 'draw.io'] },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .6 } } }
const emailHref = 'mailto:farhaprova230@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Nuran%2C%0A%0A'

function SectionTitle({ eyebrow, title, description }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightMode, setLightMode] = useState(false)
  const [copied, setCopied] = useState(false)
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Research', '#research'], ['Contact', '#contact']]
  const closeMenu = () => setMenuOpen(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('farhaprova230@gmail.com')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = emailHref
    }
  }

  return (
    <div className={lightMode ? 'site-shell theme-light' : 'site-shell'}>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">P.</span><span>Nuran Farhana Prova</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}<button className="theme-toggle" onClick={() => setLightMode(!lightMode)} aria-label="Toggle color theme">{lightMode ? <Moon size={16}/> : <Sun size={16}/>}</button><a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a></nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="show" variants={fadeUp}>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Nuran Farhana<br/><span>Prova.</span></h1>
            <h2 className="hero-role">Frontend Developer <i>✳</i> CSE Undergraduate <i>✳</i> AI/ML Researcher</h2>
            <p className="hero-description">I build thoughtful digital experiences and explore intelligent technologies. I enjoy turning ideas into responsive web applications while learning, experimenting, and researching along the way.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-ghost" href="/Nuran_Farhana_Prova_CV.pdf" download><Download size={17}/> Download CV</a></div>
            <div className="social-row"><a href="https://github.com/ProvaNuran" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a><a href="https://www.linkedin.com/in/nuran-farhana-prova-047163387/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a><a href={emailHref}><Mail size={18}/> Email</a></div>
          </motion.div>
          <motion.div className="hero-visual" initial={{opacity:0, scale:.94}} animate={{opacity:1, scale:1}} transition={{duration:.8, delay:.15}}>
            <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
            <div className="visual-card">
              <div className="visual-card-top"><span>PROFILE / 2026</span><span className="live-indicator">● AVAILABLE</span></div>
              <img className="profile-photo" src="/nuran-farhana-prova.jpg" alt="Nuran Farhana Prova" />
              <div className="visual-card-bottom"><Sparkles size={22}/></div>
            </div>
            <div className="float-chip chip-code"><Code2 size={16}/> React Developer</div>
            <div className="float-chip chip-ai"><BrainCircuit size={16}/> AI & Research</div>
            <div className="hero-index">23° 48' N&nbsp; / &nbsp;90° 24' E</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <SectionTitle eyebrow="01 / ABOUT ME" title="A little about me." />
          <div className="about-grid">
            <motion.div className="about-main" initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp}>
              <p className="large-copy">I’m a CSE undergraduate at <span>East West University</span>, passionate about creating useful interfaces and understanding the technology behind them.</p>
              <p>My experience spans React-based frontend development, full-stack application development, API integration, and database-backed projects. Alongside software development, I explore deep learning and self-supervised learning through academic research.</p>
              <p>I value thoughtful problem-solving, collaboration, and continuous learning—and I’m excited to contribute to meaningful products while growing as an engineer.</p>
            </motion.div>
            <div className="about-facts">
              <div className="fact-card"><GraduationCap/><span>EDUCATION</span><strong>B.Sc. in CSE</strong><small>East West University</small></div>
              <div className="fact-card"><Award/><span>ACADEMIC RESULT</span><strong>3.71 / 4.00</strong><small>Current CGPA</small></div>
              <div className="fact-card"><MapPin/><span>BASED IN</span><strong>Dhaka</strong><small>Bangladesh</small></div>
              <div className="fact-card"><Globe/><span>LANGUAGES</span><strong>Bangla & English</strong><small>Communication</small></div>
            </div>
          </div>
        </section>

        <section className="section-wrap" id="skills">
          <SectionTitle eyebrow="02 / TOOLKIT" title="Skills & technologies." description="Tools and technologies I use to build, solve, and explore." />
          <div className="skills-grid">{skillGroups.map((group, i) => <motion.div className="skill-card" key={group.title} initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp} transition={{delay:i*.08}}><div className="skill-card-head"><group.icon/><span>0{i+1}</span></div><h3>{group.title}</h3><div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></motion.div>)}</div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <SectionTitle eyebrow="03 / SELECTED WORK" title="Projects I've worked on." description="A selection of academic and personal projects across web development, AI, and software engineering." />
          <div className="projects-list">{projects.map((project, i) => <motion.article className={project.featured ? 'project-card featured-project' : 'project-card'} key={project.number} initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp} transition={{delay:i*.06}}>
            <div className="project-number">{project.number}</div><div className="project-content">{project.image && <img className="project-image" src={project.image} alt={`${project.name} preview`} />}<div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div><a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}><ArrowUpRight/></a>
          </motion.article>)}</div>
          <div className="more-projects"><span>MORE EXPLORATIONS</span><p>Truck Lagbe · Hospital Management System · Student Record Management · Travel Planner · Cache Partitioning · Green Computing · Campus Network Design</p><a href="https://github.com/ProvaNuran" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={16}/></a></div>
        </section>

        <section className="section-wrap research-section" id="research">
          <SectionTitle eyebrow="04 / RESEARCH" title="Curiosity beyond code." description="Exploring machine learning to solve meaningful problems." />
          <motion.div className="research-card" initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp}>
            <div className="research-top"><span className="research-label"><BrainCircuit size={16}/> FEATURED PUBLICATION</span><span className="research-year">2025</span></div>
            <h3>UltrasoundNet: Deep Learning for Self-Supervised Breast Tumor Classification</h3>
            <p className="research-summary">Research on self-supervised deep learning for breast tumor classification using ultrasound imaging.</p>
            <div className="research-details"><div><span>CONFERENCE</span><strong>4th International Conference on Innovations in Data Analytics (ICIDA 2025)</strong></div><div><span>PUBLICATION</span><strong>Springer Nature Proceedings</strong></div><div><span>DATE</span><strong>December 5–6, 2025</strong></div></div>
            <p className="coauthors">Co-authors: Wasimul Bari Rahat, Sadman Ryan, Rukaiya Binta Hossain, Sarfaraz Ahamed Shovon, Israt Jahan, and Ahmed Wasif Reza.</p>
            <div className="research-bottom"><span>Currently extending this work into medical image analysis using deep learning.</span><a href="https://www.researchgate.net/publication/414072384" target="_blank" rel="noreferrer">View publication <ExternalLink size={15}/></a></div>
          </motion.div>
        </section>

        <section className="section-wrap journey-section" id="education">
          <SectionTitle eyebrow="05 / JOURNEY" title="Education & recognition." />
          <div className="journey-grid"><div className="timeline">
            <div className="timeline-item"><span className="timeline-dot"/><small>ONGOING</small><h3>B.Sc. in Computer Science & Engineering</h3><p>East West University · CGPA 3.71/4.00</p></div>
            <div className="timeline-item"><span className="timeline-dot"/><small>2021</small><h3>Higher Secondary Certificate</h3><p>BAF Shaheen College · Science · GPA 5.00/5.00</p></div>
            <div className="timeline-item"><span className="timeline-dot"/><small>2019</small><h3>Secondary School Certificate</h3><p>Motijheel Government Girls' High School · Science · GPA 5.00/5.00</p></div>
          </div><div className="recognition"><h3><Award/> Scholarships & achievements</h3><ul><li>100% Merit Scholarship</li><li>Dean's Scholarship</li><li>MedhaLalon Scholarship</li></ul><h3 className="cert-title"><FileText/> Certifications & activities</h3><ul><li>Graphic Design — Course Completion</li><li>Microsoft Word — Course Completion</li><li>Programming Contest — CSE FEST 2024, EWU</li></ul></div></div>
        </section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><span className="eyebrow">06 / GET IN TOUCH</span><h2>Have an idea?<br/><span>Let's make it happen.</span></h2><p>I'm open to internship opportunities, collaborations, and conversations about development and research.</p><a className="button button-primary" href={emailHref}>Say hello <ArrowUpRight size={17}/></a>        <div className="contact-grid"><a href={emailHref}><Mail/><span>EMAIL</span><strong>farhaprova230@gmail.com</strong></a><button className="copy-email" onClick={copyEmail}>{copied ? <Check/> : <Copy/>}<span>{copied ? 'COPIED' : 'COPY EMAIL'}</span><strong>{copied ? 'Ready to paste' : 'Save my email'}</strong></button><a href="tel:+8801617259302"><Phone/><span>PHONE</span><strong>+880 1617-259302</strong></a><a href="https://www.linkedin.com/in/nuran-farhana-prova-047163387/" target="_blank" rel="noreferrer"><Linkedin/><span>LINKEDIN</span><strong>Connect with me</strong></a><a href="https://github.com/ProvaNuran" target="_blank" rel="noreferrer"><Github/><span>GITHUB</span><strong>Explore my code</strong></a></div></div></section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">P.</span><span>Nuran Farhana Prova</span></a><span>Designed & built with curiosity. © {new Date().getFullYear()}</span><a href="#home">BACK TO TOP ↑</a></footer>
    </div>
  )
}
export default App
