const playButton = document.querySelector('button');

playButton.addEventListener('click' , function(){

    const cellContainer = document.querySelector('.container');

    cellContainer.innerHTML = ' ';


    //ciclo while per numeri random che si ripetono una sola volta

const bombNumbers = [];
while(bombNumbers.length < 16){
    const aBomb = randomNumber(1 , 100);
    console.log('number of the bomb' , aBomb);

    if(!bombNumbers.includes(aBomb)){

        bombNumbers.push(aBomb);

    }
}


for(let i = 1 ; i <= 100 ; i++){

    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.append(i);

    newCell.addEventListener('click' , function(){
        const index = this.getAttribute('cellNumber')
       // if index si trova dentro l'array delle bombe allora è una bomba
       if(index.includes(bombNumbers[i])){

        alert('Hai perso :(');

       }
        this.classList.toggle('active');
        console.log(this.innerHTML);

        


    });

    cellContainer.append(newCell);

}


})




//funzione numeri random

function randomNumber (min , max){
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}

