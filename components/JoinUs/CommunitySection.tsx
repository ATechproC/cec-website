import { Card, CardContent } from "@/components/ui/card";
import { CardInfoProps } from "@/types";

const CardInfo = ({ title, description }: CardInfoProps) => {
    return (
        <Card className="p-8 text-center transition-shadow duration-300 hover:shadow-lg">
            <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="leading-relaxed text-gray-600">{description}</p>
            </CardContent>
        </Card>
    );
};

const CommunitySection = () => {
    return (
        <section className="w-full">
            <div className="px-4 py-16 text-white bg-g[#1a1a1a]">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl text-balance">
                        Join Our Community
                    </h1>
                    {/* Yellow accent underline */}
                    <div className="w-24 h-1 mx-auto mb-6 bg-yellow-500"></div>
                    <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
                        Become part of CEC CLUB and collaborate with like-minded tech
                        enthusiasts
                    </p>
                </div>
            </div>

            <div className="px-4 py-10 bg-white rounded-md md:center-element md:px-5 md:py-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
                        <CardInfo
                            title="Networking"
                            description="Connect with students passionate about technology and build
                                lasting professional relationships."
                        />

                        <CardInfo
                            title="Skill Development"
                            description="Enhance your technical skills through workshops, hackathons,
                            and collaborative projects."
                        />

                        <CardInfo
                            title="Career Opportunities"
                            description="Gain access to internship and job opportunities through our
                                        industry connections."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
