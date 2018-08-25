import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

class Button extends Component {
    renderCheckmark = () => {
        if (this.props.checkmark) {
            return (
                <Image
                    source={require('../../assets/IconCheckmark.png')}
                    style={{ margin: 10 }}
                />
            )
        } else if (!this.props.checkmark) {
            return null;
        }
    }
    render() {
        return (
            <View style={{ margin: 20 }}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={{ backgroundColor: this.props.checkmark ? 'green' :'blue', width: 300, height: 50, borderRadius: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                >
                    {this.renderCheckmark()}
                    <Text style={{ color: 'white' }}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Button;