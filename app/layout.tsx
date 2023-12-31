import type { Metadata } from "next";

import Header from "@/src/components/Header";
import { Providers } from "@/src/redux/provider";
import StyledComponentsRegistry from "@/src/lib/registry";
import { GlobalStyles } from "@/src/assets/styles/Global";
import ThemeProvider from "@/src/components/ThemeProvider";
import { montserrat } from "@/src/assets/fonts/Fonts";

export const metadata: Metadata = {
  title: "Overreacted",
  description: "Overreacted application generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <StyledComponentsRegistry>
            <ThemeProvider>
              <GlobalStyles />
              <Header />
              {children}
            </ThemeProvider>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
