
const images = ['poster1.png', 'poster2.png', 'poster3.png', 'poster4.png', 'poster5.png']

const slideshow = document.querySelector('.slideshow')
const slides = document.getElementsByTagName('img')
const posterImage = document.getElementById('posterImage')

const poster = images[1]

setInterval(function() {
    index++
    if(index >= images.length) {
        index = 0
    }
    posterImage.setAttribute('src', images[index])
}, 2000)

///////////////////////////////////////////////////////////////////////////////////

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     // let i;
//     let slides = document.getElementsByTagName("img");
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 2000);
// }
