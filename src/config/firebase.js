import firebase from 'firebase';

export const inicializar = (partida, alterarValor) => {
    var config = {
        apiKey: "AIzaSyDw1J1Quv3BoPCtTVQmDHMfZNoyK752TEE",
        authDomain: "jokenpo-25282.firebaseapp.com",
        databaseURL: "https://jokenpo-25282.firebaseio.com",
        projectId: "jokenpo-25282",
        storageBucket: "jokenpo-25282.appspot.com",
        messagingSenderId: "983738868534"
    };

    firebase.initializeApp(config);
    listenerPertida(partida, alterarValor);
}

export const listenerPertida = (partida, alterarValor) => {
    var partidaBase = firebase.database().ref(partida);
    partidaBase.on('value', (on) => {
        alterarValor(on.val());
    });
}