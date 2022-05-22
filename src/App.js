import axios from "axios";
import { useEffect, useState } from "react";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import './App.css';




function App() {

 const [users, setUsers] = useState([]);
 const [userSelected, setUserSelected] = useState(null);


  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);


  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));

  };


  const removeUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };
  const selectUser = (user) => setUserSelected(user);

  const deselectUser = () => setUserSelected(null);



  return (
    <div>
      <div><h1 className="title-1"><b>.</b></h1></div>
      <UsersForm
        getUsers={getUsers}
        userSelected={userSelected}
        deselectUser={deselectUser}
      />
        <div className="title-box"><h1 className="title"><i className="fa-solid fa-id-card-clip"></i>   User Registration </h1></div>
      <UsersList users={users} selectUser={selectUser} removeUser={removeUser} />
      <div className="footer"><h1 className="title-2"><b>.</b></h1></div>
     
    </div>
  );
}

export default App;