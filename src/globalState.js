import React,{useState,createContext,useEffect} from 'react'

export const globalState = createContext()

export function Provider(props){
    const initialState = JSON.parse(localStorage.getItem('list')) || []

    const [checked, setChecked] = useState(false)
    const [name,setName] = useState('')
    const [edit, setEdit] = useState(null)
    const [list,setList] = useState(initialState)
    
    useEffect( () => {
        localStorage.setItem('list', JSON.stringify((list)))
    },[list])
    
    const findItem = id =>{
        const item = list.find( task => task.id === id )
        setEdit(item)
    } 
    const editList = ( title,id ) => {
        const newLists = list.map(task=> (task.id === id) ? {title,id} : task )
        setList(newLists)
    }
    const removeItem = id =>{
        setList(list.filter( task=> task.id !== id))
    }
    const handleClear = () =>{
        setList([])
    }

    
    const state = {
        list,
        setList,
        checked,
        setChecked,
        name,
        setName,
        removeItem,
        handleClear,
        findItem,
        editList,
        edit,
        
    }
    
    return(
        <globalState.Provider value={state}>
            {props.children}
        </globalState.Provider>
    )
}