import { ScrollView } from 'react-native';
import { useRouter, useGlobalSearchParams } from 'expo-router';
import queryString from 'query-string';
import { useFetch } from '../../hooks/useFetch';
import { COLORS, SIZES, icons } from '../../constants';
import { Header, RoverPhotos } from '../../components';

const RoverImages = () => {
	const { rest } = useGlobalSearchParams();
	const { camera, date, fullCamera } = queryString.parse(rest);

	const { data, errorMessage, isLoading } = useFetch(
		`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera.toLowerCase()}&page=1&api_key=92crvIgeXRTjtsn5vc0BlVK6sUIeKfEmQjwrpPDm`
	);

	console.log(data?.photos);

	const router = useRouter();

	return (
		<ScrollView
			style={{ flex: 1, paddingHorizontal: SIZES.medium, backgroundColor: COLORS.mainBg }}
		>
			<Header
				firstText={fullCamera}
				firstTextBold={true}
				secondText={date}
				leftIcon={icons.back}
				handleLeftPress={() => {
					router.back();
				}}
				theme={'black'}
			/>
			<RoverPhotos
				data={data}
				errorMessage={errorMessage}
				isLoading={isLoading}
			/>
		</ScrollView>
	);
};

export default RoverImages;
