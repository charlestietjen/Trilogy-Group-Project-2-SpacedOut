async function likeButtonHandler(event){
    event.preventDefault();
    console.log(this.parentElement.parentElement.parentElement.getAttribute('data-id'))
    const id = this.parentElement.parentElement.parentElement.getAttribute('data-id');
    this.removeEventListener('click', likeButtonHandler);
    if (this.classList.contains('like')){
        const response = await fetch('/api/posts/like/', {
            method: 'put',
            body: 
                JSON.stringify({
                    post_id: id
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok){
            this.classList = 'like-fill icon'
            this.addEventListener('click', likeButtonHandler);
        } else {
            alert('Failed to like post');
            this.addEventListener('click', likeButtonHandler);
        }
    } else {
        const response = await fetch('/api/posts/unlike/', {
            method: 'put',
            body: 
                JSON.stringify({
                    post_id: id
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok){
            this.classList = 'like icon';
            this.addEventListener('click', likeButtonHandler);
        } else {
            alert('Failed to unlike post');
            this.addEventListener('click', likeButtonHandler);
        }
    }
}

const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(btn => {
    btn.addEventListener('click', likeButtonHandler);
});