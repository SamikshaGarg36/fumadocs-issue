import "@/styles/globals.css";
import { RootProvider } from 'fumadocs-ui/provider';

export default function App({ Component, pageProps }) {
    return <RootProvider>
        <Component {...pageProps} />
    </RootProvider>;
}
