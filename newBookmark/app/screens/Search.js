import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import GooglePlacesInput from '../components/GooglePlacesInput';

class Search extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Search',
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Image
                    style={{ margin: 10 }}
                    source={require('../../assets/ButtonBack.png')}
                />
            </TouchableOpacity>
        )
    });
    componentDidMount() {
        console.log('asdfasdf', this.props.navigation);

    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <GooglePlacesInput
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                        this.props.navigation.navigate('About', { address: details.formatted_address, name: details.name })
                    }}
                />
            </View>
        );
    }
}

export default Search;