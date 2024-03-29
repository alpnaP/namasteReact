import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  //check if online

  useEffect(() => {
    window.addEventListener("online", (event) => {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", (event) => {
      setOnlineStatus(false);
    });
  }, []);

  // set boolen value

  return onlineStatus;
};

export default useOnlineStatus;
