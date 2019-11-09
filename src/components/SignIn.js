import React from 'react'
import propTypes from 'prop-types'
import { User } from 'react-feather';
let input
const SignIn = (props) => (
    
    <div>
        <label htmlFor="user">Enter an username</label>
        <input 
            
            id="user"
            onKeyPress={(e) => {
                if (e.key === 'Enter'){
                    console.log(props)
                    props.dispatch(input.value)
                    input.value = ''
                }
            }}
            type="text"
            ref={(node) =>{
                input = node
            }}
        >

        </input>
        </div>
    
)

SignIn.propTypes = {
    dispatch: propTypes.func.isRequired
}
export default SignIn