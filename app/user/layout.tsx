import Header from "@/components/header/Header";
import Promotion from "@/components/pages/home/features bottom/promotion";
import Footer from "@/components/footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ height: 0 }}>
        <Header />
        {children}
        <Promotion />
        <Footer />
    </div>
  );
}
