import React, { Component } from 'react';
import { View, FlatList, Text, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/Button';

const SCREEN_WIDTH = Dimensions.get('window').width;

class BookMark extends Component {
    static navigationOptions = {
        headerTitle: 'Bookmark'
    };
    static getDerivedStateFromProps = (nextProps, prevState) => {
        console.log('asdfasdfasdfasd', nextProps, prevState);
        return null;
    }
    renderNoItems = () => {
        if (this.props.dataSource.length < 1) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>No Items. Please Bookmark Something!</Text>
                    </View>
                    <Button
                        title='Add New Bookmark'
                        checkmark={false}
                        onPress={() => this.props.navigation.navigate('Search')}
                    />
                </View>
            );
        } else if (this.props.dataSource.length > 0) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList
                        removeClippedSubviews={false}
                        keyExtractor={(item, index) => String(index)}
                        data={this.props.dataSource}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ flexDirection: 'row', margin: 10, width: SCREEN_WIDTH*0.9 }}>
                                    <Image
                                        style={{ width: 100, height: 100, borderRadius: 10 }}
                                        source={require('../../google.png')}
                                    />
                                    <View style={{ flexDirection: 'column', justifyContent: 'center', margin: 10 }}>
                                        <Text>{item.name}</Text>
                                        <Text style={{ flexWrap: 'wrap' }}>{item.address}</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />
                    <Button
                        title='Add New Bookmark'
                        checkmark={false}
                        onPress={() => this.props.navigation.navigate('Search')}
                    />
                </View>
            );
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {this.renderNoItems()}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataSource: state.listReducer.dataSource
    }
}

export default connect(mapStateToProps, {})(BookMark);
