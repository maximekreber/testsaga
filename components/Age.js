import React, { Component } from "react";
import { Platform, Button, StyleSheet, Text, View } from "react-native";
import store from '../store.js';
import mapStateToProps from '../redux/actions/ageAction';
import mapDispachToProps from '../redux/actions/ageAction';
import { connect } from "react-redux";

 class Age extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.padding}>{this.props.age}</Text>
        <Button
          onPress={this.props.onAgeUp}
          title="Up"
          color="#841584"
          accessibilityLabel="Up age"
        />
        <Button
          onPress={this.props.onAgeDown}
          title="Down"
          color="#841584"
          accessibilityLabel="Down age"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  padding: {
    paddingBottom: 10,
  },
});
export default connect(
  mapStateToProps,
  mapDispachToProps
)(Age);

