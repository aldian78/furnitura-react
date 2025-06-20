import React from "react";
import {useLocation} from 'react-router-dom';
import {useMemo} from 'react';
import {
  CreditCardIcon,
  EyeIcon,
  ShoppingBagIcon,
  UserIcon,
} from "lucide-react";


export const CartSection = () : JSX.Element => {
    const location = useLocation();

    const currentStep = useMemo(() => {
        switch (location.pathname) {
            case "/cart":
                return 1;
            case "/customer-information":
                return 2;
            case "/shipping-payment":
                return 3;
            case "/review":
                return 4;
            default:
                return 0;
        }
    }, [location.pathname]);

    const stepWidths : {
        [key : number] : string
    } = {
        0: "w-0", // default tidak tampil
        1: "w-[146px]",
        2: "w-[438px]",
        3: "w-[738px]",
        4: "w-full"
    };

    // Data for checkout steps
    const checkoutSteps = [
        {
            id: 1,
            title: "CART",
            description: "Review all your product and edit the number.",
            icon: ShoppingBagIcon,
            iconAlt: "Add shopping bag",
            isActive: true
        }, {
            id: 2,
            title: "CUSTOMER INFORMATION",
            description: "Add your name, phone number and address.",
            icon: UserIcon,
            iconAlt: "User circle",
            isActive: true
        }, {
            id: 3,
            title: "SHIPPING & PAYMENT",
            description: "With many payment method, included yours.",
            icon: CreditCardIcon,
            iconAlt: "Credit card",
            isActive: false
        }, {
            id: 4,
            title: "REVIEW",
            description: "View all your information before the confimation.",
            icon: EyeIcon,
            iconAlt: "Eye",
            isActive: false
        }
    ];

    return (
        <section className="w-full py-20">
            <div className="flex flex-col items-center gap-9 mb-16">
                <h1
                    className="font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] text-center tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                    SHOPING CART
                </h1>
                <h2
                    className="font-h3-16-bold font-[number:var(--h3-16-bold-font-weight)] text-black-3 text-[length:var(--h3-16-bold-font-size)] text-center leading-[var(--h3-16-bold-line-height)] tracking-[var(--h3-16-bold-letter-spacing)] [font-style:var(--h3-16-bold-font-style)]">
                    THIS IS YOUR CART BASED ON WHAT YOU WANTED TO BY
                </h2>
            </div>

            {/* Progress bar */}
            <div className="relative w-full max-w-[898px] h-2 mx-auto mb-9">
                <div className="relative h-2">
                    <div className="absolute w-full h-0.5 top-[3px] left-1 bg-black-5"/>
                    <div
                        className={`absolute h-0.5 top-[3px] left-1 bg-black-1 transition-all duration-300 ${stepWidths[currentStep]}`}/>
                    <div className="absolute w-2 h-2 top-0 left-0 bg-black-1 rounded"/>
                </div>
            </div>

            {/* Checkout steps */}
            <div className="flex w-full max-w-[1192px] mx-auto">

                {checkoutSteps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center gap-3 flex-1"
          >
            <div
              className={`flex w-14 h-14 items-center justify-center p-2.5 rounded-full ${step.id <= currentStep ? "bg-black-1" : "bg-black-7"}`}
            >
              <step.icon
                className="w-6 h-6"
                color={step.id <= currentStep ? "white" : "#7E7F7C"}
              />
            </div>
            <h3 className="w-fit font-h3-16-bold font-[number:var(--h3-16-bold-font-weight)] text-black-1 text-[length:var(--h3-16-bold-font-size)] leading-[var(--h3-16-bold-line-height)] whitespace-nowrap tracking-[var(--h3-16-bold-letter-spacing)] [font-style:var(--h3-16-bold-font-style)]">
              {step.title}
            </h3>
            <p className="w-[170px] font-h4-14-medium font-[number:var(--h4-14-medium-font-weight)] text-black-3 text-[length:var(--h4-14-medium-font-size)] text-center tracking-[var(--h4-14-medium-letter-spacing)] leading-[var(--h4-14-medium-line-height)] [font-style:var(--h4-14-medium-font-style)]">
              {step.description}
            </p>
          </div>
        ))}
            </div>
        </section>
    );
};
