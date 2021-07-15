<template>
	<view class="contentDetail">
		<!-- 主题 -->
		<view class="whiteColorBox">
			<view class="topic">
				<view class="title">
					标题
				</view>
				<view class="date">
					<span>21年07月03日</span>
				</view>
				<ul class="info">
					<li>
						<u-icon name='eye-fill' />
						<span>0</span>
					</li>
					<li>
						<u-icon name='chat-fill' />
						<span>0</span>
					</li>
					<li>
						<u-icon name='thumb-up-fill' />
						<span>0</span>
					</li>
				</ul>
			</view>
			<u-line />
			<!-- 用户信息 -->
			<view class="userInfo">
				<view class="icon">
					<!-- 头像 -->
				</view>
				<view class="info">
					<view class="nameAndFloor">
						<view class="name">
							无可
						</view>
						<view class="floor">
							楼主
						</view>
					</view>

					<view class="age">
						<view>
							<u-icon name='man'></u-icon>
							<span>18</span>
						</view>
					</view>
				</view>
			</view>
			<u-line />
			<!-- 0楼 -->
			<view class="firstFloor">
				铠是长城守卫军的一员，他冷静坚毅，总能扭转危机，是小队的中坚力量。最开始的时候，他几乎倒毙在长城之外，失去了全部记忆，是花木兰将他救起。对于这个来历不明的异族人，队友们始终表现出极尽的包容。因为他身上穿着一副有生命的铠甲，所以队友们就用“铠”来称呼忘记名字的他。
			</view>
		</view>
		<u-line />
		<view class="whiteColorBox">
			<view class="allFloor">
				<u-line />
				<view class="number">
					总共楼层：1
				</view>
				<ul class='floor'>
					<li v-for="(item,index) in 2">
						<u-line />
						<view class="box">
							<view class="icon">
								<!-- 头像 -->
							</view>
							<view class="info">
								<view class="name">
									名字
								</view>
								<view class="age">
									<span>
										<u-icon name='man' />18
									</span>
								</view>
								<view class="date">
									<span>21年07月04日</span>
								</view>
								<view class="content">
									铠是长城守卫军的一员，他冷静坚毅，总能扭转危机，是小队的中坚力量。最开始的时候，他几乎倒毙在长城之外，失去了全部记忆，是花木兰将他救起。对于这个来历不明的异族人，队友们始终表现出极尽的包容。因为他身上穿着一副有生命的铠甲，所以队友们就用“铠”来称呼忘记名字的他。
								</view>
							</view>
						</view>
					</li>

				</ul>
			</view>
		</view>
		<u-line />

		<!-- 脚 -->
		<view class="foot" :style="style">
			<u-line />
			<view class="box">
				<view class="left">
					<view class="owner">
						<u-icon name='account-fill'></u-icon>
					</view>
					<view class="house">
						<u-icon name='star-fill'></u-icon>
					</view>
					<view class="like">
						<u-icon name='thumb-up-fill'></u-icon>
					</view>
				</view>
				<view class="page">
					<uni-pagination show-icon="true" title="标题文字" total="10" style="top: 10px;"></uni-pagination>
				</view>
				<view class="participate">
					<view>
						建楼
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import uniPagination from '../../components/uni-pagination/uni-pagination.vue'
	export default {
		name: 'contentDetail',
		data() {
			return {
				style: {
					color: 'red',
					position: 'fixed',
					zIndex: '1',
					bottom: 0,
					width: '100%'
				}
			}
		},onLoad() {
			uni.request({
			    url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
			    data: {
			        text: 'uni.request'
			    },
			    header: {
			        'custom-header': 'hello' //自定义请求头信息
			    },
			    success: (res) => {
			        console.log(res.data);
			    }
			});
		},
		computed: {
			getSystemInfoSync() {
				const {
					windowWidth,
					windowHeight,
					screenWidth,
					screenHeight
				} = uni.getSystemInfoSync();
				//this.style.top = screenHeight - 50 + 'px';
			}
		},
		methods: {},
		components: {
			uniPagination
		}
	}
</script>

<style lang="scss">
	.whiteColorBox {
		background-color: #FFFFFF;
		padding: 0 10px;
	}

	.contentDetail {
		background-color: #eee;

		.topic {
			.title {
				font-weight: bold;
				font-size: 1.3em;
				padding: 12px 0 0;
			}

			.date {
				font-size: 0.6em;
				color: #ccc;
				padding: 8px 0;
			}

			.info {
				display: flex;
				padding: 0 0 8px;
				font-size: 0.4em;

				&>li:nth-child(1) {
					margin-left: 0;
				}

				li {
					margin-left: 10px;

					span {
						margin-left: 3px;
					}
				}
			}
		}

		.userInfo {

			margin: 10px 0;
			display: flex;

			.icon {
				width: 58px;
				height: 50px;
				border-radius: 50%;
				background-image: url(../../static/logo.png);
				background-position: center;
				background-size: cover;
			}

			.info {
				height: 50px;
				width: 100%;
				display: flex;
				flex-direction: column;
				padding-left: 10px;

				&>view {
					height: 25px;
				}

				.nameAndFloor {
					.name {
						float: left;
						font-size: 1.1em;
						line-height: 25px;
						font-weight: 500;
					}

					.floor {
						float: right;
						font-size: 0.8em;
					}
				}

				.age {}

				.age>view {
					float: left;
					background-color: #0093dc;
					line-height: 18px;
					margin-top: 3.5px;
					padding: 0 5px;
					border-radius: 8%;
					font-size: 0.7em;
				}
			}
		}

		.firstFloor {
			padding: 15px 0;
		}

		.allFloor {
			margin-top: 15px;

			.number {
				line-height: 30px;
			}

			.floor {
				li:nth-last-child(1) {
					margin-bottom: 50px;
				}

				li {
					&>.box {
						display: flex;
						padding: 10px 0;
					}

					.icon {
						width: 40px;
						height: 40px;
						background-image: url(../../static/logo.png);
						background-position: center;
						background-size: cover;
						border-radius: 50%;
					}

					.info {
						flex: 1;
						margin: 0 8px;

						&>view {
							margin-top: 5px;
						}

						.age {
							span {
								background-color: #0093dc;
								padding: 0 5px;
								border-radius: 8%;
								font-size: 0.6em;
							}
						}

						.date {
							font-size: 0.6em;
							color: #e2e2e2;
						}
					}
				}
			}
		}

		.foot {
			.box {
				background-color: #fff;
				display: flex;
				flex-direction: row;
				line-height: 50px;

				&>view {
					flex: 1;
				}
			}



			.left {
				display: flex;
				justify-content: space-around;
				font: 1.2em;
			}

			.participate {
				position: relative;

				&>view {
					position: absolute;
					left: 5%;
					top: 10px;
					border-radius: 15px;
					text-align: center;
					width: 90%;
					line-height: 30px;
					background-color: #ececec;
					font-size: 0.8em;
				}
			}
		}
	}
</style>
