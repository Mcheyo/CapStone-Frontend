import React from 'react'
import {Link} from 'react-router-dom'
const Start = () => { 
    return( 
        <div>
            <Link to={'/signup'}>
           <button>Sign-UP</button>
           </Link>
        </div>
    )
}

export default Start 