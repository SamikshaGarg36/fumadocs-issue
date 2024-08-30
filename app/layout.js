import { RootProvider } from 'fumadocs-ui/provider';
import "@/styles/globals.css";
export default function Document({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
                <RootProvider>
                    {children}
                </RootProvider>
            </body>
        </html>
    );
}
