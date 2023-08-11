<template>
	<div class="bg-neutral-750 min-h-screen flex flex-col">
		<TransitionRoot as="template" :show="sidebarOpen" class="md:hidden">
			<Dialog as="div" class="relative z-50" @close="sidebarOpen = false">
				<TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
					<div class="fixed inset-0 bg-neutral-900/80" />
				</TransitionChild>
				<div class="fixed inset-0 flex">
					<TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
						<DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
							<TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
								<div class="absolute left-full top-0 flex w-16 justify-center pt-5">
									<button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
										<span class="sr-only">Close sidebar</span>
										<XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
									</button>
								</div>
							</TransitionChild>
							<!-- Sidebar component, swap this element with another sidebar if you like -->
							<div class="flex grow flex-col gap-y-5 overflow-y-auto bg-neutral-700 px-6 ring-1 ring-white/10">
								<div class="flex h-30 shrink-0 items-center">
									<img :src="logo" class="mt-8 h-24 mx-auto" alt="TechHive Logo" />
								</div>
								<nav class="flex flex-1 flex-col mt-12">
									<ul role="list" class="flex flex-1 flex-col gap-y-7">
										<li>
											<ul role="list" class="-mx-2 space-y-5">
												<li v-for="item in navItems" :key="item.name">
													<NuxtLink :to="item.link" :class="[isCurrentPage(item.link) ? 'bg-stone-600' : '', 'flex text-lg gap-2 font-medium text-neutral-200 p-2 px-6 rounded-xl']">
														<component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
														{{ item.name }}
													</NuxtLink>
												</li>
											</ul>
										</li>
									</ul>
								</nav>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</Dialog>
		</TransitionRoot>
		<nav class="mb-10">
			<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="/" class="group flex items-center text-white hover:text-techhive-green hover:scale-105 hover:rotate-1 ease-in-out transition transform duration-300">
					<img :src="icon" class="h-8 w-8 mr-3 transition transform duration-300" alt="TechHive Logo" />
					<span class="self-center text-3xl font-semibold whitespace-nowrap font-teko">TechHive Labs</span>
				</a>
<!--				Mobile Nav Button-->
				<button type="button" @click="sidebarOpen = true" class="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-400 md:hidden focus:outline-none hover:bg-neutral-600 rounded-lg bg-opacity-0 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
					<span class="sr-only">Open main menu</span>
					<component :is="Bars3Icon" class="w-8 h-8" aria-hidden="true" />
				</button>
				
				<div class="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
						<li v-for="navItem in navItems">
							<NuxtLink :to="navItem.link" :class="[isCurrentPage(navItem.link) ? 'md:text-white border-b-2' : '', 'py-2 px-3 text-white md:text-techhive-green font-bold hover:text-gray-300 transition transform duration-300 ease-in-out']">
								{{ navItem.name }}
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		
		<div class="flex-grow">
			<slot />
		</div>
		
		<div class="w-full bg-black pt-12 pb-4">
			<div class="mx-auto flex text-white w-3/4 gap-2">
				<p class="flex-auto text-left">
					© 2023 TechHive Labs LLC. All rights reserved.
				</p>
				<div class="flex-auto flex items-center justify-end gap-2">
					<a href="https://github.com/Patrity/tech-hive" aria-label="TechHive Github" class="w-8 h-8 hover:text-techhive-green hover:scale-105 transition transform duration-100">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsGithubFill0)"><path fill="currentColor" fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsGithubFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
					</a>
					<a href="https://twitter.com/ThePatrity" aria-label="Tony's Twitter" class="w-8 h-8 hover:text-techhive-green hover:scale-105 transition transform duration-100">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="currentColor" d="m14.478 1.5l.5-.033a.5.5 0 0 0-.871-.301l.371.334Zm-.498 2.959a.5.5 0 1 0-1 0h1Zm-6.49.082h-.5h.5Zm0 .959h.5h-.5Zm-6.99 7V12a.5.5 0 0 0-.278.916L.5 12.5Zm.998-11l.469-.175a.5.5 0 0 0-.916-.048l.447.223Zm3.994 9l.354.353a.5.5 0 0 0-.195-.827l-.159.474Zm7.224-8.027l-.37.336l.18.199l.265-.04l-.075-.495Zm1.264-.94c.051.778.003 1.25-.123 1.606c-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388c.193-.546.232-1.178.177-2.006l-.998.066Zm0 3.654V4.46h-1v.728h1Zm-6.99-.646V5.5h1v-.959h-1Zm0 .959V6h1v-.5h-1ZM10.525 1a3.539 3.539 0 0 0-3.537 3.541h1A2.539 2.539 0 0 1 10.526 2V1Zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1ZM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35Zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29c-.612-1.393-.523-3.11.427-5.013l-.895-.446Zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706Zm7.949-8.009A3.445 3.445 0 0 0 10.526 1v1c.721 0 1.37.311 1.82.809l.74-.671Zm-.296.83a3.513 3.513 0 0 0 2.06-1.134l-.744-.668a2.514 2.514 0 0 1-1.466.813l.15.989ZM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832Z"/></svg>
					</a>
				</div>
			</div>
		</div>
	</div>
	
</template>
<script setup lang="ts">
import icon from "assets/th-icon.svg";
import logo from "assets/logo.svg";
import { Bars3Icon, XMarkIcon, HomeIcon, BookOpenIcon, AcademicCapIcon, ChatBubbleLeftRightIcon} from "@heroicons/vue/24/outline";

const sidebarOpen = ref(false);


const navItems = [
	{
		name: "Home",
		link: "/",
		icon: HomeIcon,
	},
	{
		name: "Portfolio",
		link: "/#portfolio",
		icon: AcademicCapIcon,
	},
	{
		name: "About",
		link: "/about",
		icon: BookOpenIcon,
	},
	{
		name: "Contact",
		link: "/contact",
		icon: ChatBubbleLeftRightIcon,
	}
];

const router = useRouter();
const isCurrentPage = (link: string) => {
	return link === router.currentRoute.value.path;
};
</script>