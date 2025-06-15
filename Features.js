function Features() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const features = [
            {
                icon: "brain",
                title: "Natural Language Understanding",
                description: "Grace understands context, intent, and nuance in customer conversations."
            },
            {
                icon: "zap",
                title: "Real-time Responses",
                description: "Instant, intelligent responses that feel natural and human-like."
            },
            {
                icon: "shield-check",
                title: "Enterprise Security",
                description: "Bank-level security with SOC 2 compliance and data encryption."
            },
            {
                icon: "puzzle",
                title: "Easy Integration",
                description: "Seamlessly integrates with your existing CRM and business tools."
            },
            {
                icon: "trending-up",
                title: "Analytics & Insights",
                description: "Detailed analytics on customer interactions and satisfaction."
            },
            {
                icon: "clock",
                title: "24/7 Availability",
                description: "Grace never sleeps, providing round-the-clock customer support."
            }
        ];

        return (
            <section id="features" data-name="features" data-file="components/Features.js" 
                     className="py-20 bg-gradient-to-b from-transparent to-purple-900/10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Why Choose <span className="gradient-text">Grace</span>?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Powerful AI capabilities designed to transform your customer experience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="glass-effect rounded-xl p-8 hover-glow">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mb-6">
                                    <i data-lucide={feature.icon} className="w-6 h-6 text-white"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        reportError(error);
    }
}
