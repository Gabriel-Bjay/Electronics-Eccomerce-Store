let shopButton = document.querySelector(".shopButton")
let images = document.querySelector(".phone-images") 

shopButton.addEventListener("click",function(){
    shopButton.style.backgroundColor = "green";
    images.style.width = "200%"
    

});

const search = document.getElementsByClassName(`search`);
const APIKEY = 'cabe4f9b4a90578285781adb4b1c07a0';

search.addEventListener('click',function(){
    fetch(``)
    .then(data => data.json())
    .then(console.log)
    .catch (error => {})
})

