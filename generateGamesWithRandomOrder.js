let games = [
    {img: "doom.jpg", price: 20},
    {img: "mass effect.jpg", price: 40},
    {img: "AC3.jpg", price: 30},
    {img: "halo.jpg", price: 35},
    {img: "cod infinite warfare.jpg", price: 40},
    {img: "tomb raider.jpg", price: 25},
    {img: "far cry primal.jpg", price: 20},
    {img: "watch dogs.jpg", price: 30}
];

function generateGamesWithRandomOrder(amount){
    let indexes = [];
    for(let i = 0; i < amount;i++){
        let random = Math.floor(Math.random() * games.length);
        while(indexes.includes(random)){
            random = Math.floor(Math.random() * games.length);
        }
        
        indexes.push(random);
        let game = games[random];

        let wrapper = document.querySelector('.wrapper');
        let box = document.createElement('div');
        box.classList.add('game');
        wrapper.appendChild(box);

        box.innerHTML = `<div><img src='${game.img}'></div> <h1>$${game.price}</h1>`;
    }
    
}
