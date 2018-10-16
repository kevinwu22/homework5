var emoji = document.querySelector("#emoji");
emoji.innerText = String.fromCodePoint(0x1F388);
emoji.style.fontSize = "30px"; 

document.addEventListener('keyup',function(event) {
if (event.key === 107) {
    $(this).css({})
}

document.addEventListener('keydown',function(event) {
    if (event.key === 109) {
        $(this).css({})
    }

const done = document.getElementById('once');
done.addEventListener('keydown', remove);
function remove(event) {
console.log('Enjoy this while it lasts!');
done.style.backgroundColor = 'pink';
done.removeEventListener('click',remove);
}