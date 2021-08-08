import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="container sm:px-10">
                <div className="block xl:grid grid-cols-2 gap-4">
                    {/* BEGIN: Login Info */}
                    <div className="hidden xl:flex flex-col min-h-screen">
                        <a className="-intro-x flex items-center pt-5">
                            <img alt="" className="w-6" src="dist/images/logo.svg" />
                            <span className="text-white text-lg ml-3"> Hyper<span className="font-medium">Soft</span> </span>
                        </a>
                        <div className="my-auto">
                            <img alt="" className="-intro-x w-1/2 -mt-16" src="dist/images/illustration.svg" />
                            <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                                Thêm một vài cú nhấp chuột để
                                <br />
                                đăng nhập vào tài khoản của bạn.
                            </div>
                            <div className="-intro-x mt-5 text-lg text-white">Hệ thống quản lý tài khoản</div>
                        </div>
                    </div>
                    {/* END: Login Info */}
                    {/* BEGIN: Login Form */}

                    <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                        <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                            <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                                Sign Up
                            </h2>
                            <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">Thêm một vài cú nhấp chuột để đăng nhập vào tài khoản của bạn. Hệ thống quản lý tài khoản</div>
                            <div className="intro-x mt-8">
                                <input type="text" className="intro-x login__input input input--lg border border-gray-300 block" placeholder="Your Name" />
                      
                                <input type="text" className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Email" />
                                <input type="text" className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Password" />
                                <div className="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">
                                    <div className="col-span-3 h-full rounded bg-theme-9" />
                                    <div className="col-span-3 h-full rounded bg-theme-9" />
                                    <div className="col-span-3 h-full rounded bg-theme-9" />
                                    <div className="col-span-3 h-full rounded bg-gray-200" />
                                </div>
                                <a  className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm">Mức độ mật mật khẩu ?</a>
                                <input type="text" className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Password Confirmation" />
                            </div>
                            {/* <div className="intro-x flex items-center text-gray-700 mt-4 text-xs sm:text-sm">
                                <input type="checkbox" className="input border mr-2" id="remember-me" />
                                <label className="cursor-pointer select-none" htmlFor="remember-me">Tôi đồng</label>
                                <a className="text-theme-1 ml-1" >Privacy Policy</a>.
                            </div> */}
                            <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                                <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">Đăng ký</button>
                                <button className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0">Đăng nhập</button>
                            </div>
                        </div>
                    </div>

                    {/* END: Login Form */}
                </div>
            </div>
        );
    }
}

export default Register;