<template>
	<!-- 更换封面 -->
	<view class="content">
		<cropper selWidth="660rpx" selHeight="660rpx" @upload="myUpload" :avatarSrc="imgurl" avatarStyle="width:100vw;height:100vw;">
		</cropper>
		<view>点击更换封面</view>
	</view>
</template>

<script>
	import cropper from "@/components/cropper.vue";
	export default {
		components: {
		  cropper
		},
		data() {
			return {
				 imgurl:"/static/image/test1.jpg"
			}
		},
		methods: {
			//上传返回图片
			myUpload(rsp) {
			  const self = this;
			  self.imgurl = rsp.path; //更新头像方式一
			  // rsp.avatar.imgSrc = rsp.path; //更新头像方式二
			},

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
