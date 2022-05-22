import axios from "axios";
import { useEffect, useState } from "react";
<<<<<<< HEAD
=======
import Modal from "./components/Modal";
>>>>>>> 3ccc310d24b3575239bd0b1a8d30f6772562d538
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import './App.css';


<<<<<<< HEAD


=======
>>>>>>> 3ccc310d24b3575239bd0b1a8d30f6772562d538
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
<<<<<<< HEAD

=======
>>>>>>> 3ccc310d24b3575239bd0b1a8d30f6772562d538
  };


  const removeUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };
  const selectUser = (user) => setUserSelected(user);

  const deselectUser = () => setUserSelected(null);

<<<<<<< HEAD


  return (
    <div>
      <div><h1 className="title-1"><b>.</b></h1></div>
=======
  const [showForm, setShowform] = useState(false);
  
  const closeModal = () => setShowform(false)

  return (
    <div>
      <h1><b>Usuarios</b></h1>
      {showForm && <Modal closeModal={closeModal} />}
      <button className="btn-modal" onClick={() => setShowform(true)}>+ Crear nuevo usuario</button>
      
>>>>>>> 3ccc310d24b3575239bd0b1a8d30f6772562d538
      <UsersForm
        getUsers={getUsers}
        userSelected={userSelected}
        deselectUser={deselectUser}
      />
<<<<<<< HEAD
        <div className="title-box"><h1 className="title"><i className="fa-solid fa-id-card-clip"></i>   User Registration </h1></div>
      <UsersList users={users} selectUser={selectUser} removeUser={removeUser} />
      <div className="footer"><h1 className="title-2"><b>.</b></h1></div>
=======
      <UsersList users={users} selectUser={selectUser} removeUser={removeUser} />
>>>>>>> 3ccc310d24b3575239bd0b1a8d30f6772562d538
     
    </div>
  );
}

export default App;