(() => {
    var buttonImages = Array.from(document.querySelectorAll('[js-class="image-button"]'));
    var imageContainer = document.querySelector('[js-selector="image-container"]');
    buttonImages.forEach(item => {
        item.onclick = () => {
            if(item.className.includes('inactive')) {
                var active = document.querySelector('.active');
                active.className = "btnt inactive";
                item.className = item.className.replace('inactive', 'active');
                imageContainer.src = item.querySelector('img').src;
            }
        }
    })
})()