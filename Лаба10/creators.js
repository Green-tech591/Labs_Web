let creators = [
    {
        'name': 'Петров Пётр Петрович',
        'login': '@Petruha',
        'subscribers': '2',
        'signed': '1',
        'post_count': '4'
    },
    {
        'name': 'Зубенко Михаил Петрович',
        'login': '@ZubenkoMihailPetrovich',
        'subscribers': '23',
        'signed': '10',
        'post_count': '20'
    },
    {
        'name': 'Ливов Ренат Максимович',
        'login': '@LiVoV',
        'subscribers': '30',
        'signed': '6',
        'post_count': '10'
    },
];


let select = document.querySelector('#create');

creators.forEach(it => {
    let opt = document.createElement('option');
    opt.value = it.login;
    opt.innerHTML = it.name;

    select.appendChild(opt);
});

let app = new Vue({
    el: "#vue",
    data: {
        selected_author_login: 'Посты всех авторов',
        author_name: 'none',
        author_login: 'none',
        subscribers: '0',
        signed: '0',
        post_count: '0',
        posts: data
    },
    computed:{
        filterPosts: function(){
            let author = this.selected_author_login;

            return this.posts.filter( el => {
                if(author === '' || author === 'Посты всех авторов') {
                    this.author_name = 'Посты всех авторов';
                    this.author_login = 'ALL';
                    this.subscribers = 0;
                    this.signed = 0;
                    this.post_count = data.length;

                    return true;
                }
                else {
                    creators.forEach(it => {

                        if (it.login === el.author) {
                            this.author_name = it.name;
                            this.author_login = it.login;
                            this.subscribers = it.subscribers;
                            this.signed = it.signed;
                            this.post_count = it.post_count;
                        }
                    });
                    return el.author === author;
                }
            })
        }
    }
});