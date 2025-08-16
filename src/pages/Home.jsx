
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to User Management System</h1>
      <div className="flex justify-center gap-4">
        <img src="src/Images/System.png" className="w-[1000px] h-[500px]"></img>
        </div>     
         {/* <div className="flex justify-center gap-4">

        <Link to="/about" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          About
        </Link>
        <Link to="/users" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
          Users
        </Link>
      </div> */}
    </div>
  );
}