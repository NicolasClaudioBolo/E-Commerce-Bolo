import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// const Detail = () => {
//   return (
    
//   )
// }

function Detail ({data}){
  return (

   // ITEM   
   
   <div>
   <Dropdown toggle={function noRefCheck(){}}>
 <DropdownToggle caret>
   Ver más
 </DropdownToggle>
 <DropdownMenu container="body">
   <DropdownItem>
   {data.description}

   </DropdownItem>
 </DropdownMenu>
</Dropdown>
 </div>
  )
}

export default Detail