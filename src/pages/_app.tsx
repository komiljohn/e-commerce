import { ThemeProvider } from '@emotion/react';
import '@/styles/globals.scss';
import theme from '@/mui-theme';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/services/http-client';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
