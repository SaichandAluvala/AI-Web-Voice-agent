function TTSDemo({ currentLang }) {
    try {
        const [text, setText] = React.useState('');
        const [selectedVoice, setSelectedVoice] = React.useState('hi-IN-female');
        const [isPlaying, setIsPlaying] = React.useState(false);
        const [audioUrl, setAudioUrl] = React.useState('');

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const translations = {
            en: {
                title: "Try Our Text-to-Speech Demo",
                subtitle: "Experience natural-sounding voices in Hindi and English",
                placeholder: "Type your text here to convert to speech...",
                sampleHindi: "नमस्ते, मैं एक आर्टिफिशियल इंटेलिजेंस हूं।",
                sampleEnglish: "Hello, I am an artificial intelligence assistant.",
                playAudio: "Play Audio",
                stopAudio: "Stop Audio",
                download: "Download",
                voiceOptions: "Voice Options"
            },
            hi: {
                title: "हमारा टेक्स्ट-टू-स्पीच डेमो आज़माएं",
                subtitle: "हिंदी और अंग्रेजी में प्राकृतिक आवाजों का अनुभव करें",
                placeholder: "भाषण में बदलने के लिए यहां अपना टेक्स्ट टाइप करें...",
                sampleHindi: "नमस्ते, मैं एक आर्टिफिशियल इंटेलिजेंस हूं।",
                sampleEnglish: "Hello, I am an artificial intelligence assistant.",
                playAudio: "ऑडियो चलाएं",
                stopAudio: "ऑडियो रोकें",
                download: "डाउनलोड करें",
                voiceOptions: "आवाज विकल्प"
            }
        };

        const t = translations[currentLang] || translations.en;

        const voices = [
            { id: 'hi-IN-female', name: 'Hindi Female', lang: 'hi', gender: 'female' },
            { id: 'hi-IN-male', name: 'Hindi Male', lang: 'hi', gender: 'male' },
            { id: 'en-IN-female', name: 'English (Indian) Female', lang: 'en', gender: 'female' },
            { id: 'en-US-female', name: 'English (US) Female', lang: 'en', gender: 'female' }
        ];

        const handlePlayDemo = async () => {
            if (!text.trim()) return;
            
            setIsPlaying(true);
            try {
                const result = await TTSEngine.synthesizeSpeech(text, selectedVoice);
                setAudioUrl(result.audioUrl);
                setIsPlaying(false);
            } catch (error) {
                console.error('TTS Demo error:', error);
                setIsPlaying(false);
            }
        };

        const loadSample = (sample) => {
            setText(sample);
        };

        return (
            <section data-name="tts-demo" data-file="components/TTSDemo.js" 
                     className="py-20 bg-gradient-to-b from-gray-900/20 to-transparent">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            <span className="gradient-text">{t.title}</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            {t.subtitle}
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="glass-effect rounded-xl p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-medium mb-2">{t.voiceOptions}</label>
                                    <select 
                                        value={selectedVoice}
                                        onChange={(e) => setSelectedVoice(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                                    >
                                        {voices.map((voice) => (
                                            <option key={voice.id} value={voice.id}>{voice.name}</option>
                                        ))}
                                    </select>

                                    <div className="mt-4 space-y-2">
                                        <button 
                                            onClick={() => loadSample(t.sampleHindi)}
                                            className="w-full text-left px-3 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-sm"
                                        >
                                            Hindi Sample: {t.sampleHindi}
                                        </button>
                                        <button 
                                            onClick={() => loadSample(t.sampleEnglish)}
                                            className="w-full text-left px-3 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-sm"
                                        >
                                            English Sample: {t.sampleEnglish}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Text Input</label>
                                    <textarea
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder={t.placeholder}
                                        className="w-full h-32 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white resize-none"
                                        maxLength={500}
                                    />
                                    <div className="text-right text-sm text-gray-400 mt-1">
                                        {text.length}/500
                                    </div>

                                    <div className="flex gap-4 mt-4">
                                        <button
                                            onClick={handlePlayDemo}
                                            disabled={!text.trim() || isPlaying}
                                            className="flex-1 bg-gradient-to-r from-blue-600 to-amber-500 text-white px-6 py-3 rounded-lg disabled:opacity-50 hover-glow"
                                        >
                                            {isPlaying ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <i data-lucide="loader" className="w-4 h-4 animate-spin"></i>
                                                    Processing...
                                                </span>
                                            ) : (
                                                <span className="flex items-center justify-center gap-2">
                                                    <i data-lucide="play" className="w-4 h-4"></i>
                                                    {t.playAudio}
                                                </span>
                                            )}
                                        </button>
                                        
                                        {audioUrl && (
                                            <button className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                                                <i data-lucide="download" className="w-4 h-4"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('TTSDemo component error:', error);
        reportError(error);
    }
}
