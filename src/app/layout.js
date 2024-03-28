import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Google clone",
  description:
    "An open source google clone built with NextJS 14 and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
