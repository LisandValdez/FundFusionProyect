import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { EmailProvider } from './FormsEmail'; // Importa el EmailProvider desde FormsEmail.js

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <EmailProvider> {/* Envuelve tu aplicación en EmailProvider */}
        <Component {...pageProps} />
      </EmailProvider>
    </SessionProvider>
  );
}
