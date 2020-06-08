import React from 'react';
import {useStyles} from './style'
import {Todo} from './components/todo'
import Paper from '@material-ui/core/Paper'
import {Add} from './components/add'
import {Provider} from './globalState'




export default function App(props){

  const classes = useStyles()

  return(
    <Provider>
      <div className={classes.paper}>
          <Add/>
          <Paper elevation={0}>
              <Todo/>
          </Paper>
      </div>
    </Provider>      
  ) 
}







 