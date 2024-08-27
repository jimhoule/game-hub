import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export function ReactQueryProvider({ children }: Props): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />

      {children}
    </QueryClientProvider>
  );
}
