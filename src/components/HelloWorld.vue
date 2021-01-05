<template>
	<div>
		<button @click='open = !open'> Toggle </button>
		<div v-if='open'>
			Hello
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'

export default {
	setup () {
		const open = ref(true)

		return {
			open 
		}
	}
}
</script>