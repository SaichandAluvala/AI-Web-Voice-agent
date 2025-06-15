function Contact() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <section id="contact" data-name="contact" data-file="components/Contact.js" 
                     className="py-20 bg-gradient-to-b from-gray-900/20 to-transparent">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Ready to <span className="gradient-text">Get Started?</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Join hundreds of companies transforming their customer experience with Grace AI
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="glass-effect rounded-xl p-8">
                            <h3 className="text-2xl font-semibold mb-6">Contact Our Team</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                                        <i data-lucide="mail" className="w-6 h-6 text-white"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Email Us</h4>
                                        <p className="text-gray-400">saichandved@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                                        <i data-lucide="phone" className="w-6 h-6 text-white"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Call Us</h4>
                                        <p className="text-gray-400">+91 9676636428</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                                        <i data-lucide="calendar" className="w-6 h-6 text-white"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Schedule Demo</h4>
                                        <p className="text-gray-400">Book a personalized demo</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all">
                                Schedule Demo
                            </button>
                        </div>

                        <div className="glass-effect rounded-xl p-8">
                            <h3 className="text-2xl font-semibold mb-6">Start Your Free Trial</h3>
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" 
                                       className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400" />
                                <input type="email" placeholder="Work Email" 
                                       className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400" />
                                <input type="text" placeholder="Company Name" 
                                       className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400" />
                                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white">
                                    <option value="">Company Size</option>
                                    <option value="1-10">1-10 employees</option>
                                    <option value="11-50">11-50 employees</option>
                                    <option value="51-200">51-200 employees</option>
                                    <option value="200+">200+ employees</option>
                                </select>
                                <textarea placeholder="Tell us about your use case" rows="3"
                                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400"></textarea>
                                <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all">
                                    Start Free Trial
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
    }
}
