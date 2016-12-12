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
            'blogs': ''
        };
   },
   beforeMount () {
        this.$http.get('http://145.24.222.128').then(function(data){
            this.$set(this, 'blogs', data.body.items);
        }.bind(this));
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