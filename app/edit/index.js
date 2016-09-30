'use strict';

var React = require('react-native')
var Icon = require('react-native-vector-icons/Ionicons')
var Text = React.Text
var View = React.View
var StyleSheet = React.StyleSheet

var Edit = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Edit Page</Text>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

module.exports = Edit;