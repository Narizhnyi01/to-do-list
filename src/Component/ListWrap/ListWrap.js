import React from "react";
import ListItem from "./ListItem/ListItem";



const ListWrap = (props) => {
    console.log(props.list)
    return (
      <ul >
        {
          props.list.map((item, index) => {
            return(
              <ListItem key={item.id} item={item} index={index} onChange={props.onToggle} classItem={ item.checked ? 'done' : null }/>

            )
          })
        }
      </ul>
    )

}

export default ListWrap