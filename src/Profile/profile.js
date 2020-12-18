import React from "react";
import ProfileOne from "./profileOne";
import image from "./photo/me.png";

const Profile = () => {
  const handleName = (name) => {
    alert(`Hi, I'am ${name}`);
  };
  return (
    <ProfileOne
      fullName="Aymen Nafti"
      Bio="Master's in English"
      Profession="Opeartions Manager, Customer Service"
      image="Image"
      handleName={handleName}
    >
      <div>
        <img src={image}alt="Profile "></img>
      </div>
    </ProfileOne>
  );
};
export default Profile;

