const scrollToTopBtn = document.getElementById("scrollToTopBtn");

        window.onscroll = function() {
        if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
        };

        function topFunction() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        console.log(scrollToTopBtn);
