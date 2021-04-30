import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';

const AddTask = ({onCreate}) => {
    const [value, setValue] = useState('')
  
    function submitHandler(event) {
      event.preventDefault()

      if (value.trim()) {
        onCreate(value)
        setValue('')
      }
    }
  
    return (
        <form className="row jcsb" onSubmit={submitHandler}>
          <TextField value={value} onChange={event => setValue(event.target.value)} label="Add New Todo" variant="outlined" className="InputToDo" />
          <Fab className="Btn_add" color="primary" aria-label="add" type="submit">
            <AddIcon />
          </Fab>
        </form>
    )
}

export default AddTask