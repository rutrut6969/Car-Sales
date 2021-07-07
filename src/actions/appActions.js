export const buyItem = () => {
  return { type: 'BUY_ITEM' };
};
export const removeItem = (itemID, itemPrice) => {
  return { type: 'REMOVE_ITEM', id: itemID, price: itemPrice };
};
export const addFeature = (addedFeature, featureID, featurePrice) => {
  console.log(featurePrice);
  return {
    type: 'ADD_FEATURE',
    payload: addedFeature,
    id: featureID,
    price: featurePrice,
  };
};

/*
case actions.removeFeature:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(item => {
            return item.id === action.payload.id ? false : true
          })
        },
        additionalFeatures: [...state.additionalFeatures, action.payload],
        additionalPrice: state.additionalPrice - action.payload.price
      }
*/
