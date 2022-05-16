
const Page = ({postPerPage,residentData ,paginate, selected}) =>
{
    const pageNumbers=[];
    
    for(let i=1;i<=Math.ceil(residentData/postPerPage);i++){pageNumbers.push(i);}

    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number=>
                    (<button key={number} onClick={() => 
                    paginate(number)} className={number === selected ? "selected" : ""}
                    >{number}</button>))}
            </ul>
            
        </div>
    );
};

export default Page;