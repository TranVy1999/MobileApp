import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Tabs, WhiteSpace, Grid } from 'antd-mobile';
import { Image, Tile, Avatar } from "react-native-elements";

const tabs = [{ title: 'Chi Tiết' }, { title: 'Chapters' }];

const data1 = [
	{
		key: '1',
		img: 'http://cn.e.pic.mangatoon.mobi/cartoon-posters/7859c5a.jpg',
		title: 'Tổng Tài Tại Thượng',
	},
	{
		key: '2',
		img: 'http://cn.e.pic.mangatoon.mobi/cartoon-posters/1677952a88.jpg',
		title: 'Sủng Thê Thành Nghiện: Bảo Bối Của Lục Thiếu',
	},
	{
		key: '3',
		img:
			'http://cn.e.pic.mangatoon.mobi/cartoon-posters/1732df55.jpg-posterup4',
		title: 'Tiểu Thư Đỏng Đảnh',
	},
	{
		key: '4',
		img: 'http://cn.e.pic.mangatoon.mobi/cartoon-posters/782a303.jpg',
		title: 'Thiếu Soái Vợ Ngài Lại Trốn Rồi',
	},
];

const MangaDetail = (props) => {
	const { navigation } = props;
	const { data } = props.route.params;
	return (
		<View>
			<View>
				<Tile imageSrc={{ uri: data.avatar }}
					contentContainerStyle={{  width: '100%' }}
				></Tile>
				{/* <img src={data.avatar} style={{ width: '100%' }} alt="" /> */}
			</View>
			<View>
				<Tabs
					tabs={tabs}
					initialPage={0}
					animated={false}
					useOnPan={false}
				>
					<View
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: '#fff',
						}}
					>
						<Text
							ellipsizeMode={'clip'}
							style={{ marginTop: '10px', marginBottom: '10px' }}
						>

							{data.description}
						</Text>

						<Button
							title="Đọc truyện"
							color="#14b"
							onPress={() =>
								props.navigation.navigate('ContentManga', {
									chapter: data.chapters,
								})
							}
						/>
					</View>
					<View
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							height: '250px',
							backgroundColor: '#fff',
						}}
					>
						<Text > Content of second tab</Text>
					</View>
				</Tabs>
				<WhiteSpace />
				<View style={{ backgroundColor: 'white' }}>
					<View className="sub-title" style={styles.contentGird}>
						<Text>Mới cập nhật!</Text>
					</View>
					<Grid
						data={data1}
						carouselMaxRow={1}
						columnNum={2}
						// isCarousel
						dots={false}
						hasLine={false}
						renderItem={(dataItem) => (
							<View
								key={dataItem.key}
								style={{
									height: '200px',
									paddingLeft: '10px',
									paddingRight: '-10px',
								}}
							>
								<Avatar
								source={{ uri: dataItem?.img }}
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
									<Text>{dataItem.title}</Text>
								</View>
							</View>
						)}
					/>
				</View>
			</View>
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
export default MangaDetail;
