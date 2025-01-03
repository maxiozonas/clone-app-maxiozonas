import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GithubSigninButton from "@/app/components/GithubSigninButton";
import GoogleSigninButton from "@/app/components/GoogleSigninButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function Login() {
    const session = await getServerSession(authOptions);

    if(session) {
        return redirect('/home')
    }
    
    return (
        <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
            <form>
                <h1 className="text-3xl font-semibold text-white">Inicia sesion</h1>
                <div className="space-y-4 mt-5">
                    <Input 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        className="bg-[#333] placeholder:text:xs placeholder:text-gray-400 w-full inline-block"
                    />
                    <Button 
                        type="submit"
                        variant="destructive"
                        className="w-full bg-[#e50914] text-white" 
                    >
                        Iniciar sesion
                    </Button>
                </div>
            </form>
            
            <div className="text-gray-500 text-sm mt-2">
                Eres nuevo en netflix?{' '}
                <Link className="text-white hover:underline" href="/sign-up">
                    Registrate ahora
                </Link>
            </div>

            <div className="flex w-full justify-center mt-6 items-center gap-x-3">
                <GithubSigninButton />
                <GoogleSigninButton />
            </div>
        </div>
    )
}