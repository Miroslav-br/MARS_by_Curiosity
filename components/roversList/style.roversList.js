import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export default styles = StyleSheet.create({
	container: visbileList => ({
		display: visbileList ? 'flex' : 'none',
		paddingVertical: 10,
	}),
	roversText: {
		backgroundColor: COLORS.white,
		fontSize: SIZES.small,
		fontFamily: 'DosisRegular',
		marginRight: 7,
		padding: 5,
		borderRadius: 4,
	},
});
