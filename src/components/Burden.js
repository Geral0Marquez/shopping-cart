import React, {useState, useEffect} from 'react';

const Burden = () => {

    const [isloading, setLoading] = useState(undefined);

    useEffect(()=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => res.json())
            .then((json) => {
            console.log(json);
            setLoading(true);
        });

        }, 1500);
    },[])

  

    return (
        <div>
            {!isloading ? <div className='loader'></div>: ""}
        </div>
    );
};

export default Burden;
