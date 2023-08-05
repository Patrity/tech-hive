<template>
	<div class="mt-24 py-24 bg-neutral-900 px-4 md:px-0">
		<div class="w-full md:w-10/12 lg:w-8/12 md:mx-auto max-w-[800px]">
			<p class="font-teko text-white text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl text-center">
				WHO WE ARE
			</p>
			<div class="flex flex-col-reverse md:flex-row gap-2 items-center mt-6">
				<div class="text-center w-full sm:w-1/2 md:w-1/3 max-w-[400px]">
					<div class="mt-6 mx-6 bg-neutral-750 rounded-xl px-8 pb-4 border-2 border-neutral-950 drop-shadow-lg">
						<img :src="tonyImg" alt="Tony"
						     class="rounded-full border-neutral-400 border-2 mx-auto mt-6 shadow-neutral-950 shadow-lg"/>
						<div class="text-white">
							<p class="pt-4 font-medium text-xl">
								Tony Costanzo
							</p>
							<p class="text-sm italic text-neutral-300">
								TechHive Labs Founder
							</p>
						</div>
					</div>
				</div>
				<div class="text-center md:text-left mx-auto text-neutral-100 w-full sm:w-2/3 space-y-3">
					<p>
						Hi! My name is Tony, I have also gone by the name Patrity for many years. I am a full stack developer
						with a passion for problem solving, and a love for learning. I have been programming for nearly 20
						years,
						and have been working professionally for over 10 years. I have experience with many different languages
						and frameworks.
					</p>
					<p>
						In addition to programming, I've recently found my stride in marketing and consulting in the content
						creation
						field, working with YouTube creators to secure sponsorships and brand deals. I have many years of
						experience
						administrating communities around gaming, programming, and content creation, and have a deep
						understanding of the industry.
					</p>
					<p>
						Professionally for my day job, I work in the industrial construction industry on mega projects in the
						project controls
						department. I manage data such as progress, forecasts, projects, and budgets on multi-billion dollar
						projects.
						This allows me to utilize my software development background to aggregate, manipulate, and manage data.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const tonyImg = ref('')
const supabase = useSupabaseClient()
onMounted(() => {
	tonyImg.value = supabase.storage.from("tech-hive").getPublicUrl("tony.jpg", {
		transform: {
			width: 460,
			height: 460,
		},
	}).data.publicUrl;
});
</script>