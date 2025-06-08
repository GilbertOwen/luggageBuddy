// components/BookingFlow.tsx
"use client";
import React from "react";

const Card: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="bg-white border border-[#1f6e7a] rounded-lg shadow-md p-6">
    {children}
  </div>
);

export default function BookingFlow() {
  return (
    <section className={"py-16 bg-[#E6F8FF]"}>
      <h2
        className={
          "text-center text-2xl sm:text-3xl font-bold text-[#178FA0] mb-8"
        }
      >
        {"Testimonial & Rating"}
      </h2>

      <div className={"container mx-auto px-4"}>
        {/* TOP ROW: Steps 1-3 */}
        <div className={"grid gap-6 sm:grid-cols-3"}>
          {/* 1 */}
          <Card>
            <h3 className={"text-xl font-semibold text-[#1f6e7a] mb-2"}>
              {"1. Select Service"}
            </h3>
            <ul className={"text-[#1f6e7a] space-y-1 text-sm"}>
              <li>{"– Drop-N-Go (hourly/daily storage)"}</li>
              <li>{"– Transfer Luggage (inter-city/inter-island delivery)"}</li>
            </ul>
          </Card>

          {/* 2 */}
          <Card>
            <h3 className={"text-xl font-semibold text-[#1f6e7a] mb-2"}>
              {"2. Luggage Details"}
            </h3>
            <ul className={"text-[#1f6e7a] space-y-1 text-sm"}>
              <li>{"– Number & type (suitcase, backpack, etc.)"}</li>
              <li>{"– Dimensions & weight per item"}</li>
              <li>{"– Storage duration (hours/days)"}</li>
            </ul>
          </Card>

          {/* 3 */}
          <Card>
            <h3 className={"text-xl font-semibold text-[#1f6e7a] mb-2"}>
              {"3. Personal & Demographic Info"}
            </h3>
            <ul className={"text-[#1f6e7a] space-y-1 text-sm"}>
              <li>{"– Full name, phone number, email"}</li>
              <li>{"– Nationality / home country"}</li>
              <li>{"– Travel purpose (business or leisure)"}</li>
            </ul>
          </Card>
        </div>

        {/* BOTTOM ROW: Step 4, Button, Step 5 */}
        <div
          className={
            "mt-8 flex flex-col items-stretch sm:flex-row sm:items-center sm:justify-between gap-6"
          }
        >
          {/* 4 */}
          <div className={"sm:w-1/3"}>
            <Card>
              <h3 className={"text-xl font-semibold text-[#1f6e7a] mb-2"}>
                {"4. Review & Payment"}
              </h3>
              <ul className={"text-[#1f6e7a] space-y-1 text-sm"}>
                <li>{"– Confirm service, duration, and total cost"}</li>
                <li>
                  {"– Choose payment method (e-wallet, card, bank transfer)"}
                </li>
                <li>{"– Enter promo code (optional)"}</li>
              </ul>
            </Card>
          </div>

          {/* 5 */}
          <div className={"sm:flex-1"}>
            <Card>
              <h3 className={"text-xl font-semibold text-[#1f6e7a] mb-2"}>
                {"5. Confirmation & Tracking"}
              </h3>
              <ul className={"text-[#1f6e7a] space-y-1 text-sm"}>
                <li>{"– Receive booking code & ETA"}</li>
                <li>{"– Real-time tracking available in app"}</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
