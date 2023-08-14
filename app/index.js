import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../constants/theme';
import images from '../constants/images';

import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({
		DosisExtraLight: require('../assets/fonts/Dosis-ExtraLight.ttf'),
		DosisRegular: require('../assets/fonts/Dosis-Regular.ttf'),
		DosisSemiBold: require('../assets/fonts/Dosis-SemiBold.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	const router = useRouter();

	const toHomePage = () => {
		setTimeout(() => {
			router.push('/home');
		}, 1500);
	};

	return (
		<SafeAreaView
			style={styles.container}
			onLayout={onLayoutRootView}
		>
			<ImageBackground
				source={images.startBg}
				style={styles.backgroundImage}
			>
				<View style={{ flex: 1, backgroundColor: 'transparent' }}>
					<Text style={styles.firstTitle}>MARS</Text>
					<Text style={styles.secondTitle}>by Curiosity</Text>
				</View>
			</ImageBackground>
			{toHomePage()}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'center',
		paddingTop: SIZES.xlarge,
		paddingLeft: SIZES.medium,
	},
	firstTitle: {
		fontSize: 80,
		fontFamily: 'DosisExtraLight',
		color: COLORS.white,
	},
	secondTitle: {
		color: COLORS.gray,
		fontFamily: 'DosisSemiBold',
		fontSize: 25,
		lineHeight: 25,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
