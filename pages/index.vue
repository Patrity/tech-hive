<template>
	<IndexHero />
	<IndexWhoWeAre />
	<IndexProjects />
</template>
<script setup lang="ts">

import IndexHero from "~/components/index/IndexHero.vue";
import IndexProjects from "~/components/index/IndexProjects.vue";

definePageMeta({
	layout: "main",
});

</script>