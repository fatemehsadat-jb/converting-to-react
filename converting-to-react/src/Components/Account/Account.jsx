import React from "react";
import { Link } from 'react-router-dom';
const Account = () => {
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
                  <h1> داشبورد </h1>
                </header>
                <div className="inner">
                  <div className="account-information">
                    <h3> اطلاعات کاربری </h3>
                    <ul>
                      <li>
                        {" "}
                        <i className="zmdi zmdi-account"></i> نام و نام خانوادگی
                        : ایمان مدائنی{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="zmdi zmdi-assignment-account"></i> نام
                        کاربری : imadmadaeni{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="zmdi zmdi-email"></i> ایمیل :
                        imadmadaeni@gmail.com{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="zmdi zmdi-calendar-check"></i> تاریخ عضویت
                        : 01/01/1395{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="zmdi zmdi-smartphone-android"></i> شماره
                        تماس : 0912000000{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account;
