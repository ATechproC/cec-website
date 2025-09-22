"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { faqs } from "@/constants"

export function FaqSection() {
    const [openItems, setOpenItems] = useState<number[]>([])

    const toggleItem = (index: number) => {
        setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
    }

    return (
        <section className="px-4 py-16 mt-8 rounded-md bg-gray-50 md:center-element">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Got questions about joining CEC CLUB? Here are some common questions and answers to help you get started.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                            <button
                                onClick={() => toggleItem(index)}
                                className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors hover:bg-gray-50"
                            >
                                <span className="pr-4 font-medium text-gray-900">{faq.question}</span>
                                {openItems.includes(index) ? (
                                    <Minus className="flex-shrink-0 w-5 h-5 text-gray-500" />
                                ) : (
                                    <Plus className="flex-shrink-0 w-5 h-5 text-gray-500" />
                                )}
                            </button>

                            {openItems.includes(index) && (
                                <div className="px-6 pb-4">
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
