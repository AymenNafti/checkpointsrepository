import React from "react";
import PropTypes from "prop-types";

const ProfileOne = (props) => {
  const { fullName, Bio, Profession, handleName, children } = props;
console.log(props)
  return (
    <div>
      {" "}
      {handleName(fullName)} <h1> {fullName} </h1> <p> {Bio} </p>{" "}
      <p>  {Profession} </p>
      {children}
    </div>
  );
};

ProfileOne.propTypes = {
  fullName: PropTypes.string,
  Bio: PropTypes.string,
  Profession: PropTypes.string,
  handleName: PropTypes.func,
  children: PropTypes.object,
};

export default ProfileOne;
