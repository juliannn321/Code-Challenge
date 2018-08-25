import React, { Component } from 'react';
import { View } from 'react-native';
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
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <List />
                <Button
                    title='Add New Bookmark'
                    checkmark={false}
                    onPress={() => this.props.navigation.navigate('Search')} 
                />
            </View>
        );
    }
}

export default BookMark;
