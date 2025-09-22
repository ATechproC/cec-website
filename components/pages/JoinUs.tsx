"use client";
import { useMobileMenu } from "@/providers/MobileMenuProvider";
import Header from "../Header";
import CommunitySection from "../JoinUs/CommunitySection";
import { ApplicationSection } from "../JoinUs/ApplicationSection";
import { FaqSection } from "../JoinUs/faq-section";
import Footer from "../Footer";


export function JoinUs() {
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();
    return (
        <div className="min-h-screen bg-[#121212]">

            <Header />

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}


            <CommunitySection />
            <ApplicationSection />
            <FaqSection />

            <Footer />
        </div>
    );
}
