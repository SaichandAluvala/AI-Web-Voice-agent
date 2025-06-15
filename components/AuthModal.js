function AuthModal({ mode, onClose, onSwitchMode }) {
    try {
        const [step, setStep] = React.useState('type'); // type, form, success
        const [userType, setUserType] = React.useState('');
        const [formData, setFormData] = React.useState({
            fullName: '', companyName: '', email: '', phone: '', 
            password: '', confirmPassword: ''
        });

        React.useEffect(() => {
            lucide.createIcons();
        }, [step]);

        const handleSubmit = (e) => {
            e.preventDefault();
            if (formData.password !== formData.confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            setStep('success');
            setTimeout(() => onClose(), 2000);
        };

        if (mode === 'signin') {
            return (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 relative">
                        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                            <i data-lucide="x" className="w-6 h-6"></i>
                        </button>
                        
                        <h2 className="text-3xl font-bold mb-2 text-white text-center">Welcome Back</h2>
                        <p className="text-gray-400 text-center mb-8">Sign in to continue</p>
                        
                        <form className="space-y-4">
                            <input type="email" placeholder="Email Address" 
                                   className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400" required />
                            <input type="password" placeholder="Password"
                                   className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400" required />
                            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold">
                                Sign In
                            </button>
                        </form>
                        
                        <div className="mt-6 text-center">
                            <button onClick={() => onSwitchMode('signup')} className="text-purple-400 hover:text-purple-300">
                                Need an account? Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        if (step === 'success') {
            return (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 rounded-xl p-8 text-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <i data-lucide="check" className="w-8 h-8 text-white"></i>
                        </div>
                        <h2 className="text-2xl font-bold mb-2 text-white">Success!</h2>
                        <p className="text-gray-300">Account created successfully!</p>
                    </div>
                </div>
            );
        }

        if (step === 'type') {
            return (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 relative">
                        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                            <i data-lucide="x" className="w-6 h-6"></i>
                        </button>
                        
                        <h2 className="text-3xl font-bold mb-2 text-white text-center">Create Account</h2>
                        <p className="text-gray-400 text-center mb-8">Choose account type</p>
                        
                        <div className="space-y-4">
                            <button 
                                onClick={() => { setUserType('individual'); setStep('form'); }}
                                className="w-full p-4 border-2 border-gray-600 rounded-lg hover:border-purple-600 transition-colors text-left"
                            >
                                <h3 className="text-xl font-semibold text-white mb-2">Individual</h3>
                                <p className="text-gray-400">Personal account for individual use</p>
                            </button>
                            
                            <button 
                                onClick={() => { setUserType('business'); setStep('form'); }}
                                className="w-full p-4 border-2 border-gray-600 rounded-lg hover:border-purple-600 transition-colors text-left"
                            >
                                <h3 className="text-xl font-semibold text-white mb-2">Business</h3>
                                <p className="text-gray-400">Business account for organizations</p>
                            </button>
                        </div>
                        
                        <div className="mt-8 text-center">
                            <button onClick={() => onSwitchMode('signin')} className="text-purple-400 hover:text-purple-300">
                                Already have an account? Sign In
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 relative max-h-[90vh] overflow-y-auto">
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                        <i data-lucide="x" className="w-6 h-6"></i>
                    </button>
                    
                    <h2 className="text-2xl font-bold mb-2 text-white text-center">
                        {userType === 'business' ? 'Business Account' : 'Individual Account'}
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                        <input type="text" placeholder="Full Name" value={formData.fullName}
                               onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                               className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400" required />
                        
                        {userType === 'business' && (
                            <input type="text" placeholder="Company Name" value={formData.companyName}
                                   onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                                   className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400" required />
                        )}
                        
                        <input type="email" placeholder={userType === 'business' ? 'Work Email Address' : 'Email Address'} 
                               value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                               className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400" required />
                        
                        <input type="tel" placeholder="Mobile Number" value={formData.phone}
                               onChange={(e) => setFormData({...formData, phone: e.target.value})}
                               className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400" required />
                        
                        <input type="password" placeholder="Password" value={formData.password}
                               onChange={(e) => setFormData({...formData, password: e.target.value})}
                               className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400" required />
                        
                        <input type="password" placeholder="Confirm Password" value={formData.confirmPassword}
                               onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                               className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400" required />
                        
                        <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold">
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        );
    } catch (error) {
        console.error('AuthModal component error:', error);
        reportError(error);
    }
}
