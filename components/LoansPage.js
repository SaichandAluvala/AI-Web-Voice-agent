function LoansPage({ onBack, onCompanySelect }) {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const companies = [
            {
                id: 'abc-bank-loan1',
                name: 'ABC Bank Loan1',
                description: 'Personal loans with competitive interest rates',
                rate: '8.5% - 12%',
                amount: '₹50K - ₹50L'
            },
            {
                id: 'abc-bank-loan2',
                name: 'ABC Bank Loan2',
                description: 'Home loans for your dream house',
                rate: '7.2% - 9.5%',
                amount: '₹10L - ₹5Cr'
            },
            {
                id: 'abc-bank-loan3',
                name: 'ABC Bank Loan3',
                description: 'Business loans for entrepreneurs',
                rate: '9% - 15%',
                amount: '₹1L - ₹10Cr'
            }
        ];

        return (
            <div data-name="loans-page" data-file="components/LoansPage.js" className="min-h-screen pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <div className="flex items-center mb-8">
                        <button 
                            onClick={onBack}
                            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                            <i data-lucide="arrow-left" className="w-5 h-5"></i>
                            Back to Industries
                        </button>
                    </div>

                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                            <span className="gradient-text">Loans & Finance</span> Partners
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Choose from our trusted financial partners for your loan requirements
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {companies.map((company) => (
                            <div key={company.id} className="glass-effect rounded-xl p-8 hover-glow text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <i data-lucide="building-2" className="w-8 h-8 text-white"></i>
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-4">{company.name}</h3>
                                <p className="text-gray-400 mb-6">{company.description}</p>
                                
                                <div className="space-y-3 mb-8">
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Interest Rate:</span>
                                        <span className="text-purple-400 font-semibold">{company.rate}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Loan Amount:</span>
                                        <span className="text-purple-400 font-semibold">{company.amount}</span>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={() => onCompanySelect(company)}
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all"
                                >
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('LoansPage component error:', error);
        reportError(error);
    }
}
