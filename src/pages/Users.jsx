
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Resmi.s", email: "resmi@gmail.com" ,image:"src/Images/woman.jpg"},
  { id: 2, name: "Vinu", email: "vinu@gmail.com",image:"src/Images/man.jpg" },
  { id: 3, name: "Jaanvi", email: "jaanvi@gmail.com",image:"src/Images/woman.jpg" }
];

export default function Users() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Users List</h1>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="border p-3 rounded hover:bg-gray-400">
            <Link to={`/users/${user.id}`} className="text-gray-600 hover:underline font-bold text-2xl">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
