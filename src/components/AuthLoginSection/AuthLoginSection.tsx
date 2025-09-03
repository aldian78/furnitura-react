import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {Button} from "../ui/button";
import {Card, CardContent} from "../ui/card";
import {Input} from "../ui/input";

import {useNavigate} from "react-router-dom";
import authService from "../../api/authentication";
import {toast} from "react-toastify";
import { useAuth } from "../../context/authContext";

type RegisterForm = {
    email: string;
    password: string;
};

export const AuthLoginSection = () : JSX.Element => {
    const location = useLocation();
    const navigate = useNavigate();
    const { setToken } = useAuth();

    useEffect(() => {
        if (location.state
            ?.successMsg) {
            // kasih ID supaya toast tidak duplikat
            toast.success(location.state.successMsg, {toastId: "register-success"});
            // hapus state agar tidak muncul lagi
            navigate(location.pathname, {replace: true});
        }
    }, [location, navigate]);

    const [form,
        setForm] = useState < RegisterForm > ({email: "", password: ""});

    const handleChange = (e : React.ChangeEvent < HTMLInputElement >) => {
        const {id, value} = e.target;
        setForm((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await authService.login(form.email, form.password);
            const token = res.data[0]?.acces_token;
            if (token) {
                setToken(token);
            }
            toast.info("Login Berhasil.");
            navigate("/");
        } catch (err) {
            toast.error("Login gagal, periksa kembali email/password!");
        }
    };

    return (
        <section
            className="flex flex-col lg:flex-row w-full mb-10 items-start gap-20 px-6 lg:px-[280px] md:px-24 lg:mt-10">
            {/* Left side - Form section */}
            <div
                className="flex flex-col items-start gap-[72px] w-full relative flex-1 lg:mt-8 md:w-full">
                {/* Header section */}
                <div className="flex flex-col items-start gap-4 w-full">
                    <h1
                        className="w-full font-h1-32-extra-bold text-black-1 lg:text-[32px] text-[26px] leading-[40px] tracking-[0px] font-extrabold">
                        YOUR LOGIN
                    </h1>

                    <p className="w-full font-h3-16-medium text-black-3 text-[16px] leading-[20px] flex gap-1">
                        <span className="text-[#7e7f7c]">Don't have an account ?
                        </span>
                        <span className="text-[#2f302c] underline cursor-pointer">
                            <a href="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                Register in here
                            </a>
                        </span>
                    </p>
                </div>

                {/* Form fields */}
                <div className="flex flex-col items-start gap-10 w-full">
                    <div className="flex flex-col md:flex-row items-start gap-10 w-full">
                        <div className="flex items-center py-3 border-b border-neutral-300 w-full">
                            <Input
                                id="email"
                                type="text"
                                className="border-none focus-visible:ring-0 px-0 font-h3-16-medium text-black-3"
                                placeholder="E-mail"
                                value={form.email}
                                onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-10 w-full">
                        <div className="flex items-center py-3 border-b border-neutral-300 w-full">
                            <Input
                                id="password"
                                type="password"
                                className="border-none focus-visible:ring-0 px-0 font-h3-16-medium text-black-3"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}/>
                        </div>
                    </div>
                </div>

                <div className="w-[380px] md:max-w-[322px] lg:max-w-[332px] w-full">
                    <Button
                        onClick={handleSubmit}
                        className="w-full h-auto py-3 bg-black-1 text-bg-1 rounded-none font-h3-16-medium hover:bg-black-1/90">
                        Sign In
                    </Button>
                </div>
            </div>

            {/* Right side - Promotional banner */}
            <div
                className="w-[350px] w-full md:w-full lg:w-[600px] flex-shrink-0 lg:mt-8 lg:gap-[72px]">
                <Card
                    className="flex flex-col items-end gap-[72px] relative flex-1 lg:mt-8 md:w-full bg-black-7 rounded-none border-none">
                    <CardContent className="p-6 h-full">
                        <img
                            className="top-0 flex w-[235px] h-[240px] mt-[-25px] lg:w-[420px] lg:h-[455px] lg:mt-[-25px] md:w-[320px] md:h-[300px] md:mr-[20px]"
                            alt="Promotional lamps"
                            src="/lampu-login-1.png"/>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
