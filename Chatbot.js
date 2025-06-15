function Chatbot() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);
        const [messages, setMessages] = React.useState([
            { role: 'bot', content: "Hi! I'm Grace from ConnectmeAI. How can I help you today?" }
        ]);
        const [inputText, setInputText] = React.useState('');

        React.useEffect(() => {
            lucide.createIcons();
        }, [isOpen]);

        const quickQuestions = [
            "What is ConnectmeAI?",
            "How does Grace AI work?",
            "What industries do you serve?",
            "What are your pricing plans?",
            "How secure is your platform?"
        ];

        const getResponse = (question) => {
            const q = question.toLowerCase();
            
            if (q.includes('connectmeai') || q.includes('what is')) {
                return "ConnectmeAI transforms contact centers with Grace, our AI agent that handles customer calls with human-like conversation and personalized responses.";
            }
            if (q.includes('grace') || q.includes('how does') || q.includes('work')) {
                return "Grace uses natural language understanding for real-time responses, integrates with your CRM, and provides 24/7 customer support with 99.9% uptime.";
            }
            if (q.includes('industries') || q.includes('serve')) {
                return "We serve Healthcare (HIPAA-compliant), Insurance (claims processing), Real Estate (property inquiries), and Finance (loan applications).";
            }
            if (q.includes('pricing') || q.includes('cost') || q.includes('plans')) {
                return "Free Trial: 14 days with 100 minutes. Professional: $0.05/minute unlimited. Enterprise: Custom pricing. Start your free trial today!";
            }
            if (q.includes('security') || q.includes('secure')) {
                return "Enterprise security with HIPAA, SOC 2, GDPR, ISO 27001 compliance. End-to-end encryption and privacy-first approach.";
            }
            if (q.includes('demo') || q.includes('try')) {
                return "You can try Grace now with our interactive demo or start a free 14-day trial. Would you like me to help you get started?";
            }
            if (q.includes('contact') || q.includes('support')) {
                return "Contact us at saichandved@gmail.com or call +91 9676636428. You can also schedule a personalized demo.";
            }
            return "I'd be happy to help! You can ask me about ConnectmeAI features, pricing, security, industries we serve, or how to get started.";
        };

        const handleSend = () => {
            if (!inputText.trim()) return;
            
            const userMessage = { role: 'user', content: inputText };
            const botResponse = { role: 'bot', content: getResponse(inputText) };
            
            setMessages(prev => [...prev, userMessage, botResponse]);
            setInputText('');
        };

        const handleQuickQuestion = (question) => {
            const userMessage = { role: 'user', content: question };
            const botResponse = { role: 'bot', content: getResponse(question) };
            
            setMessages(prev => [...prev, userMessage, botResponse]);
        };

        if (!isOpen) {
            return (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50 animate-bounce"
                >
                    <i data-lucide="message-circle" className="w-6 h-6"></i>
                </button>
            );
        }

        return (
            <div className="fixed bottom-6 right-6 w-96 h-[500px] glass-effect rounded-xl shadow-xl z-40">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                            <span className="text-white font-bold">G</span>
                        </div>
                        <div>
                            <h3 className="font-semibold">Grace AI</h3>
                            <p className="text-xs text-green-400">Online</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                        <i data-lucide="x" className="w-5 h-5"></i>
                    </button>
                </div>

                <div className="h-[350px] overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs p-3 rounded-lg ${
                                msg.role === 'user' 
                                    ? 'bg-purple-600 text-white' 
                                    : 'bg-gray-700 text-gray-100'
                            }`}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    
                    {messages.length === 1 && (
                        <div className="space-y-2">
                            <p className="text-gray-400 text-sm">Quick questions:</p>
                            {quickQuestions.map((q, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleQuickQuestion(q)}
                                    className="block w-full text-left p-2 bg-gray-800 hover:bg-gray-700 rounded text-sm transition-colors"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="p-4 border-t border-gray-700">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask me anything..."
                            className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm"
                        />
                        <button
                            onClick={handleSend}
                            className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
                        >
                            <i data-lucide="send" className="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Chatbot component error:', error);
        reportError(error);
    }
}
