<template>
	<view class="uni-wrap">
		<scroll-view scroll-y="true" style="">
			<!-- 滚动通知   -->
			<u-notice-bar class='notice-bar' mode="vertical" :list="notice"></u-notice-bar>
			<!-- 轮播图 -->
			<view class="wrap">
				<u-swiper :list="swiperItem" mode='number' indicator-pos='topRight' effect3d title>
				</u-swiper>
			</view>
			<!-- 宫格布局 -->
			<u-grid :col="3" :border='showGridBorder'>
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
			<u-card v-for="(item,index) in card" :key='index' :title="cardS.title" :sub-title="cardS.subTitle">
				<view class="" slot="body">
					<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
						<view class="u-body-item-title u-line-2">瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半</view>
						<image src="../../static/logo.png" mode="aspectFill"></image>
					</view>
					<view class="u-body-item u-flex u-row-between u-p-b-0">
						<view class="u-body-item-title u-line-2">釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放</view>
						<image src="../../static/logo.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="card_foot" slot="foot">
					<view v-on:click="log(item.path)" class="more">查看更多</view>
				</view>
			</u-card>
			<u-back-top :scroll-top="scrollTop"></u-back-top>
		</scroll-view>
	</view>
</template>
<script>
	//import MyPopup from '../../components/MyPopup.vue'
	export default {
		data() {
			return {
				cardS: {
					title: '素胚勾勒出青花，笔锋浓转淡',
					subTitle: '2020-05-15',
				},
				card: [{
					path: '/pages/classifyDetail/classifyDetail'
				}, {
					path: '/pages/classifyDetail/classifyDetail'
				}],
				scrollTop: 0,
				showGridBorder: false,
				notice: ['微信号：qq2622122845', 'QQ：2622122845'],
				swiperItem: [{
					image: '../../static/rectangle/A.jpg',
					title: 'a'
				}, {
					image: '../../static/rectangle/B.png',
					title: 'b'
				}, {
					image: '../../static/rectangle/C.jpg',
					title: 'c'
				}, {
					image: '../../static/rectangle/D.jpg',
					title: 'd'
				}]
			}
		},
		methods: {
			shouMyPopup() {
				true;
			},
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
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
				/*let moreAll=document.querySelectorAll('.more')
				moreAll.forEach((t,i)=>{
					t.addEventListener('click',function(){
						uni.navigateTo({
						    url: '/pages/test/test?12=1'
						});
						console.log(1)
					})
				})*/
			}
		},
		components: {
			//MyPopup
		}
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
