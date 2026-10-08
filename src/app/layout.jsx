import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "PelvisMujer — Kinesiología de piso pélvico, yoga y terapia Gestalt",
  description:
    "Un espacio para reconectar con tu cuerpo, tu centro y tu poder. Acompañamiento a mujeres en cada etapa: ciclicidad, gestación, parto, posparto y climaterio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
