let app = new Vue({
    el: "#app",
    data: {
        selected_author_login: 'Посты всех авторов',
        author_name: 'ALL',
        author_login: 'ALL',
        subscribers: '30',
        signed: '50',
        post_count: '400',
        posts: post_list
    },
    computed:{
        filterPosts: function(){
            let author = this.selected_author_login;

            return this.posts.filter( el => {
                if(author === '' || author === 'Посты всех авторов') {
                    this.author_name = 'Посты всех авторов';
                    this.author_login = 'ALL';
                    this.subscribers = 30;
                    this.signed = 50;
                    this.post_count = post_list.length;

                    return true;
                }
                else {
                    
                    if (el.author === author) {
                        
                        list_authors.forEach(it => {

                            if (it.login === el.author) {
                                this.author_name = it.name;
                                this.author_login = it.login;
                                this.subscribers = it.subscribers;
                                this.signed = it.signed;
                                this.post_count = it.post_count;
                            }

                        });
                    }

                    return el.author === author;
                }
            })
        }
    }
});