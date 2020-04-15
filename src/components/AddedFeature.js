import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/appActions';

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className='button'
        onClick={() => props.removeItem(props.feature.id, props.feature.price)}
      >
        {console.log(props.feature.price)}X
      </button>
      {props.feature.name}
      {console.log(props.feature.name)}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps, { removeItem })(AddedFeature);
