import React from "react";

const UsersList = ({users, selectUser, removeUser}) =>{
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li key={user.id}>
          <h2>
             {user.first_name} {user.last_name}
          </h2>
          <br></br>
          <p>
            <b>EMAIL </b>
          </p>
          <p>{user.email}</p>
          <br></br>
          <p>
            <b>BIRTHDAY </b> 
          </p>
          <p className="border"><i className="fa-solid fa-gift"></i> {user.birthday}</p>
     
          <div className="grid">
                    <button onClick={() => removeUser(user.id)}
                    className="btn-remove">
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                      
                <div className="btn-box">
                  <button onClick={() => selectUser(user)}
                  className="btn">
                  <i className="fa-solid fa-pen"></i>
                  </button>
                  
                </div>
            </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;

