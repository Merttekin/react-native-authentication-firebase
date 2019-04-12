import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import firebase from 'firebase';
import Button from './components/Button';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Spinner from './components/Spinner';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.clickLogin = this.clickLogin.bind(this);
    }

    state = {
        email: '',
        password: '',
        loading: false
    };

    clickLogin() {
        this.setState({ loading: true })
        const { password, email } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.loginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.loginSuccess.bind(this))
                    .catch(this.loginFail.bind(this));
            })
    }

    loginSuccess() {
        console.log('başarılı');
        this.setState({ loading: false });
    }
    loginFail() {
        console.log('hatalı');

    }

    renderButton() {
        if (!this.state.loading)
            return <Button onPress={this.clickLogin}> GİRİŞ </Button>;
        else
            return <Spinner size='small' />;
    }

    render() {
        const { inputStyle } = styles;
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
                    {this.renderButton()}
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