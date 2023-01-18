import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';

export const queryClient = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main className="app">
            <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </>
  );
}

export default CustomApp;