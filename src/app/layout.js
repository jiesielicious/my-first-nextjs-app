import "./globals.css";
import Theme from '@/components/Theme';
import DarkLight from '@/components/DarkLight';

export const metadata = {
  title: "Jiesie Lota",
  description: "My name is Jiesie Lota, I am a frontend developer and wordpress developer",
};

export default function RootLayout({ Component, children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <DarkLight />
          {children}
        </Theme>
      </body>
    </html>
  );
}
