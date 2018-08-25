import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import List from '../components/list';
import Button from '../components/Button';

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
                <Text>No Items. Please Bookmark Something!</Text>
                </View>
            );
        } else if (this.props.dataSource.length > 0) {
            return (
                <View>
                    <FlatList
                        removeClippedSubviews={false}
                        keyExtractor={(item, index) => String(index)}
                        data={this.props.dataSource}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Text>{item.name}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
            );
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {this.renderNoItems()}
                <Button
                    title='Add New Bookmark'
                    checkmark={false}
                    onPress={() => this.props.navigation.navigate('Search')}
                />
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
