import { useEffect, useState } from "react";
import { ExpenseTracker } from "./components/ExpenseTracker/ExpenseTracker";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState();
  useEffect(() => {
    // get -> await promise -> res / err
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
      fetchUsers();
    };

    /* .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message)); */
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
}
export default App;
