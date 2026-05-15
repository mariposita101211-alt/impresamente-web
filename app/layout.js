import "./globals.css";

export const metadata = {
  title: "Impresamente Acapulco",
  description: "Diseños premium personalizados",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}