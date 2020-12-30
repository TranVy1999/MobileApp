import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Tabs, WhiteSpace, Grid } from 'antd-mobile';

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
				<img src={data.avatar} style={{ width: '100%' }} alt="" />
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
							{/* Tiến Hóa Thần Chủng Truyện Tranh Trực Tuyến. Truyền
							thuyết kể rằng, khi tất cả các đất nước nguyên tố
							xuất hiện rung chuyển và tai họa thì người thừa kế
							của Lôi quốc mới xuất hiện. Sau một trận động đất
							toàn bộ đại lục nguyên tố bắt đầu xuất hiện các loài
							động vật tiến hóa thành yêu thú, làm hại con người,
							khắp nơi đồn đoán về ngày tận thế. Người thừa kế Lôi
							quốc, Lôi Chấn có thể lãnh đạo mọi người cùng giải
							cứu thế giới không đây? */}
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
						Content of second tab
					</View>
				</Tabs>
				<WhiteSpace />
				<View style={{ backgroundColor: 'white' }}>
					<View className="sub-title" style={styles.contentGird}>
						<span>Mới cập nhật!</span>
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
								<img
									src={dataItem.img}
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
									<span>{dataItem.title}</span>
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
