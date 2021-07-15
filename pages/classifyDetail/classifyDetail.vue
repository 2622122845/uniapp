<template>
	<view id="classifyDetail">
		<!-- 头部 -->
		<view class="head">
			<view class="top">
				<view class="icon">
					<!-- 头像 -->
				</view>
				<view class="detail">
					<view class="title">游戏</view>
					<view class="information">
						<span class='textBox'>
							<span class='string'>热度</span>
							<span class='number'>1311</span>
						</span>
						<span class='textBox'>
							<span class='string'>话题</span>
							<span class='number'>13</span>
						</span>
					</view>
					<ul class="owner">
						<li v-for="(item,index) in 3" class='icon'>
							<view>
								<!-- 头像 -->
							</view>
						</li>
						<li class="more">
							<view>
								<u-icon name='more-circle' />
							</view>
						</li>
					</ul>
				</view>
			</view>
			<u-line />
			<view class="nav">
				<view class="ranking">达人堂</view>
				<view class="sign-in">签到</view>
			</view>
			<u-line />
			<view class="annunciate"></view>
		</view>
		<!-- 置顶部分 -->
		<ul class='top'>
			<li>
				<view>
					<span class="icon">置顶</span>
					<span class="txt">3156</span>
				</view>
				<u-line />
			</li>
			<li>
				<view>
					<span class="icon">置顶</span>
					<span class="txt">3156</span>
				</view>
				<u-line />
			</li>
		</ul>
		<!-- 空隙 -->
		<u-gap height="40" bg-color="#d6d6d6"></u-gap>
		<!-- 导航 -->
		<view>
			<u-tabs-swiper ref="uTabs" :list="tabs.list" :current="tabs.current" @change="tabsChange" :is-scroll="false"
				swiperWidth="750"></u-tabs-swiper>
		</view>
		<!-- 展示区域 -->
		<swiper :current="tabs.swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in 3" :key="index">
				<scroll-view scroll-y style="width: 100%;" @scrolltolower="onreachBottom" class="content">
					<view class="cardbox" v-on:click="to">
						<u-line />
						<view class="card">
							<view class="icon">
							</view>
							<view class="detail">
								<view class="title">
									凯
								</view>
								<view class="content">
									铠是长城守卫军的一员，他冷静坚毅，总能扭转危机，是小队的中坚力量。最开始的时候，他几乎倒毙在长城之外，失去了全部记忆，是花木兰将他救起。对于这个来历不明的异族人，队友们始终表现出极尽的包容。因为他身上穿着一副有生命的铠甲，所以队友们就用“铠”来称呼忘记名字的他。
								</view>
								<view class="information">
									<span class="name">无可</span>
									<span class="date">2021年7月12日22时39分</span>
									<span class="see">
										<u-icon name='eye-fill' />
										<span>0</span>
									</span>
									<span class='floor'>
										<u-icon name='chat-fill' />
										<span>0</span>
									</span>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: 'classDetail',
		data() {
			return {
				tabs: {
					list: [{
						name: '王者荣耀'
					}, {
						name: '英雄联盟'
					}, {
						name: '英雄杀',
					}],
					current: 0,
					swiperCurrent: 0,
				}

			}
		},
		methods: {
			to() {
				uni.navigateTo({
					url: '/pages/pageContent/pageContent'
				});
			},
			change(index) {
				this.tabs.current = index;
			},
			tabsChange(index) {
				this.tabs.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.tabs.swiperCurrent = current;
				this.tabs.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {

			}
		},
		onLoad: function(option) {
			//console.log(option); //打印出上个页面传递的参数。
		}
	}
</script>

<style lang="scss">
	#classifyDetail {
		.head {
			.nav {
				display: flex;

				view {
					flex: 1;
					text-align: center;
					background-color: #eee;
					line-height: 40px;
				}
			}

			.top {
				display: flex;
				padding: 15px;
				font-size: 16px;

				.icon {
					width: 80px;
					height: 80px;
					background-image: url(../../static/logo.png);
					background-position: center;
					background-size: cover;
					border-radius: 5px;
				}

				.detail {
					margin-left: 14px;
					height: 80px;
					flex: 1;

					.title {
						line-height: 32px;
						font-weight: bold;
						font-size: 1.2em;
					}

					.information {
						line-height: 20px;
						font-size: 0.8em;

						.textBox:nth-last-child(1) {
							margin-left: 10px;
						}

						.string {
							color: #cbcbcb;
						}

						.number {
							color: #31f338;
							margin-left: 3px;
							font-size: 0.7em;
						}

					}

					.owner {
						height: 27px;
						line-height: 27px;
						//padding-top: 3px;
						position: relative;
						display: flex;

						.icon {
							width: 20px;
							height: 20px;
							margin-right: 8px;
							margin-top:7px ;
							border-radius: 50%;
							background-image: url(../../static/logo.png);
							background-position: center;
							background-size: cover;

						}

						.more {
							position: absolute;
							right: 0;
							font-size: 1.2em;
						}
					}
				}
			}
		}

		.top {
			li {
				.icon {
					margin: 0 10px;
					display: inline-block;
					padding: 0 3px;
					background-color: #d31441;
					color: #fff;
					font-size: 14px;
				}

				.txt {
					line-height: 45px;
					font-size: 16px;
				}
			}
		}

		.content {
			.cardbox {
				.card {
					display: flex;
					padding: 12px;

					.icon {
						width: 110px;
						height: 85px;
						background-color: red;
						border-radius: 5px;
						background-image: url(../../static/logo.png);
						background-position: center;
						background-size: cover;
					}

					.detail {
						position: relative;
						margin-left: 10px;
						width: 100%;

						.title {
							line-height: 25px;
							font-weight: bold;
						}

						.content {
							height: 40px;
							font-size: 0.8em;
							color: #797979;
							overflow: hidden;
						}

						.information {
							line-height: 20px;
							position: absolute;
							bottom: 0;
							font-size: 0.6em;
							width: 100%;
							display: flex;
							justify-content: space-between;

							.name {
								color: #a7a7a7;
							}

							.date {
								color: #d0d0d0;
							}

							.see,
							.floor {
								color: #d0d0d0;

								span {
									margin-left: 4px;
								}
							}

						}
					}
				}
			}
		}
	}
</style>
