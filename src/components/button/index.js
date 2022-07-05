import React from 'react'

import './buttonStyle.scss'

import { Link } from 'react-router-dom'

const ButtonComponent = (props) => {
  return (
    <div className="mybutton">
        <Link className='btnlink' to={props.pageLink}>
            {props.buttonText}
        </Link>
    </div>
  )
}

export default ButtonComponent