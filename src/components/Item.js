import React,{useState,useContext} from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import {globalState} from '../globalState'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import {useStyles} from '../style'


export function Item({list}){
    const {
        
        setChecked,
        checked,
        setList,
        removeItem,
        findItem
       
    } = useContext(globalState)
    const classes = useStyles()
    
    const handleChange = event => { 
        list.checked= event.target.checked
        setChecked(event.target.checked)
        console.log(list)
        console.log(event.target.checked)
    }
    React.useEffect(()=>{},[checked])

    return(
        <>
            <ListItem key={list.name}> 
                    <Checkbox
                        checked={list.checked}
                        onClick={handleChange}
                    />

                    <ListItemText 
                        className={list.checked === true ? classes.linedText  : classes.normalText}
                        primary={list.name}
                    />
                    <IconButton
                        aria-label="delete"
                        onClick={() => removeItem(list.id)}
                    >
                        <DeleteIcon fontSize="large"  />
                    </IconButton>    
                    <IconButton
                        aria-label="edit"
                        onClick={()=> findItem(list.id)}
                    >
                        <EditIcon fontSize="large"  />
                    </IconButton>    
                                  
            </ListItem>

        
        </>
    )
}