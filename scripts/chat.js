 // add new chat to document 
 // setting up a real time listener to get new chats 
 // updating the username
 // updating the room 

// add new chat to document 
class Chatroom{

    constructor( room , user){

       this.room = room;
       this.user = user;
       this.chats = db.collection('chats');
       this.unsub;
   }

   // menghantar data ke database
   async addChat( message ){

       const dateNow = new Date();

       const chat = {
           message,
           room : this.room,
           user: this.user,
           create_at: firebase.firestore.Timestamp.fromDate(dateNow)
       };

       const hantar = await this.chats.add(chat)
       return hantar;

   }

   // setting up a real time listener to get new chats 

   getChats( panggil ){
       this.unsub = this.chats
       // complex queries
       // where method untuk memmilih dimana kita nak 
        .where( 'room' , '==', this.room)
        // orderBy method untuk menyusun data mengikut property yang kita nak
        .orderBy('create_at')
        .onSnapshot( snap => {
            snap.docChanges().forEach( mess => {
               
               if( mess.type === 'added'){
                   panggil( mess.doc.data())
               }
            })
        })
   }

   updateUser( user ){
       this.user = user;
       localStorage.setItem('nama', user)
    
   }

   updateRoom( room ){
       this.room = room 
       console.log( 'room update')
       if( this.unsub ){
           this.unsub()
       }
   }

}

// const chatroom = new Chatroom('general', 'adam')

// chatroom.addChat('hai saya adam iskhandar')

// chatroom.updateUser('adamu')

// chatroom.addChat('Haii saya adamu san')
