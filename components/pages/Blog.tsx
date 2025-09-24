import Footer from "../Footer";
import Header from "../Header";

export function BlogSection() {
    return (
        <section className="relative bg-[#121212]">
            <Header />
            <div className="px-4 py-16 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Blog</h2>
                </div>
            </div>

            <div className="px-4 py-16 bg-[#121212]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-lg text-center text-gray-300 md:text-xl">
                        This is the Blog page. Articles and posts will be displayed here.
                    </p>
                </div>
            </div>
            <Footer />
        </section>
    )
}
