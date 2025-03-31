import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NavLink, Outlet } from 'react-router';

const queryClient = new QueryClient(/* {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus:
    }
  }
} */);

function ReactQuery() {
  return (
    <>
      <div style={{ display: 'flex', gap: '20px' }}>
        <NavLink to="query" end>
          Query
        </NavLink>
        <NavLink to="optimistic" end>
          Optimistic Update
        </NavLink>
      </div>

      <QueryClientProvider client={queryClient}>
        <Outlet />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default ReactQuery;
