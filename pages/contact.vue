<template>
<div class="w-1/3 mx-auto mt-12">
	<div>
		<p class="font-teko text-5xl text-center text-white">
			Contact
		</p>
		<p>
		
		</p>
	</div>
	<form name="contact" method="post" netlify class="w-3/4 mx-auto">
		<label for="email" class="block font-medium text-white">Email</label>
		<div class="relative mt-0 rounded-md shadow-sm">
			<input type="email" v-model="email" name="email" id="email" :class="[validateEmail ? 'text-neutral-750' : 'text-red-900 ring-red-300 focus:ring-red-500', 'px-2 block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset placeholder:text-neutral-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6']" placeholder="you@example.com" />
			<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
				<EnvelopeIcon v-if="validateEmail" class="h-5 w-5 text-neutral-750" aria-hidden="true" />
				<ExclamationCircleIcon v-else class="h-5 w-5 text-red-500" aria-hidden="true" />
			</div>
		</div>
		<p v-if="validateEmail" class="mt-2 text-sm text-neutral-400" id="email-error">Enter a good email for us to get back to you.</p>
		<p v-else class="mt-2 text-sm text-red-600" id="email-error">Please enter a valid email address.</p>
		
		<label for="email" class="block font-medium text-white mt-6">Name</label>
		<div class="relative mt-0 rounded-md shadow-sm">
			<input type="text" v-model="name" name="email" id="email" :class="[validateName ? 'text-neutral-750' : 'text-red-900 ring-red-300 focus:ring-red-500', 'px-2 block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset placeholder:text-neutral-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6']" placeholder="John Smith" />
			<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
				<UserIcon v-if="validateName" class="h-5 w-5 text-neutral-750" aria-hidden="true" />
				<ExclamationCircleIcon v-else class="h-5 w-5 text-red-500" aria-hidden="true" />
			</div>
		</div>
		<p v-if="validateName" class="mt-2 text-sm text-neutral-400" id="email-error">What should we call you?</p>
		<p v-else class="mt-2 text-sm text-red-600" id="email-error">Please enter a valid name</p>
		
		<Listbox as="div" v-model="contactType">
			<ListboxLabel class="block font-medium text-white mt-6">Contact Type</ListboxLabel>
			<div class="relative mt-2">
				<ListboxButton
					class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6">
					<span class="block truncate">{{ contactType.name }}</span>
					<span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon class="h-5 w-5 text-neutral-750" aria-hidden="true"/>
					</span>
				</ListboxButton>
				
				<transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
					<ListboxOptions
						class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						<ListboxOption as="template" v-for="type in contactTypes" :key="type.id" :value="type" v-slot="{ active, selected }">
							<li :class="[active ? 'bg-neutral-500 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
								<span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
									{{type.name}}
								</span>
								
								<span v-if="selected" :class="[active ? 'text-white' : 'text-neutral-750', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                    <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                                </span>
							</li>
						</ListboxOption>
					</ListboxOptions>
				</transition>
			</div>
		</Listbox>
		<p v-if="validateName" class="mt-2 text-sm text-neutral-400" id="email-error">What's the nature of your contact?</p>
		
		<label for="email" class="block font-medium text-white mt-6">Message</label>
		<div class="relative mt-2">
			<div class="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:ring-1">
				<label for="title" class="sr-only">Subject</label>
				<input type="text" name="title" id="title" class="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0 px-2" placeholder="Subject" />
				<label for="description" class="sr-only">Description</label>
				<textarea rows="6" name="description" id="description" class="px-2 block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Your message..." />
			</div>
		</div>
		<div class="flex w-full justify-end mt-4">
			<button type="submit" class="w-40 h-8 items-center rounded-lg shadow-2xl shadow-neutral-950 bg-neutral-300 flex text-neutral-750 justify-center gap-2 transition transform duration-200 hover:bg-neutral-400">
				<span>
					Send
				</span>
				<PaperAirplaneIcon class="h-6 w-6 text-neutral-750" aria-hidden="true" />
			</button>
		</div>
	</form>
</div>
</template>
<script setup lang="ts">
import { ExclamationCircleIcon,EnvelopeIcon, UserIcon, ChevronUpDownIcon, CheckIcon, PaperAirplaneIcon } from '@heroicons/vue/20/solid'
definePageMeta({
	layout: "main",
});

const contactTypes = [
	{ id: 1, name: "Programming Project" },
	{ id: 2, name: "Marketing Consultation" },
	{ id: 3, name: "Sponsorship Opportunity" },
	{ id: 4, name: "Something else" },
];

const email = ref("");
const name = ref("");
const contactType = ref(contactTypes[0]);
const subject = ref("");
const message = ref("");

const validateEmail = computed(() => {
	if (email.value === "" ) {
		return true;
	}
	const re = /\S+@\S+\.\S+/;
	return re.test(email.value);
});
const validateName = computed(() => {
	if (name.value === "" ) {
		return true;
	}
	const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	return re.test(name.value);
});

</script>