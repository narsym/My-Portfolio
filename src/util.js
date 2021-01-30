document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {moveIt()};
    var navbar = document.getElementById("navigation");
    var sticky = navbar.offsetTop;
    var me = document.getElementById('Me');
    var meTop = me.offsetTop;
    var name = document.getElementById('name');

    function moveIt() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        if(window.pageYOffset >= meTop) {
            name.classList.remove('hidden');
        } else {
            name.classList.add('hidden');
        }
    }
})



