import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const List = props => {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={({item}) => (
                <ListItem
                    placeName={item.name}
                    placeImage={item.image}
                    onItemPress={() => props.onSelectItem(item.key)}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        paddingHorizontal: 20
    }
});

export default List;