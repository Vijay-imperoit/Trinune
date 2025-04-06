import { FC, useEffect } from "react";

const PathHistory: FC = () => {
  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem("pathHistory") || "[]"
    );

    const currentPath = window.location.pathname;

    if (storedHistory[storedHistory.length - 1] !== currentPath) {
      storedHistory.push(currentPath);
      localStorage.setItem("pathHistory", JSON.stringify(storedHistory));
    }
  }, [window.location.pathname]);

  return <></>;
};

export default PathHistory;
