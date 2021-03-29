setTimeout(function ()  {
    console.log ('cc');
    
}, 3000);



i = 5 ;
ind =setInterval(
    function () {
        if (i ==0){
            console.log('boom');
            clearInterval(ind);

        }
        console.log(i--);
    },
    1000
)