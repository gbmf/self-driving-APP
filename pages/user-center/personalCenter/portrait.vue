<template>
	<!-- 修改头像 -->
	<view id="portrait">
		<view class="text">点击可以修改头像</view>
		<cropper selWidth="750rpx" selHeight="700rpx" @upload="myUpload" :avatarSrc="imageurl" avatarStyle="width:95%;height: 700rpx;position:relative;margin-top:25%;left:2.5%;border: 1px solid #F2F2F2;">
		</cropper>
	</view>
</template>

<script>
	import store from '@/store'
	import {
		search_users
	} from '@/api/usercenter'
	import cropper from "@/components/cropper.vue";
	export default {
		data() {
			return {
				imageurl: null,
			};
		},
		components: {
			cropper
		},
		computed: {
			UserInfo() {
				return this.$store.state.UserInfo
			}
		},
		onLoad(option) {
			const item = JSON.parse(decodeURIComponent(option.image));
			this.imageurl = this.$store.state.BaseUrl + '/' + item
		},
		methods: {
			myUpload(rsp) {
				const self = this;
				self.imageurl = rsp.path; //更新头像方式一	
				uni.uploadFile({
					url: this.$store.state.BaseUrl+'/users/portrait_backimage/',
					filePath: rsp.path,
					name: 'portrait_file',
					header: {
						"Content-Type": "multipart/form-data",
						'Authorization': uni.getStorageSync('estateToken') || this.$store.state.estateToken,
					},
					success: (res) => {
						// let data = JSON.parse(res.data)
						// this.msg = data.msg
						uni.showToast({
							title: '修改成功',
							icon: "none",
						});
						uni.switchTab({
							url: '/pages/user-center/my-account',
							animationDuration: 200
						});
					},
					fail: () => {
						uni.showToast({
							title: '修改失败'
						});
					}
				});

				//	rsp.avatar.imgSrc = rsp.path; //更新头像方式二
			},
		}

	}
</script>

<style lang="scss">
	#portrait {
		background-color: #3B4144;
		overflow-x: hidden;
		width: 100%;
		height: 100vh;

		.text {
			color: #fff;
			position: relative;
			left: 2.5%;
			font-size: 15px;
			top: 5%;
			text-align: center;
		}
	}
</style>
