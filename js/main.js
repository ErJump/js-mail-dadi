
const mailList = ['giampiero.fedeli@gmail.com' , 'torofurio@gmail.com', 'amogliarray@gmail.com', 'ginobino@gmail.com' , 'noisia@info.com' , 'signoremio@gmail.com' , 'lessgo@gmail.com'];

const button = document.getElementById("start-button");

let mailCheck = false; 

const mailBox = document.getElementById('email-list');

for (let index = 0;  index <= mailList.length - 1; index++){
    const newElement = document.createElement('li');
    newElement.innerHTML = mailList[index];
    mailBox.append(newElement); 
}

button.addEventListener('click', function(){
    const userMail = document.getElementById('input-mail').value;
    
    for (let i = 0; i < mailList.length ; i++){
        const element = mailList[i];
        if (element === userMail){
            mailCheck = true;
        }
    };

    if (mailCheck === true){
        alert('Email registrata - Inizia il gioco')
        document.getElementById('error-screen').classList.add('d-none');
        document.querySelector('.ms_container').classList.add('d-none');
        document.getElementById('result-container').classList.remove('d-none');
        //dichiaro le costanti per il giocatore e l'ai
        const userNumber =  Math.floor((Math.random() * 6) + 1);
        const aiNumber = Math.floor((Math.random() * 6) + 1);
        const matchResult = document.getElementById('match-result');
        const aiResult = document.getElementById('ai-result');
        const userResult = document.getElementById('user-result');
        userResult.innerHTML = userNumber;
        aiResult.innerHTML = aiNumber;
        console.log(`il numero del giocatore è ${userNumber} e il numero dell'ai è ${aiNumber}`);
        //applico le condizioni per vittoria, pareggio e sconfitta
        if (userNumber > aiNumber){
            matchResult.innerHTML = 'Winner winner chicken dinner!';
            matchResult.classList.add('text-success');
        } else if (userNumber === aiNumber){
            matchResult.innerHTML = 'Tie';
            matchResult.classList.add('text-primary');
        } else {
            matchResult.innerHTML = 'Defeat';
            matchResult.classList.add('text-danger');
        }
    } else {
        //alert('Email non registrata - ricarica la pagina')
        document.getElementById('error-screen').classList.remove('d-none');
    };
});
