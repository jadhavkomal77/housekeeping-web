
import React, { useState, useEffect } from "react";
import { Banknote, CreditCard, Smartphone, ShieldCheck, Users, Lock, Copy } from "lucide-react";
import clsx from "clsx";
import { QRCodeCanvas } from "qrcode.react";

const PaymentOptions = () => {
    const upiId = "technohousekeeping96-2@oksbi";
    const [copied, setCopied] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(upiId);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            alert("Unable to copy. Please copy manually.");
        }
    };

    const otherPayments = [
        {
            title: "Cash Payment",
            desc: "Pay cash after service completion",
            bg: "bg-green-100",
            text: "text-green-600",
            icon: Banknote,
            items: ["Payment after service completion", "Receipt provided", "All denominations accepted"],
        },
        {
            title: "Bank Transfer",
            desc: "Transfer directly to bank account",
            bg: "bg-blue-100",
            text: "text-blue-600",
            icon: CreditCard,
            items: ["Account: Smart Clean Solutions", "A/C No: 1234567890123456", "IFSC: SBIN0001234", "Bank: State Bank of India"],
        },
        {
            title: "Card Payment",
            desc: "Pay with Credit/Debit card",
            bg: "bg-purple-100",
            text: "text-purple-600",
            icon: Smartphone,
            items: ["All major cards accepted", "Secure payment gateway", "Instant confirmation"],
        },
    ];

    const phonePeLink = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(
        "Techno Housekeeping"
    )}&cu=INR&tn=${encodeURIComponent("Payment for services")}`;

    const handlePhonePeClick = () => {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isMobile) {
            window.location.href = phonePeLink;
        } else {
            alert("PhonePe payments work only on mobile devices with PhonePe installed.");
        }
    };

    const qrSize = Math.min(300, windowWidth * 0.8);
    // const qrSize = Math.min(220, windowWidth * 0.7);


    return (
        <div className="bg-gray-50 py-8 px-4 md:px-12 min-h-screen overflow-x-hidden">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-12">
                <header className="text-center mb-10 md:mb-12">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-blue-700 mb-2">Techno Housekeeping</h1>
                    <p className="text-md md:text-lg text-gray-600">Hassle-free & secure payment options</p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start mb-12">
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Pay via UPI</h2>

                        <div className="flex justify-center items-center w-full">
                            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] p-4 bg-white rounded-xl border shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                                <div className="w-full aspect-square flex items-center justify-center">
                                    <QRCodeCanvas
                                        value={`upi://pay?pa=${upiId}&pn=Techno%20Housekeeping&cu=INR&tn=Payment`}
                                        size={256}
                                        level="H"
                                        includeMargin={true}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 font-medium mt-6">UPI ID</p>
                        <div
                            className="flex justify-center items-center gap-2 bg-gray-100 rounded-xl py-2 px-4 w-full sm:w-fit mx-auto mt-2 cursor-pointer hover:bg-gray-200 transition"
                            onClick={copyToClipboard}
                        >
                            <span className="text-blue-600 font-bold text-lg">{upiId}</span>
                            <Copy className="w-5 h-5 text-gray-500" />
                        </div>
                        {copied && <p className="text-sm text-green-600 mt-2">Copied to clipboard!</p>}

                        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6 w-full">
                            <button
                                onClick={handlePhonePeClick}
                                className="px-5 py-3 w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-indigo-700 transition inline-flex items-center justify-center"
                            >
                                Pay with PhonePe
                            </button>
                        </div>

                        <p className="text-sm text-gray-500 mt-4">Scan the QR or use PhonePe to pay directly.</p>
                    </div>

                    <aside className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Payment Instructions</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-md font-medium text-gray-800 mb-2">For UPI Payment</h4>
                                <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm">
                                    <li>Open PhonePe app (or any UPI app that supports UPI links).</li>
                                    <li>Scan the QR code or click “Pay with PhonePe”.</li>
                                    <li>Enter the exact amount and confirm.</li>
                                    <li>Save the transaction ID / screenshot.</li>
                                    <li>Share screenshot for order confirmation (optional).</li>
                                </ol>
                            </div>

                            <div>
                                <h4 className="text-md font-medium text-gray-800 mb-2">Important Notes</h4>
                                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                                    <li>Wait for payment confirmation before service begins.</li>
                                    <li>Keep transaction ID for reference.</li>
                                    <li>Contact support if payment fails or is delayed.</li>
                                    <li>All transactions are secure and encrypted.</li>
                                </ul>
                            </div>

                            <div className="text-center pt-2 border-t border-gray-200">
                                <p className="text-sm font-medium text-gray-800 mb-1">Payment Support</p>
                                <p className="text-lg font-bold text-blue-600">📞 +91 99207 25398</p>
                                <p className="text-sm text-gray-500">Available 8:00 AM – 10:00 PM</p>
                            </div>
                        </div>
                    </aside>
                </section>

                <hr className="my-10 border-gray-200" />

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Other Payment Options</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {otherPayments.map((option, idx) => (
                            <article
                                key={idx}
                                className="bg-white border rounded-2xl shadow-md hover:shadow-xl p-6 transition transform hover:-translate-y-1"
                            >
                                <div className="flex flex-col items-center">
                                    <div
                                        className={clsx(option.bg, "p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4")}
                                    >
                                        <option.icon className={clsx("w-10 h-10", option.text)} />
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h4>
                                    <p className="text-gray-500 text-sm mb-4">{option.desc}</p>
                                    <ul className="text-sm text-gray-700 text-left space-y-2 w-full max-w-xs">
                                        {option.items.map((it, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-green-500 mt-1">✓</span>
                                                <span>{it}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <footer className="mt-8 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Trusted & Secure Payments</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <div className="flex flex-col items-center hover:scale-105 transition">
                            <ShieldCheck className="w-8 h-8 text-blue-600" />
                            <p className="text-sm text-gray-600 mt-2">100% Secure</p>
                        </div>
                        <div className="flex flex-col items-center hover:scale-105 transition">
                            <Users className="w-8 h-8 text-indigo-600" />
                            <p className="text-sm text-gray-600 mt-2">Trusted by 1000+ Users</p>
                        </div>
                        <div className="flex flex-col items-center hover:scale-105 transition">
                            <Lock className="w-8 h-8 text-green-600" />
                            <p className="text-sm text-gray-600 mt-2">SSL Encrypted</p>
                        </div>
                        <div className="flex flex-col items-center hover:scale-105 transition">
                            <span className="inline-block text-2xl">✅</span>
                            <p className="text-sm text-gray-600 mt-2">Verified by PhonePe</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-6">© {new Date().getFullYear()} Techno Housekeeping. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default PaymentOptions;

