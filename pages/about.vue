<template>
	<div class="mx-auto w-1/2 pt-24 mb-64">
		<p class="font-teko text-5xl text-center text-white">
			About
		</p>
		<p class="text-center text-white mt-12">
			This website is developed using Nuxt and TailwindCSS. It is deployed using Netlify and images are
			hosted on Supabase's CDN. the source code is available on GitHub. Any part of this website can be
			reused for your own projects freely. The website is licensed under the GNU General Public License v3.0.
		</p>
		<p class="text-center text-white mt-4">
			Should you have any questions or concerns regarding this website, please feel free to use the contact page
			to get in touch with us. We will try to get back to you as soon as possible.
		</p>
		
		<hr class="border-neutral-900 rounded-full border-2 my-12" />
		<div class="text-center text-3xl font-medium">
			<h1 class="text-white">Technologies powering</h1>
			<h1 class="text-white font-semibold">TechHive</h1>
			<div class="mt-6 bg-neutral-900 rounded-2xl flex flex-row justify-center gap-4 py-12 px-12 w-fit mx-auto">
				<NuxtLink href="https://vuejs.org/" target="_blank" class="logos">
					<img :src='vue' alt="VueJS" class="h-16 w-16" />
				</NuxtLink>
				<NuxtLink href="https://nuxt.com/" target="_blank" class="logos">
					<img :src='nuxt' alt="NuxtJS" class="h-16 w-16" />
				</NuxtLink>
				<NuxtLink href="https://tailwindcss.com/" target="_blank" class="logos">
					<img :src='tailwind' alt="TailwindCSS" class="h-16 w-16" />
				</NuxtLink>
				<NuxtLink href="https://supabase.com/" target="_blank" class="logos">
					<img :src='supabase' alt="Supabase" class="h-16 w-16" />
				</NuxtLink>
				<NuxtLink href="https://www.netlify.com/" target="_blank" class="logos">
					<img :src='netlify' alt="Netlify" class="h-16 w-16" />
				</NuxtLink>
			</div>
		</div>
	</div>
	<AboutKenny />
</template>
<script setup lang="ts">
import vue from "assets/vue.svg";
import nuxt from "assets/nuxt.svg";
import tailwind from "assets/tailwind.svg";
import supabase from "assets/supabase.svg";
import netlify from "assets/netlify.svg";
definePageMeta({
	layout: "main",
});

</script>

<style>
.logos {
	@apply transform transition duration-300 hover:scale-150
}
</style>