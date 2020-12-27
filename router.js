import React, { lazy, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = lazy(() => import('./screens/HomeScreen'));
const MangaDetail = lazy(() => import('./screens/MangaDetail'));
const Login = lazy(() => import('./screens/HomeScreen/components/MeTab/Login'));
const ContentManga = lazy(() => import('./screens/MangaDetail/ContentManga'));
const ContentDiscoverItem = lazy(() =>
	import(
		'./screens/HomeScreen/components/DiscoverTabs/DiscoveryItem/ContentDiscoverItem'
	)
);
const Register = lazy(() =>
	import('./screens/HomeScreen/components/MeTab/register')
);
const ForgotPass = lazy(() =>
	import('./screens/HomeScreen/components/MeTab/forgotPass')
);
const Notification = lazy(() =>
	import('./screens/HomeScreen/components/MeTab/Notification')
);
const Language = lazy(() =>
	import('./screens/HomeScreen/components/MeTab/SubMeTab/Language')
);
const UpdateInformation = lazy(() =>
	import('./screens/HomeScreen/components/MeTab/SubMeTab/UpdateInformation')
);
const Stack = createStackNavigator();

const Router = () => {
	const [titleDetail, setTitleDetail] = useState('');
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						title: '',
						headerStyle: {
							height: 0,
						},
					}}
				/>
				<Stack.Screen
					name="ContentManga"
					component={ContentManga}
					options={{
						title: '',
						headerStyle: {
							height: 0,
						},
					}}
				/>
				<Stack.Screen
					name="MangaDetail"
					component={MangaDetail}
					options={({ route }) => ({ title: route.params.data.name })}
				/>
				<Stack.Screen
					name="ContentDiscoverItem"
					component={ContentDiscoverItem}
				/>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="ForgotPass" component={ForgotPass} />
				<Stack.Screen name="Notification" component={Notification} />
				<Stack.Screen name="Language" component={Language} />
				<Stack.Screen
					name="UpdateInformation"
					component={UpdateInformation}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Router;
