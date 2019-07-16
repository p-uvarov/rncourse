import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

const ListItem = props => {
    return (
        <TouchableOpacity onPress={props.onItemPress}>
            <View style={styles.listItemContainer}>
                <Image 
                    source={props.placeImage} 
                    style={styles.placeImage}
                    resizeMode="contain"
                />
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItemContainer: {
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#eee',
        alignItems: 'center',
        flexDirection: 'row'
    },
    placeImage: {
        width: 30,
        height: 30,
        marginRight: 10
    }
})

export default ListItem