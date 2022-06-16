import React from "react";
import { Link } from 'react-router-dom';
const ChangrAccount = () => {
  return (
    <main>
      <div className="container">
        <div className="user-account">
          <div className="row">
            <div className="col-md-3 col-sm-4 col-xs-12">
              <aside>
                <div className="avatar-layer">
                  <div className="img-layer">
                    <a href="" className="change-image">
                      <i className="zmdi zmdi-edit"></i>
                    </a>
                    <img src="images/pic/avatar.jpg" />
                  </div>
                  <div className="detail">
                    <span> ایمان مدائنی </span>
                    <span> عضویت : 01/01/1395 </span>
                  </div>
                </div>

                <section>
                  <header>
                    <h3> میز کار </h3>
                  </header>
                  <div className="inner">
                    <ul>
                      <li>
                        <Link to="/account"> مشاهده حساب کابری </Link>
                      </li>
                      <li>
                        <Link to="/changeaccount"> ویرایش حساب کابری </Link>
                      </li>
                      <li>
                        <a href=""> تغییر رمز عبور </a>
                      </li>
                      <li>
                        <a href=""> تنظیمات حساب کاربری </a>
                      </li>
                      <li>
                        <a href=""> خروج از حساب کاربری </a>
                      </li>
                    </ul>
                  </div>
                </section>
              </aside>
            </div>
            <div className="col-md-9 col-sm-8 col-xs-12">
              <section className="user-account-content">
                <header>
                  <h1> ویرایش حساب کاربری </h1>
                </header>
                <div className="inner form-layer">
                  <form action="" method="">
                    <div className="row">
                      <div className="col-md-7 col-sm-8 col-xs-12">
                        <div className="input-group">
                          <span className="input-group-addon" id="username">
                            <i className="zmdi zmdi-account"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="نام و نام خانوادگی"
                            aria-describedby="username"
                          />
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-8 col-xs-12">
                        <div className="input-group">
                          <span
                            className="input-group-addon"
                            id="email-address"
                          >
                            <i className="zmdi zmdi-email"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ایمیل"
                            aria-describedby="email-address"
                          />
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-8 col-xs-12">
                        <div className="input-group">
                          <span className="input-group-addon" id="password">
                            <i className="zmdi zmdi-lock"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="رمز عبور "
                            aria-describedby="password"
                          />
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-8 col-xs-12">
                        <div className="input-group">
                          <span className="input-group-addon" id="username">
                            <i className="zmdi zmdi-account"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="نام و نام خانوادگی"
                            aria-describedby="username"
                          />
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-8 col-xs-12">
                        <div className="input-group">
                          <span
                            className="input-group-addon"
                            id="email-address"
                          >
                            <i className="zmdi zmdi-email"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ایمیل"
                            aria-describedby="email-address"
                          />
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-8 col-xs-12">
                        <div className="input-group">
                          <span className="input-group-addon" id="password">
                            <i className="zmdi zmdi-lock"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="رمز عبور "
                            aria-describedby="password"
                          />
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-8 col-xs-12">
                        <div className="checkbox-layer">
                          <label>
                            <input type="checkbox" name="" /> گزینه ی چک باکس{" "}
                          </label>
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-8 col-xs-12">
                        <div className="radio-layer">
                          <label>
                            <input type="radio" name="" /> گزینه ی رادیوباتن{" "}
                          </label>
                          <label>
                            <input type="radio" name="" /> گزینه ی رادیوباتن{" "}
                          </label>
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-8 col-xs-12">
                        <div className="link">
                          <a href="">
                            {" "}
                            <i className="zmdi zmdi-lock"></i> رمز عبور خود را
                            فراموش کرده ام !
                          </a>
                          <a href="">
                            {" "}
                            <i className="zmdi zmdi-account"></i> عضویت در سایت{" "}
                          </a>
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-8 col-xs-12">
                        <button className="btn btn-success">
                          {" "}
                          ویرایش اطلاعات{" "}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChangrAccount;
