// navbar menu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar-expand-lg').addClass("sticky");
        } else {
            $('.navbar-expand-lg').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('#arrow-down').addClass("show");
        } else {
            $('#arrow-down').removeClass("show");
        }
    });

    // slide up scroll
    $('#arrow-down').click(function () {
        $('html').animate({
            scrollTop: 0
        });

    });

    // animation
    $('[data-aos]').parent().addClass('all-animate');

    // client js
    $(".client-list").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    });
});
//search product
$("#myinput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#card div").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        $('#header').removeClass();
    });
});


// shopping card

var noti = document.querySelector('.shop-card');
var select = document.querySelector('.select');
var button = document.getElementsByTagName('button');

for (but of button) {
    but.addEventListener('click', (e) => {
        var add = Number(noti.getAttribute('data-count') || 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');

        // copy and past element
        var par = e.target.parentNode;
        var clo = par.cloneNode(true);
        select.appendChild(clo);
        clo.lastElementChild.innerText = "Buy-now";
        if (clo) {
            noti.onclick = () => {
                select.classList.toggle('display');
            }
        }


        // image animation to card
        var image = e.target.parentNode.querySelector('img');
        var span = e.target.parentNode.querySelector('.span');
        var s_image = image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add('active');
        setTimeout(() => {
                span.removeChild(s_image);
                span.classList.remove('active');

            },
            500
        );
    });
}