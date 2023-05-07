import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "./header";
import Providers from "./providers";

export const metadata = {
  title: "Interview",
  description: "A simple auth system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen">
          <Header />
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
