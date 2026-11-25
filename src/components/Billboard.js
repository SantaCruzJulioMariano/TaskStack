import './Billboard.css';
import List from './List';

function Billboard() {
    let lists = [{ name: "TODO", desc: "Tasks to do", id:0 }, { name: "InProg", desc: "Tasks in progress", id:1 },
    { name: "DONE", desc: "Tasks done", id:2 }
    ];
    //lists=[];
    //let selectedIndex = -1;

    return (
        <>
            <h1 className='Billboard-title' onClick={() => alert("ClickEvent triggered")}>Hola soy un billboard</h1>
            {lists.length === 0 && <p>Agregar nueva lista...</p>}
            {lists.map((list) => (<List name={list.name} desc={list.desc} key={list.id}/>))}
        </>
    );
}

export default Billboard;