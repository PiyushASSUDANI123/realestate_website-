import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  metadataBase: new URL("https://mojikagroup.com"),
  title: "Mojika Group | Luxury Residential Townships & Plotted Developments",
  description:
    "Mojika Group presents Rajasthan's grandest 100-Bigha modern lifestyle plotted township in Maulasar and premium residential enclaves in Jaipur. 100% RERA approved, wide boulevards, resort clubhouse.",
  keywords: [
    "Mojika Group",
    "Mojika Maulasar",
    "100 Bigha township Maulasar",
    "Real Estate Jaipur",
    "Plotted township Rajasthan",
    "Luxury villas Jaipur",
    "Building The Trust",
  ],
  openGraph: {
    title: "Mojika Group | 100 Bigha Mega Township Maulasar & Jaipur",
    description: "अब मौलासर में मिलेगा जयपुर जैसा मॉडर्न लाइफस्टाइल। 100 बीघा में फैली सपनों की नगरी।",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: "80vh", paddingTop: "88px" }}>
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
