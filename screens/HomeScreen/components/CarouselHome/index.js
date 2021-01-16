import React,{ useEffect } from 'react';
import {
	View,
	Dimensions,
	ScrollView,
	Image,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { Carousel, Grid } from 'antd-mobile';
import { Avatar } from "react-native-elements";
import 'antd-mobile/dist/antd-mobile.css';
import { actionCreators } from '../../../../store/manga/manga.meta';
import { useDispatch, useSelector } from 'react-redux';

const CarouselHome = (props) => {
	const { navigation } = props;
	const heighPx = Dimensions.get('window').height * 0.33;

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

	const carouselImages = [
		'http://cn.e.pic.mangatoon.mobi/homepage-banners/452-f491.jpg',
		'http://cn.e.pic.mangatoon.mobi/homepage-banners/458-a623.jpg',
		'http://cn.e.pic.mangatoon.mobi/homepage-banners/456-4cff.jpg',
		'http://cn.e.pic.mangatoon.mobi/homepage-banners/454-5d73.jpg',
	];

	return (
		<View
			style={{
				width: Dimensions.get('window').width,
				height: '100%',
				backgroundColor: '#fff',
			}}
		>
			<ScrollView>
				<View
					style={{
						position: 'relative',
						overflow: 'hidden',
						transform: 'translate3d(0px, 0px, 0px)',
					}}
				>
					<Carousel
						autoplay={true}
						dots={false}
						autoplayInterval={5000}
						infinite
						dotActiveStyle={{
							background: '#ff5454',
						}}
					>
						{carouselImages?.map((it, idx) => (
							<View key={idx}>
								<Image
									style={{ width: '100%', height: heighPx }}
									source={{ uri: it }}
								/>
							</View>
						))}
					</Carousel>
					<View
						style={{
							position: 'absolute',
							bottom: '-70px',
							width: '110%',
							height: '100px',
							transform: 'translateX(-5%)',
							borderRadius: '50%',
							borderBottomLeftRadius: 0,
							borderBottomRightRadius: 0,
							backgroundColor: '#fff',
						}}
					></View>
				</View>

				<View className="sub-title" style={styles.contentGird}>
					<Text  style={styles.textTitle}>Mới cập nhật!</Text>
				</View>
				<Grid
					data={mangas}
					carouselMaxRow={1}
					columnNum={2}
					isCarousel
					dots={false}
					hasLine={false}
					renderItem={(dataItem) => (
						<View
							key={dataItem?.id}
							style={{
								height: '200px',
								paddingLeft: '10px',
								paddingRight: '-10px',

							}}
						>
							<TouchableOpacity
								onPress={() =>
									props.navigation.navigate('MangaDetail', {
										data: dataItem,
									})
								}
							>
								<Avatar
									source={{ uri: dataItem?.avatar }}
									style={{
										width: '175px', height: '150px', borderRadius: 5,
										shadowColor: "#000",
										shadowOpacity: 0.2,
										shadowRadius: 10,
									}}
									alt=""
								/>
								<View
									style={{
										color: '#888',
										fontSize: '14px',
										marginTop: '12px',
										textAlign: 'initial',
									}}
								>
									<Text style={styles.text}>{dataItem?.name}</Text>
								</View>
							</TouchableOpacity>
						</View>
					)}
				/>

				<View className="sub-title" style={styles.contentGird}>
					<Text  style={styles.textTitle}> Đề Xuất!</Text>
				</View>
				<Grid
					data={mangas}
					carouselMaxRow={2}
					columnNum={2}
					// isCarousel
					hasLine={false}
					renderItem={(dataItem) => (
						<View
							key={dataItem?.id}
							style={{
								height: '200px',
								paddingLeft: '10px',
								paddingRight: '-10px',
							}}
						>
							<TouchableOpacity
								onPress={() =>
									props.navigation.navigate('MangaDetail', {
										data: dataItem,
									})
								}
							>
								<Avatar
									source={{ uri: dataItem?.avatar }}
									style={{
										width: '175px', height: '150px', borderRadius: 5,
										shadowColor: "#000",
										shadowOpacity: 0.2,
										shadowRadius: 10,
									}}
									alt=""
								/>
								<View
									style={{
										color: '#888',
										fontSize: '14px',
										marginTop: '12px',
										textAlign: 'initial',
									}}
								>
									<Text style={styles.text}>{dataItem?.name}</Text>
								</View>
							</TouchableOpacity>
						</View>
					)}
				/>

				<View className="sub-title" style={styles.contentGird}>
					<Text  style={styles.textTitle}>Truyện Mới!</Text>
				</View>
				<Grid
					data={mangas}
					carouselMaxRow={1}
					columnNum={2}
					isCarousel
					dots={false}
					hasLine={false}
					renderItem={(dataItem) => (
						<View
							key={dataItem?.id}
							style={{
								height: '200px',
								paddingLeft: '10px',
								paddingRight: '-10px',
							}}
						>
							<TouchableOpacity
								onPress={() => {
									props.navigation.navigate('MangaDetail', {
										data: dataItem,
									});
								}}
							>
								<Avatar
									source={{ uri: dataItem?.avatar }}
									style={{ width: '175px', height: '150px' ,borderRadius: 5,
									shadowColor: "#000",
									shadowOpacity: 0.2,
									shadowRadius: 10,}}
									alt=""
								/>
								<View
									style={{
										color: '#888',
										fontSize: '14px',
										marginTop: '12px',
										textAlign: 'initial',
									}}
								>
									<Text style={styles.text}>{dataItem?.name}</Text>
								</View>
							</TouchableOpacity>
						</View>
					)}
				/>
				<View className="sub-title" style={styles.contentGird}>
					<Text style={styles.textTitle}>Viễn Tưởng</Text>
				</View>
				<Grid
					data={mangas}
					carouselMaxRow={2}
					columnNum={2}
					hasLine={false}
					renderItem={(dataItem) => (
						<View style={{
							height: '200px',
							paddingLeft: '10px',
							paddingRight: '-10px',
						}}
							key={dataItem?.id}>
							<TouchableOpacity
								onPress={() => {
									props.navigation.navigate('MangaDetail', {
										data: dataItem,
									});
								}}
							>
								<Avatar
									source={{ uri: dataItem?.avatar }}
									style={{
										width: '175px', height: '150px', borderRadius: 5,
										shadowColor: "#000",
										shadowOpacity: 0.2,
										shadowRadius: 10,
									}}
									alt=""
								/>
								<View
									style={{
										color: '#888',
										fontSize: '14px',
										marginTop: '12px',
										textAlign: 'initial',
									}}
								>
									<Text style={styles.text}>{dataItem?.name}</Text>
								</View>
							</TouchableOpacity>
						</View>
					)}
				/>
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	contentGird: {
		marginTop: '20px',
		marginLeft: '15px',
		fontWeight: 'bold',
		height: '30px',
	},
	text:{
		fontWeight: 'bold',
	},
	textTitle:{
		fontWeight: 'bold',
		fontSize:20,
		color: "red",
	}
});
export default CarouselHome;
