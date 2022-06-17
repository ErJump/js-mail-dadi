//chiedo all'utente la email
const userMail = prompt('inserisci la email (registrate: giampiero.fedeli@gmail.com , torofurio@gmail.com, amogliarray@gmail.com, ginobino@gmail.com , noisia@info.com , signoremio@gmail.com , lessgo@gmail.com)');
//genero un array con varie email
const mailList = ['giampiero.fedeli@gmail.com' , 'torofurio@gmail.com', 'amogliarray@gmail.com', 'ginobino@gmail.com' , 'noisia@info.com' , 'signoremio@gmail.com' , 'lessgo@gmail.com'];
//creo la condizione per la quale l'email inserita dall'utente deve essere inclusa all'interno della lista per iniziare il gioco, altrimenti viene mostrato l'errore
if (mailList.includes(userMail) === true){
    alert('Email registrata - Inizia il gioco')
} else {
    alert('Email non registrata - ricarica la pagina')
}