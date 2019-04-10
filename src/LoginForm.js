import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Button from './components/Button';
import Card from './components/Card';
import CardSection from './components/CardSection';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    render() {
        const { subContainerStyle, inputStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <TextInput
                        placeholder='E-mail'
                        style={inputStyle}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <TextInput
                        placeholder='Şifre'
                        style={inputStyle}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={() => console.log('tıklandı')}> GİRİŞ </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        // lineHeigt: 23,
        flex: 2
    }
}

export default LoginForm;