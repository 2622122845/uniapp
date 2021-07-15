<template>
	<div class="login">
		<div class="logo"></div>
		<div class="appLogin">
			<div class="going">
				<ul class='going_list'>
					<li class='going_user'>
						<input v-model="user" type="text" class="user" maxlength='-1' focus placeholder='QQ号码/手机/邮箱'>
					</li>
					<li class='going_password'>
						<input v-model:value="password" type="text" class="user" maxlength='-1' password
							placeholder='请输入你的QQ密码'>
					</li>
				</ul>
				<view v-on:click="save" type="default" class="go">登录</view>
				<view v-on:click="getFile" type="default" class="onekey">注册</view>
			</div>

		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				user: '',
				password: ''
			}
		},
		onLoad() {

		},
		methods: {
			save: function() {
				let t = this;
				uni.setStorage({
					key: 'user_key',
					data: t.user,
					success: function() {
						console.log(t.user);
					}
				});
				console.log('代码操作没有问题')
			},
			getFile: function() {
				uni.getStorage({
					key: 'user_key',
					success: function(res) {
						console.log(res.data, res);
					}
				});
			}
		}
	}
</script>

<style>
	uni-page-body {
		font-size: 18px;
		background: #eee;
		height: 100vh;
	}

	.login {
		padding-top: 50px;
	}

	.logo {
		background-image: url(~@/static/login-logo.png);
		height: 100px;
		width: 244px;
		margin: 0 auto 30px;
		background-size: 244px 100px;
	}

	.appLogin {
		width: 290px;
		margin: 0 auto;
	}

	ul {
		list-style: none;
		border: 1px solid #eaeaea
	}

	.going {
		width: 290px;
	}

	.going_list {
		background: #fff;
		height: 89px;
		border-radius: 4px;
		overflow: hidden;
	}

	.going_user {
		border-bottom: 1px solid #eaeaea;
	}

	.user {
		width: 273px;
		height: 44px;
		color: #000;
		border: none;
		background: 0 0;
		padding-left: 15px;
		font-size: 16px;
	}

	.go {
		width: 290px;
		height: 44px;
		line-height: 44px;
		background: #146fdf;
		border: none;
		border-radius: 4px;
		color: #fff;
		font-size: 16px;
		margin-top: 15px;
		display: block;
		text-align: center;
	}

	.onekey {
		height: 42px;
		line-height: 42px;
		margin-top: 15px;
		border: 1px solid #9abbe3;
		color: #146fdf;
		background-color: #e7e7e7;
		text-align: center;
	}
</style>
