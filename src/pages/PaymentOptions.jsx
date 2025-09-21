
// import React from 'react';
// import { CreditCard, Smartphone, QrCode, Banknote } from 'lucide-react';

// const PaymentOptions = () => {
//     React.useEffect(() => {
//         document.title = 'Payment Options - Smart Clean Solutions';
//     }, []);

//     return (
//         <div className="bg-gray-50 py-16">
//             {/* Header Section */}
//             <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
//                 <div className="max-w-7xl mx-auto px-6 text-center">
//                     <h1 className="text-4xl md:text-5xl font-bold mb-4">Payment Options</h1>
//                     <p className="text-xl text-blue-100">Safe and convenient payment options</p>
//                 </div>
//             </section>

//             {/* Payment Methods */}
//             <section className="py-16">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Make Payment?</h2>
//                         <p className="text-xl text-gray-600">Choose any option as per your convenience</p>
//                     </div>

//                     {/* UPI Payment */}
//                     <div className="mb-16">
//                         <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">UPI Payment (Instant)</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                             {[
//                                 { name: 'PhonePe', color: 'purple', icon: Smartphone, upi: 'smartclean@phonepe' },
//                                 { name: 'Google Pay', color: 'blue', icon: CreditCard, upi: 'smartclean@googlepay' },
//                                 { name: 'Paytm', color: 'indigo', icon: Smartphone, upi: 'smartclean@paytm' },
//                                 { name: 'BHIM UPI', color: 'green', icon: QrCode, upi: 'smartclean@upi' }
//                             ].map((method, idx) => (
//                                 <div key={idx} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
//                                     <div className={`bg-${method.color}-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center`}>
//                                         <method.icon className={`w-10 h-10 text-${method.color}-600`} />
//                                     </div>
//                                     <h4 className="text-xl font-semibold text-gray-900 mb-4">{method.name}</h4>
//                                     <div className="bg-gray-100 p-4 rounded-lg mb-4">
//                                         <QrCode className="w-32 h-32 mx-auto text-gray-400" />
//                                         <p className="text-sm text-gray-600 mt-2">Scan QR Code here</p>
//                                     </div>
//                                     <div className="space-y-2 text-sm">
//                                         <p><strong>UPI ID:</strong> {method.upi}</p>
//                                         <p><strong>Mobile:</strong> +91 98765 43210</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Other Payments */}
//                     <div>
//                         <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Other Payment Options</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                             {[
//                                 { title: 'Cash Payment', desc: 'Pay cash after service completion', color: 'green', icon: Banknote, items: ['Payment after service completion', 'Receipt provided', 'All denominations accepted'] },
//                                 { title: 'Bank Transfer', desc: 'Transfer directly to bank account', color: 'blue', icon: CreditCard, items: ['Account: Smart Clean Solutions', 'A/C No: 1234567890123456', 'IFSC: SBIN0001234', 'Bank: State Bank of India'] },
//                                 { title: 'Card Payment', desc: 'Pay with Credit/Debit card', color: 'purple', icon: Smartphone, items: ['All major cards accepted', 'Secure payment gateway', 'Instant confirmation'] },
//                             ].map((option, idx) => (
//                                 <div key={idx} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
//                                     <div className={`bg-${option.color}-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
//                                         <option.icon className={`w-10 h-10 text-${option.color}-600`} />
//                                     </div>
//                                     <h4 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h4>
//                                     <p className="text-gray-600 mb-4">{option.desc}</p>
//                                     <ul className="text-sm text-gray-600 space-y-2">
//                                         {option.items.map((item, i) => <li key={i}>✓ {item}</li>)}
//                                     </ul>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Instructions */}
//                     <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
//                         <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Payment Instructions</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                             <div>
//                                 <h4 className="text-lg font-semibold text-gray-800 mb-4">For UPI Payment:</h4>
//                                 <ol className="space-y-2 text-gray-700">
//                                     <li>1. Scan any QR code above</li>
//                                     <li>2. Or copy UPI ID</li>
//                                     <li>3. Enter amount</li>
//                                     <li>4. Complete payment</li>
//                                     <li>5. Send screenshot</li>
//                                 </ol>
//                             </div>
//                             <div>
//                                 <h4 className="text-lg font-semibold text-gray-800 mb-4">Important Notes:</h4>
//                                 <ul className="space-y-2 text-gray-700">
//                                     <li>• Wait until payment is confirmed</li>
//                                     <li>• Save transaction ID</li>
//                                     <li>• Call if any issues</li>
//                                     <li>• 24/7 payment support available</li>
//                                     <li>• All payments are 100% secure</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="text-center mt-6">
//                             <p className="text-lg font-semibold text-gray-800 mb-2">Payment Support:</p>
//                             <p className="text-xl font-bold text-blue-600">📞 +91 98765 43210</p>
//                             <p className="text-gray-600">Available from 8:00 AM to 10:00 PM</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default PaymentOptions;


import React from 'react';
import { CreditCard, Smartphone, QrCode, Banknote } from 'lucide-react';
import clsx from "clsx";

const PaymentOptions = () => {
    React.useEffect(() => {
        document.title = 'Payment Options - Smart Clean Solutions';
    }, []);

    const upiMethods = [
        { name: 'PhonePe', bg: 'bg-purple-100', text: 'text-purple-600', icon: Smartphone, upi: 'smartclean@phonepe' },
        { name: 'Google Pay', bg: 'bg-blue-100', text: 'text-blue-600', icon: CreditCard, upi: 'smartclean@googlepay' },
        { name: 'Paytm', bg: 'bg-indigo-100', text: 'text-indigo-600', icon: Smartphone, upi: 'smartclean@paytm' },
        { name: 'BHIM UPI', bg: 'bg-green-100', text: 'text-green-600', icon: QrCode, upi: 'smartclean@upi' },
    ];

    const otherPayments = [
        {
            title: 'Cash Payment',
            desc: 'Pay cash after service completion',
            bg: 'bg-green-100',
            text: 'text-green-600',
            icon: Banknote,
            items: [
                'Payment after service completion',
                'Receipt provided',
                'All denominations accepted',
            ],
        },
        {
            title: 'Bank Transfer',
            desc: 'Transfer directly to bank account',
            bg: 'bg-blue-100',
            text: 'text-blue-600',
            icon: CreditCard,
            items: [
                'Account: Smart Clean Solutions',
                'A/C No: 1234567890123456',
                'IFSC: SBIN0001234',
                'Bank: State Bank of India',
            ],
        },
        {
            title: 'Card Payment',
            desc: 'Pay with Credit/Debit card',
            bg: 'bg-purple-100',
            text: 'text-purple-600',
            icon: Smartphone,
            items: [
                'All major cards accepted',
                'Secure payment gateway',
                'Instant confirmation',
            ],
        },
    ];

    return (
        <div className="bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Payment Options</h1>
                    <p className="text-xl text-blue-100">Safe and convenient payment methods</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 max-w-7xl mx-auto px-6">
                {/* UPI Payment */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">UPI Payment (Instant)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {upiMethods.map((method, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className={clsx(method.bg, "p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center")}>
                                    <method.icon className={clsx("w-10 h-10", method.text)} />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-4">{method.name}</h4>
                                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                    <QrCode className="w-32 h-32 mx-auto text-gray-400" />
                                    <p className="text-sm text-gray-600 mt-2">Scan QR Code here</p>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p><strong>UPI ID:</strong> {method.upi}</p>
                                    <p><strong>Mobile:</strong> +91 99207 25398</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Payments */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Other Payment Options</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {otherPayments.map((option, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className={clsx(option.bg, "p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center")}>
                                    <option.icon className={clsx("w-10 h-10", option.text)} />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h4>
                                <p className="text-gray-600 mb-4">{option.desc}</p>
                                <ul className="text-sm text-gray-600 space-y-2 text-left">
                                    {option.items.map((item, i) => (
                                        <li key={i}>✓ {item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Instructions */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-10 shadow-md">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Payment Instructions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">For UPI Payment:</h4>
                            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                                <li>Scan any QR code above</li>
                                <li>Or copy UPI ID</li>
                                <li>Enter amount</li>
                                <li>Complete payment</li>
                                <li>Send screenshot for confirmation</li>
                            </ol>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">Important Notes:</h4>
                            <ul className="space-y-2 text-gray-700 list-disc list-inside">
                                <li>Wait until payment is confirmed</li>
                                <li>Save transaction ID</li>
                                <li>Call us if any issues</li>
                                <li>24/7 payment support available</li>
                                <li>All payments are 100% secure</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <p className="text-lg font-semibold text-gray-800 mb-2">Payment Support:</p>
                        <p className="text-2xl font-bold text-blue-600">📞 +91 99207 25398</p>
                        <p className="text-gray-600">Available from 8:00 AM to 10:00 PM</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaymentOptions;
