import { useEffect } from 'react';
import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import '@portfolio/ui/globals.css';

export const links: Route.LinksFunction = () => [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
    },
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                <meta
                    content="C78FDBB865D073BE5BBFA56CFE6A66D9"
                    name="msvalidate.01"
                />

                {/* <!-- Google tag (gtag.js) --> */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-CE0DJ932ZD"
                />
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-CE0DJ932ZD');
                    `}
                </script>

                {/* Open Graph / Facebook / LinkedIn */}
                <meta content="website" property="og:type" />
                <meta content="https://ronald.it.com/" property="og:url" />
                <meta
                    content="Ronald | IT Professional Portfolio"
                    property="og:title"
                />
                <meta
                    content="Explore the portfolio of Ronald, an IT professional specializing in innovative solutions, web development, and technology consulting. Discover projects, skills, and experience."
                    property="og:description"
                />
                <meta
                    content="https://ronald.it.com/og-image.webp"
                    property="og:image"
                />

                {/* Twitter */}
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="https://ronald.it.com/" name="twitter:url" />
                <meta
                    content="Ronald | IT Professional Portfolio"
                    name="twitter:title"
                />
                <meta
                    content="Explore the portfolio of Ronald, an IT professional specializing in innovative solutions, web development, and technology consulting. Discover projects, skills, and experience."
                    name="twitter:description"
                />
                <meta
                    content="https://ronald.it.com/og-image.webp"
                    name="twitter:image"
                />

                {/* Favicon */}
                <link
                    href="/apple-touch-icon.png"
                    rel="apple-touch-icon"
                    sizes="180x180"
                />
                <link
                    href="/favicon-32x32.png"
                    rel="icon"
                    sizes="32x32"
                    type="image/png"
                />
                <link
                    href="/favicon-16x16.png"
                    rel="icon"
                    sizes="16x16"
                    type="image/png"
                />
                <link href="/site.webmanifest" rel="manifest" />

                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration
                    getKey={(location) => location.key}
                    storageKey="scroll-positions"
                />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    useEffect(() => {
        // Prevent scroll restoration conflicts by ensuring smooth scroll behavior
        // only applies to intentional navigation, not page refreshes
        const handleBeforeUnload = () => {
            sessionStorage.setItem('isRefresh', 'true');
        };

        const handleLoad = () => {
            // Clear the refresh flag after a short delay to allow scroll restoration
            setTimeout(() => {
                sessionStorage.removeItem('isRefresh');
            }, 100);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = 'Oops!';
    let details = 'An unexpected error occurred.';
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? '404' : 'Error';
        details =
            error.status === 404
                ? 'The requested page could not be found.'
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
