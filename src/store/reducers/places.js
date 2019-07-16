import * as actionTypes from '../actions/actionTypes';

const initialState = {
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PLACE:
            const name = action.name
            return {
                ...state,
                places: state.places.concat({
                    name,
                    image: {
                        uri: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/07/02/98/32.jpg'
                    },
                    key: Math.random() + name
                })
            };

        case actionTypes.DELETE_PLACE:
            const newPlacesArr = state.places.filter(place => {
                return place.key !== state.selectedPlace.key;
            });

            return {
                ...state,
                places: newPlacesArr,
                selectedPlace: null
            };

        case actionTypes.SELECT_PLACE:
            const selectedPlace = state.places.find(place => {
                return place.key === action.selectedKey;
            });
            return {
                ...state,
                selectedPlace
            };

        case actionTypes.DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            }

        default:
            return state;
    };
};

export default reducer;