import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Detail = () => {
  return (
    <div>
      <Dropdown toggle={function noRefCheck(){}}>
    <DropdownToggle caret>
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
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
    </div>
  )
}

export default Detail
