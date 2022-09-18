import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
function AccountHome(){

    const [user , setUser ] = useState();


    const getProfile = async ()=>{
             const res = await axios.get('/api/auth/profile',{
                withCredentials:true
             }).catch((err)=>console.log(err));

            const data = await res.data ;
            console.log(data);
            return data;
    }
    useEffect(()=>{
        getProfile().then((data)=>setUser(data.user));

    },[])
    return (
        <div>
            welcome {user.name}
        </div>
    )
}

export default AccountHome;