import React from 'react'
import propTypes from 'prop-types'

const Message = ({message,  author}) => (
    <div className="chat-message">
        <div className="chat-message__author">{author}</div>
        <div className="chat-message__text">{message}</div>
    </div>
)
Message.propTypes = {
    message: propTypes.string.isRequired,
    author: propTypes.string.isRequired
}
export default Message