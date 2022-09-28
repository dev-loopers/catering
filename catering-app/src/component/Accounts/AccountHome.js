import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
function AccountHome(){
    const history = useNavigate();

    const [user , setUser ] = useState();

    const getProfile = async ()=>{
        const res = await axios.get('/api/auth/profile',{
            withCredentials:true
        }).catch((err)=>console.log(err));
        const data = await res.data ;
        return data;
    }
    const logout = async ()=>{
        const res = await axios.get('/api/auth/logout',{
            withCredentials:true
        }).catch((err)=>console.log(err));
        history("/login");

    }
    useEffect(()=>{
  
            getProfile().then((data)=>setUser(data.user));
        
    },[])
    return (
        <div>
            welcome {user? user.name : "loggin expire"}
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default AccountHome;