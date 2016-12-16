<template>
    <main-layout>
        <v-link href="/new"><span class="glyphicon glyphicon-plus"></span> new</v-link>

        <div id="links" class="btn-group pull-right">
            <button type="button" class="btn btn-default" v-on:click=first><span class="glyphicon glyphicon-step-backward"></span></button>
            <button type="button" class="btn btn-default" v-on:click=prevv><span class="glyphicon glyphicon-arrow-left"></span></button>
            <button type="button" class="btn btn-default" v-on:click=next><span class="glyphicon glyphicon-arrow-right"></span></button>
            <button type="button" class="btn btn-default" v-on:click=last><span class="glyphicon glyphicon-step-forward"></span></button>
        </div>

        <div class="list-group">
            <v-link v-for="blog in blogs" :href=String(blog.id) class="list-group-item">
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
            blogs: '',
            links: {}
        };
   },
   beforeMount () {
        this.$http.get('http://145.24.222.128?limit=5').then(function(data){
            this.$set(this, 'blogs', data.body.items);
            this.$set(this, 'links', data.body.pagination._links);
            console.log(this.links);
        }.bind(this));
   },
   methods: {
        first: function(){
            this.$http.get(this.links.first.href).then(function(data){
                this.$set(this, 'blogs', data.body.items);
                this.$set(this, 'links', data.body.pagination._links)
            }.bind(this));
        },
        prevv: function(){
            this.$http.get(this.links.previous.href).then(function(data){
                this.$set(this, 'blogs', data.body.items);
                this.$set(this, 'links', data.body.pagination._links);
            }.bind(this));
        },
        next: function(){
            this.$http.get(this.links.next.href).then(function(data){
                this.$set(this, 'blogs', data.body.items);
                this.$set(this, 'links', data.body.pagination._links);
            }.bind(this));
        },
        last: function(){
            this.$http.get(this.links.last.href).then(function(data){
                this.$set(this, 'blogs', data.body.items);
                this.$set(this, 'links', data.body.pagination._links);
            }.bind(this));
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

    .list-group {
        margin-top: 20px;
    }
</style>