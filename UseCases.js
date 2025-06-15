function UseCases({ currentLang }) {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const translations = {
            en: {
                title: "Transform Your Industry",
                subtitle: "Discover how ConnectmeAI empowers businesses across sectors with intelligent voice solutions",
                useCases: [
                    {
                        icon: "book-open",
                        title: "E-Learning & Education",
                        description: "Create engaging audio content for online courses, making education accessible to visually impaired students.",
                        benefits: ["Interactive Lessons", "Accessibility Support", "Multilingual Content"],
                        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400"
                    },
                    {
                        icon: "headphones",
                        title: "Podcasts & Media",
                        description: "Convert written content to professional-quality audio for podcasts, audiobooks, and media production.",
                        benefits: ["Professional Quality", "Time Efficient", "Cost Effective"],
                        image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400"
                    },
                    {
                        icon: "phone",
                        title: "Customer Service",
                        description: "Enhance customer experience with AI-powered voice assistants that speak your customers' language.",
                        benefits: ["24/7 Availability", "Regional Languages", "Consistent Quality"],
                        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400"
                    },
                    {
                        icon: "accessibility",
                        title: "Accessibility Solutions",
                        description: "Make digital content accessible to everyone with screen reader-compatible voice synthesis.",
                        benefits: ["WCAG Compliant", "Natural Voices", "Multiple Languages"],
                        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
                    }
                ]
            },
            hi: {
                title: "अपने उद्योग को बदलें",
                subtitle: "जानें कि कैसे ConnectmeAI बुद्धिमान आवाज समाधानों के साथ विभिन्न क्षेत्रों के व्यवसायों को सशक्त बनाता है",
                useCases: [
                    {
                        icon: "book-open",
                        title: "ई-लर्निंग और शिक्षा",
                        description: "ऑनलाइन पाठ्यक्रमों के लिए आकर्षक ऑडियो सामग्री बनाएं, दृष्टिबाधित छात्रों के लिए शिक्षा को सुलभ बनाएं।",
                        benefits: ["इंटरैक्टिव पाठ", "पहुंच समर्थन", "बहुभाषी सामग्री"],
                        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400"
                    },
                    {
                        icon: "headphones",
                        title: "पॉडकास्ट और मीडिया",
                        description: "पॉडकास्ट, ऑडियोबुक और मीडिया उत्पादन के लिए लिखित सामग्री को पेशेवर-गुणवत्ता ऑडियो में बदलें।",
                        benefits: ["पेशेवर गुणवत्ता", "समय कुशल", "लागत प्रभावी"],
                        image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400"
                    },
                    {
                        icon: "phone",
                        title: "ग्राहक सेवा",
                        description: "एआई-संचालित वॉयस असिस्टेंट के साथ ग्राहक अनुभव बढ़ाएं जो आपके ग्राहकों की भाषा बोलते हैं।",
                        benefits: ["24/7 उपलब्धता", "क्षेत्रीय भाषाएं", "निरंतर गुणवत्ता"],
                        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400"
                    },
                    {
                        icon: "accessibility",
                        title: "पहुंच समाधान",
                        description: "स्क्रीन रीडर-संगत वॉयस सिंथेसिस के साथ डिजिटल सामग्री को सभी के लिए सुलभ बनाएं।",
                        benefits: ["WCAG अनुपालित", "प्राकृतिक आवाजें", "कई भाषाएं"],
                        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
                    }
                ]
            }
        };

        const t = translations[currentLang] || translations.en;

        return (
            <section id="solutions" data-name="usecases" data-file="components/UseCases.js" 
                     className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            <span className="gradient-text">{t.title}</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            {t.subtitle}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {t.useCases.map((useCase, index) => (
                            <div key={index} className="glass-effect rounded-xl overflow-hidden hover-glow">
                                <div className="h-48 bg-gradient-to-r from-blue-600/20 to-amber-500/20 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center">
                                        <i data-lucide={useCase.icon} className="w-10 h-10 text-white"></i>
                                    </div>
                                </div>
                                
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {useCase.description}
                                    </p>
                                    
                                    <div className="space-y-3">
                                        {useCase.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <i data-lucide="check-circle" className="w-5 h-5 text-green-400"></i>
                                                <span className="text-gray-300">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <button className="mt-6 bg-gradient-to-r from-blue-600 to-amber-500 text-white px-6 py-3 rounded-lg hover-glow accessibility-focus">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                            <p className="text-gray-400 mb-6">
                                Join thousands of businesses using ConnectmeAI to create engaging, accessible content.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-blue-600 to-amber-500 text-white px-8 py-3 rounded-lg hover-glow accessibility-focus">
                                    Start Free Trial
                                </button>
                                <button className="border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors accessibility-focus">
                                    Schedule Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('UseCases component error:', error);
        reportError(error);
    }
}
