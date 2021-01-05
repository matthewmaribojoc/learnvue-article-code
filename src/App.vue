<template>
  <router-view :key='$route.path'/>
</template>

<script lang='ts'>
import HelloWorld from './components/HelloWorld.vue'
import { provide, ref } from 'vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup () {
    const val = ref(0)

    const update = (newValue) => {
      val.value = newValue
    }
    
    provide('test', {
      val,
      update
    })

  }
}
</script>
