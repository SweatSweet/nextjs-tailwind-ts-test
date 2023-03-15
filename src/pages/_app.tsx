import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-[1512px] min-w-[1450px] mx-auto">
      <Component {...pageProps} />
    </div>
  );
}
