let ax = new Vue({
    el: "#axios",
    data: {
        posts: []
    },
    created() { //Вызывается синхронно после создания экземпляра. Не уверен, что это правильно
        axios.get('https://isidea.ru/rgups_data.json').then(axios => {
            this.posts = axios.data;
        })
    }
});