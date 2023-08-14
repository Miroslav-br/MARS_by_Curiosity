import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
	container: {
		paddingTop: SIZES.medium,
		justifyContent: 'center',
	},
	errorContainer: {
		paddingVertical: SIZES.large,
		width: '100%',
	},
	errorMessage: {
		fontSize: SIZES.large,
		textAlign: 'center',
	},
	imagesContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 8,
		paddingTop: SIZES.medium,
	},
	imageView: {
		width: '31.8%',
		height: 109,
		backgroundColor: COLORS.white,
		borderRadius: 8,
		overflow: 'hidden',
	},
	roverImage: {
		width: '100%',
		height: 109,
	},
});

export default styles;
