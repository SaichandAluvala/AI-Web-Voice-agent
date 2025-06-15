function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const [showAuthModal, setShowAuthModal] = React.useState(false);
        const [authMode, setAuthMode] = React.useState('signup');

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const openAuthModal = (mode) => {
            setAuthMode(mode);
            setShowAuthModal(true);
        };

        return (
            <header data-name="header" data-file="components/Header.js" 
                    className="fixed top-0 w-full z-50 glass-effect border-b border-purple-500/20">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">C</span>
                            </div>
                            <span className="text-2xl font-bold gradient-text">ConnectmeAI</span>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                            <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
                            <a href="#industries" className="text-gray-300 hover:text-white transition-colors">Industries</a>
                            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <button 
                                onClick={() => openAuthModal('signin')}
                                className="hidden md:block text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                Sign In
                            </button>
                            <button 
                                onClick={() => openAuthModal('signup')}
                                className="btn-primary"
                            >
                                Get Started
                            </button>
                            <button 
                                className="md:hidden text-white"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <i data-lucide="menu" className="w-6 h-6"></i>
                            </button>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 border-t border-purple-500/20 pt-4">
                            <div className="flex flex-col space-y-4">
                                <a href="#home" className="text-gray-300 hover:text-white">Home</a>
                                <a href="#demo" className="text-gray-300 hover:text-white">Demo</a>
                                <a href="#industries" className="text-gray-300 hover:text-white">Industries</a>
                                <a href="#features" className="text-gray-300 hover:text-white">Features</a>
                                <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
                                <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
                                <div className="pt-4 border-t border-purple-500/20">
                                    <button 
                                        onClick={() => openAuthModal('signin')}
                                        className="w-full text-left text-gray-300 hover:text-white mb-2"
                                    >
                                        Sign In
                                    </button>
                                    <button 
                                        onClick={() => openAuthModal('signup')}
                                        className="w-full btn-primary"
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {showAuthModal && (
                    <AuthModal 
                        mode={authMode} 
                        onClose={() => setShowAuthModal(false)}
                        onSwitchMode={setAuthMode}
                    />
                )}
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
