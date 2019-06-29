import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
          super(props);
          // Don't call this.setState() here!
          this.state = { textForPage: "Earth People New York to California" };
          //this.handleClick = this.handleClick.bind(this);
        }
    render() {
        return (
          <View style={styles.container}>
            <Text> {this.state.textForPage} </Text>
          </View>
        );
    }

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
