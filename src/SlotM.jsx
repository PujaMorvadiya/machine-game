import React from "react";

const SlotM = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;
  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z} <p> This is Matching. </p>
          </h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z} <p> This is Not Matching.</p>
          </h1>
        </div>
      </>
    );
  }
};
export default SlotM;
