import React from 'react'
import propTypes from 'prop-types'

const AddMessage = (props) => {
    let input

    return(
        <section id="new-message">
        <div className="message">
        <label htmlFor="message" className="message__label" >Enter your message</label>
           <input
           className="message__field" 
           id="message"
            onKeyPress={(e) => {
                if (e.key === 'Enter'){
                    props.dispatch(input.value, 'Me')
                    input.value = ''
                }
            }}
            type="text"
            ref={(node) =>{
                input = node
            }}
           ></input>
        </div>
  
        </section>
    )
}
AddMessage.propTypes = {
    dispatch: propTypes.func.isRequired
}
export default AddMessage