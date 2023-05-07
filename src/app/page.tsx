import { Abril_Fatface } from "next/font/google";
import Link from "next/link";

const headingFont = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

export default function HomePage() {
  return (
    <main>
      <div className="min-h-screen hero">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <h1 className={`${headingFont.className} text-5xl font-bold mb-4`}>
              E
              <span className="text-indigo-700 dark:text-gray-600">
                nterview
              </span>
              !
            </h1>
            <p className="mb-4 text-gray-500">
              A simple CRUD App based on Next.js 13, TypeScript, React Query,
              Axios, Clerk, Tailwind CSS, daisyUI components.
            </p>
            <Link href="/dashboard">
              <button className="btn btn-primary">Dashboard</button>
            </Link>
            <p className="mt-4 text-xs text-gray-500">
              Username:
              <span className="px-2 font-bold select-all">
                behzad.am@gmail.com
              </span>{" "}
              | Password:
              <span className="px-2 font-bold select-all">Fcbv3eBpG6HRCS5</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
