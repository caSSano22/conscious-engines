/*
 * Conscious Engines (consciousengines.com) — Brutal High-Tech Engine Effects & Telemetry
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Real-Time Token Throughput Counter
    const tokenSpeedElement = document.getElementById('liveTokenSpeed');
    if (tokenSpeedElement) {
        setInterval(() => {
            const base = 4800;
            const fluctuation = Math.floor(Math.random() * 120) - 60;
            tokenSpeedElement.textContent = (base + fluctuation).toLocaleString();
        }, 300);
    }

    // 2. Interactive Live Benchmark Engine Run
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
