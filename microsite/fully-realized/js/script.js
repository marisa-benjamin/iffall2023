window.addEventListener("scroll", function() {
    let pageY = window.pageYOffset;
    
    let clouds = document.querySelectorAll('.clouds_moving img');

    clouds.forEach(function(cloud, index) {
        let speed = 0.25 * (index + 1); 
        cloud.style.transform = `translateY(${pageY * speed}px)`;
    });
});

