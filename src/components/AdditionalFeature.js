import React from 'react';
import { addFeature } from '../actions/appActions';
import { connect } from 'react-redux';
const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className='button'
        onClick={function () {
          props.addFeature(
            props.feature.name,
            props.feature.id,
            props.feature.price
          );
        }}
      >
        {/* {console.log('props items', props.feature.name, props.feature.id)} */}
        Add
      </button>
      {/* {console.log('Props from additional Feature comp', props)} */}
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
