import React from "react";
import {Badge} from "../ui/badge";
import {Button} from "../ui/button";
import {Card, CardContent} from "../ui/card";
import {Input} from "../ui/input";
import { useNavigate } from "react-router-dom";

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
            className="flex w-full items-start gap-20 px-16 py-20 lg:px-[264px] lg:py-[82px]">
            {/* Left side - Form section */}
            <div className="flex flex-col items-start gap-[72px] relative flex-1">
                {/* Header section */}
                <div className="flex flex-col items-start gap-9 w-full">
                    <h1
                        className="w-full font-h1-32-extra-bold text-black-1 text-[32px] leading-[40px] tracking-[0px] font-extrabold">
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
                <Button onClick={handleClick}
                    className="w-[336px] h-auto py-3 bg-black-1 text-bg-1 rounded-none font-h3-16-medium hover:bg-black-1/90">
                    Create an account
                </Button>
            </div>

            {/* Right side - Promotional banner */}
            <Card
                className="hidden lg:block relative self-stretch w-[600px] bg-black-7 rounded-none border-none">
                <CardContent className="p-0 relative">
                    <div className="relative ml-20 w-[470px] h-[496px]">
                        {/* Discount text */}
                        <div
                            className="absolute w-[184px] top-[275px] left-0 font-h1-32-extra-bold text-black-1 text-[32px] leading-[40px] font-extrabold">
                            DISCOUNT 25% FOR NEW MEMBER
                        </div>

                        {/* Product image */}
                        <img
                            className="absolute w-[378px] h-[496px] top-0 left-[92px]"
                            alt="Promotional lamps"
                            src="/img.png"/> {/* Hot badge */}
                        <Badge
                            className="absolute top-56 left-0 px-2 py-1 bg-[#ce0000] text-black-8 rounded font-h3-16-bold">
                            HOT
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};
