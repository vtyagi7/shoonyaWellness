import "./globals.css";
// import Footer from "@/app/components/Footer";
// import Hero from "@/app/components/Hero";
// import Retreat from "@/app/components/Retreat";

export const metadata = {
  title: "Harmony Haven",
  description: "The Oasis of calm",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
      <main> 
      {/* <Hero/> */}
      {children}
      {/* <Footer/> */}
      </main>
      </body>
    </html>
  );
}
