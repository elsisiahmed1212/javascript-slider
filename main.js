var image =Array.from(document.querySelectorAll('img'));
var lightBox_container = document.querySelector('#lightBox-container');
var lightBox_item = document.querySelector('#lightBox-item')
var n = document.querySelector('#nextIcon')
var p = document.querySelector('#prevIcon')
var closeIcon = document.querySelector('#closeIcon')

var glopalindex;
image.forEach(function(el) {
    el.addEventListener('click',function(e){
        lightBox_container.classList.replace('d-none','d-flex')
        var srcc = e.target.getAttribute('src');
        lightBox_item.style.backgroundImage = `url(${srcc})`
        glopalindex = image.indexOf(e.target)
    })
});


n.addEventListener('click',next)
function next(){
    glopalindex++;
    if(glopalindex == image.length){
        glopalindex = 0;
    }
    var srcc = image[glopalindex].getAttribute('src');
    lightBox_item.style.backgroundImage = `url(${srcc})`
}
p.addEventListener('click',preve)
function preve(){
    glopalindex --;
    if (glopalindex <0){
        glopalindex = image.length-1;
    }
    var srcc = image[glopalindex].getAttribute('src');
    lightBox_item.style.backgroundImage = `url(${srcc})`
}
closeIcon.addEventListener('click',closse_pop)
function closse_pop(){
    lightBox_container.classList.replace('d-flex','d-none')
}
lightBox_container.addEventListener('click',function(e){
    e.stopPropagation()
    closse_pop()
})
lightBox_item.addEventListener('click',function(e){
    e.stopPropagation()
})

document.addEventListener('keydown',function(e){
    if(!(lightBox_container.classList.contains('d-none'))){

        if (e.key == 'ArrowRight') {
            next()
        }
        else if (e.key == 'ArrowLeft') {
            preve()
        }
        else if (e.key == 'Escape') {
            closse_pop()
        }
    }
})