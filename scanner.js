document.getElementById('scanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const urlInput = document.getElementById('targetUrl').value;
    const loadingIndicator = document.getElementById('loadingIndicator');
    const scanButton = document.getElementById('scanButton');
    const resultsContainer = document.getElementById('scan-results');

    loadingIndicator.classList.remove('hidden');
    scanButton.disabled = true;
    resultsContainer.innerHTML = '';

    setTimeout(() => {
        let isSafe = true;
        const lowerUrl = urlInput.toLowerCase();

        const maliciousKeywords = ['phishing', 'malware', 'hack', 'test', 'spam', 'virus', 'free-money'];
        
        for (let word of maliciousKeywords) {
            if (lowerUrl.includes(word)) {
                isSafe = false;
                break;
            }
        }

        let resultHTML = '';
        
        const devDisclaimer = `
            <div class="mt-4 pt-4 border-t border-white/10 flex items-start gap-2">
                <svg class="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                <p class="text-xs text-slate-500">
                    <span class="text-amber-500/80 font-medium">Demo Version:</span> This analysis is a local decoy simulation. The live Threat Intelligence API integration is currently under development.
                </p>
            </div>
        `;

        if (isSafe) {
            resultHTML = `
                <div class="p-6 rounded-xl border bg-emerald-950/40 border-emerald-500/30 flex flex-col shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <div class="flex items-start space-x-5">
                        <div class="p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">Clean & Safe</h3>
                            <p class="text-slate-300 mt-1 break-all">No threats detected for: <span class="font-mono text-sm text-slate-500 ml-1">${urlInput}</span></p>
                        </div>
                    </div>
                    ${devDisclaimer}
                </div>
            `;
        } else {
            resultHTML = `
                <div class="p-6 rounded-xl border bg-red-950/40 border-red-500/40 flex flex-col shadow-[0_0_30px_rgba(220,38,38,0.15)] animate-pulse">
                    <div class="flex items-start space-x-5">
                        <div class="p-3 rounded-full bg-red-500/10 text-red-500 border border-red-500/30">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">Malicious Threat Detected</h3>
                            <p class="text-slate-300 mt-1 break-all">Warning! Suspicious patterns found in: <span class="font-mono text-sm text-slate-500 ml-1">${urlInput}</span></p>
                        </div>
                    </div>
                    ${devDisclaimer}
                </div>
            `;
        }

        resultsContainer.innerHTML = resultHTML;
        loadingIndicator.classList.add('hidden');
        scanButton.disabled = false;

    }, 2500);
});
