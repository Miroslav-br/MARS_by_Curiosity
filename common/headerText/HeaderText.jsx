import { Text, View } from "react-native";
import styles from "./style.headerText";

const HeaderText = ({firstText, firstTextBold, secondText, secondTextBold, theme}) => {
  return ( 
        <View style={styles.container}>
          <Text style={styles.headerText(theme,firstTextBold)}>
            {firstText}
          </Text>
          {
            secondText ? (
              <Text style={styles.headerText(theme, secondTextBold)}>
            {secondText}
          </Text>
            ) : null
          }
        </View>

   );
}
 
export default HeaderText;