import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '../components/Button';
import { gatherListOfBookmarks } from '../actions/listAction';
let newBookmark = {
    image: '',
    name: '',
    address: ''
};
let newCheckmark = false;
class About extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <TouchableOpacity onPress={() => {
                console.log('back')
                if (newCheckmark) {
                    navigation.state.params.gatherListOfBookmarks(newBookmark);
                    navigation.popToTop();
                } else if (!newCheckmark) {
                    navigation.pop();
                }
            }}>
                <Image
                    style={{ margin: 10 }}
                    source={require('../../assets/ButtonBack.png')}
                />
            </TouchableOpacity>
        )
    });
    state = {
        checkmark: false,
        bookmark: {
            image: '',
            name: '',
            address: ''
        },
        url: ''
    }
    componentDidMount = async () => {
        const api = 'AIzaSyA_whkX4QqyrYnTzcJlgWO26bgC_UZLBo0'
        const photoRef = this.props.navigation.state.params.photoRef;
        const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${api}`
        this.setState({ url })
        this.props.navigation.setParams({
            gatherListOfBookmarks: this.props.gatherListOfBookmarks
        });
    }
    addNewBookmark = () => {
        if (this.state.checkmark) {
            this.setState({
                checkmark: false,
            }, () => console.log(this.state.bookmark))
            newBookmark = {
                image: '',
                name: '',
                address: ''
            }
            newCheckmark = false;
            console.log(newBookmark, newCheckmark)
        } else if (!this.state.checkmark) {
            this.setState({
                checkmark: true,
            }, () => console.log(this.state.bookmark))
            newBookmark = {
                image: '',
                name: this.props.navigation.state.params.name,
                address: this.props.navigation.state.params.address
            }
            newCheckmark = true;
            console.log(newBookmark, newCheckmark)

        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ width: 400, height: 300 }}
                        source={{ uri: this.state.url }}
                    />
                </View>
                <View style={{ flex: 1, padding: 15, backgroundColor: 'white', alignItems: 'center', borderWidth: 2, borderRadius: 20, borderColor: 'white' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 15 }}>{this.props.navigation.state.params.name}</Text>
                    <Text>{this.props.navigation.state.params.address}</Text>
                    <Button
                        title='Bookmark'
                        onPress={this.addNewBookmark}
                        checkmark={this.state.checkmark}
                    />
                </View>
            </View>
        );
    }
}

export default connect(null, { gatherListOfBookmarks })(About);