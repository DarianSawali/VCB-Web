'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set())

  const faqs: FAQItem[] = [
    {
      question: 'When and where are your services?',
      answer: 'We gather for worship every Saturday at 10:45am at 320 8th St, New Westminster, BC V3M 3R4 (Freedom Church building). We would love to see you!',
    },
    {
      question: 'Do you have programs for children?',
      answer: 'Yes! We have a Kids Ministry available during the service, providing a safe and caring environment where children can learn about God in age-appropriate and engaging ways. Our volunteers are committed to helping kids grow in faith while parents are able to participate fully in the worship service.',
    },
    {
      question: 'How can I get connected to a Carecell?',
      answer: 'Carecells are our small groups that meet, they are places to share life, study the Word, pray together, and care for one another. Whether you are new to church or have been following Jesus for many years, there is a Carecell for you. You can contact us through our website, and we would love to help you find a group that fits.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center hover:opacity-80 transition-opacity"
                >
                  <span className="font-semibold text-secondary pr-4 text-lg">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform ${
                      openIndices.has(index) ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndices.has(index) && (
                  <div className="mt-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


