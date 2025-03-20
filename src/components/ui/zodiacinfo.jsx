import { zodiacInfo } from "../../lib/data";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import ChatHeader from "./chatpage/header";

const PopsUpButton = ({ children, event }) => {
  return (
    <button onClick={event} className="m-6 btn btn-primary">
      {children}
    </button>
  );
};
const Tab = ({ tab }) => (
  <>
    <input
      defaultChecked={tab.label === "Tổng quan"}
      type="radio"
      name="tab_1"
      className="tab min-w-32"
      aria-label={tab.label}
    />
    <div className="tab-content bg-base-100 border-base-300 p-6 h-[80vh] rounded-3xl overflow-y-auto break-words ">
      {tab.content.map((item, index) => {
        return (
          <ul key={index}>
            {item.type === "text" ? (
              <>
                <li>{item.value}</li>
                <br />
              </>
            ) : item.type === "image" ? (
              <li>
                <img
                  src={item.value}
                  alt="Zodiac"
                  className="w-[85%] h-[80%] rounded-lg mb-5 mx-auto"
                />
              </li>
            ) : item.type === "h2" ? (
              <li>
                <h2 className="mb-3 text-xl font-bold">{item.value}</h2>
              </li>
            ) : null}
          </ul>
        );
      })}
    </div>
  </>
);
const ZodiacInfo = ({ zodiac, user, event }) => {
  return (
    <div
      className={cn(
        "flex-1 flex flex-col bg-secondary/20 relative scrollbar-hide"
      )}
    >
      <ChatHeader user={user} isLoggin={true} />
      <div
        className="min-h-screen mt-16 hero"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="w-4/5 hero-content">
          <div className="flex flex-col items-center">
            <div className="w-full p-3 tabs tabs-boxed">
              {zodiac.tabs.map((tabs, index) => {
                return <Tab key={index} tab={tabs} />;
              })}
            </div>
            <PopsUpButton event={event}>Start Matching</PopsUpButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZodiacInfo;
