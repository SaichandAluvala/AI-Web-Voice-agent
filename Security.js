function Security() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const certifications = [
            { name: "HIPAA", description: "Healthcare data protection compliance" },
            { name: "SOC 2", description: "Security, availability, and confidentiality" },
            { name: "GDPR", description: "European data protection regulation" },
            { name: "ISO 27001", description: "Information security management" }
        ];

        return (
            <section id="security" data-name="security" data-file="components/Security.js" 
                     className="py-20 bg-gradient-to-b from-gray-900/20 to-transparent">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            <span className="gradient-text">Enterprise Security</span> & Compliance
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Your data is protected with industry-leading security measures and compliance certifications
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {certifications.map((cert, index) => (
                            <div key={index} className="glass-effect rounded-xl p-6 text-center hover-glow">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <i data-lucide="shield-check" className="w-8 h-8 text-white"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                                <p className="text-gray-400 text-sm">{cert.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="glass-effect rounded-xl p-8">
                            <i data-lucide="lock" className="w-12 h-12 text-purple-400 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-4">End-to-End Encryption</h3>
                            <p className="text-gray-400">All voice data and communications are encrypted in transit and at rest.</p>
                        </div>
                        <div className="glass-effect rounded-xl p-8">
                            <i data-lucide="server" className="w-12 h-12 text-purple-400 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-4">Secure Infrastructure</h3>
                            <p className="text-gray-400">Enterprise-grade cloud infrastructure with 99.9% uptime guarantee.</p>
                        </div>
                        <div className="glass-effect rounded-xl p-8">
                            <i data-lucide="eye-off" className="w-12 h-12 text-purple-400 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-4">Privacy First</h3>
                            <p className="text-gray-400">Zero data retention policy with complete customer data control.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Security component error:', error);
        reportError(error);
    }
}
