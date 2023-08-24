<script setup lang="ts">
import { useUserStore } from './stores/user'
const store = useUserStore()
</script>
<template>
  <van-button
    type="primary"
    @click="store.setUser({ id: '1', mobile: '1', account: '1', avatar: '1', token: '1' })"
    >登录</van-button
  >
  <van-button type="danger" @click="store.delUser()">退出</van-button>
  <p>{{ store.user }}</p>
</template>
