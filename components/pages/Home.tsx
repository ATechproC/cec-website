

import Footer from "../Footer";
import { CECHero } from "../HomePage/cec-hero";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-[#121212]">
            <CECHero />
            <div className="-mt-9">
                <Footer />
            </div>
        </main>
    )
}

