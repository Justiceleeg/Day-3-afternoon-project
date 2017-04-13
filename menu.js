/**
 * Created by bencallis on 4/13/17.
 */
var menu = document.getElementById('HAM'),
    slide_down = document.getElementById('slide_down');


menu.addEventListener("click",function() {
    if(slide_down.classList.contains('open')) {
        slide_down.classList.remove('open')
        return
    }

    slide_down.classList.add('open')
})
