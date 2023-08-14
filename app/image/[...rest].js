import { useGlobalSearchParams, useRouter } from 'expo-router';
import { Image, View } from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';
import { Header } from '../../components';
import qs from 'query-string';

const RoverPhoto = () => {
	const { rest } = useGlobalSearchParams();
	const router = useRouter();
	const { photoId, photoUrl } = qs.parse(rest);

	let correctPhotoUrl = photoUrl;
	correctPhotoUrl = correctPhotoUrl.replace(',', '//');
	correctPhotoUrl = correctPhotoUrl.replaceAll(',', '/');

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.black,
				paddingHorizontal: SIZES.medium,
				paddingBottom: 34,
			}}
		>
			<Header
				firstText={'Photo ID'}
				secondText={photoId}
				secondTextBold={true}
				leftIcon={icons.backWhite}
				theme={'white'}
				handleLeftPress={() => {
					router.back();
				}}
				rightIcon={icons.shareWhite}
			/>
			<View style={{ flex: 1, paddingTop: SIZES.medium }}>
				<Image
					source={{ uri: correctPhotoUrl }}
					style={{ height: '100%' }}
					resizeMode='cover'
				/>
			</View>
		</View>
	);
};

export default RoverPhoto;
