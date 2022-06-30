import React , {useRef, useState} from "react";
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginuser } from './../../Services/userservice';
import { useNavigate} from 'react-router'
import SimpleReactValidator from 'simple-react-validator';
import { Helmet } from 'react-helmet';
const Login = () => {
  const [email,setemail] = useState ("");
  const [password,setpassword] = useState("");
  let navigate=useNavigate();
  const [,forceupdate]=useState();
  const validator= useRef(new SimpleReactValidator({
    messages:{
      required:"پر کردن فیلد الزامی می باشد",
      min: "کمتر از 5 کاراکتر نباید باشد",
      email : "ایمیل نوشته شده صحیح نمی باشد"
    },
    element:message=><div style={{color:"red"}}>{message}</div>
  }));
  const resetstate = ()=>{
    setemail("");
    setpassword("");
  }
  const handlesubmit = async event => {
    event.preventDefault();
    const user = {
      email,
      password
    }
    try{
      if(validator.current.allValid()){
        const {status,data}=await loginuser(user);
        if(status===200){
          toast.success("ورود موفقیت آمیز بود", {
            position: "top-right",
            closeOnClick: true,
          });
          console.log(data);
          // console.log(user);
          localStorage.setItem("token",data.token);
          navigate("/",{ replace: true });
          resetstate();
        }
      }
      else{
        validator.current.showMessages();
        forceupdate(1);
      }
    }
    catch (ex){
      toast.error("مشکلی پیش آمده.", {
        position: "top-right",
        closeOnClick: true,
      });
      console.log(ex);
    }
  }
  return (
    <main className="client-page">
      <div className="container-content">
        <header>
          <h2> ورود به سایت </h2>
        </header>
        <Helmet>
          <title>تاپلرن/ورود به سایت</title>
        </Helmet>
        <div className="form-layer">
          <form action="" method="" onSubmit={handlesubmit}>
            <div className="input-group">
              <span className="input-group-addon" id="email-address">
                <i className="zmdi zmdi-email"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="ایمیل"
                aria-describedby="email-address"
                value={email}
                name="email"
                onChange={e => {
                  setemail(e.target.value);
                  validator.current.showMessageFor("email");
                }}
              />
              {validator.current.message("email",email,"required|email")}
            </div>

            <div className="input-group">
              <span className="input-group-addon" id="password">
                <i className="zmdi zmdi-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="رمز عبور "
                aria-describedby="password"
                value={password}
                name="password"
                onChange={e => {
                  setpassword (e.target.value);
                  validator.current.showMessageFor("password");
                }}
              />
              {validator.current.message("password",password,"required|min:5")}
            </div>

            <div className="remember-me">
              <label>
                <input type="checkbox" name="" /> مرا بخاطر بسپار{" "}
              </label>
            </div>

            <div className="link">
              <NavLink to="">
                {" "}
                <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده
                ام !
              </NavLink>
              <NavLink to="">
                {" "}
                <i className="zmdi zmdi-account"></i> عضویت در سایت{" "}
              </NavLink>
            </div>

            <button className="btn btn-success"> ورود به سایت </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
