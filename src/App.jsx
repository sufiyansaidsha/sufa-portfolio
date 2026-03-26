import React from 'react';

const App = () => {
    const experiences = [
        {
            role: "Cyber Security Engineer",
            company: "Beagle Security, Thiruvananthapuram",
            date: "September 2022 – Present",
            points: [
                "Leveraged Hexstrike AI’s MCP-based infrastructure to perform AI-assisted penetration testing, enabling automated vulnerability discovery, context-aware analysis, and multi-stage exploitation workflows.",
                "Built and open-sourced 'sufa' – AI-powered web vulnerability analysis platform (CLI, Burp extension, API server) published on PyPI and Docker Hub.",
                "Pioneering the integration of AI-driven security analysis, leveraging LLMs to automate vulnerability discovery and complex threat modeling.",
                "Implementing Model Context Protocol (MCP) to build interoperable AI security tools, enabling seamless context sharing between scanners and autonomous agents.",
                "Developing Advanced Agentic Pentesting workflows using autonomous AI agents for multi-stage exploitation and deep-dive post-exploitation tasks.",
                "Contributed Dockerized Python-based vulnerability scanning tools, improving accuracy and performance in identifying security risks on client websites.",
                "Conducted VAPT on Web Applications, Mobile Applications, and APIs, ensuring adherence to best practices in security.",
                "Developed and maintained vulnerable machines for CTF challenges as part of the organizing team at COCON (2022, 2023, and 2024)."
            ]
        },
        {
            role: "Cyber Security Engineer Intern",
            company: "Beagle Security, Thiruvananthapuram",
            date: "June 2022 – September 2022",
            points: [
                "Engaged in mobile application vulnerability assessment and penetration testing.",
                "Conducted network testing and website testing to assess security posture.",
                "Developed Python tools to streamline security testing processes.",
                "Created Capture the Flag (CTF) challenges."
            ]
        }
    ];

    const skills = [
        "Hexstrike AI MCPs", "AI in Cybersecurity", "Agentic Pentesting", "MCP (Model Context Protocol)",
        "Penetration Testing", "Web Application Security", "SAST", "Python",
        "Linux", "Burp Suite", "Nessus", "Nmap", "Metasploit",
        "LLM Security", "Nuclei", "SonarQube", "OWASP ZAP", "sufa"
    ];

    const certifications = [
        "CERTIFIED ETHICAL HACKER v11 (EC-Council)",
        "CERTIFIED NETWORK SECURITY SPECIALIST (ICSI)",
        "PRACTICAL ETHICAL HACKING (TCM Security)",
        "ETHICAL HACKING AND PENETRATION TESTING (Udemy)"
    ];

    const projects = [
        {
            name: "sufa",
            description: "AI-powered web vulnerability analysis platform. CLI tool, Burp Suite extension, and API server. Combines LLM reasoning with traditional scanning for passive/active vulnerability discovery.",
            links: [
                { label: "PyPI", url: "https://pypi.org/project/sufa/" },
                { label: "Docker Hub", url: "https://hub.docker.com/r/sufaai/sufaai" }
            ]
        }
    ];

    return (
        <div className="portfolio">
            <div className="bg-grid"></div>
            <div className="bg-gradient"></div>

            <nav>
                <div className="container">
                    <div className="logo">SUFIYAN SAID SHA</div>
                    <div className="nav-links">
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>

            <section id="hero" className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1>Securing the Digital <br /><span className="highlight">Frontier.</span></h1>
                        <p className="hero-subtitle">
                            Pioneering the **Autonomous Security** revolution. Leveraging **Hexstrike AI MCPs** and **Agentic Pentesting** to architect the next generation of intelligent digital fortresses.
                        </p>
                        <div className="hero-btns">
                            <a href="#contact" className="btn btn-primary">Get In Touch</a>
                            <a href="#experience" className="btn btn-outline">View Experience</a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-wrapper">
                            <div className="image-glow"></div>
                            <img src="/sufa.jpeg" alt="Sufiyan Said Sha" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Professional <span className="highlight">Journey</span></h2>
                    <div className="experience-list">
                        {experiences.map((exp, i) => (
                            <div key={i} className="exp-item">
                                <div className="exp-company">{exp.company}</div>
                                <h3>{exp.role}</h3>
                                <div className="exp-date">{exp.date}</div>
                                <ul style={{ color: 'var(--text-dim)', paddingLeft: '1.2rem' }}>
                                    {exp.points.map((p, j) => <li key={j} style={{ marginBottom: '0.5rem' }}>{p}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Projects & <span className="highlight">Tools</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                        {projects.map((proj, i) => (
                            <div key={i} className="card" style={{ padding: '1.5rem' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.4rem' }}>{proj.name}</h3>
                                <p style={{ color: 'var(--text-dim)', marginBottom: '1.25rem', lineHeight: 1.6 }}>{proj.description}</p>
                                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                    {proj.links.map((link, j) => (
                                        <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '0.4rem 0.8rem' }}>{link.label}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="skills" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Core <span className="highlight">Arsenal</span></h2>
                    <div className="skills-grid">
                        {skills.map((skill, i) => (
                            <div key={i} className="skill-tag">{skill}</div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="certifications">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Official <span className="highlight">Creds</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {certifications.map((cert, i) => (
                            <div key={i} className="card">
                                <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                                    </svg>
                                </div>
                                <h4 style={{ fontSize: '1.1rem' }}>{cert}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Ready to <span className="highlight">Secure</span>?</h2>
                    <p style={{ color: 'var(--text-dim)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:saidshasufiyan@gmail.com" className="btn btn-primary">Email Me</a>
                        <a href="https://linkedin.com/in/sufiyan-said-sha" target="_blank" className="btn btn-outline">LinkedIn</a>
                        <a href="https://github.com/sufiyansaidsha" target="_blank" className="btn btn-outline">GitHub</a>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>&copy; 2025 Sufiyan Said Sha. Built for sufa.me</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
