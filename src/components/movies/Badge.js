import React from "react";

const Badge = ({ genre: { name } }) => {
  return (
    <>
      <span className="badge badge-danger ml-2">{name}</span>
    </>
  );
};

export default Badge;
