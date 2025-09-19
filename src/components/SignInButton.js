import { signInAction } from "@/lib/actions";
import Image from "next/image";

function SignInButton() {
    return (
        <form action={signInAction} className="w-full">
            <button className="w-full flex items-center justify-center gap-4 text-lg border border-primary-300 hover:border-accent-400 px-8 py-4 font-medium text-primary-200 hover:text-accent-200 bg-primary-900/30 hover:bg-primary-800/50 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-950">
                <Image
                    src="https://authjs.dev/img/providers/google.svg"
                    alt="Google logo"
                    height="24"
                    width="24"
                    className="flex-shrink-0"
                />
                <span>Continue with Google</span>
            </button>
        </form>
    );
}

export default SignInButton;
