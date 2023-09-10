import { View, Text, TextInput, StyleSheet, TouchableOpacity, BackHandler, Alert } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CreateStackParam } from '../../types'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

type CreateScreenNavigationProp = NativeStackNavigationProp<
  CreateStackParam,
  "Create"
>

type Props = {
  openmodal: React.Dispatch<React.SetStateAction<boolean>>,
  showmodal: boolean

}


const CreateScreen = (props: Props) => {
  const navigation = useNavigation<CreateScreenNavigationProp>()

 


  return (
    <View style={{ flex: 1 }} >
      <View style={{ width: "100%", flex: 1 }} >
        <View style={{ alignItems: "center", marginTop: 30, paddingVertical: 10, flex: 2 }} >

          <Text>Add Image</Text>
          <MaterialCommunityIcons name='file-image-plus' size={50} color={"tomato"} />
        </View>

        <View style={{ alignItems: "start", width: 250, flex: 3 }} >

          <TextInput style={style.inputs} placeholder='Title' />
          <TextInput style={style.inputs} placeholder='Description' />
          <TextInput style={style.inputs} placeholder='Desert, soup, pastry..' />
          <TextInput style={style.inputs} placeholder='Ingredients' />
        </View>

        <View style={{ flex: 2, marginTop: 20 }} >

          <TouchableOpacity
            style={style.button}
            activeOpacity={0.8}

            onPress={() => {
              props.openmodal(!props.showmodal);
              navigation.goBack()
            }}
          ><Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "700" }} >Save</Text></TouchableOpacity>

          <TouchableOpacity
            style={[style.button, { backgroundColor: "red" }]}
            activeOpacity={0.8}

            onPress={() => {
              props.openmodal(!props.showmodal);
              navigation.goBack()
            }}
          ><Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "700" }} >Cancel</Text></TouchableOpacity>

        </View>




      </View>





    </View>
  )
}

const style = StyleSheet.create({
  inputs: {
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    width: "100%",
    paddingVertical: 15
  },
  button: {
    padding: 10,
    elevation: 2,

    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "orange",

  }
})

export default CreateScreen