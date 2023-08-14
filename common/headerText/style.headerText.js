import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	headerText: (theme = 'white', bold = false) => ({
		color: theme,
		textAlign: 'center',
		fontFamily: bold ? 'DosisSemiBold' : 'DosisRegular',
		fontSize: bold ? SIZES.medium : SIZES.small,
	}),
});

export default styles;
