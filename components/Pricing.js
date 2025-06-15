function Pricing() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <section id="pricing" data-name="pricing" data-file="components/Pricing.js" 
                     className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Simple <span className="gradient-text">Pricing</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Start with a free trial and scale with capacity-based pricing for production use
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="glass-effect rounded-xl p-8 hover-glow">
                            <h3 className="text-2xl font-semibold mb-4">Free Trial</h3>
                            <div className="text-4xl font-bold mb-2">$0</div>
                            <p className="text-gray-400 mb-8">14-day trial period</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <i data-lucide="check" className="w-5 h-5 text-green-400"></i>
                                    <span>100 call minutes included</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i data-lucide="check" className="w-5 h-5 text-green-400"></i>
                                    <span>Basic analytics</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i data-lucide="check" className="w-5 h-5 text-green-400"></i>
                                    <span>Email support</span>
                                </li>
                            </ul>
                            <button className="w-full border border-purple-600 text-purple-400 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
                                Start Free Trial
                            </button>
                        </div>

                        <div className="glass-effect rounded-xl p-8 hover-glow border-2 border-purple-600 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    Most Popular
                                </span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Professional</h3>
                            <div className="text-4xl font-bold mb-2">$0.05</div>
                            <p className="text-gray-400 mb-8">per call minute</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <i data-lucide="check" className="w-5 h-5 text-green-400"></i>
                                    <span>Unlimited call minutes</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i data-lucide="check" className="w-5 h-5 text-green-400"></i>
                                    <span>Advanced analytics</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i data-lucide="check" className="w-5 h-5 text-green-400"></i>
                                    <span>24/7 phone support</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i data-lucide="check" className="w-5 h-5 text-green-400"></i>
                                    <span>Custom integrations</span>
                                </li>
                            </ul>
                            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all">
                                Get Started
                            </button>
                        </div>

                        <div className="glass-effect rounded-xl p-8 hover-glow">
                            <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                            <div className="text-4xl font-bold mb-2">Custom</div>
                            <p className="text-gray-400 mb-8">Volume pricing</p>
                            <ul className="space-y-3 mb-8"> 
                                <li className="flex items-center gap-3">
                                    <i data-lucide="check" className="w-5 h-5 text-green-400"></i>
                                    <span>Volume discounts</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i data-lucide="check" className="w-5 h-5 text-green-400"></i>
                                    <span>Dedicated support</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i data-lucide="check" className="w-5 h-5 text-green-400"></i>
                                    <span>On-premise deployment</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i data-lucide="check" className="w-5 h-5 text-green-400"></i>
                                    <span>SLA guarantees</span>
                                </li>
                            </ul>
                            <button className="w-full border border-gray-600 text-gray-300 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Pricing component error:', error);
        reportError(error);
    }
}
