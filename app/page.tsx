"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github as GitHub, Linkedin, Mail, Download } from "lucide-react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMenuOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // Function to open resume in new tab
  const openResume = () => {
    window.open("/resume", "_blank")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="text-xl font-bold text-primary">Utkarsh B.</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection("intro")} className="text-sm hover:text-primary transition">
              About
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-sm hover:text-primary transition">
              Experience
            </button>
            <button onClick={() => scrollToSection("research")} className="text-sm hover:text-primary transition">
              Research
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-sm hover:text-primary transition">
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-sm hover:text-primary transition">
              Skills
            </button>
            <button
              onClick={openResume}
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm hover:opacity-90 transition"
            >
              <Download size={16} />
              Resume
            </button>
            <a
              href="mailto:utkarshbansal85@gmail.com"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-90 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("intro")}
                className="block w-full text-left text-sm hover:text-primary transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left text-sm hover:text-primary transition"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("research")}
                className="block w-full text-left text-sm hover:text-primary transition"
              >
                Research
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left text-sm hover:text-primary transition"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left text-sm hover:text-primary transition"
              >
                Skills
              </button>
              <button
                onClick={openResume}
                className="flex items-center gap-2 w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm hover:opacity-90 transition"
              >
                <Download size={16} />
                Resume
              </button>
              <a
                href="mailto:utkarshbansal85@gmail.com"
                className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-90 transition text-center"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="intro" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left Side - Intro */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Utkarsh K. Bansal</h1>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Georgia Tech Computer Science student with a focus on AI/ML and software security. I'm passionate about
                building intelligent systems that solve real-world problems, from conducting cutting-edge AI research to
                engineering secure, scalable applications. With experience at industry leaders like Datadog and General
                Dynamics, I blend academic rigor with practical software engineering to create impactful solutions.
              </p>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://linkedin.com/in/utkarshkbansal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/utkarshkbansal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                >
                  <GitHub size={20} />
                </a>
                <a
                  href="mailto:utkarshbansal85@gmail.com"
                  className="p-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="md:col-span-1">
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium">Atlanta, GA</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium">utkarshbansal85@gmail.com</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Phone</p>
                  <a href="tel:703-687-2857" className="text-sm font-medium hover:text-primary transition">
                    703-687-2857
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Currently</p>
                  <div className="space-y-1">
                    <p className="text-xs font-medium">B.S. in Computer Science</p>
                    <p className="text-xs text-muted-foreground">AI and Networking Threads</p>
                    <p className="text-xs text-muted-foreground">Expected: May 2027</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>

          <div className="space-y-8">
            {/* AI/ML Research */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold">AI/ML Research Assistant</h3>
              <p className="text-sm text-muted-foreground">
                Georgia Tech Design Innovation & Computational Engineering Lab • December 2023 - Present
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>
                  • Conducting research on computational analysis of thermal heat exchangers using topology optimization
                </li>
                <li>• Developing CNN in PyTorch/TensorFlow on PACE Cluster for thermal system simulations</li>
                <li>• Presented project methodology at UROP 2025</li>
              </ul>
            </div>

            {/* Datadog Internship */}
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold">Software Security Engineer Intern</h3>
              <p className="text-sm text-muted-foreground">Datadog • May 2025 - August 2025</p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• Engineered event-driven incident response system in Python on AWS Lambda</li>
                <li>• Reduced incident containment time to 30 seconds, enhancing SaaS security</li>
                <li>• Designed modular architecture with IAM-bound CI/CD pipelines, reducing onboarding time by 65%</li>
              </ul>
            </div>

            {/* General Dynamics Internship */}
            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-2xl font-bold">Software Engineer Intern</h3>
              <p className="text-sm text-muted-foreground">
                General Dynamics Information Technology • June 2024 - August 2024
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• Developed inventory management scripts for 450,000+ CVE detection</li>
                <li>• Engineered dual Windows-Linux environment, reducing attack surfaces by 12%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Research</h2>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">AI/ML Research - Thermal Heat Exchangers</h3>
              <p className="text-sm text-muted-foreground mb-4">Georgia Tech DICE Lab • December 2023 - Present</p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>
                  • Computational analysis & design of cross-flow thermal heat exchangers using topology optimization
                </li>
                <li>• Developing CNN with PyTorch/TensorFlow on PACE Cluster for thermal simulations</li>
                <li>• Processing 15+ CFD features for accurate quantitative predictions</li>
              </ul>
              <div className="pt-4">
                <a
                  href="http://aaravtech.me/assets/work-samples/final-research-report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  Read Report →
                </a>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Quantitative Bitcoin Criterion</h3>
              <p className="text-sm text-muted-foreground mb-4">Published Research</p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Published quantitative findings on Bitcoin criteria in SSRN Academic Journal</li>
                <li>• Ranked in Top 10 of its category for 9 consecutive weeks</li>
              </ul>
              <div className="pt-4">
                <a
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4261198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  Read Report →
                </a>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Experiential Learning Research</h3>
              <p className="text-sm text-muted-foreground mb-4">George Mason University</p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Collaborated with Dr. Sarah Wittman on quantifying impact of experiential learning styles</li>
                <li>• Utilized statistical analysis tools and JavaScript for dataset analysis</li>
              </ul>
              <div className="pt-4">
                <a
                  href="https://www.authorea.com/doi/full/10.22541/au.166955644.49685019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  Read Report →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* WrappedSync */}
            <div className="bg-background border border-border rounded-lg p-6 hover:border-primary transition">
              <h3 className="text-xl font-bold mb-2">WrappedSync</h3>
              <p className="text-sm text-muted-foreground mb-4">Java • Kotlin • Android • Firebase • LLMs</p>
              <p className="text-muted-foreground mb-4">
                Spotify Wrapped-style Android app generating personalized listening insights using LLM-based natural
                language analysis. 150+ active users.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">OAuth2</span>
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">LLM</span>
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">Mobile</span>
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">Real-time</span>
              </div>
            </div>

            {/* BuzzPlanner */}
            <div className="bg-background border border-border rounded-lg p-6 hover:border-accent transition">
              <h3 className="text-xl font-bold mb-2">BuzzPlanner</h3>
              <p className="text-sm text-muted-foreground mb-4">Android • Java • Kotlin • Firebase</p>
              <p className="text-muted-foreground mb-4">
                Full-stack Android scheduling platform used by 500+ Georgia Tech students. Custom conflict detection
                algorithm improved accuracy by 40%.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">Algorithms</span>
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">Real-time</span>
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">Notifications</span>
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">Scale</span>
              </div>
            </div>

            {/* NLP Sign Language */}
            <div className="bg-background border border-border rounded-lg p-6 hover:border-secondary transition">
              <h3 className="text-xl font-bold mb-2">NLP Sign-Language Classification</h3>
              <p className="text-sm text-muted-foreground mb-4">Python • NLP • OpenCV • Machine Learning</p>
              <p className="text-muted-foreground mb-4">
                Leading development of ML model enabling seamless interactions between deaf and non-sign language users.
                Improved accuracy by 20%.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full">NLP</span>
                <span className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full">Accessibility</span>
                <span className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full">Computer Vision</span>
                <span className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full">PyTorch</span>
              </div>
            </div>

            {/* AI Infrastructure */}
            <div className="bg-background border border-border rounded-lg p-6 hover:border-primary transition">
              <h3 className="text-xl font-bold mb-2">AI Infrastructure Optimization</h3>
              <p className="text-sm text-muted-foreground mb-4">Python • Machine Learning • Data Centers</p>
              <p className="text-muted-foreground mb-4">
                Implementing Gen-AI strategies for data center optimization. ML workflows projected 7% annual reduction
                in energy costs.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">ML</span>
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">Optimization</span>
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">Sustainability</span>
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">GenAI</span>
              </div>
            </div>

            {/* Stock Screener & Sentiment Analysis */}
            <div className="bg-background border border-border rounded-lg p-6 hover:border-accent transition">
              <h3 className="text-xl font-bold mb-2">Stock Screener & Sentiment Analysis</h3>
              <p className="text-sm text-muted-foreground mb-4">Python • FinBERT • Financial ML • NLP</p>
              <p className="text-muted-foreground mb-4">
                Python-based tool to identify undervalued stocks and analyze sentiment from financial news articles
                using pre-trained FinBERT model, providing data-driven insights for investors.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">FinBERT</span>
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">Finance</span>
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">Sentiment Analysis</span>
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">Web Scraping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-primary mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "Python", "C++", "C", "JavaScript", "Kotlin", "SQL", "HTML/CSS"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-accent mb-4">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "TensorFlow", "React", "FastAPI", "Flask", "Scikit-learn", "JavaFX"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-secondary mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "Terraform", "Firebase", "Git", "Linux", "Jupyter"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-16 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Interests & Hobbies</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                When I step away from the computer, I enjoy exploring diverse interests that keep me balanced and
                inspired. I'm an avid weightlifter, always pushing my physical limits and maintaining discipline both in
                the gym and in my professional work. I'm passionate about exploring new TV series and staying updated on
                current entertainment trends.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                I'm competitive by nature and enjoy playing basketball with friends and colleagues, which brings a
                collaborative spirit to the court. Music is another passion of mine—I play guitar and love experimenting
                with different genres and techniques. Beyond these hobbies, I'm deeply interested in quantitative
                analysis, finance, and the intersection of technology with real-world impact.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground">Built with Next.js • Designed for impact</p>
            <p className="mt-2 text-sm text-muted-foreground">© 2025 Utkarsh K. Bansal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
