"use client"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => window.history.back()}
          className="mb-8 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-90 transition"
        >
          ← Back
        </button>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-6">
          {/* Header */}
          <div className="border-b border-border pb-6">
            <h1 className="text-4xl font-bold">Utkarsh K. Bansal</h1>
            <p className="text-muted-foreground mt-2">
              703-687-2857 | utkarshbansal85@gmail.com | linkedin.com/in/utkarshkbansal
            </p>
          </div>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Education</h2>
            <div>
              <h3 className="text-lg font-semibold">Georgia Institute of Technology, Atlanta, GA</h3>
              <p className="text-muted-foreground">
                B.S. in Computer Science, AI and Networking Threads | Graduating May 2027
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems,
                Computer Networks, Computer Vision, Machine Learning, Linear Algebra
              </p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">AI/ML Research Assistant</h3>
                <p className="text-muted-foreground">
                  Georgia Tech Design Innovation & Computational Engineering Lab, Atlanta, GA | December 2023 – Present
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>
                    Conducting research on computational analysis & design of cross-flow thermal heat exchangers using
                    topology optimization
                  </li>
                  <li>
                    Leveraging PyTorch, TensorFlow, OpenFOAM, & C++ to develop CNN within PACE Cluster for thermal
                    system simulations
                  </li>
                  <li>Presented project methodology with findings at UROP 2025</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Software Security Engineer Intern</h3>
                <p className="text-muted-foreground">Datadog, New York, NY | May 2025 – August 2025</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>
                    Engineered event-driven incident response system in Python on AWS Lambda, provisioned with Terraform
                  </li>
                  <li>
                    Integrated response logic with Datadog workflows, reducing incident containment time to 30 seconds
                  </li>
                  <li>Designed modular architecture with IAM-bound CI/CD pipelines, reducing onboarding time by 65%</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Software Engineer Intern</h3>
                <p className="text-muted-foreground">
                  General Dynamics Information Technology, Springfield, VA | June 2024 – August 2024
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>
                    Developed Python scripts and PowerShell automation tools to inventory installed software across
                    enterprise endpoints
                  </li>
                  <li>Engineered dual Windows-Linux environment using Ubuntu & WSL, reducing attack surfaces by 12%</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">WrappedSync | Java, Kotlin, Android Studio, Firebase, LLMs</h3>
                <p className="text-muted-foreground text-sm mb-2">January 2025 – May 2025</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Built Spotify Wrapped-style Android app with 150+ active users</li>
                  <li>Designed OAuth2-based authentication with Firebase & Google Sign-in</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">BuzzPlanner | Android Studio, Java, Kotlin, Python, Firebase</h3>
                <p className="text-muted-foreground text-sm mb-2">August 2024 – January 2025</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Led development of full-stack Android platform used by 500+ Georgia Tech students</li>
                  <li>Custom conflict detection algorithm reduced scheduling errors by 40%</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Stock Screener & Sentiment Analysis | Python, FinBERT, Financial ML
                </h3>
                <p className="text-muted-foreground text-sm mb-2">May 2024 – August 2024</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Engineered stock screener filtering 500+ stocks daily</li>
                  <li>Integrated AI-driven sentiment analysis using FinBERT on 1,000+ financial articles weekly</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Technical Skills</h2>
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Languages:</span> Java, Python, C++, C, HTML/CSS, JavaScript, Kotlin,
                SQL
              </p>
              <p>
                <span className="font-semibold">Frameworks:</span> FastAPI, Flask, JavaFX, PyTorch, React, Scikit-learn,
                TensorFlow
              </p>
              <p>
                <span className="font-semibold">Tools & Platforms:</span> Agile, Android Studio, AWS, Datadog, Docker,
                Firebase, Git/GitHub, Google Colab, Jupyter, Linux, PowerShell, MySQL, Terraform, Ubuntu
              </p>
              <p>
                <span className="font-semibold">Libraries:</span> FinBERT, NumPy, OpenCV, OpenFOAM, Pandas
              </p>
            </div>
          </section>

          {/* Activities */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Activities & Leadership</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Georgia Tech Big Data Big Impact - Senior Project Developer</h3>
                <p className="text-muted-foreground text-sm mb-1">January 2024 – Present</p>
                <p className="text-muted-foreground">
                  Leading development of NLP Sign-Language Classification model to enable interactions between deaf and
                  non-sign language users
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Georgia Tech Undergraduate Consulting Club - Senior Pro-Bono Analyst
                </h3>
                <p className="text-muted-foreground text-sm mb-1">September 2023 – Present</p>
                <p className="text-muted-foreground">
                  Implementing Gen-AI strategies for data center optimization, projected 7% annual energy cost reduction
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
