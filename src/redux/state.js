const state = {
    profilePage: {
        posts: [
            { id: '0', message: 'It is my first post', likesCount: '5' },
            { id: '1', message: 'Hi. Your post is good', likesCount: '2' },
            { id: '2', message: 'Yep, I add like', likesCount: '1' },
            { id: '3', message: 'Yes', likesCount: '4' },
            { id: '4', message: 'Top idea', likesCount: '3' },
        ],
    },
    dialogsPage: {
        dialogs: [
            { name: 'Artem', id: '1' },
            { name: 'Max', id: '2' },
            { name: 'Ira', id: '3' },
            { name: 'Elena', id: '4' },
        ],
        messages: [
            { message: 'Hello', id: '1' },
            { message: 'Hi', id: '2' },
            { message: 'How are you?', id: '3' },
            { message: 'Good, thanks', id: '4' },
        ],
    },
    friendsPage: {
        friends: [
            { id: '0', surname: 'Artem' },
            { id: '1', surname: 'Max' },
            { id: '2', surname: 'Ira' },
            { id: '3', surname: 'Elena' },
        ],
    },
};

export default state;
