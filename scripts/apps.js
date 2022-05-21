const senarai = document.querySelector('.senarai');
const mesejBaru = document.querySelector('.mesejj');
const room = document.querySelector('.chat-rooms');
const tukarNama = document.querySelector('.nama-baru');

// update chat
mesejBaru.addEventListener( 'submit' , e => {
    e.preventDefault();

    const mesej = mesejBaru.mesej.value.trim();
    
    chatroom.addChat( mesej )
    .then( () => mesejBaru.reset())
    .catch( err => console.log( err))

})

// update nama
tukarNama.addEventListener('submit', e => {

    e.preventDefault();

    const namaBaru = tukarNama.update.value.trim()

    console.log( namaBaru)

    chatroom.updateUser( namaBaru)
    tukarNama.reset()
})


// update room
room.addEventListener('click', e => {
    e.preventDefault();

    console.log( e )

    if( e.target.tagName === 'BUTTON'){

        chatUi.clear();
        const room = e.target.outerText
        chatroom.updateRoom( room);
        chatroom.getChats( chat => chatUi.render( chat ))
    }
})

// check kalau localstorage ada nama atau tak
const nama = localStorage.nama ? localStorage.nama : 'New User'

// class instance 
const chatUi = new ChatUi( senarai )
const chatroom = new Chatroom('general', nama)
chatroom.getChats( data => {
    chatUi.render( data )
})

// darkmode toggle

const darkToggle = document.querySelector('#toggle');
const html = document.querySelector('html')

darkToggle.addEventListener('click', () => {

    if( darkToggle.checked){

        html.classList.add('dark')
    }else {
        html.classList.remove('dark')
    }
})