import './Billboard.css';
import List from './List';

function Billboard() {
    let lists = [{name: "TODO", desc: "Tasks to do"}, {name: "InProg", desc: "Tasks in progress"},
        {name: "DONE", desc: "Tasks done"}
    ];

    return (
        <div>
            <h1 className='Billboard-title'>Hola soy un billboard</h1>
            {lists.map((list) => (<List name={list.name} desc={list.desc}/>))}
        </div>
    );
}

export default Billboard;