async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-caption"]').value;
  const post_info = document.querySelector('input[name="post-info"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_info
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post').addEventListener('submit', newFormHandler);