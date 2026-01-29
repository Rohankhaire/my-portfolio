import React, { useEffect, useRef } from 'react';

const CyberBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = container.clientWidth;
        let height = container.clientHeight;

        const resize = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        // Particle System
        const particles: { x: number; y: number; vx: number; vy: number; brightness: number }[] = [];
        const particleCount = Math.floor((width * height) / 10000); // Increased density (from 15000)

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 1.5, // Faster movement
                vy: (Math.random() - 0.5) * 1.5,
                brightness: Math.random()
            });
        }

        let mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Draw Grid Background
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)'; // Slightly brighter grid reference if we used it
            ctx.lineWidth = 1;

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Mouse interaction (repel/attract)
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 250) { // Increased interaction radius
                    ctx.fillStyle = `rgba(0, 255, 255, ${1 - dist / 250})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2); // Larger particles near mouse
                    ctx.fill();

                    // Draw line to mouse
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 255, 255, ${0.4 * (1 - dist / 250)})`; // Brighter lines
                    ctx.lineWidth = 1.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                } else {
                    ctx.fillStyle = `rgba(0, 255, 255, ${p.brightness * 0.5 + 0.1})`; // Brighter base particles
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2); // Larger base particles
                    ctx.fill();
                }

                // Connect nearby particles
                particles.slice(i + 1).forEach(p2 => {
                    const dx2 = p.x - p2.x;
                    const dy2 = p.y - p2.y;
                    const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                    if (dist2 < 120) { // Increased connection distance
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 255, 255, ${0.15 * (1 - dist2 / 120)})`; // Brighter connections
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none">
            <canvas ref={canvasRef} className="block" />

            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-60" />
        </div>
    );
};

export default CyberBackground;
