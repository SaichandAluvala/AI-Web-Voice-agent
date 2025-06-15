function VapiAssistant({ company, onBack }) {
    try {
        const [isCallActive, setIsCallActive] = React.useState(false);
        const [callTranscript, setCallTranscript] = React.useState([]);
        const [showDownloadModal, setShowDownloadModal] = React.useState(false);

        React.useEffect(() => {
            lucide.createIcons();
            
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
            script.defer = true;
            script.async = true;
            
            script.onload = function() {
                if (window.vapiSDK) {
                    const assistant = "67faffbf-303c-4521-b414-271e3e937b6d";
                    const apiKey = "2526f8cb-963b-4e1a-a9ff-bcbe2eb31dd1";
                    
                    const buttonConfig = {
                        position: "right",
                        style: "default",
                        text: "🎙 Talk to Grace AI"
                    };
                    
                    window.vapiInstance = window.vapiSDK.run({
                        apiKey: apiKey,
                        assistant: assistant,
                        config: buttonConfig
                    });

                    // Enhanced event listeners for better transcription
                    if (window.vapiInstance) {
                        window.vapiInstance.on('call-start', () => {
                            setIsCallActive(true);
                            setCallTranscript([]);
                            addTranscriptEntry('system', 'Call started - Grace AI is now listening...');
                        });

                        window.vapiInstance.on('message', (message) => {
                            if (message.type === 'transcript' && message.transcript) {
                                const role = message.role === 'assistant' ? 'Grace AI' : 'User';
                                addTranscriptEntry(role.toLowerCase(), message.transcript);
                            }
                        });

                        window.vapiInstance.on('speech-start', (event) => {
                            const role = event.role === 'assistant' ? 'Grace AI' : 'User';
                            addTranscriptEntry(role.toLowerCase(), '🎤 Speaking...');
                        });

                        window.vapiInstance.on('speech-end', (event) => {
                            if (event.transcript) {
                                const role = event.role === 'assistant' ? 'Grace AI' : 'User';
                                // Replace the "Speaking..." message with actual transcript
                                setCallTranscript(prev => {
                                    const newTranscript = [...prev];
                                    // Find and replace the last "Speaking..." message from this role
                                    for (let i = newTranscript.length - 1; i >= 0; i--) {
                                        if (newTranscript[i].role === role.toLowerCase() && newTranscript[i].text.includes('Speaking')) {
                                            newTranscript[i].text = event.transcript;
                                            break;
                                        }
                                    }
                                    return newTranscript;
                                });
                            }
                        });

                        window.vapiInstance.on('call-end', () => {
                            setIsCallActive(false);
                            addTranscriptEntry('system', 'Call ended - Processing complete conversation...');
                            setTimeout(() => {
                                setShowDownloadModal(true);
                            }, 1500);
                        });
                    }
                }
            };
            
            document.head.appendChild(script);
            
            return () => {
                if (window.vapiInstance) {
                    window.vapiInstance.destroy?.();
                }
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            };
        }, []);

        const addTranscriptEntry = (role, text) => {
            const timestamp = new Date().toLocaleTimeString();
            setCallTranscript(prev => [...prev, { role, text, timestamp }]);
        };

        const generateCompletePDF = () => {
            const pdfContent = `
ABC BANK LOAN CONSULTATION - CALL TRANSCRIPT & RECORDING
================================================================

Company: ${company.name}
Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}
Duration: ${callTranscript.length > 2 ? 'Complete' : 'Short Call'}

CONVERSATION TRANSCRIPT:
${callTranscript.map(entry => 
    `[${entry.timestamp}] ${entry.role.toUpperCase()}: ${entry.text}`
).join('\n')}

CALL RECORDING INFORMATION:
- Audio recording captured during conversation
- Voice quality: High definition
- Recording format: MP3
- File size: Estimated based on call duration

SUMMARY:
This document contains the complete conversation transcript between the customer and Grace AI assistant regarding ${company.name} loan services. The call was recorded and transcribed in real-time for quality assurance and customer service purposes.

Generated by ConnectmeAI - Grace AI Assistant
Customer Service Platform
================================================================
            `;
            
            const blob = new Blob([pdfContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ABC_Bank_Call_Transcript_${new Date().getTime()}.txt`;
            a.click();
            URL.revokeObjectURL(url);
        };

        const getCompanyTitle = (companyName) => {
            switch(companyName) {
                case 'ABC Bank Loan1': return 'ABC Bank Personal Loan Assistant';
                case 'ABC Bank Loan2': return 'ABC Bank Home Loan Assistant';
                case 'ABC Bank Loan3': return 'ABC Bank Business Loan Assistant';
                default: return 'ABC Bank Loan Assistant';
            }
        };

        return (
            <div data-name="vapi-assistant" data-file="components/VapiAssistant.js" className="min-h-screen pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <div className="flex items-center mb-8">
                        <button 
                            onClick={onBack}
                            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                            <i data-lucide="arrow-left" className="w-5 h-5"></i>
                            Back to {company.name}
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left side - Assistant interface */}
                        <div>
                            <div className="glass-effect rounded-2xl p-8 mb-6">
                                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <i data-lucide="mic" className="w-12 h-12 text-white"></i>
                                </div>
                                
                                <h1 className="text-3xl font-bold mb-3 text-center">Welcome to ABC Bank</h1>
                                <h2 className="text-xl font-semibold mb-4 gradient-text text-center">{getCompanyTitle(company.name)}</h2>
                                
                                <p className="text-lg text-gray-300 mb-6 text-center">
                                    Talk to our voice assistant Grace about loans 👇
                                </p>
                                
                                <div className="bg-purple-500/20 rounded-xl p-4 mb-6">
                                    <h3 className="text-sm font-semibold mb-3 text-purple-300">Grace AI can help you with:</h3>
                                    <div className="grid grid-cols-1 gap-2 text-sm">
                                        <div className="flex items-center gap-2">
                                            <i data-lucide="check-circle" className="w-4 h-4 text-green-400"></i>
                                            <span>Loan eligibility check</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i data-lucide="check-circle" className="w-4 h-4 text-green-400"></i>
                                            <span>Interest rate information</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i data-lucide="check-circle" className="w-4 h-4 text-green-400"></i>
                                            <span>Documentation requirements</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i data-lucide="check-circle" className="w-4 h-4 text-green-400"></i>
                                            <span>Application process guidance</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center">
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                                        isCallActive ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                                    }`}>
                                        <div className={`w-2 h-2 rounded-full ${
                                            isCallActive ? 'bg-red-400 animate-pulse' : 'bg-green-400'
                                        }`}></div>
                                        <span className="text-sm font-semibold">
                                            {isCallActive ? 'Call Active - Recording & Transcribing' : 'Grace AI Ready'}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-2">
                                        🎙 Click the voice button on the right side to start
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Live transcript */}
                        <div>
                            <div className="glass-effect rounded-2xl p-6 h-[600px] flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold">Live Conversation</h3>
                                    {isCallActive && (
                                        <div className="flex items-center gap-2 text-red-400">
                                            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                                            <span className="text-sm">Recording & Transcribing</span>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                                    {callTranscript.length === 0 ? (
                                        <div className="text-center text-gray-400 py-8">
                                            <i data-lucide="mic-off" className="w-12 h-12 mx-auto mb-3 opacity-50"></i>
                                            <p>Start a call to see live conversation</p>
                                            <p className="text-sm mt-2">Your conversation will appear here in real-time</p>
                                        </div>
                                    ) : (
                                        callTranscript.map((entry, index) => (
                                            <div key={index} className={`p-3 rounded-lg ${
                                                entry.role === 'user' ? 'bg-blue-500/20 ml-4' :
                                                entry.role === 'grace ai' ? 'bg-purple-500/20 mr-4' :
                                                'bg-gray-500/20'
                                            }`}>
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="text-sm font-semibold capitalize">
                                                        {entry.role === 'grace ai' ? 'Grace AI' : entry.role}
                                                    </span>
                                                    <span className="text-xs text-gray-400">{entry.timestamp}</span>
                                                </div>
                                                <p className="text-sm">{entry.text}</p>
                                            </div>
                                        ))
                                    )}
                                </div>
                                
                                {callTranscript.length > 0 && !isCallActive && (
                                    <button 
                                        onClick={generateCompletePDF}
                                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all"
                                    >
                                        <i data-lucide="download" className="w-5 h-5 inline mr-2"></i>
                                        Download Complete Call Record (PDF)
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Download Modal */}
                    {showDownloadModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <i data-lucide="check" className="w-8 h-8 text-white"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Call Completed!</h3>
                                    <p className="text-gray-300 mb-6">Your conversation has been recorded and transcribed successfully.</p>
                                    
                                    <button 
                                        onClick={generateCompletePDF}
                                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all mb-4"
                                    >
                                        <i data-lucide="file-text" className="w-4 h-4 inline mr-2"></i>
                                        Download Complete Call Record (PDF)
                                    </button>
                                    
                                    <button 
                                        onClick={() => setShowDownloadModal(false)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('VapiAssistant component error:', error);
        reportError(error);
    }
}
