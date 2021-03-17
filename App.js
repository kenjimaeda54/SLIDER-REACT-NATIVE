import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

import Slider from "react-native-slider";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimValue={0}
          maximumValue={100}
          onValueChange={(valor) => this.setState({ valor: valor })}
          value={this.state.valor}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="red"
        />
        <Text style={{ textAlign: "center" }}>
          Você selecinou: {this.state.valor.toFixed(1)} kg
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
