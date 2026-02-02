import "./globals.css"
import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import { AuthProvider } from "@/src/context/AuthContext"

export const metadata = {
  title: "Kinos",
  description: "Family health, safety, and connection platform",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}