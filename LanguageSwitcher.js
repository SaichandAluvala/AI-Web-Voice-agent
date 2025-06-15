function LanguageSwitcher({ currentLang, onLanguageChange }) {
    try {
        const [isOpen, setIsOpen] = React.useState(false);
        
        const languages = [
            { code: 'en', name: 'English', flag: '🇺🇸' },
            { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
            { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
            { code: 'te', name: 'తెలుగు', flag: '🇮🇳' }
        ];

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <div data-name="language-switcher" data-file="components/LanguageSwitcher.js" 
                 className="relative">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors accessibility-focus"
                    aria-label="Select language"
                >
                    <span>{languages.find(l => l.code === currentLang)?.flag}</span>
                    <span className="hidden sm:inline">{languages.find(l => l.code === currentLang)?.name}</span>
                    <i data-lucide="chevron-down" className="w-4 h-4"></i>
                </button>

                {isOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-50">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    onLanguageChange(lang.code);
                                    setIsOpen(false);
                                }}
                                className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg accessibility-focus"
                            >
                                <span>{lang.flag}</span>
                                <span>{lang.name}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('LanguageSwitcher component error:', error);
        reportError(error);
    }
}
