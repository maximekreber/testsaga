import React, { Component } from "react";
import { Platform, Button, StyleSheet, Text, View } from "react-native";
import { mapStateToProps, mapDispachToProps } from "../redux/actions/ageAction";
import { connect } from "react-redux";
import { styles } from "../styles.js";

class Age extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.age}</Text>
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
export default connect(
  mapStateToProps,
  mapDispachToProps
)(Age);
