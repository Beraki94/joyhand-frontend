import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/scrollTotop/ScrollToTop";
import PageLoader from "@/components/pageLoader/PageLoader";
import CookieConsent from "@/components/cookieConsent/CookieConsent";

// SEO Metadata - Professional B2B optimized
export const metadata = {
  title: "Joyhand Energy | Premium B2B Energy Storage Solutions",
  description: "Global leader in direct manufacturing of LFP batteries, residential ESS, and industrial solar solutions. Engineering excellence for a sustainable future.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#121b2d",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Joyhand Energy | Engineering the Future of Storage",
    description: "Premium LFP battery manufacturing and energy storage solutions.",
    type: "website",
    siteName: "Joyhand Energy",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body suppressHydrationWarning={true} className="antialiased">
        <PageLoader>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </PageLoader>
        {/* Cookie consent banner appears after everything, fixed at bottom */}
        <CookieConsent />
      </body>
    </html>
  );
}