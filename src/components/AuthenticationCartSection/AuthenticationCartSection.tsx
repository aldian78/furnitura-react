import React from "react";
import {Badge} from "../ui/badge";
import {Button} from "../ui/button";
import {Card, CardContent} from "../ui/card";
import {Input} from "../ui/input";
import {useNavigate} from "react-router-dom";

export const AuthenticationCartSection = () : JSX.Element => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home")
    }

    // Form fields data for mapping
    const formFields = [
        {
            id: "name",
            label: "Your name",
            halfWidth: true
        }, {
            id: "email",
            label: "E-mail",
            halfWidth: true
        }, {
            id: "phone",
            label: "Phone number",
            halfWidth: false
        }, {
            id: "password",
            label: "Password",
            halfWidth: true
        }, {
            id: "resetPassword",
            label: "Reset Password",
            halfWidth: true
        }
    ];

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
                        YOUR INFORMATION
                    </h1>

                    <p className="w-full font-h3-16-medium text-black-3 text-[16px] leading-[20px]">
                        <span className="text-[#7e7f7c]">
                            You already have an account?{" "}
                        </span>
                        <span className="text-[#2f302c] underline cursor-pointer">
                            Sign in here
                        </span>
                    </p>
                </div>

                {/* Form fields */}
                <div className="flex flex-col items-start gap-10 w-full">
                    {/* First row - Name and Email */}
                    <div className="flex flex-col md:flex-row items-start gap-10 w-full">
                        {formFields
                            .slice(0, 2)
                            .map((field) => (
                                <div
                                    key={field.id}
                                    className="flex items-center py-3 border-b border-neutral-300 w-full">
                                    <Input
                                        id={field.id}
                                        type="name"
                                        className="border-none focus-visible:ring-0 px-0 font-h3-16-medium text-black-3"
                                        placeholder={field.label}/>
                                </div>
                            ))}
                    </div>

                    {/* Phone number field */}
                    <div className="flex items-center py-3 border-b border-neutral-300 w-full">
                        <Input
                            id="phone"
                            className="border-none focus-visible:ring-0 px-0 font-h3-16-medium text-black-3"
                            placeholder="Phone number"/>
                    </div>

                    {/* Password fields */}
                    <div className="flex flex-col md:flex-row items-start gap-10 w-full">
                        {formFields
                            .slice(3, 5)
                            .map((field) => (
                                <div
                                    key={field.id}
                                    className="flex items-center py-3 border-b border-neutral-300 w-full">
                                    <Input
                                        id={field.id}
                                        type="password"
                                        className="border-none focus-visible:ring-0 px-0 font-h3-16-medium text-black-3"
                                        placeholder={field.label}/>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Create account button */}
                <div className="w-[380px] md:max-w-[322px] lg:max-w-[332px] w-full">
                    <Button
                        onClick={handleClick}
                        className="w-full h-auto py-3 bg-black-1 text-bg-1 rounded-none font-h3-16-medium hover:bg-black-1/90">
                        Create an account
                    </Button>
                </div>
            </div>

            {/* Right side - Promotional banner */}
            <div className="w-[380px] w-full md:w-full lg:w-[600px] flex-shrink-0 lg:mt-8 lg:gap-[72px]">
                <Card
                    className="flex flex-col items-end gap-[72px] relative flex-1 lg:mt-8 md:w-full bg-black-7 rounded-none border-none">
                    <CardContent className="p-6 h-full">
                       <img
                                className="top-0 flex w-[240px] h-[240px] mt-[-25px] lg:w-[420px] lg:h-[455px] lg:mt-[-25px] md:w-[320px] md:h-[300px] md:mr-[20px]"
                                alt="Promotional lamps"
                                src="/img-lampu.png"/>
                    </CardContent>

                </Card>
            </div>
        </section>
    );
};
