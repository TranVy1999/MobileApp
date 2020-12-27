import React from 'react';
import {
	View,
	Dimensions,
	ScrollView,
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { Carousel, Grid } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import Manga from '../../../../assets/manga';

const CarouselHome = (props) => {
	const { navigation } = props;
	const heighPx = Dimensions.get('window').height * 0.33;
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
					<span>Mới cập nhật!</span>
				</View>
				<Grid
					data={Manga}
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
										id: dataItem?.id,
									})
								}
							>
								<img
									src={dataItem?.img}
									style={{ width: '175px', height: '150px' }}
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
									<span>{dataItem?.name}</span>
								</View>
							</TouchableOpacity>
						</View>
					)}
				/>

				<View className="sub-title" style={styles.contentGird}>
					<span> Đề Xuất!</span>
				</View>
				<Grid
					data={Manga}
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
										id: dataItem?.id,
									})
								}
							>
								<img
									src={dataItem?.img}
									style={{ width: '175px', height: '150px' }}
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
									<span>{dataItem?.name}</span>
								</View>
							</TouchableOpacity>
						</View>
					)}
				/>

				<View className="sub-title" style={styles.contentGird}>
					<span>Truyện Mới!</span>
				</View>
				<Grid
					data={Manga}
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
										id: dataItem?.id,
									});
								}}
							>
								<img
									src={dataItem?.img}
									style={{ width: '175px', height: '150px' }}
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
									<span>{dataItem?.name}</span>
								</View>
							</TouchableOpacity>
						</View>
					)}
				/>
				<View className="sub-title" style={styles.contentGird}>
					<span>Viễn Tưởng</span>
				</View>
				<Grid
					data={Manga}
					carouselMaxRow={2}
					columnNum={2}
					hasLine={false}
					renderItem={(dataItem) => (
						<View key={dataItem?.id}>
							<TouchableOpacity
								onPress={() => {
									// props.navigation.addListener(
									// 	'changeName',
									// 	(e, name) => {
									// 		e.preventDefault();
									// 	}
									// );
									// initialParams = { key: dataItem?.id };
									props.navigation.navigate('MangaDetail', {
										id: dataItem?.id,
										name: dataItem?.name,
									});
								}}
							>
								<img
									src={dataItem?.avatar}
									style={{ width: '200px', height: '150px' }}
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
									<span>{dataItem?.name}</span>
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
});
export default CarouselHome;
