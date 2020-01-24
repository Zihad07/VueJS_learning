// Define a new component called button-counter

Vue.component('button-counter',{
    data: function(){
        return {
            count: 0
        }
    },

    template: `
        <button v-on:click="count++" class="btn btn-primary">You Clicked me {{count}}</button>
    `
})

Vue.component('blog-posts',{
    props: ['title','keyid'],
    template: `<div class="blog-post">
        <h3>{{keyid+'->'+title}}</h3>
        <button class="btn btn-success btn-sm"
        @click="$emit('enlarge-text')"
        >
            Enlarge text
        </button>
    </div>`
})


new Vue({
    el: "#components-demo"
})

new Vue({
    el: "#blog-posts-demo",
    data: {
        posts: [
            {id:1, title:'My Journy with Vue'},
            {id:2, title:'Blogging with Vue'},
            {id:3, title:'Why Vue is so fun'},
        ],
        postFontSize:1
    }
})

