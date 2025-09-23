"use client"

import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import useWeb3Forms from "@web3forms/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function ApplicationSection() {
    const { register, reset, handleSubmit, setValue, watch } = useForm()
    const [isSuccess, setIsSuccess] = useState(false)
    const [result, setResult] = useState<string | null>(null)

    const accessKey = process.env.NEXT_PUBLIC_API_KEY
    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey!,
        settings: {
            from_name: "CEC CLUB Application",
            subject: "New Membership Application Submission",
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

    const technicalInterests = watch("technicalInterests") || []

    const handleInterestChange = (interest: string, checked: boolean) => {
        let updatedInterests = [...technicalInterests]
        
        if (checked) {
            updatedInterests.push(interest)
        } else {
            updatedInterests = updatedInterests.filter((i) => i !== interest)
        }
        
        setValue("technicalInterests", updatedInterests)
    }

    return (
        <section className="px-4 py-16 mt-10 rounded-md bg-gray-50 md:center-element">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-start gap-12 lg:grid-cols-2">
                    {/* Left side - Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Ready to Join?</h2>
                        <p className="leading-relaxed text-gray-600">
                            Start your application today to become a member of CEC CLUB and contribute towards building an exceptional
                            tech community where ideas and passion for technology.
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900">Requirements:</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                                    Currently enrolled at CEC Narowal
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                                    Active participation in tech events
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                                    Commitment to attend meetings and events
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
                                    Willingness to collaborate with others
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-8 bg-white border rounded-lg shadow-sm">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input
                                    id="fullName"
                                    {...register("fullName", { required: true })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    {...register("email", { required: true })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="major">Major/Department</Label>
                                <Input
                                    id="major"
                                    {...register("major", { required: true })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="yearOfStudy">Year of Study</Label>
                                <Select onValueChange={(value) => setValue("yearOfStudy", value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your year" />
                                    </SelectTrigger>
                                    <SelectContent className="overflow-auto bg-white">
                                        <SelectItem value="1st">1st Year</SelectItem>
                                        <SelectItem value="2nd">2nd Year</SelectItem>
                                        <SelectItem value="3rd">3rd Year</SelectItem>
                                        <SelectItem value="4th">4th Year</SelectItem>
                                    </SelectContent>
                                </Select>
                                <input type="hidden" {...register("yearOfStudy", { required: true })} />
                            </div>

                            <div className="space-y-3">
                                <Label>Technical Interests (Select all that apply):</Label>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Web Development", "Mobile Development", "Data Science", "Other"].map((interest) => (
                                        <div key={interest} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={interest}
                                                checked={technicalInterests.includes(interest)}
                                                onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                                            />
                                            <Label htmlFor={interest} className="text-sm font-normal">
                                                {interest}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                                <input type="hidden" {...register("technicalInterests")} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="technicalExperience">Technical Experience (Optional)</Label>
                                <Textarea
                                    id="technicalExperience"
                                    placeholder="Briefly describe your technical background and experience..."
                                    {...register("technicalExperience")}
                                    rows={4}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="whyJoin">Why do you want to join CEC CLUB?</Label>
                                <Textarea
                                    id="whyJoin"
                                    placeholder="Tell us about your motivation and what you hope to achieve..."
                                    {...register("whyJoin", { required: true })}
                                    rows={4}
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full py-3 font-semibold text-black bg-yellow-400 hover:bg-yellow-500">
                                Submit Application
                            </Button>

                            {result && (
                                <p className={`mt-4 text-center font-medium ${isSuccess ? "text-green-600" : "text-red-600"}`}>
                                    {result}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}