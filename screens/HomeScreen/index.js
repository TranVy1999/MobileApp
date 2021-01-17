import React, { useState, lazy, useEffect } from 'react';
import { TabBar } from '@ant-design/react-native';
import { View, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import {
	faHome,
	faLayerGroup,
	faCompass,
	faSwatchbook,
	faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

import { actionCreators } from '../../store/manga/manga.meta';
import TypesTabs from './components/TypesTabs';
import CarouselHome from './components/CarouselHome';

const DiscoverTab = lazy(() => import('./components/DiscoverTabs'));
const BookcaseTab = lazy(() => import('./components/BookcaseTabs'));
const MeTab = lazy(() => import('./components/MeTab'));
const MangaDetail = lazy(() => import('../MangaDetail'));

const HomeScreen = (props) => {
	const { navigation } = props;
	const [selectedTab, setSelectedTab] = useState('homeTab');

	const tabStyle = {
		width: '22px',
		height: '22px',
		color: '#ff5454',
	};
	const dispatch = useDispatch();
//2
	const fetchMangas = () => {
		dispatch(actionCreators.actFetchMangas());
	};
		//11
	const mangas = useSelector((store) => store.manga?.mangas);
	console.log(mangas);
//1
	useEffect(() => fetchMangas(), []);

	const navigations = [
		{
			key: 'home',
			selected: 'homeTab',
			title: 'Trang chủ',
			icon: faHome,
			children: <CarouselHome navigation={navigation} />,
			onPress: () => setSelectedTab('homeTab'),
		},
		{
			key: 'categories',
			selected: 'categoriesTab',
			title: 'Phân loại',
			icon: faLayerGroup,
			children: <TypesTabs navigation={navigation} />,
			onPress: () => setSelectedTab('categoriesTab'),
		},
		{
			key: 'discovery',
			selected: 'discoveryTab',
			title: 'Khám phá',
			icon: faCompass,
			children: <DiscoverTab navigation={navigation} />,
			onPress: () => setSelectedTab('discoveryTab'),
		},
		{
			key: 'bookStore',
			selected: 'bookStoreTab',
			title: 'Tủ sách',
			icon: faSwatchbook,
			 children: <BookcaseTab navigation={navigation} />,
			onPress: () => setSelectedTab('bookStoreTab'),
		},
		{
			key: 'me',
			selected: 'meTab',
			title: 'Tôi',
			icon: faUserCircle,
			children: <MeTab navigation={navigation} />,
			onPress: () => setSelectedTab('meTab'),
		},
	];
	return (
		<View
			style={{
				width: Dimensions.get('window').width,
				height: Dimensions.get('window').height,
				maxHeight: Dimensions.get('window').height,
			}}
		>
			<TabBar
				unselectedTintColor="#949494"
				tintColor="#ff5454"
				barTintColor="white"
				tabBarPosition="bottom"
			>
				{navigations?.map((it) => (
					<TabBar.Item
						key={it?.key}
						title={it?.title}
						icon={
							<FontAwesomeIcon
								style={{
									...tabStyle,
									color: 'rgb(148, 148, 148)',
								}}
								icon={it?.icon}
							/>
						}
						selectedIcon={
							<FontAwesomeIcon
								style={{ ...tabStyle }}
								icon={it?.icon}
							/>
						}
						selected={selectedTab === it?.selected}
						onPress={it?.onPress}
					>
						{it?.children}
					</TabBar.Item>
				))}
			</TabBar>
		</View>
	);
};
export default HomeScreen;
