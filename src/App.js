import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { addFeature, deleteFeature } from "./state/actionCreators";
import Counter from "./components/Counter";

const App = ({ state, addFeature, deleteFeature }) => {
  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };
  // console.log(state);
  return (
    <div className="boxes">
      <div className="box">
        <Counter />
        <Header car={state.car} />

        <AddedFeatures car={state.car} deleteFeature={deleteFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures
          addFeature={addFeature}
          additionalFeatures={state.additionalFeatures}
        />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  // console.log("I ran first");
  return {
    state: state.carReducer
  };
}
export default connect(
  mapStateToProps, // injects props into Counter

  { addFeature, deleteFeature } // STEP 9 OF THE GENERAL STEPS (B)
)(App);
// export default App;
