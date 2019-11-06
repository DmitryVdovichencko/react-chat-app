import React from 'react'
import propTypes from 'prop-types'
import { User } from 'react-feather';

const SideBar = ({ users }) => (
    <aside id="sidebar" className="sidebar">
        <h3 className="sidebar__header">Users</h3>
        <ul className="sidebar__list">
            {users.map(user=>(
                <li key={user.id} className="user">
                    <User className="user__icon"/>
                <span className="user__name">{user.name}</span>
                </li>
            ))}
        </ul>
    </aside>
)

SideBar.propTypes = {
    users: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            name: propTypes.string.isRequired,
        }).isRequired
    ).isRequired
}
export default SideBar