<template>
	<div>
		<h1> Vue Transition Animation </h1>
		<button @click='open = !open'> Toggle Animation </button>
		<transition name="fade">
			<p v-if='open' class='example-div'>
				Hello World
			</p>
		</transition>
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



<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>