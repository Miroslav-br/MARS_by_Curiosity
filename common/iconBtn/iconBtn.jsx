import { Image, TouchableOpacity } from "react-native";
import styles from "./style.iconBtn";


const IconBtn = ({iconUrl, handlePress}) => {


  return ( 
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={iconUrl} resizeMode="contain"/>
    </TouchableOpacity>
   );
}

export default IconBtn;