"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const ContactForm = () => {
    const { register, reset, handleSubmit } = useForm();
    const [isSuccess, setIsSuccess] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const accessKey = process.env.NEXT_PUBLIC_API_KEY; // Replace with your Web3Forms Access Key

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey!,
        settings: {
            from_name: "Acme Inc",
            subject: "New Contact Message from your Website",
        },
        onSuccess: (msg) => {
            setIsSuccess(true);
            setResult(msg);
            reset();
        },
        onError: (msg) => {
            setIsSuccess(false);
            setResult(msg);
        },
    });

    return (
        <div className="bg-[#1a1a1a] rounded-lg p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">Send Us a Message</h2>

            {/* ✅ handleSubmit(onSubmit) is required */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-white">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: true })}
                        className="w-full px-4 py-3 bg-[#333333] text-white rounded-lg border border-[#444444] focus:border-[#ffd60a] focus:outline-none transition-colors"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-white">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", { required: true })}
                        className="w-full px-4 py-3 bg-[#333333] text-white rounded-lg border border-[#444444] focus:border-[#ffd60a] focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block mb-2 font-medium text-white">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        {...register("subject")}
                        className="w-full px-4 py-3 bg-[#333333] text-white rounded-lg border border-[#444444] focus:border-[#ffd60a] focus:outline-none transition-colors"
                        placeholder="What's this about?"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-white">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={6}
                        {...register("message", { required: true })}
                        className="w-full px-4 py-3 bg-[#333333] text-white rounded-lg border border-[#444444] focus:border-[#ffd60a] focus:outline-none transition-colors resize-vertical"
                        placeholder="Tell us more about your message..."
                    ></textarea>
                </div>

                <Button
                    type="submit"
                    className="w-full bg-[#ffd60a] text-black hover:bg-[#ffd60a]/90 font-semibold py-3 text-lg"
                >
                    SEND MESSAGE
                </Button>
            </form>

            {/* ✅ Show result message */}
            {result && (
                <p
                    className={`mt-4 text-center font-medium ${isSuccess ? "text-green-400" : "text-red-400"
                        }`}
                >
                    {result}
                </p>
            )}
        </div>
    );
};

export default ContactForm;
