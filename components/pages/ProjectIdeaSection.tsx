"use client"

import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import useWeb3Forms from "@web3forms/react"
import { Lightbulb, Users, Code, Rocket } from "lucide-react"
import Header from "../Header"
import Footer from "../Footer"
import { Button } from "@/components/ui/button"

export default function ProjectIdeaSection() {
    const { register, reset, handleSubmit, setValue, watch } = useForm()
    const [isSuccess, setIsSuccess] = useState(false)
    const [result, setResult] = useState<string | null>(null)

    const accessKey = process.env.NEXT_PUBLIC_API_KEY

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey!,
        settings: {
            from_name: "CEC CLUB Project Submission",
            subject: "New Project Idea Submission",
        },
        onSuccess: (msg) => {
            setIsSuccess(true)
            setResult(msg)
            reset()
        },
        onError: (msg) => {
            setIsSuccess(false)
            setResult(msg)
        },
    })

    return (
        <div className="min-h-screen bg-gray-900">
            <Header />

            {/* Main Content */}
            <div className="px-4 py-16 mx-auto max-w-7xl w-[90%]">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left Side - Project Information */}
                    <div className="mt-8 space-y-8">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-white">Turn Your Ideas Into Reality</h2>
                            <p className="mb-8 text-lg leading-relaxed text-gray-300">
                                Have a brilliant project concept? We're here to help you bring it to life! Share your ideas with our
                                tech community and get the support, collaboration, and resources you need to make it happen.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full">
                                    <Lightbulb className="w-6 h-6 text-gray-900" />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-white">Innovation Support</h3>
                                    <p className="text-gray-300">
                                        Get guidance and mentorship from experienced developers and tech enthusiasts.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full">
                                    <Users className="w-6 h-6 text-gray-900" />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-white">Team Collaboration</h3>
                                    <p className="text-gray-300">
                                        Connect with like-minded individuals who share your passion for technology.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full">
                                    <Code className="w-6 h-6 text-gray-900" />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-white">Technical Resources</h3>
                                    <p className="text-gray-300">
                                        Access to tools, platforms, and technical expertise to build your project.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full">
                                    <Rocket className="w-6 h-6 text-gray-900" />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-white">Launch Support</h3>
                                    <p className="text-gray-300">Help with project deployment, presentation, and showcasing your work.</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="p-6 mt-8 bg-gray-800 rounded-lg">
                            <h3 className="mb-4 text-xl font-semibold text-white">Need Help?</h3>
                            <p className="mb-4 text-gray-300">
                                Have questions about the submission process? Feel free to reach out to us.
                            </p>
                            <div className="space-y-2">
                                <p className="text-gray-300">
                                    <span className="text-yellow-400">Email:</span> projects@cecclub.com
                                </p>
                                <p className="text-gray-300">
                                    <span className="text-yellow-400">Location:</span> ENSA Berrechid Campus
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="p-8 bg-gray-800 rounded-lg">
                        <h2 className="mb-6 text-2xl font-bold text-white">Project Submission Form</h2>
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium text-white">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name", { required: true })}
                                    placeholder="Your full name"
                                    className="w-full px-4 py-3 text-white transition-colors bg-gray-700 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block mb-2 font-medium text-white">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", { required: true })}
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 text-white transition-colors bg-gray-700 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Project Title */}
                            <div>
                                <label htmlFor="projectTitle" className="block mb-2 font-medium text-white">
                                    Project Title
                                </label>
                                <input
                                    type="text"
                                    id="projectTitle"
                                    {...register("projectTitle", { required: true })}
                                    placeholder="What's your project called?"
                                    className="w-full px-4 py-3 text-white transition-colors bg-gray-700 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label htmlFor="description" className="block mb-2 font-medium text-white">
                                    Project Description
                                </label>
                                <textarea
                                    id="description"
                                    {...register("description", { required: true })}
                                    placeholder="Describe your project idea, goals, and what you want to achieve..."
                                    rows={5}
                                    className="w-full px-4 py-3 text-white transition-colors bg-gray-700 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none resize-vertical"
                                    required
                                />
                            </div>

                            {/* Skills Needed */}
                            <div>
                                <label htmlFor="skills" className="block mb-2 font-medium text-white">
                                    Skills/Technologies Needed
                                </label>
                                <input
                                    type="text"
                                    id="skills"
                                    {...register("skills")}
                                    placeholder="e.g., React, Python, UI/UX Design, Mobile Development..."
                                    className="w-full px-4 py-3 text-white transition-colors bg-gray-700 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none"
                                />
                            </div>

                            {/* Timeline */}
                            <div>
                                <label htmlFor="timeline" className="block mb-2 font-medium text-white">
                                    Expected Timeline
                                </label>
                                <select
                                    id="timeline"
                                    {...register("timeline", { required: true })}
                                    className="w-full px-4 py-3 text-white transition-colors bg-gray-700 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none"
                                    required
                                >
                                    <option value="">Select timeline</option>
                                    <option value="1-2 weeks">1-2 weeks</option>
                                    <option value="1 month">1 month</option>
                                    <option value="2-3 months">2-3 months</option>
                                    <option value="3+ months">3+ months</option>
                                    <option value="ongoing">Ongoing project</option>
                                </select>
                            </div>

                            {/* Hidden field for better email formatting */}
                            <input type="hidden" {...register("formType")} value="Project Idea Submission" />

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full py-4 text-lg font-bold text-gray-900 transition-all duration-300 transform bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-300 hover:scale-105 hover:shadow-xl"
                            >
                                SUBMIT PROJECT IDEA
                            </Button>

                            {/* Result Message */}
                            {result && (
                                <p className={`mt-4 text-center font-medium ${isSuccess ? "text-green-400" : "text-red-400"}`}>
                                    {result}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}