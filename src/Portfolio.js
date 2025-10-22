import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .floating {
          animation: float 3s ease-in-out infinite;
        }
        .pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
      <div style={{ 
        fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
        maxWidth: 1200, 
        margin: "auto", 
        padding: 20, 
        background: `
          linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%),
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
        `,
        backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Geometric Background Elements */}
        <div style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "200px",
          height: "200px",
          background: "linear-gradient(45deg, rgba(255, 119, 198, 0.1), rgba(120, 219, 255, 0.1))",
          borderRadius: "50%",
          filter: "blur(40px)",
          animation: "float 6s ease-in-out infinite"
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "150px",
          height: "150px",
          background: "linear-gradient(45deg, rgba(120, 119, 198, 0.1), rgba(255, 119, 198, 0.1))",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          filter: "blur(30px)",
          animation: "float 8s ease-in-out infinite reverse"
        }}></div>
        <div style={{
          position: "absolute",
          top: "60%",
          right: "20%",
          width: "100px",
          height: "100px",
          background: "linear-gradient(45deg, rgba(120, 219, 255, 0.1), rgba(255, 255, 255, 0.1))",
          borderRadius: "50%",
          filter: "blur(20px)",
          animation: "pulse 4s ease-in-out infinite"
        }}></div>
        
      <header style={{ 
        textAlign: "center", 
        marginBottom: 60,
        transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.8s ease-out'
      }}>
        <div style={{ 
          marginBottom: 30,
          position: 'relative',
          display: 'inline-block'
        }}>
          <div style={{
            position: 'absolute',
            top: -10,
            left: -10,
            right: -10,
            bottom: -10,
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
            borderRadius: '50%',
            animation: 'rotate 3s linear infinite',
            zIndex: -1
          }}></div>
          <div style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "linear-gradient(45deg, #ff6b9d, #c44569, #f8b500)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "4rem",
            fontWeight: "bold",
            color: "white",
            border: "6px solid rgba(255,255,255,0.3)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
            position: "relative",
            overflow: "hidden"
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "4rem",
              fontWeight: "bold"
            }}>SA</div>
          </div>
        </div>
        <h1 style={{ 
          color: "white", 
          fontSize: "3.5rem",
          fontWeight: "700",
          margin: "20px 0",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          background: "linear-gradient(45deg, #ff6b9d, #c44569, #f8b500, #ff6b9d)",
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientShift 3s ease infinite"
        }}>Suraj Anand</h1>
        <p style={{ 
          fontWeight: "600", 
          fontSize: "1.4rem",
          color: "rgba(255,255,255,0.9)",
          margin: "10px 0",
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
        }}>
          M.Tech Computer Science & Engineering Student | NVIDIA ASIC Engineer
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
          marginTop: '20px'
        }}>
          <a href="tel:+917050412421" style={{ 
            color: "white", 
            textDecoration: "none",
            padding: "12px 24px",
            background: "rgba(255,255,255,0.2)",
            borderRadius: "25px",
            border: "2px solid rgba(255,255,255,0.3)",
            transition: "all 0.3s ease",
            backdropFilter: "blur(10px)"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.3)";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.2)";
            e.target.style.transform = "translateY(0)";
          }}
          >📞 91 70504 12421</a>
          <a href="mailto:surajanand200@gmail.com" style={{ 
            color: "white", 
            textDecoration: "none",
            padding: "12px 24px",
            background: "rgba(255,255,255,0.2)",
            borderRadius: "25px",
            border: "2px solid rgba(255,255,255,0.3)",
            transition: "all 0.3s ease",
            backdropFilter: "blur(10px)"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.3)";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.2)";
            e.target.style.transform = "translateY(0)";
          }}
          >✉️ surajanand200@gmail.com</a>
        </div>
      </header>

      <section 
        style={{
          ...sectionStyle,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 0.2s'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-5px)';
          e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
        }}
      >
        <h2 style={sectionTitle}>🎓 Education</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease'
          }}>
            <h3 style={{ color: 'white', margin: '0 0 10px 0', fontSize: '1.3rem' }}>IIT Bhubaneswar</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', margin: '5px 0' }}>M.Tech Computer Science (2023-2025)</p>
            <p style={{ color: '#4ecdc4', margin: '5px 0', fontWeight: '600' }}>CGPA: 8.06</p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease'
          }}>
            <h3 style={{ color: 'white', margin: '0 0 10px 0', fontSize: '1.3rem' }}>Bhagalpur College of Engineering</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', margin: '5px 0' }}>B.Tech Computer Science (2018-2021)</p>
            <p style={{ color: '#4ecdc4', margin: '5px 0', fontWeight: '600' }}>CGPA: 8.08</p>
          </div>
        </div>
      </section>

      <section 
        style={{
          ...sectionStyle,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 0.4s'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-5px)';
          e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
        }}
      >
        <h2 style={sectionTitle}>💻 Skills</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <div>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '1.2rem' }}>Programming Languages</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['C', 'C++', 'Python'].map((skill, index) => (
                <span key={index} style={{
                  background: 'linear-gradient(45deg, #ff6b9d, #c44569)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(255,107,157,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                }}
                >{skill}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '1.2rem' }}>Technologies</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Intel Pin', 'Valgrind', 'Tensorflow', 'CNN', 'YOLO', 'BERT'].map((skill, index) => (
                <span key={index} style={{
                  background: 'linear-gradient(45deg, #f8b500, #ff6b9d)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(248,181,0,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                }}
                >{skill}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '1.2rem' }}>Web & Databases</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'MySQL'].map((skill, index) => (
                <span key={index} style={{
                  background: 'linear-gradient(45deg, #c44569, #f8b500)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(196,69,105,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                }}
                >{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section 
        style={{
          ...sectionStyle,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 0.6s'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-5px)';
          e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
        }}
      >
        <h2 style={sectionTitle}>💼 Professional Experience</h2>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '25px',
          borderRadius: '15px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h3 style={{ color: 'white', margin: '0 0 10px 0', fontSize: '1.4rem' }}>🚀 NVIDIA ASIC Engineer</h3>
          <p style={{ color: '#4ecdc4', margin: '0 0 20px 0', fontSize: '1.1rem', fontWeight: '600' }}>Jan 2025 - July 2025</p>
          <ul style={{ color: 'rgba(255,255,255,0.9)', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px' }}>EDA workload performance analysis and optimization</li>
            <li style={{ marginBottom: '8px' }}>Implemented multi-stage checkpoint generation using SimPoint</li>
            <li style={{ marginBottom: '8px' }}>Correlated hardware and software performance metrics for bottleneck analysis</li>
          </ul>
        </div>
      </section>

      <section 
        style={{
          ...sectionStyle,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 0.8s'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-5px)';
          e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
        }}
      >
        <h2 style={sectionTitle}>🔬 Research & Projects</h2>
        <div style={{ display: "grid", gap: 20, marginTop: 15 }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 20, 
            padding: 20, 
            background: "rgba(255,255,255,0.1)", 
            borderRadius: 15,
            border: "1px solid rgba(255,255,255,0.2)",
            transition: "all 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.15)";
            e.target.style.transform = "translateX(10px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.1)";
            e.target.style.transform = "translateX(0)";
          }}
          >
            <div style={{
              width: 80,
              height: 80,
              background: "linear-gradient(45deg, #ff6b9d, #c44569)",
              borderRadius: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              boxShadow: "0 8px 20px rgba(255,107,157,0.3)"
            }}>🧠</div>
            <div>
              <h4 style={{ margin: "0 0 8px 0", color: "white", fontSize: "1.2rem" }}>Cache Replacement Policy Analysis</h4>
              <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.8)" }}>LRU, RRIP (28% hit rate improvement)</p>
            </div>
          </div>
          
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 20, 
            padding: 20, 
            background: "rgba(255,255,255,0.1)", 
            borderRadius: 15,
            border: "1px solid rgba(255,255,255,0.2)",
            transition: "all 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.15)";
            e.target.style.transform = "translateX(10px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.1)";
            e.target.style.transform = "translateX(0)";
          }}
          >
            <div style={{
              width: 80,
              height: 80,
              background: "linear-gradient(45deg, #f8b500, #ff6b9d)",
              borderRadius: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              boxShadow: "0 8px 20px rgba(248,181,0,0.3)"
            }}>🏆</div>
            <div>
              <h4 style={{ margin: "0 0 8px 0", color: "white", fontSize: "1.2rem" }}>RSNA 2023 Abdominal Trauma Detection</h4>
              <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.8)" }}>Bronze medal on Kaggle (Top 91st rank)</p>
            </div>
          </div>
          
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 20, 
            padding: 20, 
            background: "rgba(255,255,255,0.1)", 
            borderRadius: 15,
            border: "1px solid rgba(255,255,255,0.2)",
            transition: "all 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.15)";
            e.target.style.transform = "translateX(10px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.1)";
            e.target.style.transform = "translateX(0)";
          }}
          >
            <div style={{
              width: 80,
              height: 80,
              background: "linear-gradient(45deg, #c44569, #f8b500)",
              borderRadius: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              boxShadow: "0 8px 20px rgba(196,69,105,0.3)"
            }}>🚗</div>
            <div>
              <h4 style={{ margin: "0 0 8px 0", color: "white", fontSize: "1.2rem" }}>Vehicle Number Plate Detection</h4>
              <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.8)" }}>CNN & YOLO implementation</p>
            </div>
          </div>
          
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 20, 
            padding: 20, 
            background: "rgba(255,255,255,0.1)", 
            borderRadius: 15,
            border: "1px solid rgba(255,255,255,0.2)",
            transition: "all 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.15)";
            e.target.style.transform = "translateX(10px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.1)";
            e.target.style.transform = "translateX(0)";
          }}
          >
            <div style={{
              width: 80,
              height: 80,
              background: "linear-gradient(45deg, #ff6b9d, #c44569)",
              borderRadius: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              boxShadow: "0 8px 20px rgba(255,107,157,0.3)"
            }}>🤖</div>
            <div>
              <h4 style={{ margin: "0 0 8px 0", color: "white", fontSize: "1.2rem" }}>NLP Sentiment Analysis</h4>
              <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.8)" }}>BERT and Falcon 7B fine-tuning</p>
            </div>
          </div>
        </div>
      </section>

      <section 
        style={{
          ...sectionStyle,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 1.0s'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-5px)';
          e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
        }}
      >
        <h2 style={sectionTitle}>🏆 Achievements</h2>
        <div style={{ display: 'grid', gap: '15px' }}>
          {[
            { icon: '🎯', title: 'GATE AIR-1267', year: '2023', desc: 'All India Rank 1267' },
            { icon: '🥉', title: 'Kaggle RSNA Challenge', year: '2023', desc: 'Bronze Medalist (91st rank)' },
            { icon: '🏅', title: 'BCECELE', year: '2018', desc: '8th rank' },
            { icon: '👨‍🏫', title: 'Teaching Assistant', year: '2023-2025', desc: 'Compiler Design, Machine Learning courses' }
          ].map((achievement, index) => (
            <div key={index} style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '20px',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.15)';
              e.target.style.transform = 'translateX(10px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
              e.target.style.transform = 'translateX(0)';
            }}
            >
              <div style={{ fontSize: '2rem' }}>{achievement.icon}</div>
              <div>
                <h4 style={{ color: 'white', margin: '0 0 5px 0', fontSize: '1.1rem' }}>{achievement.title}</h4>
                <p style={{ color: '#4ecdc4', margin: '0 0 3px 0', fontSize: '0.9rem', fontWeight: '600' }}>{achievement.year}</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '0.9rem' }}>{achievement.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section 
        style={{
          ...sectionStyle,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 1.2s'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-5px)';
          e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
        }}
      >
        <h2 style={sectionTitle}>📞 Contact</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <a href="mailto:surajanand200@gmail.com" style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.2)',
            textDecoration: 'none',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            <div style={{ fontSize: '2rem' }}>✉️</div>
            <div>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Email</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>surajanand200@gmail.com</p>
            </div>
          </a>
          
          <a href="tel:+917050412421" style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.2)',
            textDecoration: 'none',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            <div style={{ fontSize: '2rem' }}>📱</div>
            <div>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Phone</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>91 70504 12421</p>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/surajanand2000/" target="_blank" rel="noreferrer" style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.2)',
            textDecoration: 'none',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            <div style={{ fontSize: '2rem' }}>💼</div>
            <div>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>LinkedIn</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>linkedin.com/in/surajanand</p>
            </div>
          </a>
          
          <a href="https://github.com/rebelsuraj1506" target="_blank" rel="noreferrer" style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.2)',
            textDecoration: 'none',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            <div style={{ fontSize: '2rem' }}>🐙</div>
            <div>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>GitHub</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>github.com/surajanand</p>
            </div>
          </a>
        </div>
      </section>
      </div>
    </>
  );
};

const sectionStyle = {
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  marginBottom: 30,
  padding: "30px 40px",
  borderRadius: 20,
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden"
};

const sectionTitle = {
  background: "linear-gradient(45deg, #ff6b9d, #c44569, #f8b500)",
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "1.8rem",
  fontWeight: "700",
  marginBottom: 20,
  position: "relative",
  paddingBottom: 10,
  animation: "gradientShift 4s ease infinite"
};

export default Portfolio;
