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