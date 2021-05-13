import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";

const ListItem = ({item, index, onChange, classItemDone, classItemRemove, removeTodo}) => {

  let classes = []

  if (classItemDone){
    classes.push(classItemDone)
  }
  if (classItemRemove){
    classes.push(classItemRemove)
  }

  return (

      <li className={classes.join(' ')}>
        <span>
            <Checkbox
              checked={item.checked}
              onChange={() => onChange(item.name)}
              color="primary"
            />

        <strong>{index + 1} </strong>
        {item.text}
        </span>
        <Button onClick={() => removeTodo(item.name)}>
          <DeleteIcon color="secondary" />
        </Button>
      </li>

  )
}

export default ListItem