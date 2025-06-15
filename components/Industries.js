function Industries() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const handleLoansClick = () => {
            window.showLoansPage = true;
            window.dispatchEvent(new CustomEvent('pageChange'));
        };

        const industries = [
            {
                icon: "heart",
                title: "Healthcare",
                description: "HIPAA-compliant virtual agents for patient scheduling, prescription refills, and medical inquiries.",
                features: ["Patient Scheduling", "Insurance Verification", "Prescription Management"]
            },
            {
                icon: "shield",
                title: "Insurance",
                description: "Streamline claims processing, policy inquiries, and customer support with intelligent automation.",
                features: ["Claims Processing", "Policy Information", "Premium Payments"]
            },
            {
                icon: "home",
                title: "Real Estate",
                description: "Automate property inquiries, appointment scheduling, and lead qualification processes.",
                features: ["Property Inquiries", "Viewing Appointments", "Lead Qualification"]
            },
            {
                icon: "banknote",
                title: "Loans & Finance",
                description: "Handle loan applications, payment inquiries, and financial consultations efficiently.",
                features: ["Loan Applications", "Payment Processing", "Credit Inquiries"],
                clickHandler: handleLoansClick
            }
        ];

        return (
            <section id="industries" data-name="industries" data-file="components/Industries.js" 
                     className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Trusted Across <span className="gradient-text">Industries</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Grace adapts to your industry's unique requirements and compliance standards
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {industries.map((industry, index) => (
                            <div key={index} 
                                 className={`glass-effect rounded-xl p-8 hover-glow ${industry.clickHandler ? 'cursor-pointer' : ''}`}
                                 onClick={industry.clickHandler}>
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <i data-lucide={industry.icon} className="w-8 h-8 text-white"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold mb-4">{industry.title}</h3>
                                        <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>
                                        <div className="space-y-2">
                                            {industry.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <i data-lucide="check" className="w-4 h-4 text-green-400"></i>
                                                    <span className="text-gray-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Industries component error:', error);
        reportError(error);
    }
}
