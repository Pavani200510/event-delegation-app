import { useEffect, useState } from "react";

function FetchData() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https:/jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));

  }, []);

  return (
    <div>

      <h2>Fetch API Data</h2>

      {users.map((user) => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}

    </div>
  );
}

export default FetchData;