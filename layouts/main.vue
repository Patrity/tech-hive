<template>
	<div class="bg-neutral-750 min-h-screen">
		<nav class="">
			<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<NuxtLink to="/" class="group flex items-center text-white hover:text-techhive-green hover:scale-105 hover:rotate-1 ease-in-out transition transform duration-300">
					<img :src="icon" class="h-8 w-8 mr-3 transition transform duration-300" alt="TechHive Logo" />
					<span class="self-center text-3xl font-semibold whitespace-nowrap font-teko">TechHive Labs</span>
				</NuxtLink>
				<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 md:hidden focus:outline-none hover:bg-neutral-600 rounded-lg bg-opacity-0 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
					<span class="sr-only">Open main menu</span>
					<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
					</svg>
				</button>
				<div class="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
						<li v-for="navItem in navItems">
							<NuxtLink :to="navItem.link" class="py-2 px-3 text-white md:text-techhive-green font-bold hover:text-gray-300 transition transform duration-300 ease-in-out">
								{{ navItem.name }}
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<slot />
	</div>
</template>
<script setup lang="ts">
import icon from "assets/th-icon.svg";

const navItems = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Portfolio",
		link: "/portfolio",
	},
	{
		name: "About",
		link: "/about",
	},
	{
		name: "Contact",
		link: "/contact",
	}
];
</script>