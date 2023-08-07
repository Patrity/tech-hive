<template>
	<p v-if="project.type === 'programming'" class="text-sm text-gray-600 flex items-center bg-">
		<component :is="CodeBracketIcon" class="w-5 h-5 mr-2"/>
		Programming
	</p>
	<p v-if="project.type === 'marketing'" class="text-sm text-gray-600 flex items-center bg-">
		<component :is="MegaphoneIcon" class="w-5 h-5 mr-2"/>
		Marketing
	</p>
</template>
<script setup lang="ts">
import {CodeBracketIcon, MegaphoneIcon} from "@heroicons/vue/24/outline";
const project = defineProps({
	type: {
		type: String,
		required: true,
	},
});
</script>