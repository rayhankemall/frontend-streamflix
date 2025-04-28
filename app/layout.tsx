import './globals.css';
import 'antd/dist/reset.css';
import { Provider } from "./provider";
import PageWrapper from "./components/PageWrapper"; // <-- Tambah import PageWrapper
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body>
        <Script src="/api/env" strategy="beforeInteractive" />
        <Provider>
          <PageWrapper> {/* <-- Tambahin PageWrapper di sini */}
            {children}
          </PageWrapper>
        </Provider>
      </body>
    </html>
  );
}
