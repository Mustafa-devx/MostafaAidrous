import { motion, AnimatePresence } from 'motion/react';
import { X, Award, FileBadge, BookOpen, Code } from 'lucide-react';
import { useState } from 'react';

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    verificationUrl?: string;
    color: string;
    icon: React.ElementType;
}

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    // ========================================
    // 🎓 YOUR CERTIFICATES - EDIT THIS SECTION
    // ========================================
    const certificates: Certificate[] = [
        {
            id: '1',
            title: 'BIM Fundamentals for Engineers',
            issuer: 'Coursera - National Taiwan University',
            date: '2025',
            description: 'Comprehensive course covering the fundamentals of Building Information Modeling (BIM) for engineering projects.',
            verificationUrl: '#',
            color: 'from-blue-500 to-cyan-500',
            icon: BookOpen
        },
        {
            id: '2',
            title: 'PMP Project Management',
            issuer: 'Alison',
            date: '2025',
            description: 'Fundamental concepts of Project Management Professional (PMP) certification, covering initiation, planning, execution, monitoring, and closing.',
            verificationUrl: '#',
            color: 'from-purple-500 to-pink-500',
            icon: FileBadge
        },
        {
            id: '3',
            title: 'Programming Foundations with Python',
            issuer: 'CodeSignal',
            date: '2025',
            description: 'Object-oriented programming concepts in Python, working with classes, instances, and standard libraries.',
            verificationUrl: '#',
            color: 'from-orange-500 to-red-500',
            icon: Code
        }
    ];

    return (
        <div className="w-full">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-app-bg text-app-accent">
                    <Award className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-app-text">Certificates</h2>
                    <p className="text-sm text-app-text/60">Professional qualifications & achievements</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        onClick={() => setSelectedCert(cert)}
                        className="group relative cursor-pointer bg-app-surface rounded-xl overflow-hidden border border-app-border shadow-sm hover:shadow-xl transition-all duration-300"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={{ y: -5, scale: 1.01 }}
                    >
                        {/* Card Header with Icon */}
                        <div className={`h-32 relative overflow-hidden flex items-center justify-center bg-gradient-to-r ${cert.color}`}>
                            <div className="text-white filter drop-shadow-md z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                <cert.icon className="w-12 h-12 opacity-90" />
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-20 pointer-events-none" />

                            {/* Decorative Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
                        </div>

                        {/* Card Content */}
                        <div className="p-4">
                            <h3 className="font-bold text-app-text mb-1 group-hover:text-app-accent transition-colors">
                                {cert.title}
                            </h3>
                            <div className="flex justify-between text-xs text-app-text/60">
                                <span>{cert.issuer}</span>
                                <span>{cert.date}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative w-full max-w-lg bg-app-surface rounded-2xl shadow-2xl overflow-hidden border-2 border-app-border"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {/* Header */}
                            <div className={`h-40 relative flex items-center justify-center overflow-hidden bg-gradient-to-r ${selectedCert.color}`}>
                                <div className="text-white filter drop-shadow-lg transform scale-125">
                                    <selectedCert.icon className="w-20 h-20 opacity-90" />
                                </div>

                                {/* Decorative Background Elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />

                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors z-20 backdrop-blur-sm"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-app-text mb-2">
                                    {selectedCert.title}
                                </h2>
                                <div className="flex flex-wrap gap-4 text-sm text-app-text/50 mb-6">
                                    <span className="flex items-center gap-1">
                                        <Award className="w-4 h-4" /> {selectedCert.issuer}
                                    </span>
                                    <span>•</span>
                                    <span>{selectedCert.date}</span>
                                </div>

                                <p className="text-app-text/70 leading-relaxed mb-8">
                                    {selectedCert.description}
                                </p>

                                {/* Actions removed as per request */}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Certificates;
