<template>
	<div v-for="tag in tags">
		<div v-if="getTagType(tag) === 'database'" class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
			<component :is="CircleStackIcon" class="w-4 h-4 mr-2"/>
			{{tag}}
		</div>
		<div v-else-if="getTagType(tag) === 'frontend'" class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-purple-200 text-purple-700 rounded-full">
			<component :is="WindowIcon" class="w-4 h-4 mr-2"/>
			{{tag}}
		</div>
		<div v-else-if="getTagType(tag) === 'backend'" class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
			<component :is="Cog6ToothIcon" class="w-4 h-4 mr-2"/>
			{{tag}}
		</div>
		<div v-else-if="getTagType(tag) === 'content'" class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
			<component :is="VideoCameraIcon" class="w-4 h-4 mr-2"/>
			{{tag}}
		</div>
		<div v-else class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-activity mr-2"
			>
				<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
			</svg>
			{{tag}}
		</div>
	</div>
</template>
<script setup lang="ts">
import { CircleStackIcon, WindowIcon, Cog6ToothIcon, VideoCameraIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
	tags: {
		type: Array,
		required: true,
	},
})
const tags = ref(props.tags)
const databases = ["PostgreSQL", "MySQL", "MariaDB", "Redis"]
const frontend = ["VueJS", "ChartsJS", "Nuxt", "TailwindCSS", "Bootstrap", "HTML", "CSS", "Javascript", "TypeScript", "Netlify"]
const backend = ["Java", "Spring", "Kotlin", "Supabase"]
const content = ["Sponsorships", "YouTube", "TikTok", "Video Editing", "Video Queues"]

const getTagType = (tag: string) => {
	if (databases.includes(tag)) {
		return "database"
	} else if (frontend.includes(tag)) {
		return "frontend"
	} else if (backend.includes(tag)) {
		return "backend"
	} else if (content.includes(tag)) {
		return "content"
	} else {
		return "other"
	}
}
</script>