import { connect } from 'react-redux'
import SignInComponent from '../components/SignIn'
import { addUser } from '../actions'

const mapDispatchToProps = dispatch => ({
    dispatch : (name) => {
        dispatch(addUser(name))
      
   




 
    }
})
export const SignIn = connect(()=> ({}), mapDispatchToProps)(SignInComponent)