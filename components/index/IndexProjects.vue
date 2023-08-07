<template>
	<div id="portfolio" class="mt-24 mb-24 px-4 md:px-0">
		<div class="w-full px-12">
			<p class="font-teko text-white text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl text-center mb-6">
				OUR PROJECTS
			</p>
			<div>
				<Swiper class="w-full text-center"
				        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
				        :slides-per-view="2"
				        :loop="true"
				        :space-between="1"
				        :centeredSlides="true"
				        :effect="'creative'"
				        :pagination="paginationOtions"
				        :autoplay="autoplayOptions"
						:creative-effect="creativeEffectOptions">
					<SwiperSlide as="div" v-for="project in projects" class="rounded-2xl">
						<div class="">
							<div class=" h-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-center" :style="{ backgroundImage: `url(${project.image})` }" :title="project.name">
							</div>
							<div class="py-8 mb-8 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
								<div class="">
									<IndexSwiperCardType :type="project.type"/>
									<div class="text-gray-900 font-bold text-xl mb-2">{{project.name}}</div>
									<p class="text-gray-700 text-base">{{project.description}}</p>
								</div>
								<div class="flex flex-wrap">
									<IndexSwiperCardTags :tags="project.tags"/>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { CodeBracketIcon, MegaphoneIcon } from "@heroicons/vue/24/outline";
import IndexSwiperCardType from "~/components/index/IndexSwiperCardType.vue";

const autoplayOptions = {
	delay: 3000,
	disableOnInteraction: true,
}
const paginationOtions = {
	clickable: true,
	enabled: true,
	type: 'bullets',
}
const creativeEffectOptions = {
	limitProgress: 1,
	prev: {
		shadow: true,
		translate: ['-120%', 0, -500],
		scale: 0.8,
	},
	next: {
		shadow: true,
		translate: ['120%', 0, -500],
	},
	perspective: true,
	
}
const projects = [
	{
		name: "Takeoff Helper",
		type: "programming",
		image: "https://api.takeoffhelper.com/storage/v1/object/public/tech-hive/takeoffhelper.webp",
		links: {
			website: "https://takeoffhelper.com"
		},
		description: "Takeoff Helper is a side project that aims to make construction takeoff and estimating software more accessible. " +
			"It is a SaaS project that allows construction professionals to input basic information and receive quantities and costs for their projects. " +
			"Takeoff Helper is build using NuxtJS, TailwindCSS, Supabase, ChartsJS and ThreeJS.",
		tags: ["VueJS", "TailwindCSS", "Nuxt", "Netlify", "PostgreSQL", "TypeScript", "Javascript"],
	},
	{
		name: "Fireship",
		type: "marketing",
		image: "https://api.takeoffhelper.com/storage/v1/object/public/tech-hive/fireship.webp",
		links: {
			website: "https://takeoffhelper.com"
		},
		description: "Fireship is one of the top programming YouTubers with over 2,000,000 subscribers. I have been working with Fireship since 2022 " +
			"and have helped him grow his sponsorship opportunities and general organization. I have helped Jeff at Fireship with video editing, sponsorships, " +
			"and other miscellaneous tasks. I also currently manage the Fireship TikTok account and the community Discord server.",
		tags: ["Sponsorships", "YouTube", "TikTok", "Video Editing", "Video Queues"],
	},
	{
		name: "RepCord",
		type: "programming",
		image: "https://api.takeoffhelper.com/storage/v1/object/public/tech-hive/repcord.webp",
		links: {
			github: "https://github.com/Repcord-io"
		},
		description: "RepCord was a full stack application and bot for the popular online chat application, Discord." +
			"RepCord allowed users to create a profile and connect their Discord account. Users could then join servers and " +
			"leave reviews for other users. RepCord was built using VueJS, and MySQL.",
		tags: ["VueJS", "MySQL", "Java", "Kotlin", "Javascript"],
	},
	{
		name: "Kronos",
		type: "programming",
		image: "https://api.takeoffhelper.com/storage/v1/object/public/tech-hive/kronos.webp",
		description: "Kronos was an online multiplayer game that I worked on with a team of 3 other developers. " +
			"It was a medieval, top down MMORPG. Along with the development of this game, I was also responsible for" +
			"the marketing, community management and maintenance of this game.",
		tags: ["Java", "Kotlin", "MySQL"],
	},
	{
		name: "Nobility Tracker",
		type: "programming",
		image: "https://api.takeoffhelper.com/storage/v1/object/public/tech-hive/nobilitytracker.webp",
		links: {
			github: "https://github.com/Yoters/nobilitytracker/"
		},
		description: "This web app was built as a Web3 application. It provided a single source of " +
			"information for users to connect their wallets and track information about the cryptocurrency, Nobility Token. " +
			"This dashboard was released open source, and later adopted by the team.",
		tags: ["VueJS", "ChartsJS", "Javascript", "Web3", "Ethereum"],
	},
	{
		name: "Safemoon - Mooncraft",
		type: "programming",
		image: "https://api.takeoffhelper.com/storage/v1/object/public/tech-hive/mooncraft.webp",
		description: "I worked as the lead developer for Safemoon's Mooncraft project. The goal was to create a Minecraft server " +
			"that would allow users to earn cryptocurrency while playing. I was responsible for the development of the server, " +
			"the website, and the backend. I also managed a team of 6 other developers. We successfully built and deployed the server " +
			"and infrastructure to support thousands of concurrent players.",
		tags: ["Java", "Kotlin", "VueJS", "MySQL", "Docker", "Web3", "AWS"],
	},
]
</script>
<style>
	.swiper-pagination-bullet {
		@apply bg-neutral-900 opacity-75;
	}
	.swiper-pagination-bullet-active {
		@apply bg-techhive-green
	}
</style>