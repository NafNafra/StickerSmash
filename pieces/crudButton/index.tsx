import { col1, col2, col3, col4 } from "@/styles/colors"
import { Pressable, StyleSheet, Text } from "react-native"
import { buttonInterface } from "./buttonInterface"
const CrudButton = (props: buttonInterface) => {
  let btnStyles = []
  switch (props.variant) {
    case 'principal': {
      btnStyles.push(styles.primary)
      break
    }
    case 'second': {
      btnStyles.push(styles.secondary)
      break
    }
    case 'tertiary': {
      btnStyles.push(styles.tertiary)
      break
    }
  }

  return <Pressable
    onPress={props.onPress}
    style={[styles.button, ...btnStyles, props.style,]}
  >
    {props.text ?
      <Text style={props.variant == 'tertiary' ? { color: col2 , fontFamily:'ubuntu'} : { color: col1, fontFamily:'ubuntu' }}>{props.text}</Text>
      :
      <>
        {props.children}
      </>}
  </Pressable>

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: col2,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    shadowColor: col2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  primary: {
    backgroundColor: col2,
  },
  secondary: {
    backgroundColor: col4,
    shadowColor: col4,
    borderColor: col4,
    borderWidth: 0.5
  },
  tertiary: {
    backgroundColor: col3,
    shadowColor: col3,
    borderColor: col2,
    borderWidth: 0.5
  }
})
export default CrudButton