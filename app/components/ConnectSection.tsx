'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ConnectSection() {
    const [role, setRole] = useState<'admirer' | 'distributer'>('admirer')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        phoneNumber: '',
        city: '',
        pincode: '',
        message: ''
    })

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitMessage('')

        try {
            const response = await fetch('/api/submit-distributor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const result = await response.json()

            if (response.ok) {
                setSubmitMessage('Application submitted successfully! We will contact you soon.')
                setFormData({
                    fullName: '',
                    address: '',
                    phoneNumber: '',
                    city: '',
                    pincode: '',
                    message: ''
                })
            } else {
                setSubmitMessage(result.error || 'Something went wrong. Please try again.')
            }
        } catch {
            setSubmitMessage('Network error. Please check your connection and try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="enquire" className="relative overflow-hidden -top-6 font-sans tracking-tight min-h-[30dvh]">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/connect-bg.png"
                    alt="connect background"
                    fill
                    className="object-fit"
                    priority
                />
                <div className="absolute inset-0" aria-hidden />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
                    {/* Left copy */}
                    <div className="text-white">
                        <h2 className="font-display uppercase leading-[1.1] text-[28px] md:text-[48px] tracking-tight">
                            Have an idea, feedback,<br /> or partnership proposal?
                        </h2>
                        <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed">
                            We’d love to hear from you! Drop us a message — let’s make something refreshingly unforgettable
                            together.
                        </p>
                    </div>

                    {/* Right form */}
                    <div className="w-full">
                        <div className="inline-flex rounded-full bg-white/20 p-1 backdrop-blur supports-[backdrop-filter]:bg-white/15 w-full">
                            {([
                                { key: 'admirer', label: 'Just a admirer' },
                                { key: 'distributer', label: 'Distributer' },
                            ] as const).map((opt) => (
                                <button
                                    key={opt.key}
                                    onClick={() => setRole(opt.key)}
                                    className={`px-5 md:px-6 py-2 rounded-full text-sm md:text-base transition-colors w-full ${role === opt.key
                                        ? 'bg-[#D4E638] text-[#1A1F0A] font-bold'
                                        : 'text-white/90 hover:text-white'
                                        }`}
                                    type="button"
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>

                        {role === 'admirer' ? (
                            <>
                                <p className="text-white text-sm md:text-lg my-10 text-center">Need a pack of spicetale.<br />
                                    Let&apos;s Chat on Whatsapp... </p>
                                <a
                                    href="https://wa.me/917977041040"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 w-full rounded-full bg-[#D4E638] text-[#1A1F0A] font-semibold py-3 md:py-3.5 hover:opacity-95 transition-opacity block text-center"
                                >
                                    Let&apos;s Connect
                                </a>
                            </>
                        ) : (
                            <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                                <Input
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={(value) => handleInputChange('fullName', value)}
                                />
                                <Input
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={(value) => handleInputChange('address', value)}
                                />
                                <Input
                                    placeholder="Phone Number"
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={(value) => handleInputChange('phoneNumber', value)}
                                />

                                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <Input 
                                        placeholder="City" 
                                        value={formData.city}
                                        onChange={(value) => handleInputChange('city', value)}
                                    />
                                    <Input 
                                        placeholder="Pincode" 
                                        value={formData.pincode}
                                        onChange={(value) => handleInputChange('pincode', value)}
                                    />
                                </div>

                                <textarea
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    rows={4}
                                    className="w-full rounded-md bg-white text-neutral-900 placeholder-neutral-500 px-4 py-3 md:py-3.5 outline-none focus:ring-2 focus:ring-[#D4E638] resize-vertical min-h-[100px]"
                                />

                                {submitMessage && (
                                    <div className={`text-sm text-center p-3 rounded-md ${submitMessage.includes('successfully')
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-red-100 text-red-800'
                                        }`}>
                                        {submitMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`mt-2 w-full rounded-full font-semibold py-3 md:py-3.5 transition-opacity ${isSubmitting
                                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                                        : 'bg-[#D4E638] text-[#1A1F0A] hover:opacity-95'
                                        }`}
                                >
                                    {isSubmitting ? 'Submitting...' : "Let's Connect"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

function Input({
    placeholder,
    type = 'text',
    value,
    onChange
}: {
    placeholder: string;
    type?: string;
    value?: string;
    onChange?: (value: string) => void;
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value || ''}
            onChange={(e) => onChange?.(e.target.value)}
            className="w-full rounded-md bg-white text-neutral-900 placeholder-neutral-500 px-4 py-3 md:py-3.5 outline-none focus:ring-2 focus:ring-[#D4E638]"
        />
    )
}


