<template>
    <main-layout>
        <div class="list-group">
            <v-link  v-for="blog in blogs" :href=String(blog.id) class="list-group-item">
                <h1>{{ blog.title }}</h1>
                <h5>written by: {{ blog.author }}</h5>
            </v-link>
        </div>
    </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import VLink from '../components/VLink.vue'

export default {
    data () {
        return {
            blogs: [
                {
                    id: 1,
                    title: "Title",
                    author: "me",
                    body: "story"
                },
                {
                    id: 2,
                    title: "Title",
                    author: "me",
                    body: "story"
                },
                {
                    id: 3,
                    title: "Title",
                    author: "me",
                    body: "story"
                },
                {
                    id: 4,
                    title: "Title",
                    author: "me",
                    body: "story"
                },
            ]
        }
    },
    components: {
        MainLayout,
        VLink
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color: black;
        margin: 5px;
        border-radius: 5px;
    }

    h1 {
        margin-top: -5px;
    }
</style>