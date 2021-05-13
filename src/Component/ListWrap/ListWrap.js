import React from "react";
import ListItem from "./ListItem/ListItem";



const ListWrap = (props) => {
    console.log(props.list)
    return (
      <ul >
        {
          props.list.map((item, index) => {
            return(
              <ListItem
                key={item.id}
                item={item}
                index={index}
                onChange={props.onToggle}
                removeTodo={props.removeTodo}
                classItemDone={  item.checked ? 'done' : null }
                classItemRemove={  item.removeTodo ? 'remove' : null }/>

            )
          })
        }
      </ul>
    )

}

export default ListWrap