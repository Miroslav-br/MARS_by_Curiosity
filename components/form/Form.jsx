import { Image, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import Input from "../../common/input/Input";
import { icons, images, roverCameras } from "../../constants";
import styles from './style.form'
import RoversList from "../roversList/RoversList";
import { useRouter } from 'expo-router';

const Form = () => {

  const [roverInput, setRoverInput] = useState('')
  const [dateInput, setDateInput] = useState('2023-08-01')
  const [visbileList, setVisibleList] = useState(false)

  const router = useRouter();


  return ( <View>
      <View style={styles.container}>
        <Text style={styles.inputLabel}>Rove Camera</Text>
        <Input textInput={roverInput || "Choose a camera"} handleClick={() => {
          setVisibleList(!visbileList)
        }} icon={visbileList ? icons.dropUp:icons.dropdown}/>
        <RoversList visbileList={visbileList} handleClick={(text) => {
          setVisibleList(false);
          setRoverInput(text);
        }} />
      </View>
      <View style={styles.container}>
        <Text style={styles.inputLabel}>Date</Text>
        <Input textInput={dateInput} handleChange={setDateInput} icon={icons.calendar}/>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => {
        if(roverInput && dateInput) {
          router.push(`/home/camera=${roverCameras[roverInput]}&date=${dateInput}&fullCamera=${roverInput}`)
        }
      }}>
        <Text style={styles.submitButton__text}>Explore</Text>
      </TouchableOpacity>
      <Image source={images.marsRover} resizeMode="cover" />
    </View>
   );
}
 
export default Form;