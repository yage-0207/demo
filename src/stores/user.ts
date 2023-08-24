import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore(
  'cp-user',
  () => {
    // ⽤户信息
    const user = ref<User>()
    // 设置⽤户，登录后使⽤
    const setUser = (u: User) => {
      user.value = u
    }
    // 清空⽤户，退出后使⽤
    const delUser = () => {
      user.value = undefined
    }
    return { user, setUser, delUser }
  },
  {
    persist: true
  }
)
