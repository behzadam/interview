import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Abril_Fatface } from "next/font/google";

const headingFont = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <header className="flex items-center justify-between p-5 dark:border-b bg-slate-50 dark:border-y-gray-800">
      <h1 className={`${headingFont.className} font-bold text-2xl`}>
        E<span className="text-indigo-700 dark:text-gray-600">nterview</span>!
      </h1>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  );
}
