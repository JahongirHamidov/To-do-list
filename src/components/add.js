import React, {useState,useContext,useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import {useStyles} from '../style'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {globalState} from '../globalState'
import uuid from 'react-uuid'

export const Add = (props) => {
    const classes = useStyles()
    const {
        setList,
        checked,
        name,
        setName,
        edit,
        editList,

    } = useContext(globalState)

    const handleChange = (event) => {
        setName(event.target.value)
    }
    const handleClick = (event) =>{
        event.preventDefault()

        if(edit === null){
            setList(data => [...data, {name, checked, id: uuid() }] )
            setName('')
        } else {
            editList(name,edit.id)
        }

    }
    useEffect(()=> {
        if(edit !== null){
            setName(edit.name)
        } else {
            setName('')
        }
    },[edit])

return(
    <div className={classes.add}>
        <TextField 
            id="outlined-basic"
            label="Add"
            variant="outlined" 
            className={classes.text}
            value={name} 
            onChange={handleChange} />
        
        <Fab color="primary"
         aria-label="add">
            <AddIcon 
            onClick={handleClick} />
        </Fab>
    </div>        
    
)

}