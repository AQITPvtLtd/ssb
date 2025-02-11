import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Top from "@/components/common/header/Top";
import Footer from "@/components/common/footer/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SSB Hospital",
  description: "SSB Heart And Multispecialty Hospital, Faridabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager  */}
        <Script id="gtm-script" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){
            w[l] = w[l] || [];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l='+l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j,f);
          })(window, document, 'script', 'dataLayer', 'GTM-PG7NS98C');
        `,
        }} />
        {/* End Google Tag Manager */}

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PG7NS98C"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Top />
        {children}
        <Footer />
      </body>
    </html>
  );
}
