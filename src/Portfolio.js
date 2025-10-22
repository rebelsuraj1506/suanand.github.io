import React from "react";

const Portfolio = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 900, margin: "auto", padding: 20, backgroundColor: "#f9f9f9" }}>
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ marginBottom: 20 }}>
          <img 
            src="/suraj.png" 
            alt="Suraj Anand" 
            style={{ 
              width: 150, 
              height: 150, 
              borderRadius: "50%", 
              objectFit: "cover",
              border: "4px solid #0070f3",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
            }} 
          />
        </div>
        <h1 style={{ color: "#222" }}>Suraj Anand</h1>
        <p style={{ fontWeight: "bold", fontSize: 18 }}>
          M.Tech Computer Science & Engineering Student | NVIDIA ASIC Engineer
        </p>
        <p>
          Phone: <a href="tel:+917050412421" style={{ color: "#0070f3" }}>91 70504 12421</a> | Email: <a href="mailto:surajanand200@gmail.com" style={{ color: "#0070f3" }}>surajanand200@gmail.com</a>
        </p>
      </header>

      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Education</h2>
        <ul>
          <li><b>IIT Bhubaneswar</b> — M.Tech Computer Science (2023-2025), CGPA: 8.06</li>
          <li><b>Bhagalpur College of Engineering</b> — B.Tech Computer Science (2018-2021), CGPA: 8.08</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Skills</h2>
        <p><b>Programming Languages:</b> C, C++, Python</p>
        <p><b>Technologies:</b> Intel Pin, Valgrind, Tensorflow, CNN, YOLO, BERT</p>
        <p><b>Web & Databases:</b> HTML, CSS, JavaScript, React.js, Bootstrap, MySQL</p>
        <p><b>Tools:</b> VS Code, Google Colab, Git, Docker, AWS</p>
        <p><b>Core Concepts:</b> Data Structures, Algorithms, OOP, Operating Systems</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Professional Experience</h2>
        <h3>NVIDIA ASIC Engineer</h3>
        <p><i>Jan 2025 - July 2025</i></p>
        <ul>
          <li>EDA workload performance analysis and optimization</li>
          <li>Implemented multi-stage checkpoint generation using SimPoint</li>
          <li>Correlated hardware and software performance metrics for bottleneck analysis</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Research & Projects</h2>
        <div style={{ display: "grid", gap: 20, marginTop: 15 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 15, padding: 15, backgroundColor: "#f8f9fa", borderRadius: 8 }}>
            <img src="/project1.jpg" alt="Cache Analysis" style={{ width: 80, height: 60, objectFit: "cover", borderRadius: 4 }} />
            <div>
              <h4 style={{ margin: "0 0 5px 0", color: "#333" }}>Cache Replacement Policy Analysis</h4>
              <p style={{ margin: 0, fontSize: 14, color: "#666" }}>LRU, RRIP (28% hit rate improvement)</p>
            </div>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: 15, padding: 15, backgroundColor: "#f8f9fa", borderRadius: 8 }}>
            <img src="/project2.jpg" alt="RSNA Challenge" style={{ width: 80, height: 60, objectFit: "cover", borderRadius: 4 }} />
            <div>
              <h4 style={{ margin: "0 0 5px 0", color: "#333" }}>RSNA 2023 Abdominal Trauma Detection</h4>
              <p style={{ margin: 0, fontSize: 14, color: "#666" }}>Bronze medal on Kaggle (Top 91st rank)</p>
            </div>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: 15, padding: 15, backgroundColor: "#f8f9fa", borderRadius: 8 }}>
            <img src="/project3.jpg" alt="Vehicle Detection" style={{ width: 80, height: 60, objectFit: "cover", borderRadius: 4 }} />
            <div>
              <h4 style={{ margin: "0 0 5px 0", color: "#333" }}>Vehicle Number Plate Detection</h4>
              <p style={{ margin: 0, fontSize: 14, color: "#666" }}>CNN & YOLO implementation</p>
            </div>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: 15, padding: 15, backgroundColor: "#f8f9fa", borderRadius: 8 }}>
            <img src="/project4.jpg" alt="NLP Analysis" style={{ width: 80, height: 60, objectFit: "cover", borderRadius: 4 }} />
            <div>
              <h4 style={{ margin: "0 0 5px 0", color: "#333" }}>NLP Sentiment Analysis</h4>
              <p style={{ margin: 0, fontSize: 14, color: "#666" }}>BERT and Falcon 7B fine-tuning</p>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Achievements</h2>
        <ul>
          <li>GATE AIR-1267 (2023)</li>
          <li>Kaggle RSNA Challenge Bronze Medalist (91st rank)</li>
          <li>BCECELE - 8th rank (2018)</li>
          <li>Teaching Assistant - Compiler Design, Machine Learning courses</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Contact</h2>
        <p>Email: <a href="mailto:surajanand200@gmail.com" style={{ color: "#0070f3" }}>surajanand200@gmail.com</a></p>
        <p>Phone: <a href="tel:+917050412421" style={{ color: "#0070f3" }}>91 70504 12421</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/surajanand" target="_blank" rel="noreferrer" style={{ color: "#0070f3" }}>linkedin.com/in/surajanand</a></p>
        <p>GitHub: <a href="https://github.com/surajanand" target="_blank" rel="noreferrer" style={{ color: "#0070f3" }}>github.com/surajanand</a></p>
      </section>
    </div>
  );
};

const sectionStyle = {
  backgroundColor: "#fff",
  marginBottom: 25,
  padding: "20px 30px",
  borderRadius: 8,
  boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
};

const sectionTitle = {
  borderBottom: "2px solid #0070f3",
  paddingBottom: 5,
  marginBottom: 15,
  color: "#0070f3",
};

export default Portfolio;
