const items = document.querySelectorAll('.item');
console.log(items);
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} / Elements: ${itemsLength}`);
});
