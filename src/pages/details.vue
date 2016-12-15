<template>
    <main-layout>
        <v-link :href=links.edit.href><span class="glyphicon glyphicon-edit"></span> edit</v-link>
        <h1>{{ blog.title }}</h1>
        <h3>written by: {{ blog.author }}</h3>
        <p>{{ blog.body }}</p>

        <button type="button" class="btn btn-danger" v-on:click="deleteBlog">delete</button>
    </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import VLink from '../components/VLink.vue'
import page from 'page'

export default{
    data () {
        return {
            blog_id: window.blog_id,
            blog: {},
            links: {
                edit: {
                    href: '/' + window.blog_id + '/edit'
                }
            }
        }
    },
    beforeMount () {
        this.$http.get('http://145.24.222.128/' + this.$data.blog_id).then(function(data){
            this.$set(this, 'blog', data.body);
        }.bind(this));
   },
   methods: {
        deleteBlog: function(){
            this.$http.post('http://145.24.222.128/' + this.$data.blog_id + '?_method=DELETE').then(function(data){
                page.show('/');
            });
        }
   },
   components:{
       MainLayout,
       VLink
   }
}
</script>
