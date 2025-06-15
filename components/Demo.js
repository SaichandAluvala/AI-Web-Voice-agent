function Demo() {
    try {
        const [activeDemo, setActiveDemo] = React.useState('call');

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const demoTypes = [
            { id: 'call', name: 'Phone Call', icon: 'phone' },
            { id: 'chat', name: 'Live Chat', icon: 'message-circle' },
            { id: 'email', name: 'Email Response', icon: 'mail' }
        ];

        return (
            <section id="demo" data-name="demo" data-file="components/Demo.js" 
                     className="py-20 bg-gradient-to-b from-purple-900/10 to-transparent">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            See <span className="gradient-text">Grace</span> in Action
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Experience how Grace handles real customer interactions with natural conversation
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-center mb-8">
                            <div className="glass-effect rounded-xl p-2 flex space-x-2">
                                {demoTypes.map((demo) => (
                                    <button
                                        key={demo.id}
                                        onClick={() => setActiveDemo(demo.id)}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                                            activeDemo === demo.id 
                                                ? 'bg-purple-600 text-white' 
                                                : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                                        }`}
                                    >
                                        <i data-lucide={demo.icon} className="w-4 h-4"></i>
                                        {demo.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="glass-effect rounded-2xl p-8">
                            {activeDemo === 'call' && (
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">Customer Call Simulation</h3>
                                        <div className="bg-gray-800/50 rounded-lg p-4 space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                                    <i data-lucide="user" className="w-4 h-4 text-white"></i>
                                                </div>
                                                <div className="bg-blue-500/20 rounded-lg p-3 flex-1">
                                                    <p className="text-sm">"Hi, I need help with my recent order. It hasn't arrived yet."</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                                    <i data-lucide="bot" className="w-4 h-4 text-white"></i>
                                                </div>
                                                <div className="bg-purple-500/20 rounded-lg p-3 flex-1">
                                                    <p className="text-sm">"I'd be happy to help you track your order. Could you please provide me with your order number?"</p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                                    <i data-lucide="user" className="w-4 h-4 text-white"></i>
                                                </div>
                                                <div className="bg-blue-500/20 rounded-lg p-3 flex-1">
                                                    <p className="text-sm">"Sure, it's #ORD-12345"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">Real-time Analytics</h3>
                                        <div className="space-y-4">
                                            <div className="bg-gray-800/50 rounded-lg p-4">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-gray-300">Sentiment Analysis</span>
                                                    <span className="text-green-400">Positive</span>
                                                </div>
                                                <div className="w-full bg-gray-700 rounded-full h-2">
                                                    <div className="bg-green-400 h-2 rounded-full" style={{width: '85%'}}></div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-gray-800/50 rounded-lg p-4">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-gray-300">Confidence Level</span>
                                                    <span className="text-purple-400">96%</span>
                                                </div>
                                                <div className="w-full bg-gray-700 rounded-full h-2">
                                                    <div className="bg-purple-400 h-2 rounded-full" style={{width: '96%'}}></div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-gray-800/50 rounded-lg p-4">
                                                <div className="text-gray-300 mb-2">Detected Intent</div>
                                                <div className="text-white font-medium">Order Status Inquiry</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        <div className="text-center mt-8">
                            <button className="btn-primary text-lg px-8 py-4">
                                Start Free Trial
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Demo component error:', error);
        reportError(error);
    }
}
