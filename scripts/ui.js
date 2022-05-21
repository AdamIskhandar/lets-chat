const scroll = document.querySelector('.scroll');
const chat = document.querySelector('.chat')


class ChatUi {
    constructor( list ){
        this.list = list
    }

    clear(){
        this.list.innerHTML = ''
    }

    render(data){

        // const tarikh = dateFns.distanceInWordsToNow(
        //     data.create_at.toDate(), 
        //     { addSuffix : true}
        // )
        const html = `
        <li id="content" class="container mb-0">
        <span class="user font-extrabold">${data.user} : </span>
        <span class="message font-mono">${data.message}</span>
        </li>
        <hr>
        `
        
        this.list.innerHTML += html
            
        // scroll to bottom
            $(scroll).ready(function() {
            $(scroll).scrollTop($(chat).height());
            });
    }
}

// <div class="time text-sm font-light">${tarikh}</div>