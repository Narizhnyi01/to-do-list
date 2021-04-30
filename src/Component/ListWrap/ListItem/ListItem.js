import React, {useContext} from "react";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import Context from "../../../context";

const ListItem = ({item, index, onChange, classItem}) => {
  const { removeTodo } = useContext(Context)
  return (

      <li>
        <span className={classItem}>
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