import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  const removeFeature = (item) => {
    // dispatch an action here to remove an item
  };

  const buyItem = (item) => {
    // dispatch an action here to add an item
  };

  return (
    <div className='boxes'>
      <div className='box'>
        <Header car={props.state.car} />
        <AddedFeatures car={props.state.car} />
      </div>
      <div className='box'>
        <AdditionalFeatures
          additionalFeatures={props.state.additionalFeatures}
        />
        <Total
          car={props.state.car}
          additionalPrice={props.state.additionalPrice}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    state: state,
  };
};
export default connect(mapStateToProps, {})(App);
