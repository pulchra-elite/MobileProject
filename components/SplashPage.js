import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  input: {
    height: 40,
    fontSize: 25,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  container: {
  },
});


export default class SplashPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      partyName: '',
    }
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  _keyboardWillShow(event) {
  }

  _keyboardWillHide(event) {
  }

  render() {
    return <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View>
        <Text style={styles.title}>Queue it up!</Text>
        <Text style={styles.subtitle}>
          jkbx is a simple collaborative
          YouTube playlist for all
        </Text>
        <TextInput
          style={styles.input}
          placeholder="your-awesome-party"
          onChangeText={this.submit.bind(this)}
          onSubmitEditing={this.goToParty.bind(this)}
          autoCapitalize="none"
        />
        <View style={{paddingTop: 20}}></View>
      </View>
    </KeyboardAvoidingView>
  }

  submit(text) {
    this.setState({partyName: text});
  }

  goToParty() {
    alert(this.state.partyName);
  }

}
