"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github as GitHub, Linkedin, Mail, ArrowRight, Download } from "lucide-react"

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

  // Function to generate and download resume as PDF
  const downloadResume = () => {
    const resumeContent = `UTKARSH K. BANSAL
703-687-2857 | utkarshbansal85@gmail.com | linkedin.com/in/utkarshkbansal | https://utkarshkbansal.me

EDUCATION
Georgia Institute of Technology, Atlanta, GA
B.S. in Computer Science, AI and Networking Threads | Graduating May 2027
Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, 
Computer Networks, Computer Vision, Machine Learning, Linear Algebra

EXPERIENCE
AI/ML Research Assistant
Georgia Tech Design Innovation & Computational Engineering Lab, Atlanta, GA | December 2023 – Present
• Conducting research on computational analysis & design of cross-flow thermal heat exchangers using topology optimization
• Leveraging PyTorch, TensorFlow, OpenFOAM, & C++ to develop CNN within PACE Cluster for thermal system simulations
• Presented project methodology with findings at UROP 2025

Software Security Engineer Intern
Datadog, New York, NY | May 2025 – August 2025
• Engineered event-driven incident response system in Python on AWS Lambda, provisioned with Terraform
• Integrated with Datadog workflows, reducing incident containment time to 30 seconds
• Designed modular architecture with IAM-bound CI/CD pipelines, reducing onboarding time by 65%

Software Engineer Intern
General Dynamics Information Technology, Springfield, VA | June 2024 – August 2024
• Developed Python scripts to inventory installed software across enterprise endpoints, cross-referencing 450,000+ CVEs
• Engineered dual Windows-Linux environment using Ubuntu & WSL, reducing attack surfaces by 12%

PROJECTS
WrappedSync | Java, Kotlin, Android Studio, Firebase, LLMs | January 2025 – May 2025
• Built Spotify Wrapped-style Android app with LLM-based natural language analysis, 150+ active users
• Designed OAuth2-based authentication with Firebase & Google Sign-in

BuzzPlanner | Android Studio, Java, Kotlin, Python, Firebase | August 2024 – January 2025
• Led development of full-stack Android scheduling platform used by 500+ Georgia Tech students
• Implemented custom conflict detection algorithm, reducing errors by 40%

Stock Screener & Sentiment Analysis | Python, FinBERT, Financial ML | May 2024 – August 2024
• Engineered stock screener filtering 500+ stocks daily using Python, Pandas, NumPy, finvizfinance
• Integrated AI-driven sentiment analysis using FinBERT on 1,000+ financial articles per week

NLP Sign-Language Classification | Python, NLP, OpenCV, Machine Learning | October 2023 – Present
• Leading development of ML model for seamless interaction between deaf and non-sign language users
• Achieved 35% improvement in prototype accuracy with real-time processing

TECHNICAL SKILLS
Languages: Java, Python, C++, C, HTML/CSS, JavaScript, Kotlin, SQL
Frameworks: FastAPI, Flask, JavaFX, PyTorch, React, Scikit-learn, TensorFlow
Tools: Agile, Android Studio, AWS, Datadog, Docker, Firebase, Git/GitHub, Linux, Terraform

ACTIVITIES & LEADERSHIP
Georgia Tech Big Data Big Impact | Senior Project Developer | January 2024 – Present
• Leading NLP Sign-Language Classification project with team of developers

Georgia Tech Undergraduate Consulting Club | Senior Pro-Bono Analyst | September 2023 – Present
• Implementing Gen-AI strategies for DC-BLOX data centers, projected 7% annual energy cost reduction`

    const element = document.createElement("a")
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(resumeContent))
    element.setAttribute("download", "Utkarsh_Bansal_Resume.txt")
    element.style.display = "none"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
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
          <div className="text-xl font-bold text-primary">UKB</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection("intro")} className="text-sm hover:text-primary transition">
              About
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-sm hover:text-primary transition">
              Experience
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-sm hover:text-primary transition">
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-sm hover:text-primary transition">
              Skills
            </button>
            <button
              onClick={downloadResume}
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
                onClick={downloadResume}
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
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Utkarsh K. Bansal</h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Georgia Tech Computer Science student with a focus on AI/ML and software security. I'm passionate about
            building intelligent systems that solve real-world problems, from conducting cutting-edge AI research to
            engineering secure, scalable applications. With experience at industry leaders like Datadog and General
            Dynamics, I blend academic rigor with practical software engineering to create impactful solutions.
          </p>

          <div className="flex gap-4 justify-center pt-4">
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

          <button
            onClick={() => scrollToSection("experience")}
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition font-medium"
          >
            Explore My Work <ArrowRight size={18} />
          </button>
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* WrappedSync */}
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition">
              <h3 className="text-xl font-bold mb-2">WrappedSync</h3>
              <p className="text-sm text-muted-foreground mb-4">Java • Kotlin • Android • Firebase • LLMs</p>
              <p className="text-muted-foreground mb-4">
                Spotify Wrapped-style Android app generating personalized listening insights using LLM-based natural
                language analysis. 150+ active users.
              </p>
              <div className="flex gap-2 pt-4">
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">OAuth2</span>
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">LLM</span>
              </div>
            </div>

            {/* BuzzPlanner */}
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent transition">
              <h3 className="text-xl font-bold mb-2">BuzzPlanner</h3>
              <p className="text-sm text-muted-foreground mb-4">Android • Java • Kotlin • Firebase</p>
              <p className="text-muted-foreground mb-4">
                Full-stack Android scheduling platform used by 500+ Georgia Tech students. Custom conflict detection
                algorithm improved accuracy by 40%.
              </p>
              <div className="flex gap-2 pt-4">
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">Real-time</span>
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">Algorithms</span>
              </div>
            </div>

            {/* NLP Sign Language */}
            <div className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition">
              <h3 className="text-xl font-bold mb-2">NLP Sign-Language Classification</h3>
              <p className="text-sm text-muted-foreground mb-4">Python • NLP • OpenCV • Machine Learning</p>
              <p className="text-muted-foreground mb-4">
                Leading development of ML model enabling seamless interactions between deaf and non-sign language users.
                Improved accuracy by 20%.
              </p>
              <div className="flex gap-2 pt-4">
                <span className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full">NLP</span>
                <span className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full">Accessibility</span>
              </div>
            </div>

            {/* AI Infrastructure */}
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition">
              <h3 className="text-xl font-bold mb-2">AI Infrastructure Optimization</h3>
              <p className="text-sm text-muted-foreground mb-4">Python • Machine Learning • Data Centers</p>
              <p className="text-muted-foreground mb-4">
                Implementing Gen-AI strategies for data center optimization. ML workflows projected 7% annual reduction
                in energy costs.
              </p>
              <div className="flex gap-2 pt-4">
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">ML</span>
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">Optimization</span>
              </div>
            </div>

            {/* Stock Screener & Sentiment Analysis */}
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent transition">
              <h3 className="text-xl font-bold mb-2">Stock Screener & Sentiment Analysis</h3>
              <p className="text-sm text-muted-foreground mb-4">Python • FinBERT • Financial ML • NLP</p>
              <p className="text-muted-foreground mb-4">
                Python-based tool to identify undervalued stocks and analyze sentiment from financial news articles
                using pre-trained FinBERT model, providing data-driven insights for investors.
              </p>
              <div className="flex gap-2 pt-4">
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">FinBERT</span>
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">Finance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-card">
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

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="max-w-5xl mx-auto text-center text-muted-foreground">
          <p>Built with Next.js • Designed for impact</p>
          <p className="mt-2 text-sm">© 2025 Utkarsh K. Bansal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
