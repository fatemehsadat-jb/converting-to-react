import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { registeruser } from "./../../Services/userservice";
import { NavLink } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import { useNavigate} from 'react-router';
import Helmet from "react-helmet";
const Register = () => {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [policy, setpolicy] = useState();
  const [, forceupdate] = useState();
  let navigate=useNavigate();
  const resetstate = () => {
    setfullname("");
    setemail("");
    setpassword("");
  };
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن فیلد الزامی میباشد",
        min: "کمتر از 5 کاراکتر نباید باشد",
        email: "ایمیل نوشته شده صحیح نمی باشد",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>
    })
  );

  const handlesubmit = async (event) => {
    event.preventDefault();
    const user = {
      fullname,
      email,
      password,
    };
    try {
      if (validator.current.allValid()) {
        const { status, data } = await registeruser(user);
        if (status === 201) {
          toast.success("کاربر با موفقیت ساخته شد.", {
            position: "top-right",
            closeOnClick: true,
          });
          console.log(data);
          console.log(user);
          navigate("/login");
          resetstate();
        }
      } else {
        validator.current.showMessages();
        forceupdate(1);
      }
    } catch (ex) {
      toast.error("مشکلی پیش آمده.", {
        position: "top-right",
        closeOnClick: true,
      });
      console.log(ex);
    }
  };
  return (
    <main className="client-page">
      <div className="container-content">
        <header>
          <h2> عضویت در سایت </h2>
        </header>
        <Helmet>
          <title>تاپلرن/عضویت در سایت</title>
        </Helmet>
        <div className="form-layer">
          <form action="" method="" onSubmit={handlesubmit}>
            <div className="input-group">
              <span className="input-group-addon" id="username">
                <i className="zmdi zmdi-account"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="نام و نام خانوادگی"
                aria-describedby="username"
                value={fullname}
                name="fullname"
                onChange={(e) => {
                  setfullname(e.target.value);
                  validator.current.showMessageFor("fullname");
                }}
              />
              {validator.current.message(
                "fullname",
                fullname,
                "required|min:5"
              )}
            </div>

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
                onChange={(e) => {
                  setemail(e.target.value);
                  validator.current.showMessageFor("email");
                }}
              />
              {validator.current.message("email", email, "required|email")}
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
                onChange={(e) => {
                  setpassword(e.target.value);
                  validator.current.showMessageFor("password");
                }}
              />
              {validator.current.message(
                "password",
                password,
                "required|min:5"
              )}
            </div>

            <div className="accept-rules">
              <label>
                <input
                  type="checkbox"
                  name="policy"
                  value={policy}
                  onChange={(e) => {
                    setpolicy(e.currentTarget.checked);
                    validator.current.showMessageFor("policy");
                  }}
                />
                قوانین و مقررات سایت را میپذیرم{" "}
                {validator.current.message("policy", policy, "required")}
              </label>
            </div>

            <div className="link">
              <NavLink to="">
                {" "}
                <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !
              </NavLink>
              <NavLink to="">
                {" "}
                <i className="zmdi zmdi-account"></i> ورود به سایت{" "}
              </NavLink>
            </div>

            <button className="btn btn-success"> عضویت در سایت </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
