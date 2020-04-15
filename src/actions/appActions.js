export const buyItem = () => {
  return { type: 'BUY_ITEM' };
};
export const removeItem = (itemID) => {
  return { type: 'REMOVE_ITEM', id: itemID };
};
export const addFeature = (addedFeature, featureID) => {
  return { type: 'ADD_FEATURE', payload: addedFeature, id: featureID };
};
