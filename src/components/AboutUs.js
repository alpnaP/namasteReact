import { User } from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

export const AboutUs = () => {
  return (
    <>
      <h1>About</h1>
      <User />
      <UserClass name={"Alpna(class)"} />
    </>
  );
};
