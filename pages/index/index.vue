<template>
	<view class="uni-wrap">
		<scroll-view scroll-y="true" style="">
			<!-- 滚动通知   -->
			<u-notice-bar class='notice-bar' mode="vertical" :list="data.notice"></u-notice-bar>
			<!-- 轮播图 -->
			<view class="wrap">
				<u-swiper :list="data.swiperItem" mode='number' indicator-pos='topRight' effect3d title>
				</u-swiper>
			</view>
			<!-- 宫格布局 -->
			<u-grid :col="3" :border='config.showGridBorder'>
				<u-grid-item>
					<u-icon name="photo" :size="46"></u-icon>
					<view class="grid-text">图片</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="lock" :size="46"></u-icon>
					<view class="grid-text">锁头</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="hourglass" :size="46"></u-icon>
					<view class="grid-text">沙漏</view>
				</u-grid-item>
			</u-grid>
			<!-- 线条 -->
			<u-line color="#eee" />
			<!-- 卡片 -->
			<u-card v-for="(item,index) in data.card" :key='index' :title="item.title" :sub-title="item.subTitle">
				<view slot="body" v-for="i in item.children">
					<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
						<view class="u-body-item-title u-line-2">{{i.txt}}</view>
						<image :src="i.image" mode="aspectFill"></image>
					</view>
				</view>
				<view class="card_foot" slot="foot">
					<view v-on:click="log(item.path)" class="more">查看更多</view>
				</view>
			</u-card>
			<u-back-top :scroll-top="data.scrollTop"></u-back-top>
		</scroll-view>
	</view>
</template>
<script>
	//import MyPopup from '../../components/MyPopup.vue'
	//storage/emulated/0/Pictures/testApp/
	export default {
		onLoad() {
			const self = this;
			plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fobject) {
				fobject.root.getFile('/storage/emulated/0/Pictures/testApp/t.json', {
					create: true
				}, function(fileEntry) {
					fileEntry.file(function(file) {
						var fileReader = new plus.io.FileReader();
						fileReader.readAsText(file, 'utf-8');
						fileReader.onloadend = function(evt) {
							for (let key in JSON.parse(evt.target.result)) {
								self.$set(self.data, key,JSON.parse(evt.target.result)[key]);
								console.log(key)
							}
						}
					});
				});
			});
		},
		data() {
			return {
				data: {},
				config: {
					scrollTop: 0,
					showGridBorder: false
				}
			}
		},
		methods: {
			shouMyPopup() {
				true;
			},
			onPageScroll(e) {
				this.config.scrollTop = e.scrollTop;
			},
			createIamge(src) {
				let img = document.createElement('img')
				img.src = src;
				return img;
			},
			log(path) {
				console.log(path)
				uni.navigateTo({
					url: path
				});
			}
		},
		components: {}
	}
</script>
<style scoped>
	.uni-wrap {
		overflow: hidden;
	}

	.wrap {
		margin-top: 15rpx;
	}

	.card_foot {
		text-align: center;
		letter-spacing: .6em;
		font-weight: bold;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	.u-card-wrap {
		background-color: $u-bg-color;
		padding: 1px;
	}

	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}

	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}
</style>
