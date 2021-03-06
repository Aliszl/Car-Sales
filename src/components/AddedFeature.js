import React from "react";
// import { deleteFeature } from '../state/actionCreators';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.deleteFeature(props.feature.id)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
