import { Text, TextInput, TouchableOpacity, View } from "react-native";
import IconBtn from "../iconBtn/iconBtn";
import {icons} from "../../constants";
import styles from './style.input'

const Input = ({textInput, handleClick, icon}) => {
  return ( 
    <View style={styles.container}>
      <Text style={styles.textField}>
        {textInput}
      </Text>
      <IconBtn iconUrl={icon} handlePress={handleClick}/>
    </View>
   );
}
 
export default Input;