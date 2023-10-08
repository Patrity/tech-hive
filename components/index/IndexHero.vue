<template>
	<div class="md:flex gap-4 block items-center mt-8 md:mt-16 xl:mt-32 mb-24 lg:mb-32 xl:mb-64">
		<div class="md:w-3/5">
			<NuxtImg src="https://ovzjdhllnxrizgszqlsi.supabase.co/storage/v1/object/public/tech-hive/hero.webp" sizes="sm:100vw md:80vw" width="2220" height="1250" :preload="true" format="webp" alt="hero image" class="md:rounded-xl md:rounded-l-none"/>
		</div>
		<div class="w-full mt-8 md:mt-0 md:w-2/5 text-center md:text-right pr-0 md:pr-6 lg:pr-16 xl:pr-20 2xl:pr-24 text-white">
			<p class="text-4xl md:text-6xl lg:text-7xl 2xl:text-9xl font-teko">
				TechHive Labs
			</p>
			<p class="text-md sm:text-xl 2xl:text-2xl">
				Programming, Marketing & Consulting
			</p>
		</div>
	</div>
</template>
<script setup lang="ts">
</script>