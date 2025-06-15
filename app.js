function App() {
    try {
        const [currentPage, setCurrentPage] = React.useState('home');
        const [selectedCompany, setSelectedCompany] = React.useState(null);

        React.useEffect(() => {
            lucide.createIcons();
            
            const handlePageChange = () => {
                if (window.showLoansPage) {
                    setCurrentPage('loans');
                    window.showLoansPage = false;
                }
            };
            
            window.addEventListener('pageChange', handlePageChange);
            return () => window.removeEventListener('pageChange', handlePageChange);
        }, []);

        const handleCompanySelect = (company) => {
            setSelectedCompany(company);
            setCurrentPage('company-detail');
        };

        const handleAIAssistant = (company) => {
            setSelectedCompany(company);
            setCurrentPage('ai-assistant');
        };

        const handleBackToHome = () => {
            setCurrentPage('home');
            setSelectedCompany(null);
        };

        const handleBackToLoans = () => {
            setCurrentPage('loans');
            setSelectedCompany(null);
        };

        const handleBackToCompany = () => {
            setCurrentPage('company-detail');
        };

        if (currentPage === 'loans') {
            return (
                <div data-name="app" data-file="app.js" className="min-h-screen">
                    <Header />
                    <LoansPage onBack={handleBackToHome} onCompanySelect={handleCompanySelect} />
                    <Footer />
                    <Chatbot />
                </div>
            );
        }

        if (currentPage === 'company-detail' && selectedCompany) {
            return (
                <div data-name="app" data-file="app.js" className="min-h-screen">
                    <Header />
                    <CompanyDetail 
                        company={selectedCompany} 
                        onBack={handleBackToLoans} 
                        onAIAssistant={handleAIAssistant}
                    />
                    <Footer />
                    <Chatbot />
                </div>
            );
        }

        if (currentPage === 'ai-assistant' && selectedCompany) {
            return (
                <div data-name="app" data-file="app.js" className="min-h-screen">
                    <Header />
                    <VapiAssistant 
                        company={selectedCompany} 
                        onBack={handleBackToCompany}
                    />
                    <Footer />
                    <Chatbot />
                </div>
            );
        }

        return (
            <div data-name="app" data-file="app.js" className="min-h-screen">
                <Header />
                <main>
                    <Hero />
                    <Demo />
                    <Industries />
                    <Features />
                    <Security />
                    <Pricing />
                    <Contact />
                </main>
                <Footer />
                <Chatbot />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
