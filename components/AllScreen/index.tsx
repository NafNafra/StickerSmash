import { borderRadius } from "@/styles/border"
import { col4 } from "@/styles/colors"
import { size } from "@/styles/size"
import { padding } from "@/styles/spacing"
import { ReactNode } from "react"
import { View } from "react-native"
interface AllScreenProps {
  children: ReactNode
}
const AllScreen = (props: AllScreenProps) => {
  return <View
    style={[
      padding({value1: 40, value2: 20, value3: 50, value4: 20 }),
      size({height:`${100}%`}),
      borderRadius(10),
      {
        backgroundColor: col4
      }
    ]}
  >
    {props.children}
  </View>
}

export default AllScreen