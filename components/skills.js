"use client";
import { useEffect, useState, useRef } from 'react';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './skills-section.module.css';

const skillsData = [
  { id: 1, name: "Next.js", icon: <SiNextdotjs size={40} className={styles.nextjsIcon} /> }, // Color handled by CSS
  { id: 2, name: "React & React Native", icon: <FaReact size={40} style={{ color: "#61DAFB" }} /> },
  { id: 3, name: "TypeScript", icon: <SiTypescript size={40} style={{ color: "#3178C6" }} /> },
  { id: 4, name: "Node.js", icon: <FaNodeJs size={40} style={{ color: "#8CC84B" }} /> },
  { id: 5, name: "AWS", icon: <FaAws size={40} style={{ color: "#FF9900" }} /> },
  { id: 6, name: "Docker", icon: <FaDocker size={40} style={{ color: "#2496ED" }} /> },
  { id: 7, name: "Git", icon: <FaGitAlt size={40} style={{ color: "#F05032" }} /> },
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