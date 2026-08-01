/*
 * Conscious Engines — 3D, Particles, Parallax & Futuristic Loading Progress
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Futuristic Top Loading Progress Bar Animation
    const topLoader = document.getElementById('ceTopLoader');
    if (topLoader) {
        topLoader.style.width = '60%';
        setTimeout(() => {
            topLoader.style.width = '100%';
            setTimeout(() => {
                topLoader.classList.add('loaded');
            }, 300);
        }, 150);
    }

    // 2. Ambient Particle Canvas Animation
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = Array.from({ length: 45 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 2 + 1,
            alpha: Math.random() * 0.4 + 0.1
        }));

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);

            // Draw connecting lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(2, 132, 199, ${0.12 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            // Draw particle dots
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(2, 132, 199, ${p.alpha})`;
                ctx.fill();
            });

            requestAnimationFrame(drawParticles);
        }

        drawParticles();
    }

    // 3. Interactive 3D Card Tilt Effect
    const tiltCards = document.querySelectorAll('.ce-card, .stat-box, .job-item');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const rotateX = (-y / rect.height) * 12;
            const rotateY = (x / rect.width) * 12;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });

    // 4. Parallax Scroll Effect on Ambient Glows & Notes
    const parallaxElements = document.querySelectorAll('.hand-note, .hero-title');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        parallaxElements.forEach(el => {
            el.style.transform = `translateY(${scrollY * 0.08}px)`;
        });
    });

    // 5. Live Token Speed Fluctuation Ticker
    const tokenSpeedElement = document.getElementById('liveTokenSpeed');
    if (tokenSpeedElement) {
        setInterval(() => {
            const base = 4800;
            const fluctuation = Math.floor(Math.random() * 120) - 60;
            tokenSpeedElement.textContent = (base + fluctuation).toLocaleString();
        }, 300);
    }

    // 6. Interactive Benchmark Telemetry Simulator
    const runBenchBtn = document.getElementById('runBenchBtn');
    const benchLogContainer = document.getElementById('benchLog');

    if (runBenchBtn && benchLogContainer) {
        runBenchBtn.addEventListener('click', () => {
            runBenchBtn.disabled = true;
            runBenchBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> RUNNING CUDA INFERENCE...';
            benchLogContainer.innerHTML = '<span class="text-primary">// ALLOCATING GPU MEMORY ENCLAVE...</span>';

            const logs = [
                '// COMPRESSING 400B TEACHER ATTENTION WEIGHTS TO 3B STUDENT...',
                '// FUSING FP8 CUDA KERNELS FOR SUB-MS ON-DEVICE INFERENCE...',
                '// SUCCESS: 1,024 TOKENS GENERATED IN 11.8ms (86,779 TOKENS/SEC)'
            ];

            logs.forEach((log, index) => {
                setTimeout(() => {
                    benchLogContainer.innerHTML += `<br><span class="text-success">${log}</span>`;
                }, (index + 1) * 350);
            });

            setTimeout(() => {
                runBenchBtn.disabled = false;
                runBenchBtn.innerHTML = '<i class="bi bi-cpu-fill me-1"></i> RUN LIVE INFERENCE BENCHMARK';
            }, 1500);
        });
    }
});
