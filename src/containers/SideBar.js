import { connect } from 'react-redux'
import SideBarComponent from '../components/SideBar'



export const SideBar = connect(state => ({
    users: state.users
}), {})(SideBarComponent)