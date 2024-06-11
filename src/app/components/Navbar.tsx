import Image from "next/image";
import {
    getKindeServerSession,
    RegisterLink,
    LoginLink,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = getUser();

    return (
        <nav className="flex justify-between items-center py-4 md:py-6 w-full px-4 bg-transparent">
            <h1 className="text-xl font-extrabold md:text-2xl px-2 md:px-4 py-1 md:py-2 rounded bg-black text-white">Todo.AI</h1>
            <div className="flex gap-2 md:gap-4 items-center">
                {!isAuthenticated() ? (
                    <>
                        <LoginLink className="bg-black text-white font-extrabold text-sm md:text-base px-3 md:px-4 py-1 md:py-2 rounded">Sign in</LoginLink>
                        <RegisterLink className="bg-black text-white text-sm font-extrabold md:text-base px-3 md:px-4 py-1 md:py-2 rounded">Sign up</RegisterLink>
                    </>
                ) : (
                    <div className="flex items-center gap-2 md:gap-4 font-normal">
                        {user?.picture ? (
                            <Image
                                className="rounded-full"
                                src={user?.picture}
                                width={40}
                                height={40}
                                alt="user profile avatar"
                            />
                        ) : (
                            <div className="bg-black text-white rounded-full p-2 md:p-4 text-center">
                                {user?.given_name?.[0]}
                                {user?.family_name?.[0]}
                            </div>
                        )}
                        <div className="text-sm md:text-base">
                            <p className="text-base md:text-xl">
                                {user?.given_name} {user?.family_name}
                            </p>
                            <LogoutLink className="text-black dark:text-white text-sm md:text-base">Log out</LogoutLink>
                        </div>
                    </div>
                )}
                <ThemeSwitch />
            </div>
        </nav>
    );
}

