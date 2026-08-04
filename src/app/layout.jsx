import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Disk Drive",
  icons: {
    icon: "/disk-drive-logo.svg",
  },
  verification: {
    google: "SP1wNhMPVs8vRWq1f3rzq23I0Di3MZ5U-VeJuGJsH-c",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
