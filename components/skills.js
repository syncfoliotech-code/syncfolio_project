"use client";
import { useEffect, useState, useRef } from 'react';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJira, FaBitbucket, FaLightbulb } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiOpenai, SiFlutter, SiDotnet } from 'react-icons/si';
import { TbBrain, TbRobot } from 'react-icons/tb';
import { BsCpuFill } from 'react-icons/bs';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './skills-section.module.css';

const skillsData = [
  
  { id: 1, name: "Artificial Intelligence Solutions", icon: <SiOpenai size={40} style={{ color: "#412991" }} /> },
  { id: 2, name: "AI-Powered Tech", icon: <TbBrain size={40} style={{ color: "#8A2BE2" }} /> },
  { id: 3, name: "Intelligent Automation", icon: <TbRobot size={40} style={{ color: "#00C4B3" }} /> },
  { id: 4, name: "AI-Driven Innovations", icon: <FaLightbulb size={40} style={{ color: "#FFD700" }} /> },
  { id: 5, name: "Advanced AI Tools", icon: <BsCpuFill size={40} style={{ color: "#A9A9A9" }} /> },

  { id: 6, name: ".NET MAUI", icon: <SiDotnet size={40} style={{ color: "#512BD4" }} /> },
  { id: 7, name: "Flutter", icon: <SiFlutter size={40} style={{ color: "#02569B" }} /> },
  { id: 8, name: "ASP.NET Core", icon: <SiDotnet size={40} style={{ color: "#512BD4" }} /> },
  
  { id: 9, name: "Next.js", icon: <SiNextdotjs size={40} className={styles.nextjsIcon} /> },
  { id: 10, name: "React & React Native", icon: <FaReact size={40} style={{ color: "#61DAFB" }} /> },
  { id: 11, name: "TypeScript", icon: <SiTypescript size={40} style={{ color: "#3178C6" }} /> },
  { id: 12, name: "Node.js", icon: <FaNodeJs size={40} style={{ color: "#8CC84B" }} /> },
  { id: 13, name: "AWS", icon: <FaAws size={40} style={{ color: "#FF9900" }} /> },
  { id: 14, name: "Docker", icon: <FaDocker size={40} style={{ color: "#2496ED" }} /> },
  { id: 15, name: "Git", icon: <FaGitAlt size={40} style={{ color: "#F05032" }} /> },
  { id: 16, name: "Jira", icon: <FaJira size={40} style={{ color: "#0052CC" }} /> }, 
  { id: 17, name: "Bitbucket", icon: <FaBitbucket size={40} style={{ color: "#0052CC" }} /> }, 
];

const SkillCard = ({ skill }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 300, damping: 40 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 40 });

    const rotateX = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / rect.width - 0.5);
        y.set(mouseY / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={styles.card}
        >
            <div style={{ transform: "translateZ(50px)" }}>
                {skill.icon}
            </div>
            <h3 style={{ transform: "translateZ(40px)" }} className={styles.cardTitle}>
                {skill.name}
            </h3>
        </motion.div>
    );
};


const SkillsSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const interval = setInterval(() => {
      if (!isUserInteracting) {
        setScrollPosition((prev) => {
          const maxScroll = scroller.scrollWidth / 2;
          return prev >= maxScroll ? 0 : prev + 0.5;
        });
      }
    }, 10);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  const handleInteraction = () => {
    setIsUserInteracting(true);
    setTimeout(() => setIsUserInteracting(false), 5000);
  };

  return (
    <div id="skills" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Technologies</h2>
        <div 
          className={styles.scrollerContainer}
          onMouseEnter={handleInteraction}
          onTouchStart={handleInteraction}
          onWheel={handleInteraction}
        >
          <div
            ref={scrollerRef}
            className={styles.scroller}
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {[...skillsData, ...skillsData].map((skill, index) => (
                <SkillCard key={`${skill.id}-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;