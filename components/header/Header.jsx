import { Text, View, ImageBackground } from 'react-native';
import styles from './style.header';
import IconBtn from '../../common/iconBtn/iconBtn';
import icons from '../../constants/icons';
import HeaderText from '../../common/headerText/HeaderText';


const Header = ({
  leftIcon,
  rightIcon,
  firstText,
  firstTextBold,
  secondText,
  secondTextBold,
  handleLeftPress,
  handleRightPress,
  theme,
}) => {

  return ( 
    <View style={styles.container}>
      <IconBtn iconUrl={leftIcon} handlePress={handleLeftPress}/>
      <HeaderText 
        firstText={firstText}
        firstTextBold={firstTextBold}
        secondText={secondText}
        secondTextBold={secondTextBold}
        theme={theme}
      />
      <IconBtn iconUrl={rightIcon} handlePress={handleRightPress}/>
    </View>
  );
}
 
export default Header;