function renderDashboardTabContent(daysHtml, selectedDayContent) {
            if (appState.dashboardTab === 'tasks') {
                return `
                    <div class="space-y-6">
                        <!-- Improved Day 1 Spotlight & Quick Status Card -->
                        <div class="glass-panel p-8 rounded-[2.5rem] border border-cyan-500/30 space-y-4">
                            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                <div class="space-y-1">
                                    <span class="text-xs font-extrabold text-cyan-400 uppercase tracking-widest">Featured Milestone</span>
                                    <h3 class="text-2xl font-extrabold text-white">Day 1: Environment Setup & Hello World</h3>
                                </div>
                                <span class="text-xs ${appState.isSubmitted ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25' : 'bg-amber-500/10 text-amber-400 border-amber-500/25'} border px-4 py-1.5 rounded-full font-bold">
                                    ${appState.isSubmitted ? 'Completed & Verified ✓' : 'In Progress / Pending'}
                                </span>
                            </div>
                            <p class="text-slate-300 text-sm leading-relaxed font-medium">
                                Kick off your 60-day challenge by initializing your public GitHub repository, configuring your development environment, and submitting your initial proof of work.
                            </p>
                            <div class="pt-2 flex flex-wrap items-center gap-4">
                                <button onclick="router.navigateTo('/day/1')" class="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-6 py-3 rounded-xl text-xs transition shadow-lg shadow-cyan-500/20">
                                    Open Day 1 Submission Portal →
                                </button>
                            </div>
                        </div>

                        <!-- Day-Wise Interactive Calendar Grid -->
                        <div class="glass-panel p-8 rounded-[2.5rem] space-y-6">
                            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                <div>
                                    <h3 class="text-xl font-extrabold text-white">60-Day Challenge Calendar</h3>
                                    <p class="text-xs text-slate-400">Click any unlocked day below to inspect completed work and logs.</p>
                                </div>
                                <span class="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3.5 py-1.5 rounded-full font-bold">Selected: Day ${appState.selectedCalendarDay}</span>
                            </div>

                            <div class="grid grid-cols-5 sm:grid-cols-10 gap-2.5 max-h-72 overflow-y-auto pr-2">
                                ${daysHtml}
                            </div>
                        </div>

                        <!-- Selected Day Inspector Box -->
                        <div class="glass-panel p-8 rounded-[2.5rem] border border-cyan-500/30">
                            ${selectedDayContent}
                        </div>
                    </div>
                `;
            } else if (appState.dashboardTab === 'leaderboard') {
                return `
                    <div class="glass-panel p-8 rounded-[2.5rem] space-y-6">
                        <h4 class="text-sm font-extrabold text-slate-300 uppercase tracking-wider">Top Cohort Performers</h4>
                        <div class="space-y-3.5">
                            <div class="flex justify-between items-center bg-slate-900/90 p-4.5 rounded-2xl border border-slate-800">
                                <span class="font-extrabold text-white text-sm">1. Priyanshu Sharma</span>
                                <span class="text-cyan-400 font-extrabold text-xs">1 Day Streak 🔥 (50 SP)</span>
                            </div>
                            <div class="flex justify-between items-center bg-cyan-500/10 p-4.5 rounded-2xl border border-cyan-500/30">
                                <span class="font-extrabold text-cyan-300 text-sm">2. Ishaan Thusoo (You)</span>
                                <span class="text-cyan-400 font-extrabold text-xs">1 Day Streak 🔥 (${appState.synergyPoints} SP)</span>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="glass-panel p-8 lg:p-10 rounded-[2.5rem] space-y-6 animate-fadeIn">
                        <div class="space-y-2">
                            <span class="text-xs font-extrabold text-cyan-400 uppercase tracking-widest">Support Portal</span>
                            <h3 class="text-2xl font-extrabold text-white">Dashboard Contact Us</h3>
                            <p class="text-slate-400 text-sm">Need help with your Day 1 streak or submissions? Reach out directly to Team Vitality.</p>
                        </div>
                        <div class="space-y-4">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-bold uppercase text-slate-400 mb-2">Your Name</label>
                                    <input type="text" placeholder="Ishaan Thusoo" class="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold uppercase text-slate-400 mb-2">College Email</label>
                                    <input type="email" placeholder="student@university.ac.in" class="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400">
                                </div>
                            </div>
                            <div>
                                <label class="block text-xs font-bold uppercase text-slate-400 mb-2">Issue / Message</label>
                                <textarea rows="3" placeholder="Describe your issue regarding submission..." class="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 resize-none"></textarea>
                            </div>
                            <button onclick="showToast('✅ Inquiry sent from Dashboard to Team Vitality!')" class="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold py-4 px-8 rounded-2xl text-sm transition shadow-lg shadow-cyan-500/20">
                                Submit Support Ticket 📨
                            </button>
                        </div>
                    </div>
                `;
            }
        }
