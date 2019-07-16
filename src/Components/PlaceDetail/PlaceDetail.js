import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PlaceDetail = props => {
    let placeInfo = null;

    if (props.selectedPlace) {
        placeInfo = (
            <View style={styles.placeInfoContainer}>
                <Image style={styles.placeImage} source={props.selectedPlace.image} resizeMode='contain' />
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        )
    }

    return (
        <Modal
            animationType='slide'
            visible={props.selectedPlace !== null}
            onRequestClose={props.onCloseModal}
        >
            {placeInfo}
            <View style={styles.buttonContainer}>
                <Icon.Button
                    name="delete"
                    backgroundColor="red"
                    onPress={props.onDeletePlace}
                    color="white"
                    activeOpacity={0.3}
                    underlayColor="white"
                >
                    Delete
                </Icon.Button>
                <Icon.Button
                    name="close-box"
                    backgroundColor="green"
                    onPress={props.onCloseModal}
                    color="white"
                    activeOpacity={0.3}
                    underlayColor="white"
                >
                    Close
                </Icon.Button>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: '80%'

    },
    placeInfoContainer: {
        marginTop: 40
    },
    placeImage: {
        width: '100%',
        height: 200,

    },
    placeName: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10
    }
})

export default PlaceDetail;