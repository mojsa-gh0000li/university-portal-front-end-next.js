
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "سامانه دانشگاه",
  description: "صفحه اصلی",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body className="font-yekan">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
