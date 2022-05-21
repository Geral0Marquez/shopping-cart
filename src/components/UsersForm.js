import axios from "axios";

import React, { useEffect, useState } from "react";

const UsersForm = ({ getUsers, userSelected, deselectUser }) => {
  const [name, setName] = useState("");
  const [surnames, setSurnames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");


  useEffect(() => {
    if (userSelected !== null) {
      setName(userSelected.first_name);
      setSurnames(userSelected.last_name);
      setEmail(userSelected.email);
      setPassword(userSelected.password);
      setBirthday(userSelected.birthday)
    } else {
      setName("");
      setSurnames("");
      setEmail("");
      setPassword("");
      setBirthday("")
    }
  }, [userSelected]);

  const submit = (e) => {
    e.preventDefault();
    const user = {
      first_name: name,
      last_name: surnames,
      email,
      password,
      birthday
    
    };
    if (userSelected !== null) {
      // Si hay algo en userSelected, hay que editar
      alert("Editando");
      axios
        .put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,user)
        .then(() => {
          getUsers();
          deselectUser();
        });
    } else {
      axios
        .post("https://users-crud1.herokuapp.com/users/",user)
        .then(() => getUsers())
        .catch((error) => console.log(error.response));
    }
  };

  return (
    <div>
       <UsersForm submit={submit} name={name} surnames={surnames} email={email}  
       password={password} birthday={birthday} setName={setName} setSurnames={setSurnames}
       setEmail={setEmail} setPassword={setPassword} setBirthday={setBirthday}
       />
    </div>
   
  );
};

export default UsersForm;
