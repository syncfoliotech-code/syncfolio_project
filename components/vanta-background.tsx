/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect, useRef } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const VantaBackground = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(FOG({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
            }));
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    useEffect(() => {
        if (vantaEffect) {
            vantaEffect.setOptions({
                highlightColor: theme === 'dark' ? 0x8ecae6 : 0xadd8e6, 
                midtoneColor: theme === 'dark' ? 0x219ebc : 0x60a5fa,   
                lowlightColor: theme === 'dark' ? 0x023047 : 0x1e40af,  
                baseColor: theme === 'dark' ? 0x0d1222 : 0x1e40af,      
                blurFactor: 0.60,
                speed: 1.20,
                zoom: 0.80,
                // highlightColor: theme === 'dark' ? 0x60a5fa : 0xadd8e6,
                // midtoneColor: theme === 'dark' ? 0x1e40af : 0x87ceeb,
                // lowlightColor: theme === 'dark' ? 0x1c3d5a : 0x6495ed,
                // baseColor: theme === 'dark' ? 0x0d1222 : 0x1e90ff,
                // blurFactor: 0.50,
                // speed: 1.50,
                // zoom: 0.60,
            });
        }
    }, [vantaEffect, theme]);

    return (
        <div ref={vantaRef} style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0
        }}></div>
    );
};

export default VantaBackground;