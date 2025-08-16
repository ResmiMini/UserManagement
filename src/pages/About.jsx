
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">About This App</h1>
      <hr></hr>
      <hr></hr>
      
      <br></br>
      <p className="text-2xl font-italics mb-4 text-center border-2 text-gray-600 hover:bg-gray-400">This is a Web Application  created for users Management .<br></br> This app shows details about all users of the system also shows detailed view of each user. <br></br>This app is created using React and styled by tailwind . <br></br>Concept of routing enables user to navigate through the pages </p>
      <Link to="/" className="inline-block mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        🏠
      </Link>
    </div>
  );
}
