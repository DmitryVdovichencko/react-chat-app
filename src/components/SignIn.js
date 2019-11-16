import React from 'react'
import propTypes from 'prop-types'
import { User } from 'react-feather';
import {store} from '../store'
import styles from './SignIn.module.scss';

let input
const SignIn = (props) => (
    
    <div className={styles.signIn}>
        <h1 className={styles.signIn__header}> Enter to our friendly chat</h1>
        <div className={styles.signIn__form}>
            <input 
                className={styles.signIn__input}
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
                placeholder="Enter your username"
                type="text"
                ref={(node) =>{
                    input = node
                }}
            >

            </input>
        </div>
        

        </div>
    
)

SignIn.propTypes = {
    dispatch: propTypes.func.isRequired
}
export default SignIn