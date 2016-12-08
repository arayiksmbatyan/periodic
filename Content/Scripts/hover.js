$(function() {

    let divArr = [],
        firsArr = $('.first_tr').find('div'),
        secondArr = $('.second_tr').find('div');

    for(let i = 0; i < firsArr.length; i++){
        divArr.push(firsArr[i])
        divArr.push(secondArr[i])
    }

    $.each(divArr, function(i, elem){
        var attrValue = $(elem).attr('group');
        
        $(elem).hover(
            function() {
                $('td:not([group = '+ attrValue +'])').toggleClass('animation');
            },

            function() {
                $('td:not([group = '+ attrValue +'])').removeClass('animation');
            });
    })


});


// $(function() {

//     let divArr = [],
//         firsArr = $('.first_tr').find('div'),
//         secondArr = $('.second_tr').find('div');

//     for(let i = 0; i < firsArr.length; i++){
//         divArr.push(firsArr[i])
//         divArr.push(secondArr[i])
//     }

//     $.each(divArr, function(i, elem){
//         var className = $(elem).attr('class'),
//             tdClassName = className.substring(5, className.length);
        
//         $(elem).hover(
//             function() {
//                 $('td:not(.' + tdClassName + '_metal)').css('opacity', '.4');
//             },

//             function() {
//                 $('td:not(.' + tdClassName + '_metal)').css('opacity', '1');
//             });
//     })


// });