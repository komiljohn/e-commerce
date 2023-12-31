import axios from 'axios';
import { parseCookies } from 'nookies';
import { QueryClient } from 'react-query';

const cookies = parseCookies();

export const request = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	// headers: {
	//   Authorization: cookies.ACCESS_TOKEN,
	// },
});

const errorHandler = (error: any) => {
	// if (error && error.response) {
	//   if (error.response.status === 401) {
	//     if (typeof window !== 'undefined') {
	//       if (!window.location.pathname.includes('login')) {
	//         if(window.location.pathname.includes('checkout')){
	//           location.replace('/login?checkout=true');
	//         }
	//         else location.replace('/login');
	//       }
	//     }
	//   }
	// }

	return Promise.reject(error.response);
};

request.interceptors.response.use((response) => response.data, errorHandler);

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});
