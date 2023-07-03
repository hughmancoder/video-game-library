import useUsers from "../../hoooks/useUsers";
import userService, { User } from "../../services/user-service";

function UserList() {
  const { users, setUsers, error, setError, isLoading } = useUsers();

  const deleteUser = (user: User) => {
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(users.filter((u) => u.id !== user.id));
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Hugh Signoriello" };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUsers = (user: User) => {
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(user).catch((err) => {
      setError(err.message);
      setUsers(users);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && (
        <div className="spinner-grow text-primary" role="status"></div>
      )}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            {user.id}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUsers(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default UserList;
