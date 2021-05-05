function createMenuItem(src, text, price, alt) {

    const food = document.createElement('div');
    food.classList.add('food');

    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt)

    const description = document.createElement('div');
    description.classList.add('description');

    const foodName = document.createElement('h2');
    foodName.textContent = text;

    const foodPrice = document.createElement('h3');
    foodPrice.textContent = price;

    description.appendChild(foodName);
    description.appendChild(foodPrice);    

    food.appendChild(description);
    food.appendChild(img);

    return food;
}


function buildMenuPage() {
    const content = document.getElementById('tab-content');
    content.textContent = ''; // Clear Previous

    const foods = [
        createMenuItem(
            "https://www.india.com/wp-content/uploads/2020/06/beer-entertainment-alcohol-the-drink.jpg",
            "Ale",
            "1 Silver",
            "Ale"
        )
        ,
        createMenuItem(
            'http://www.mycookingblog.com/newblog/wp-content/uploads/2013/11/Stew111013a.jpg',
            'Stew',
            '3 Silver'
        ),
        createMenuItem(
            'https://www.enworld.org/attachments/img_5241-jpg.127949/',
            'Steak Sandwich',
            '5 Silver'
        ),
        createMenuItem(
            'https://images.wallpaperscraft.com/image/raspberries_berries_fruit_178188_480x854.jpg',
            'Goodberries',
            '1 Silver'
        )
    ];

    foods.forEach((food) => {
        content.appendChild(food);
    });
};



export{ buildMenuPage };