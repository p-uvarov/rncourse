import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

import PlaceList from './src/Components/List/PlaceList';
import PlaceInput from './src/Components/PlaceNameInput/PlaceInput';
import PlaceDetail from './src/Components/PlaceDetail/PlaceDetail';
import * as actions from './src/store/actions/index';
// import console = require('console');
// import placeImage from './src/assets/toronto.jpg';

class App extends Component {
  addPlaceNameHandler = name => {
    this.props.onAddPlace(name);
    console.log('Place added!');
  };

  deletedPlaceHandler = () => {
    this.props.onDeletePlace();
  };

  selectedPlaceHandler = selectedKey => {
    this.props.onSelectPlace(selectedKey);
  };

  closeModalHandler = () => {
    this.props.onDeselectedPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.props.selectedPlace}
          onDeletePlace={this.deletedPlaceHandler}
          onCloseModal={this.closeModalHandler}
        />
        <PlaceInput
          addPlaceNameHandler={this.addPlaceNameHandler}
        />
        <PlaceList
          places={this.props.places}
          onSelectItem={this.selectedPlaceHandler}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(actions.addPlace(name)),
    onDeletePlace: () => dispatch(actions.deletePlace()),
    onSelectPlace: selectedKey => dispatch(actions.selectPlace(selectedKey)),
    onDeselectedPlace: () => dispatch(actions.deselectedPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);