import React from 'react';

const Modal = ({closeModal, submit, name, surnames, email, password, birthday,setName, setSurnames,
setEmail, setPassword,setBirthday}) => {
    return (
        
            <div className='father-box'>
                    <div className='modal'>
                    <button onClick={closeModal}>porqur</button>
                    <form onSubmit={submit} className="form-main">
                    <div className="form-1">
                    <div className="mb-3 w-50 pe-2">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    </div>
                    <div className="mb-3 w-50">
                    <label htmlFor="surnames" className="form-label">
                        Surnames
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="surnames"
                        onChange={(e) => setSurnames(e.target.value)}
                        value={surnames}
                    />
                    </div>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                    Email
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                    Password
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="birthday" className="form-label">
                    Birthday
                    </label>
                    <input
                    type="date"
                    className="form-control"
                    id="birthday"
                    onChange={(e) => setBirthday(e.target.value)}
                    value={birthday}
                    />
                    </div>

                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                    </form>
                
                    </div>
                    <div className='overlay' onClick={closeModal}></div>
            </div>
                
                
            
            
        
    );
};

export default Modal;