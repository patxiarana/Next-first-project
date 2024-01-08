async function getUsers(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json(); 
    return data.data;
  }
  
  export default async function UserPage({ params }) {
    const user = await getUsers(params.id);
    return (
        <div className="bg-slate-400 p-4 rounded-md shadow-md">
        <h5 className="font-bold text-white">{user.id}. {user.first_name} {user.last_name}</h5>
        <p className="text-slate-300">Email: {user.email}</p>
        <img src={user.avatar} alt="Avatar" className="rounded-full w-20 h-20 mt-2" />
      </div>
      
    );
  }
  