var productImg = document.getElementById('productImg');
var thumbnailList = document.getElementsByClassName('thumbnail');


thumbnailList[0].addEventListener('click', function () {
    productImg.src = "./static/image-product-1.jpg"
});
thumbnailList[1].addEventListener('click', function () {
    productImg.src = "./static/image-product-2.jpg"
});
thumbnailList[2].addEventListener('click', function () {
    productImg.src = "./static/image-product-3.jpg"
});
thumbnailList[3].addEventListener('click', function () {
    productImg.src = "./static/image-product-4.jpg"
});
