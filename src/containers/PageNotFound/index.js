import React from 'react'
import { Link } from 'react-router-dom'


const PageNotFoundContainer = () => {
  return (
    <div>
        <h1>
            PageNotFoundContainer
        </h1>
        <Link to='/'>
            <button>
                Home
            </button>
        </Link>
    </div>
  )
}

export default PageNotFoundContainer