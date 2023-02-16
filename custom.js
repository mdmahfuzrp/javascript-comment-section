const allComments = document.getElementById('comments');
const commentBox = document.getElementById('comment-box');

const submit = document.getElementById('submit-comment');

submit.addEventListener('click', function(){
    const newComment = commentBox.value;
    const commentTag = document.createElement('li');

    console.log(newComment);
    if(newComment !== ''){
        commentTag.innerText = newComment;
        allComments.appendChild(commentTag);
        commentBox.value = '';
    }
    else{
        alert("Please type your comment!!")
    }
})