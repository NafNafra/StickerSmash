import { border } from '@/styles/border'
import { direction, display, justify } from '@/styles/display'
import { padding } from '@/styles/spacing'
import React from "react"
import { Text, TextInput, View } from "react-native"
type LabelInputProps = {
  label: string,
  value?: string,
  setValue: (value: string) => void
}
const LabelInput = (props: LabelInputProps) => {

  return (
    <View style={[
      display['flex'], direction['row'], justify['space-between'],
      {
        flexDirection:'row',
        alignItems: 'center',
      },
    ]}>
      <Text style={[]}>{props.label}: </Text>
      <TextInput
        value={props.value}
        onChangeText={props.setValue}
        style={[
          border({
            width: 2,
            color: '#ccc',
            radius: 2
          }),
          padding({ value1: 5 }),


        ]}
        placeholder={`Enter ${props.label.toLowerCase()}`}
      />
    </View>
  )
}

export default LabelInput