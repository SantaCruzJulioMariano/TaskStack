import './List.css';
import Task from './Task';

function List({name, desc}) {
    let tasks = ["frs", "sec", "thr"];

    return (
        <div className='List-body'>
            <h1 className='List-title' onClick={() => console.log("Clickeaste: "+name)} >{name}</h1 >
            <p className='List-description'>{desc}</p>
            <div className='List-tasks'>
                {tasks.map((n) => (<Task name={n} key={n}/>))}
            </div>
        </div>
    );
}

//{tasks.map((n) => (<Task name={n} key={n}/>))}

export default List;