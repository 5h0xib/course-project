console.log("asd");


// hide the like button and display the lied button
function like(){
    document.querySelector('.liked-btn').style.display = 'block';
    document.querySelector('.like-btn').style.display = 'none';

    document.querySelector('.like-p').style.display = 'none';
    document.querySelector('.liked-p').style.display = 'block';
}

// hide the liked button and display the like button
function liked(){
    document.querySelector('.liked-btn').style.display = 'none';
    document.querySelector('.like-btn').style.display = 'block';

    document.querySelector('.like-p').style.display = 'block';
    document.querySelector('.liked-p').style.display = 'none';
}

// hide the edit button then display the save button and make the .header .name .main-content contenteditable = true
function edit(){
    document.querySelector('.edit-btn').style.display = 'none';
    document.querySelector('.save-btn').style.display = 'block';

    document.querySelector('.header').setAttribute('contenteditable', 'true');
    document.querySelector('.name').setAttribute('contenteditable', 'true');
    document.querySelector('.main-content').setAttribute('contenteditable', 'true');
}

// hide the save button then display the new edit button and make the .header .name .main-content contendeditable = false
function save(){
    document.querySelector('.save-btn').style.display = 'none';
    document.querySelector('.edit-btn').style.display = 'block';

    document.querySelector('.header').setAttribute('contenteditable', 'false');
    document.querySelector('.name').setAttribute('contenteditable', 'false');
    document.querySelector('.main-content').setAttribute('contenteditable', 'false');
}


// this function places the text inside the textarea in the .comments div 
document.addEventListener('DOMContentLoaded', function() {
    var commentButton = document.querySelector('.comment-section button');
    var textarea = document.querySelector('.comment-section textarea');
    var commentsContainer = document.querySelector('.comments');

    commentButton.addEventListener('click', function() {
        var commentText = textarea.value.trim();
        if (commentText !== '') {
            var newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.textContent = commentText;
            commentsContainer.appendChild(newComment);
            textarea.value = '';
        }
    });
});




