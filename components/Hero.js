function Hero() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <section id="home" data-name="hero" data-file="components/Hero.js" 
                     className="pt-24 pb-16 min-h-screen flex items-center">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                🎉 Introducing Grace AI Agent
                            </div>
                            
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                                Meet <span className="gradient-text">Grace</span>, Your AI Agent
                            </h1>
                            
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Grace handles customer calls with human-like conversation, 
                                understanding context and providing personalized responses for your business.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <button className="btn-primary text-lg px-8 py-4">
                                    Try Grace Now
                                </button>
                                <button className="btn-secondary text-lg px-8 py-4">
                                    Watch Demo
                                </button>
                            </div>

                            <div className="flex items-center space-x-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-400">99.9%</div>
                                    <div className="text-gray-400 text-sm">Uptime</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-400">2s</div>
                                    <div className="text-gray-400 text-sm">Response Time</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-400">50+</div>
                                    <div className="text-gray-400 text-sm">Integrations</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="glass-effect rounded-2xl p-8 animate-pulse-slow">
                                <div className="text-center mb-6">
                                    <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <i data-lucide="bot" className="w-16 h-16 text-white"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Grace AI</h3>
                                    <p className="text-purple-400">Your Intelligent Assistant</p>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="bg-purple-500/20 rounded-lg p-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce-slow"></div>
                                            <span className="text-sm text-gray-300">Currently handling 47 calls</span>
                                        </div>
                                        <div className="text-xs text-purple-300">Average wait time: 0 seconds</div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-300">Customer Satisfaction</span>
                                            <span className="text-purple-400">98%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full" style={{width: '98%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
    }
}
