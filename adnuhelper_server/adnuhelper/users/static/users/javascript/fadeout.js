function fadeInAndOut(element, fadeInDuration, fadeOutDuration, delay) {
    // Set initial opacity to 0
    element.style.opacity = 0;

    // Fade in the element
    element.style.transition = `opacity ${fadeInDuration / 5000}s ease-in-out`;
    element.style.opacity = 1;

    // Delay before fading out
    setTimeout(() => {
        // Fade out the element
        element.style.transition = `opacity ${fadeOutDuration / 2000}s ease-in-out`;
        element.style.opacity = 0;

        // Remove element from the DOM after fade out
        setTimeout(() => {
            element.remove();
        }, fadeOutDuration);
    }, delay);
}

// Call the function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the confirmation message element
    var confirmation = document.querySelector('.confirmation');

    // Call the function with the element and durations in milliseconds
    fadeInAndOut(confirmation, 1000, 1000, 3000); // 1000ms = 1 second
});;