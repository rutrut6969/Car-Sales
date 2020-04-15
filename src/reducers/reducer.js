export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 },
  ],
};

export const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.price,
        car: {
          ...state.car,
          features: state.car.features.filter(({ id }) => id !== action.id),
        },
      };
    // state.car.features.filter(({ id }) => id !== action.id);
    // state.car.features.filter(({ id }) => console.log(id));
    // console.log('Action ID for Remove_Items', action.id);

    case 'BUY_ITEM':
      return state;

    case 'ADD_FEATURE':
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.price,
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            {
              id: action.id,
              name: action.payload,
              price: action.price,
            },
          ],
        },
      };
    default:
      return state;
  }
};
reducer(undefined, { type: '@@redux/INITs.r.a.n.d.o.m' });
