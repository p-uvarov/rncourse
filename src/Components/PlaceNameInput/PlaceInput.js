import React, {Component} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceNameInput extends Component {
    state = {
        placeName: ''
    };

    textInput = React.createRef();

    focusTextInput = () => {
        // Focus the text input
        if (this.textInput) this.textInput.current.focus();
    };

    componentDidMount() {
        // autofocus the input on mount
        this.focusTextInput();
    }

    placeNameChangeHandler = val => {
        this.setState({ placeName: val });
    };

    addPlaceNameHandler = () => {
        if (this.state.placeName.trim() === '') {
            alert('Please input place name');
            return
        };

        this.props.addPlaceNameHandler(this.state.placeName);
    };
    
    render() {
        return (
            <View style={styles.placeNameInputContainer}>
                <TextInput
                    ref={this.textInput}
                    style={styles.placeNameInput}
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHandler}
                    placeholder="Input place here"
                />
                <Button
                    style={styles.placeNameButton}
                    title="Add"
                    onPress={this.addPlaceNameHandler}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    placeNameInputContainer: {
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    placeNameInput: {
        width: '70%'
    },
    placeNameButton: {
        width: '30%'
    }
})

export default PlaceNameInput;