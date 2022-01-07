import React, { useEffect, useState } from "react"

const App = () => {

    const minute = 1000 * 60;
    const hour = minute * 60;
    const dia = hour * 24;
    const year = day * 365;

    const d = new Date()
    const day = d.toDateString()
    const time = d.toLocaleTimeString()

    const [list, setList] = useState('');
    const [create, setCreated] = useState(true)
    const [values, setValues] = useState({
        description: "",
        quantity: "",
        nombre: "",
        date: day,
        time: time
    })
    //const [create, setCreate] = useState(false)

    //const inputIsEmpty = values.name === "" || values.price === "" ? true : false;
1
    const changeHandler = (e) => {
        e.preventDefault()
        const name = e.target.name;
        setValues({ 
            ...values, 
            [name]: e.target.value
        });
        //console.log(value)
    };

    const submitHandler = () => {
        //setList([...list, ...values]);
        //alert(...values)
        setValues(...values);
       //console.log(...values)
       console.log("hello")
    };

    const deleteHandler = (item) => {
        //setList(list.filter((ele) => ele != item));
    };

    const editItem = (item) => {
        
    }

    const ed = (e) => {
       // e.preventDefault()
        setList('hello' + e.target.value )
        //alert(value)
    }

    //console.log(list)
    //console.log(values)
    useEffect(() => {

    }, [d])

    const created = create ? "Save" : "Update";

    return (
        <div>
            <h3>Date : {new Date().toDateString()}</h3>
            <div>
                <div onClick={submitHandler}>  
                    <input 
                        style={{ border: '1px solid gray' }} 
                        placeholder="Nombre" 
                        name="nombre"
                        value={values.nombre}
                        type="text" 
                        onChange={changeHandler} 
                    />
                    <textarea 
                        style={{ border: '1px solid gray' }} 
                        placeholder="Comentario" 
                        name="description"
                        value={values.description}
                        type="text" 
                        onChange={changeHandler} 
                    ></textarea>{" "}
                    
                    {/* {values.name !== "" ? <AlertMessage message="Este campo no debe estar vacio"/> : null} */}
                  
                    
                    <button type="button">Add</button>
                </div>
                {`Items anadidos ${list.length}`}
                <hr />
                <ul>
                    {list.length > 0 ?
                        list.map((item) => {
                            return (
                            <div>
                                <li>{item.nombre} {item.price} {item.quantity}</li>
                                <li style={{ color: 'blue' }} onClick={() => deleteHandler(item)}>{item}</li>;
                                <li style={{ color: 'blue' }} onClick={() => editItem(item)}>{item}</li>;
                                <li>{`Creado: ${item.date} a las ${item.time}`}</li>
                            </div>
                            )
                        })
                        : <p>Comienza anadiendo un item</p>
                    }

                </ul> 
            </div>
            <div>
                <CrudApi />
            </div>
        </div>
        )
}

export default App

export const EditarClient = () => {
    return (
        <div>

        </div>
    )
}

export const NuevoCliente = () => {
    return (
        <div>

        </div>
    )
}

export const AlertMessage = ({message}) => {
    return(
        <div style={{background: 'red', color: 'white'}}>
            {message}
        </div>
    )
}

export const CrudApi = () => {
    return(
        <div>
            Hey
        </div>
    )
}