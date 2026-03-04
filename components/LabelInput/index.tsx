import { border } from '@/styles/border'
import { col2, col3 } from '@/styles/colors'
import { direction, display, flex, justify } from '@/styles/display'
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
      <Text style={[flex(1), {color: col2, fontFamily:'ubuntu'}]}>{props.label}: </Text>
      <TextInput
        value={props.value}
        onChangeText={props.setValue}
        style={[
          border({
            width: 2,
            color: '#ccc',
            radius: 10
          }),
          padding({ value1: 8 }),
          flex(1)
          ,{backgroundColor: col3,fontFamily:'ubuntu',}
        ]}
        placeholder={`Enter ${props.label.toLowerCase()}`}
      />
    </View>
  )
}

export default LabelInput