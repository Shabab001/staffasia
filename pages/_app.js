import '../styles/globals.css'
import {Provider} from "react-redux"
import{createWrapper} from "next-redux-wrapper"
import store from '../redux/store'
import * as types from "../redux/types"
import Cookies from 'js-cookie'
import 'antd/dist/antd.css';
function MyApp({ Component, pageProps }) {

  if(Cookies.get('user')){
    store.dispatch({
      type:types.GET_USER,
      payload:JSON.parse(Cookies.get('user'))
    })
  }


  return(
     <Provider store={store} >

    <Component {...pageProps} />

     </Provider>
  
    ) 
}
const makeStote=()=>store;
const wrapper =createWrapper(makeStote)

export default wrapper.withRedux( MyApp)
