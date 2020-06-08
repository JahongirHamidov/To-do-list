import React,{useContext,useEffect} from 'react'
import List from '@material-ui/core/List'
import {globalState} from '../globalState'
import {Item} from './Item'
import Button from '@material-ui/core/Button'
import ClearIcon from '@material-ui/icons/Clear'
import {useStyles} from '../style'
import Paper from '@material-ui/core/Paper'



export function Todo(props) {
    const {list,setList,handleClear,setChecked} = useContext(globalState)
    const classes = useStyles()
    //setChecked(false)
  return (
    <>
     {list.length ? (
        <List style={{backgroundColor:'#eeeeee'}}> 
          { list.map(item => (
            <>
              <Item list={item} key={item.id}/>
            </>
          ))

          }
        </List>
     )
    : (
        < Paper 
          elevation={0} 
          className={classes.clear}>
            No Tasks
        </Paper>
        )}
        <Paper elevation={0}  className={classes.clearIcon}>
          <Button
              color="secondary"
              variant="contained"
              startIcon={<ClearIcon />}
              className={classes.clearIcon}
              onClick={() => handleClear() }
          >
             Clear
          </Button>      
        </Paper>
    </>
  )
}
