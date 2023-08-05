<template>
	<div class="md:flex gap-4 block items-center">
		<div class="md:w-1/2">
			<NuxtImg src="https://api.takeoffhelper.com/storage/v1/object/public/tech-hive/hero.jpg" class="md:rounded-xl md:rounded-l-none"/>
		</div>
		<div class="w-full mt-8 md:mt-0 md:w-1/2 text-center md:text-right pr-0 md:pr-6 lg:pr-16 xl:pr-20 2xl:pr-24 text-white">
			<p class="text-4xl md:text-6xl lg:text-7xl 2xl:text-9xl font-teko">
				TechHive Labs
			</p>
			<p class="text-md sm:text-xl 2xl:text-2xl">
				Programming, Marketing & Consulting
			</p>
		</div>
	</div>
</template>
<script>
import heroImg from "assets/hero.jpg";

definePageMeta({
	layout: "main",
});
</script>