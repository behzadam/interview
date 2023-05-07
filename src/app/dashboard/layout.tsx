import Header from "../header";

export const metadata = {
  title: "Enterview | Dashboard",
  description: "A simple auth system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
    </div>
  );
}
