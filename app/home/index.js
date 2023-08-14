import { SafeAreaView } from 'react-native';
import { COLORS } from '../../constants/theme';
import { Form, Header } from '../../components';

export default Home = () => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: COLORS.mainBg,
				paddingHorizontal: 15,
				justifyContent: 'space-between',
			}}
		>
			<Header
				firstText={'Select Camera and Date'}
				firstTextBold={true}
				theme={'black'}
			/>
			<Form />
		</SafeAreaView>
	);
};
