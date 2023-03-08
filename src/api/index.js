
import request  from "../utils/request";
// 登录接口
export  const login = (mobile,code)=>{
  return request({
      method:'post',
      url:'/v1_0/authorizations',
      data:{
        mobile,code
      }
    })
  
   
  };

