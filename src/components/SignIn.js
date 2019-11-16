import React from 'react'
import propTypes from 'prop-types'
import { User } from 'react-feather';
import {store} from '../store'

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
                    console.log(store.getState())
                    props.history.push( {pathname:'/chat', state:store.getState()})
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