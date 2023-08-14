import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

export default styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: COLORS.white,
		borderRadius: 10,
		paddingHorizontal: 16,
	},
	textField: {
		fontSize: SIZES.medium,
		paddingVertical: 18,
		flex: 1,
		fontFamily: 'DosisRegular',
	},
});
