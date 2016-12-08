window.onload = function myFunction(){
	var title =  document.querySelector('title'),
	strlorem = 'Periodic Table Of The Elements',
    i = 0;

    setInterval(function() {
        if(strlorem.length == i) {
            return;
        }
        title.innerHTML  += strlorem[i];
        i++;  
    }, 300)
}