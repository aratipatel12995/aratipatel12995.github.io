! function(c) {
    "use strict";

    function n(e, t, n) {
        var o = c(".menu-icon")[0].getBoundingClientRect(),
            i = e.pageX - o.left,
            a = e.pageY - o.top,
            s = window.pageYOffset || document.documentElement.scrollTop;
        TweenMax.to(t, .3, {
            x: (i - o.width / 2) / o.width * n,
            y: (a - o.height / 2 - s) / o.width * n,
            ease: Power2.easeOut
        })
    }
    var t = c(window);
    c('a[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var e = c(this.hash);
            if ((e = e.length ? e : c("[name=" + this.hash.slice(1) + "]")).length) return c("html,body").animate({
                scrollTop: e.offset().top - 75
            }, 1e3), !1
        }
    });
    ! function() {
        var e = void 0,
            t = void 0,
            n = function() {
                t.addEventListener("click", function() {
                    return o(e, "nav-active")
                })
            };
        c(".nav__list-item a").on("click", function() {
            c("body").removeClass("nav-active")
        });
        var o = function(e, t) {
            e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t)
        };
        e = document.querySelector("body"), t = document.querySelector(".menu-icon"), document.querySelectorAll(".nav__list-item"), n()
    }();
    c(".menu-icon").on("mouseleave", function(e) {
        TweenMax.to(this, .3, {
            scale: 1
        }), TweenMax.to(".icon-circle, .icon-m", .3, {
            scale: 1,
            x: 0,
            y: 0
        })
    }), c(".menu-icon").on("mouseenter", function(e) {
        TweenMax.to(this, .3, {
            transformOrigin: "0 0",
            scale: 1
        }), TweenMax.to(".icon-circle", .3, {
            scale: 1.2
        })
    }), c(".menu-icon").on("mousemove", function(e) {
        var t;
        n(t = e, ".icon-circle", 60), n(t, ".icon-m", 40)
    });
    var o = !0;
    t.on("scroll", function() {
        var e = t.scrollTop();
        c("#services").offset().top - 75 <= e && o && (c(".svg-icon").each(function() {
            c(".svg-icon").drawsvg({
                duration: 4e3
            }).drawsvg("animate")
        }), o = !1)
    }), c(".cover-bg, section").each(function() {
        var e = c(this).attr("data-image-src");
        void 0 !== e && !1 !== e && c(this).css("background-image", "url(" + e + ")")
    }), t.on("scroll", function() {
        c(".bar span").each(function() {
            var e = c(this).offset().top + c(this).outerHeight(),
                t = c(window).scrollTop() + c(window).height(),
                n = c(this).attr("data-width");
            e < t && c(this).css({
                width: n
            })
        })
    }), c(".header .box-text h1 span").typed({
        strings: ["Web Designer", "freelancer", "Graphic Designer", "Web developer"],
        loop: !0,
        startDelay: 500,
        backDelay: 2e3
    }), c(".d-item").hover3d({
        selector: ".item-img",
        perspective: 3e3,
        shine: !0
    }), c(".about .owl-carousel").owlCarousel({
        loop: !0,
        items: 1,
        margin: 30,
        dots: !1,
        nav: !0,
        navText: ['<span> <i class="far fa-angle-left"></i> </span>', '<span> <i class="far fa-angle-right"></i> </span>']
    }), c("#contact-form").validator(), c("#contact-form").on("submit", function(e) {
        if (!e.isDefaultPrevented()) {
            return c.ajax({
                type: "POST",
                url: "contact.php",
                data: c(this).serialize(),
                success: function(e) {
                    var t = "alert-" + e.type,
                        n = e.message,
                        o = '<div class="alert ' + t + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + n + "</div>";
                    t && n && (c("#contact-form").find(".messages").html(o), c("#contact-form")[0].reset())
                }
            }), !1
        }
    }), c(window).on("load", function() {
        c(".loader").fadeOut(500);
        var t = c(".gallery").isotope({});
        c(".gallery").isotope({
            itemSelector: ".item-img",
            transitionDuration: "0.5s"
        }), c(".gallery .single-image").fancybox({
            transitionIn: "elastic",
            transitionOut: "elastic",
            speedIn: 600,
            speedOut: 200,
            overlayShow: !1
        }), c(".filtering").on("click", "button", function() {
            var e = c(this).attr("data-filter");
            t.isotope({
                filter: e
            })
        }), c(".filtering").on("click", "button", function() {
            c(this).addClass("active").siblings().removeClass("active")
        }), c(".filtering button").on("click", function() {
            c("html, body").animate({
                scrollTop: c(".gallery").offset().top - 60
            }, 600)
        }), new StickySidebar("#sidebar", {
            topSpacing: 60,
            bottomSpacing: 60,
            containerSelector: ".container",
            innerWrapperSelector: ".sidebar__inner"
        })
    })
}(jQuery);