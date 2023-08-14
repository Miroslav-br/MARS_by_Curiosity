import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'trasparent',
		paddingTop: 42,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	backgroundImage: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'center',
		paddingTop: SIZES.xlarge,
		paddingLeft: SIZES.medium,
	},
});

export default styles;
