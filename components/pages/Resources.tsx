import { resources } from "@/constants";
import Header from "../Header";
import Footer from "../Footer";

export function ResourcesSection() {

    return (
        <section className="relative bg-[#121212]">

            <Header />

            {/* Golden Header */}
            <div className="px-4 py-16 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Resources</h2>
                </div>
            </div>

            {/* Dark Content Area */}
            <div className="px-4 py-16 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-8">
                        {resources.map((resource, index) => (
                            <div key={index} className="pl-6 border-l-4 border-yellow-400">
                                <h3 className="mb-3 text-xl font-bold text-yellow-400 md:text-2xl">{resource.title}</h3>
                                <p className="mb-3 text-base leading-relaxed text-gray-300 md:text-lg">{resource.description}</p>
                                {resource.link && (
                                    <a
                                        href={resource.href}
                                        target="_blank"
                                        className="inline-block font-semibold text-yellow-400 transition-colors duration-200 hover:text-yellow-300"
                                    >
                                        {resource.link}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="-mt-10">
                <Footer />
            </div>
        </section>
    )
}
