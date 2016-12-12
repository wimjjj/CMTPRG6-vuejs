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
            blog_id: window.blog_id,
            blog: {}
        }
    },
    beforeMount () {
        this.$http.get('http://145.24.222.128/' + this.$data.blog_id).then(function(data){
            this.$set(this, 'blog', data.body);
        }.bind(this));
   },
    components:{
        MainLayout
    }
}
</script>
