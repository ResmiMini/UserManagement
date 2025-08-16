
import { useParams, useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "Resmi.s", email: "resmi@gmail.com" ,image:"https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg?w=360"},
  { id: 2, name: "Vinu", email: "vinu@gmail.com",image:"src/Images/man.jpg" },
  { id: 3, name: "Jaanvi", email: "jaanvi@gmail.com",image:"src/Images/woman.jpg" }
];

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return <div className="p-6">User not found.</div>;
  }

  return (
    <>
    <div className="p-20">
    <div className="flex justify-center gap-10 p-10 text-center text-xl border-2 border-blue-500">
      <img className="w-40 h-40" src={user.image}></img>
      <div className="text-left">
       <p>USER NAME :{user.name}</p>
       <br></br>
       <p>USER EMAIL : {user.email}</p>
      </div>
</div>
</div>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Go Back
      </button>
    
    </>
  );
}
