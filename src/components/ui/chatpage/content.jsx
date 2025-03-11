import { useState, useEffect } from "react";

const Content = ({ isActive, content, isScroll }) => {
  const [isLoading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(false);
  };
  /*useEffect(() => {
    setInterval(() => {
      handleLoading();
    }, 1500);
    return () => {
      clearInterval(handleLoading);
    };
  }, []);*/

  return !isLoading ? (
    <div className="md:w-[30%] p-4 bg-secondary/5 text-secondary-content overflow-hidden">
      {content[isActive].component}
    </div>
  ) : (
    <div className="w-[30%] p-4 flex justify-center items-center">
      <span className=" loading loading-spinner text-primary"></span>
    </div>
  );
};

export default Content;
