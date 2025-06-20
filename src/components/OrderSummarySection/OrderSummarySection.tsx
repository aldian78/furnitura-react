import React from "react";

export const OrderSummarySection = (): JSX.Element => {
  return (
    <section className="w-full py-20">
      <div className="flex flex-col items-center justify-center gap-9 mx-auto max-w-7xl px-4">
        <h1 className="font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] text-center tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
          ORDER TRACKING
        </h1>
        <h2 className="font-h3-16-bold font-[number:var(--h3-16-bold-font-weight)] text-black-3 text-[length:var(--h3-16-bold-font-size)] text-center tracking-[var(--h3-16-bold-letter-spacing)] leading-[var(--h3-16-bold-line-height)] [font-style:var(--h3-16-bold-font-style)]">
          REVIEW YOUR ORDER AND UPDATE SHIPPING PROCESS
        </h2>
      </div>
    </section>
  );
};
