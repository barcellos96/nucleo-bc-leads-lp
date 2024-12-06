import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { Toaster } from "sonner";
import { Providers } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beneficios Caminhoneiros",
  description:
    "Seu parceiro de confiança na estrada. Benefícios pensados especialmente para você e a sua empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="text-zinc-600 bg-zinc-100" lang="pt">
      <head>
        <meta name="application-name" content="Beneficios Caminhoneiros" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className={inter.className}>
          <Providers>{children}</Providers>
          <Toaster richColors />
        </div>
      </body>
    </html>
  );
}
