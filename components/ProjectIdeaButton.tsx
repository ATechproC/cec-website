import { redirect } from "next/navigation";

export function ProjectIdeaButton() {
    return (
        <section className="relative px-4 py-10 bg-[#121212]">
            {/* Content */}
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
                    Have an idea for a new project?
                </h2>

                <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-white md:text-xl text-pretty">
                    We're always looking for new ideas to explore. If you have a project concept that you'd like to develop with
                    the support of our tech community, we'd love to hear about it.
                </p>

                <button
                    onClick={() => redirect("/project-idea")}
                    className="px-8 py-4 text-lg font-bold text-gray-900 transition-all duration-300 transform bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-300 hover:scale-105 hover:shadow-xl">
                    Start a Project
                </button>
            </div>
        </section>
    )
}