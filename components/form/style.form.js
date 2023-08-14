import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export default styles = StyleSheet.create({
	container: {
		marginBottom: SIZES.medium,
	},
	inputLabel: {
		fontSize: 14,
		fontFamily: 'DosisRegular',
		marginBottom: 7,
	},
	submitButton: {
		paddingVertical: SIZES.large,
		alignItems: 'center',
		width: '100%',
		backgroundColor: COLORS.orange,
	},
	submitButton__text: {
		color: COLORS.white,
		fontSize: SIZES.large,
		fontFamily: 'DosisRegular',
	},
});
