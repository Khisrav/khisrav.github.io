<script setup lang="ts">
import { Eye, Github, Instagram, Link, Send, Star } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import { fetchGitHubRepos } from '@/lib/github'
import { reactive, onMounted } from 'vue'
import Repository from '@/lib/Repository'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Badge from '@/components/ui/badge/Badge.vue'
import ThemeToggler from './components/ThemeToggler.vue'


const repos = reactive<Repository[]>([])

onMounted(async () => {
	const fetchedRepos = await fetchGitHubRepos(import.meta.env.VITE_GITHUB_USERNAME)
	
	repos.push(...fetchedRepos)
})
</script>

<template>
    <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center my-4">
            <h1 class="text-4xl mt-5 md:mt-12 font-thin">Khisrav Kh.</h1>
            <p>Fullstack Developer</p>
        </div>
        

		<div class="flex items-center justify-center gap-4 mt-4 mb-4">
			<!-- <a href="https://github.com/Khisrav" target="_blank">
				<Button variant="outline">
				    <Github class="w-4 h-4" />
				</Button>
			</a> -->
			
			<a href="https://instagram.com/kh.khisrav" target="_blank">
				<Button variant="outline">
				    <Instagram class="w-4 h-4" />
				</Button>
			</a>
			
			<a href="https://t.me/kh_tj" target="_blank">
				<Button>
				    <Send class="w-4 h-4 mr-2" /> Wanna chat?
				</Button>
			</a>
			
			<ThemeToggler/>
		</div>
		
		<hr>
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
			<Card v-for="repo in repos" :key="repo.id" class="transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-900">
			    <CardHeader>
			        <CardTitle class="text-md">{{ repo.name }}</CardTitle>
			        <CardDescription>{{ repo.description }}</CardDescription>
			    </CardHeader>
			    <CardContent>
			        <Badge v-for="topic in repo.topics" variant="outline" class="m-1 bg-white dark:bg-black">{{ topic }}</Badge>
			    </CardContent>
			    <CardFooter>
			        <div class="flex justify-between w-full">
			            <div class="flex">
			                <div class="flex items-center px-1">
			                    <Star class="w-4 h-4 mr-2" /> {{ repo.stars }}
			                </div>
			                <div class="flex items-center px-1">
			                    <Eye class="w-4 h-4 mr-2" /> {{ repo.views }}
			                </div>
			            </div>
			            <!-- Moving the button to the right -->
			            <div class="flex items-center ml-auto">
			                <a :href="repo.html_url" target="_blank">
			                    <Button variant="outline">
				                    <Link class="w-4 h-4 mr-2" /> Visit
				                </Button>
			                </a>
			            </div>
			        </div>
			    </CardFooter>
			</Card>
		</div>
		
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap');

* {
	font-family: 'Montserrat', sans-serif;
}
</style>