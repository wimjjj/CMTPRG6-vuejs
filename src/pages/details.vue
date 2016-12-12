<template>
    <main-layout>
        <h1>{{ blog.title }}</h1>
        <h3>{{ blog.author }}</h3>
        <p>{{ blog.body }}</p>
    </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'

export default{
    data () {
        return {
            blog: {
                id: window.blog_id,
                title: "Title",
                author: "me",
                body: "story"
            }
        }
    },
    components:{
        MainLayout
    }
}
</script>
