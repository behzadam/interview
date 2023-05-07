import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Rubik_Moonrocks } from "next/font/google";

const headingFont = Rubik_Moonrocks({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <header className="bg-white flex items-center p-5 justify-between border-b-2 border-dashed border-y-cyan-800">
      <h1
        className={`${headingFont.className} font-bold text-2xl text-cyan-800`}
      >
        Enterview!
      </h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  );
}
