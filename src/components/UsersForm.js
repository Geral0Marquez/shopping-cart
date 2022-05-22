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
    } 
    
    else {
      axios
        .post("https://users-crud1.herokuapp.com/users/",user)
        .then(() => getUsers())
        .catch((error) => console.log(error.response));
    }
  };

  return (<div className="container-box" > 
    <div className="container-form">
      <h2>New user</h2>
      <form onSubmit={submit}>
                   
                    <div className="wraper">
                    <div className="box">  <label htmlFor="name" className="form-label">
                    <i className="fa-solid fa-user"></i>
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="First name"
                    /></div>
                  
                    <div className="box">
                      
                    <label htmlFor="surnames" className="form-label">
                    <i className="fa-solid fa-user-gear"></i>
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="surnames"
                    onChange={(e) => setSurnames(e.target.value)}
                    value={surnames}
                    placeholder="Last name"
                    />
                    </div>
                    </div>
                      
                    <div className="wraper">
                    <div className="box">  <label htmlFor="email" className="form-label">
                    <i className="fa-solid fa-envelope"></i>
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                    /></div>
                  
                    <div className="box">
                    <label htmlFor="password" className="form-label">
                    <i className="fa-solid fa-lock"></i>
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                    />
                    </div>
                    
                    </div>

                    <div className="wraper">
                    <div className="box">
                    <label htmlFor="birthday" className="form-label">
                    <i className="fa-solid fa-cake-candles"></i>
                    </label>
                    <input
                    type="date"
                    className="form-control"
                    id="birthday"
                    onChange={(e) => setBirthday(e.target.value)}
                    value={birthday}
                    />
                    </div>
                    
                    </div>
                    <div className="wraper-1">
                    <button type="submit" className="btn-form">
                    upload
                    </button>
                    </div>
                    
                    </form>
                    
                
                    </div></div>
   
  );

};

export default UsersForm;
