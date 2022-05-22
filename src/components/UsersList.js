import React from "react";

const UsersList = ({users, selectUser, removeUser}) =>{
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li key={user.id}>
          <h2>
<<<<<<< HEAD
              {user.first_name} {user.last_name}
          </h2>

          <br></br>
          <p>
            <b>EMAIL</b>
          </p>

          <p>{user.email}</p>

=======
             {user.first_name} {user.last_name}
          </h2>
          <br></br>
          <p>
            <b>EMAIL </b>
          </p>
          <p>{user.email}</p>
>>>>>>> 3ccc310d24b3575239bd0b1a8d30f6772562d538
          <br></br>
          <p>
            <b>BIRTHDAY </b> 
          </p>
<<<<<<< HEAD

          <p className="border"> <i className="fa-solid fa-gift"> </i> {user.birthday}</p>
     
            <div className="grid">
                <button onClick={() => removeUser(user.id)} className="btn-remove"> 
                <i className="fa-solid fa-trash-can"></i> 
                </button>

=======
          <p className="border"><i className="fa-solid fa-gift"></i> {user.birthday}</p>
     
          <div className="grid">
                    <button onClick={() => removeUser(user.id)}
                    className="btn-remove">
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                      
>>>>>>> 3ccc310d24b3575239bd0b1a8d30f6772562d538
                <div className="btn-box">
                  <button onClick={() => selectUser(user)}
                  className="btn">
                  <i className="fa-solid fa-pen"></i>
                  </button>
<<<<<<< HEAD
=======
                  
>>>>>>> 3ccc310d24b3575239bd0b1a8d30f6772562d538
                </div>
            </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
