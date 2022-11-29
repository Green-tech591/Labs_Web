let list_authors = [
    {
        'name': 'Иванов Иван Иванович',
        'login': '@OtherUserAccountName',
        'subscribers': '10',
        'signed': '20',
        'post_count': '3'
    },
    {
        'name': 'Павлов Сергей Викторович',
        'login': '@PavlushaV',
        'subscribers': '20',
        'signed': '30',
        'post_count': '3'
    }

];

const CreateOptions = () => {
    let select = document.querySelector('#select_authors');

    list_authors.forEach(it => {
        let opt = document.createElement('option');
        opt.value = it.login;
        opt.innerHTML = it.name;

        select.appendChild(opt);
    });
};

CreateOptions();