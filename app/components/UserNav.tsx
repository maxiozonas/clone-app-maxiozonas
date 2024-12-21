"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";

export default function UserNav() {
    const { data: session } = useSession();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
                    <Avatar className="h-10 w-10 rounded-sm">
                        <AvatarImage src="https://kjicoujsgzyznjuajzht.supabase.co/storage/v1/object/sign/avatar-img/avatar.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXItaW1nL2F2YXRhci5wbmciLCJpYXQiOjE3MzQ3NDcwMjUsImV4cCI6MTc2NjI4MzAyNX0.Y5W2k1oAV-Q_GhHVi6Ga-alljpdy7HIcY3iGf1N0Rag&t=2024-12-21T02%3A10%3A24.837Z" />
                        <AvatarFallback className="rounded-sm">Jan</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{session?.user?.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {session?.user?.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>Cerrar sesion</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}