import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SelectYearProvider from "@/providers/SelectYearProvider";
import { Spinner } from "@/components/Loader";
import LoaderProvider from "@/providers/LoaderProvider";
import MobileMenuProvider from "@/providers/MobileMenuProvider";
import { assets } from "@/constants";
import EventsModalProvider from "@/providers/EventsModalProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CEC CLUB",
  description: "CEC CLUB is a student community for coding, learning, and collaboration.",
  icons: [
    { url: "/images/cec-icon.jpg" }
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <EventsModalProvider>
      <MobileMenuProvider>
        <SelectYearProvider>
          <LoaderProvider>
            <html lang="en">
              <body
                className={`${geistSans.variable} ${geistMono.variable}  w-screen overflow-x-hidden md:mt-10`}
              >
                {children}
                <Spinner />
              </body>
            </html>
          </LoaderProvider>
        </SelectYearProvider>
      </MobileMenuProvider>
    </EventsModalProvider>
  );
}
