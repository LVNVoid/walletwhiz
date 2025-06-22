import Navbar from "@/components/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-0">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default RootLayout;
