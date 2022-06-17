//chiedo all'utente la email
const userMail = prompt('inserisci la email (registrate: giampiero.fedeli@gmail.com , torofurio@gmail.com, amogliarray@gmail.com, ginobino@gmail.com , noisia@info.com , signoremio@gmail.com , lessgo@gmail.com)');
//genero un array con varie email
const mailList = ['giampiero.fedeli@gmail.com' , 'torofurio@gmail.com', 'amogliarray@gmail.com', 'ginobino@gmail.com' , 'noisia@info.com' , 'signoremio@gmail.com' , 'lessgo@gmail.com'];
//creo la condizione per la quale l'email inserita dall'utente deve essere inclusa all'interno della lista per iniziare il gioco, altrimenti viene mostrato l'errore
if (mailList.includes(userMail)){
    alert('Email registrata - Inizia il gioco')
    //dichiaro le costanti per il giocatore e l'ai
    const userNumber =  Math.floor((Math.random() * 6) + 1);
    const aiNumber = Math.floor((Math.random() * 6) + 1);
    console.log(`il numero del giocatore è ${userNumber} e il numero dell'ai è ${aiNumber}`);
    //applico le condizioni per vittoria, pareggio e sconfitta
    if (userNumber > aiNumber){
        alert(`VITTORIA: il giocatore ha fatto ${userNumber}, il computer ha fatto ${aiNumber}`);
    } else if (userNumber === aiNumber){
        alert(`PAREGGIO: il giocatore ha fatto ${userNumber}, il computer ha fatto ${aiNumber}`);
    } else {
        alert(`SCONFITTA: il giocatore ha fatto ${userNumber}, il computer ha fatto ${aiNumber}`);
    }
} else {
    alert('Email non registrata - ricarica la pagina')
}