import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Football Life — The Journey",
  description: "Vis ta carrière de footballeur professionnel.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body>{children}</body></html>;
}
