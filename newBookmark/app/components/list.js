import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';


class List extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    keyExtractor={(item, index) => String(index)}
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({ item }) => {
                        <View>
                            <Text style={{ backgroundColor: 'black' }}>{item.key}</Text>
                        </View>
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataSource: state.listReducer.dataSource
    };
};

export default connect(mapStateToProps, {})(List);