//Exercise 1.3 NodeJS Posting - Tiffany Day


//user data with promise
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: userId, name: 'User' + userId};
            resolve(user);
        }, 1000);
    });
}

//user posts with promise
function fetchUserPosts(userId) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2', 'Post 3'];
            resolve(posts);
        }, 1000);
    });
}

//user comments with promise
function fetchUserComments(userId) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const comments = ['Comment 1', 'Comment 2'];
            resolve(comments);
        }, 1000);
    });
}

//.then chains to pull from promises above
fetchUserData(1)
    .then(user => {
        console.log('User:', user);
        return fetchUserPosts(user.id);
    })
    .then(posts => {
        console.log('Posts: '+posts);
        return fetchUserComments(posts[0]);
    })
    .then(comments => {
        console.log('Comments:', comments);
    })
    //catch error
    .catch(error => {
        console.log('Error:', error);
    });