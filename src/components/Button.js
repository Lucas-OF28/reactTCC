import React from 'react'
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
  button: {
    fontWeight: '200',
    color: "#f5f2f2",
    fontSize: 35,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 30,
    backgroundColor: '#707070',
    textAlign: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
  },
  operationButton: {
    fontWeight: '200',
    color: '#fff',
    backgroundColor: '#fa9e0d',
  },
  buttonDouble: {
    fontWeight: '200',
    color: "#f5f2f2",
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    fontWeight: '200',
    color: "#f5f2f2",
    backgroundColor: "#525252",
    width: (Dimensions.get('window').width / 4) * 3,
  }
})

export default props => {
  const stylesButton = [styles.button]
  if (props.double) stylesButton.push(styles.buttonDouble)
  if (props.triple) stylesButton.push(styles.buttonTriple)
  if (props.operation) stylesButton.push(styles.operationButton)
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  )
}