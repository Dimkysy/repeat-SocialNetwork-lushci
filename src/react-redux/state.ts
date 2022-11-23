type MessageType = {
    id:number
    message:string
}
type DialogType = {
    id:number
    name:string
}
type PostType = {
    id:number
    message:string
    likesCount:number
}

type ProfilePageType = {
    posts:Array<PostType>
}
 type DialogPageType = {
    dialogs:Array<DialogType>
    messages:Array<MessageType>
}

type SideBarType = {}

export type RootType = {
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
    sidebar:SideBarType
}

const state:RootType = {
        dialogsPage : {
            dialogs: [
                {id:1, name:"Dimich"},
                {id:2, name:"Andrew"},
                {id:3, name:"Sveta"},
                {id:4, name: "Sasha"}
            ],
            messages: [
                {id:1, message:"Hi"},
                {id:2, message: "YO"},
                {id:3, message: "Hello"},
                {id:4, message: "Bear no bear"}
            ],
        },
    profilePage: {
            posts:[
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
    },
    sidebar:{}

}


export default state