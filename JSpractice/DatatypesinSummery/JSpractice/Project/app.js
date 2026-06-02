// rendom colorr generate inentire screen

const rendomColor = function(){
    const hex ='0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i<6; i++){
color += hex[Math.floor(Math.random() *15)];

    }
    return color;

};

const startChangingColor = function (){
    document.body.style.backgroundColor = rendomColor();
}

const stopChangingColor = function() {} ;
    

document.querrySeloector('#Start').addEventLisnter('Click', startChangingColor);

document.querrySelector('#Stop').addEventLisnter('click', stopChangingColor);
