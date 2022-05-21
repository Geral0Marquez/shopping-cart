import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
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

  const [showForm, setShowform] = useState(false);
  
  const closeModal = () => setShowform(false)

  return (
    <div>
      <h1><b>Usuarios</b></h1>
      {showForm && <Modal closeModal={closeModal} />}
      <button className="btn-modal" onClick={() => setShowform(true)}>+ Crear nuevo usuario</button>
      
      <UsersForm
        getUsers={getUsers}
        userSelected={userSelected}
        deselectUser={deselectUser}
      />
      <UsersList users={users} selectUser={selectUser} removeUser={removeUser} />
     
    </div>
  );
}

export default App;