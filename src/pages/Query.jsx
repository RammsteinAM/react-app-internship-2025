import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUsers, insertUser } from '../api/users';

function Query() {
  const {
    data = [],
    isLoading,
    error,
    // isFetching,
    // isPending,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    // staleTime: 5000,
    // enabled: false,
    // retry: 3,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: insertUser,
    onSuccess: (newUser) => {
      // Added of demo
      queryClient.setQueryData(['users'], (currentUsers) => {
        return [
          ...currentUsers,
          {
            ...newUser.data,
            id: Math.max(...currentUsers.map((user) => user.id)) + 1,
          },
        ];
      });

      // Disabled for demo
      // // Invalidate and refetch users query after successful mutation
      // queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    mutation.mutate({
      name: formData.get('name'),
      username: formData.get('username'),
      email: formData.get('email'),
    });
  };

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ flex: 1 }}>
        <h2>User List</h2>
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              name="name"
              placeholder="Name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              name="email"
              placeholder="Email"
              className="form-input"
            />
          </div>
          <button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? 'Adding...' : 'Add User'}
          </button>
          {mutation.isError && <div>Error: {mutation.error.message}</div>}
          {mutation.isSuccess && (
            <div style={{ color: '#76f657' }}>User added!</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Query;
