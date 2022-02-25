import React from 'react'

const Spinner = () => {
  return (
    <div>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  )
}

export default Spinner
