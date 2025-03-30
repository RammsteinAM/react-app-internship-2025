import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavLink, Outlet } from 'react-router';

const queryClient = new QueryClient();

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
      </QueryClientProvider>
    </>
  );
}

export default ReactQuery;
