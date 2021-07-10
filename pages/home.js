import Link from 'next/link'
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from "../redux/actions/userActions"
const home = (props) => {

    console.log(props.user)
 
    const handleLogout=()=>{
             props.actions.logout()
    }
    return (
        <div>
            {props.user.isLoggedIn?
            <div>
                <h1> Welcome {props.user.user.user.name}</h1>
                <Link href="/">
              <p onClick={handleLogout} style={{cursor:"pointer"}}>Logout</p>
              </Link>
                </div>:
                <div>
                <h1>Please login or signup to enter</h1>
                <Link href="/">
                <p style={{cursor:"pointer"}}>go to Auth page click here</p>
                </Link>
                 </div>
        }
            
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(userActions, dispatch),
  });
const mapStateToProps = state => ({
   user: state.user
});

export default connect(mapStateToProps,mapDispatchToProps)(home);