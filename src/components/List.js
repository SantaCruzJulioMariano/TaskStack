import './List.css';

function List({name, desc}) {

    return (
        <>
            <h1 className='List-title' onClick={() => console.log("Clickeaste: "+name)} >{name}</h1 >
            <p className='List-description'>{desc}</p>
        </>
    );
}

export default List;