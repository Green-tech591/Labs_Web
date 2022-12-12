let app = new Vue({
    el: "#vue",
    data: {
        author: '',
        posts: data
    },
    computed:{
        filteredList: function(){
            var author = this.author;
            
            return this.posts.filter(function (elem) {
             
                if(author==='') return true;
                else return elem.author.indexOf(author) > -1;
            })
        }
    }
});