import platos from './json/platos.json' assert {type: 'json'};
console.log(platos);

$(document).ready(function () {
    $.get(platos,function (data) {
            $.each(data.categories, function (i, tmp) {
                console.log("holi");
            })
        })
})
