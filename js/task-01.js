const lengthItems = document.querySelectorAll('.item');
console.log("Number of categories: ", lengthItems.length);

const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log("Category:", title);
    console.log("Elements:", itemsLength )  
});