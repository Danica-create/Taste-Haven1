const image = document.getElementById("sliderImage");

const images = [
    "Images/Property 1=Default.png",
    "Images/Property 1=Variant2.png"
];

let currentImage = 0;

setInterval(() => {
    currentImage = (currentImage + 1) % images.length;

    //Change image
    image.src = images[currentImage];

    //Restart animation
    image.classList.remove("slide");
    void image.offsetWidth;

    //forces animation restart
    image.classList.add("slide")
}, 6000);

