let rerenderEntireTree = () => {
        console.log("rerenderEntireTree");
}

let store = {
        postElements: [
                { id: "1", message: "Hello, nigga" },
                { id: "2", message: "Hi, nigga" },
                { id: "3", message: "WhatsApp, nigga" },
                { id: "4", message: "nigga" } ],

        subsribe (observer) {
                rerenderEntireTree = observer;
       },

       addPost (mes) {

        this.postElements.push(mes);
        rerenderEntireTree(store);

       } 
}






export default store;