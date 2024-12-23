import { getServerSession } from "next-auth"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"
import Navbar from "../components/Navbar"

export default async function HomeDefault({ children }: { children: React.ReactNode }) {
    try {
        const session = await getServerSession(authOptions)
        
        if (!session) {
            redirect("/login")
        }

        return (
            <>
                <Navbar />
                <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {children}
                </main>
            </>
        )
    } catch (error) {
        console.error("Session error:", error)
        redirect("/login")
    }
}