/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import styles from './theme-toggle.module.css';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => { setMounted(true) }, []);

  if (!mounted) {
    return <div className={styles.placeholder} />;
  }

  return (
    <button
      className={styles.toggleButton}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className={styles.sun} />
      <Moon className={styles.moon} />
    </button>
  );
}