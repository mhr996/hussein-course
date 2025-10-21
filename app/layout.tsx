import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
  variable: "--font-almarai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "حسين حوش - استراتيجية البنتاجون للمدربين",
  description:
    "اكتشف لماذا يفشل 97% من المدربين العرب في تحقيق 100 ألف دولار شهرياً مع حسين حوش",
  keywords:
    "تدريب أونلاين، حسين حوش، استراتيجية البنتاجون، مدربين عرب، دوراتي أونلاين",
  authors: [{ name: "حسين حوش" }],
  openGraph: {
    title: "حسين حوش - استراتيجية البنتاجون للمدربين",
    description:
      "اكتشف لماذا يفشل 97% من المدربين العرب في تحقيق 100 ألف دولار شهرياً مع حسين حوش",
    locale: "ar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${almarai.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
