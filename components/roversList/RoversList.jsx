import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { roverCameras } from "../../constants";
import styles from "./style.roversList";

const RoversList = ({visbileList, handleClick}) => {
  return ( 
    <View style={styles.container(visbileList)}>
      <FlatList 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={Object.keys(roverCameras)}
      renderItem={({item: camera}) => {
        return <TouchableOpacity onPress={() => {
          handleClick(camera)
        }}>
          <Text style={styles.roversText}>{camera}</Text>
        </TouchableOpacity>
      }} >

      </FlatList> 
    </View>
  );
}
 
export default RoversList;