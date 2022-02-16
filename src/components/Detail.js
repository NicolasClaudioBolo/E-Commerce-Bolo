import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Detail = () => {
  return (
    <div>
      <Dropdown toggle={function noRefCheck(){}}>
    <DropdownToggle caret>
<<<<<<< HEAD
      Ver más
    </DropdownToggle>
    <DropdownMenu container="body">
      <DropdownItem>
      {data.description}
=======
      Dropdown
    </DropdownToggle>
    <DropdownMenu container="body">
      <DropdownItem onClick={function noRefCheck(){}}>
        Action 1
      </DropdownItem>
      <DropdownItem onClick={function noRefCheck(){}}>
        Action 2
      </DropdownItem>
      <DropdownItem onClick={function noRefCheck(){}}>
        Action 3
>>>>>>> c8cc50d2a20fdb2546a2414970ef87b52e4f8ae1
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
    </div>
  )
}

export default Detail
