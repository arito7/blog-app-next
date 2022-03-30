const AUTH_KEY = 'authdata';
export const API_ENDPOINT = 'https://arito-blog-api.herokuapp.com';

export async function postPost(post) {
  if (isAuthenticated()) {
    // const authData = localStorage.getItem(AUTH_KEY);
    const authData = JSON.parse(localStorage.getItem('authdata'));
    console.log(authData);

    const p = {
      title: 'This is the post title',
      body: 'This is the post boyd that was sent from the client',
      published: true,
    };
    console.log('current token: ', authData.token);
    fetch(`${API_ENDPOINT}/posts`, {
      method: 'POST',
      body: JSON.stringify(p),
      headers: {
        Authorization: `Bearer ${authData.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log('User is not authenticated');
  }
}

const isAuthenticated = () => {
  try {
    return !!localStorage.getItem('authdata');
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const saveAuthData = (authData) => {
  try {
    localStorage.setItem(AUTH_KEY, JSON.stringify({ ...authData }));
  } catch (error) {
    console.log(error);
  }
};
