function CompanyDetail({ company, onBack, onAIAssistant }) {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const getCompanyContent = (companyName) => {
            switch(companyName) {
                case 'ABC Bank Loan1':
                    return {
                        title: 'ABC Bank Personal Loan',
                        description: 'Get instant personal loans with minimal documentation and quick approval process.',
                        features: [
                            'Instant approval in 30 minutes',
                            'Minimal documentation required',
                            'Flexible repayment options',
                            'No hidden charges',
                            'Pre-closure facility available'
                        ],
                        eligibility: [
                            'Age: 21-60 years',
                            'Monthly income: ₹25,000+',
                            'Employment: Salaried/Self-employed',
                            'Credit score: 700+'
                        ]
                    };
                case 'ABC Bank Loan2':
                    return {
                        title: 'ABC Bank Home Loan',
                        description: 'Fulfill your dream of owning a home with our attractive home loan schemes.',
                        features: [
                            'Competitive interest rates',
                            'Loan up to ₹5 Crores',
                            'Flexible tenure up to 30 years',
                            'Balance transfer facility',
                            'Tax benefits available'
                        ],
                        eligibility: [
                            'Age: 23-65 years',
                            'Monthly income: ₹50,000+',
                            'Property value assessment',
                            'CIBIL score: 750+'
                        ]
                    };
                default:
                    return {
                        title: 'ABC Bank Business Loan',
                        description: 'Grow your business with our tailored business loan solutions.',
                        features: [
                            'Working capital loans',
                            'Equipment financing',
                            'Business expansion loans',
                            'Overdraft facility',
                            'Quick disbursement'
                        ],
                        eligibility: [
                            'Business vintage: 3+ years',
                            'Annual turnover: ₹10L+',
                            'Good business credit history',
                            'ITR for last 3 years'
                        ]
                    };
            }
        };

        const content = getCompanyContent(company.name);

        return (
            <div data-name="company-detail" data-file="components/CompanyDetail.js" className="min-h-screen pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <div className="flex items-center mb-8">
                        <button 
                            onClick={onBack}
                            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                            <i data-lucide="arrow-left" className="w-5 h-5"></i>
                            Back to Loans
                        </button>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <i data-lucide="building-2" className="w-12 h-12 text-white"></i>
                            </div>
                            <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
                            <p className="text-xl text-gray-300">{content.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="glass-effect rounded-xl p-8">
                                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                    <i data-lucide="star" className="w-6 h-6 text-purple-400"></i>
                                    Key Features
                                </h3>
                                <ul className="space-y-3">
                                    {content.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <i data-lucide="check-circle" className="w-5 h-5 text-green-400"></i>
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="glass-effect rounded-xl p-8">
                                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                    <i data-lucide="user-check" className="w-6 h-6 text-purple-400"></i>
                                    Eligibility
                                </h3>
                                <ul className="space-y-3">
                                    {content.eligibility.map((criteria, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <i data-lucide="check-circle" className="w-5 h-5 text-blue-400"></i>
                                            <span className="text-gray-300">{criteria}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="glass-effect rounded-xl p-8 mb-8">
                                <h3 className="text-2xl font-semibold mb-4">Need Help?</h3>
                                <p className="text-gray-300 mb-6">
                                    Our AI assistant is here to help you with loan applications, 
                                    document requirements, and answer any questions you may have.
                                </p>
                            </div>
                            
                            <button 
                                onClick={() => onAIAssistant(company)}
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all"
                            >
                                Talk to Our AI Assistant
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('CompanyDetail component error:', error);
        reportError(error);
    }
}
