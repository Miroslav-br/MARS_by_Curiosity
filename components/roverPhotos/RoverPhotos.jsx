import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';
import { COLORS } from "../../constants";
import styles from "./style.reverPhotos";

const RoverPhotos = ({data, errorMessage, isLoading}) => {

  const router = useRouter();

  return ( 
  <View style={styles.container}> 
    {isLoading ? (
      <ActivityIndicator
        style={{
          justifyContent: 'center'
        }}
        size={'large'}
        color={COLORS.white}
      />
    ) : errorMessage ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
    ) : (
      data.photos.length 
      ? (
        <View style={styles.imagesContainer}>
          {
             data?.photos.map(photo => (
        
        <TouchableOpacity 
          key={photo.id} 
          style={styles.imageView}
          onPress={() => {
            router.push(`/image/photoId=${photo.id}&photoUrl=${photo.img_src}`)
          }}
        >
          <Image key={photo.id} source={{uri: photo.img_src}} style={styles.roverImage}  resizeMode="cover"/>
         </TouchableOpacity>
      )) 
          }
        </View>
      )
      : <View style={styles.errorContainer}>
        <Text style={styles.errorMessage}>N/A</Text>
        
    </View> 
    )}
  </View> );
}
 
export default RoverPhotos;