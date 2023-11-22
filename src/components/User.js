import { useState } from "react";

export const User = () => {
  const [count] = useState(0);
  return (
    <div className="user">
      <h2>Alpna : count={count} </h2>
      <h2>Uttar Pradesh</h2>
      <h4>Contact: alpna@gmail.com</h4>
    </div>
  );
};
