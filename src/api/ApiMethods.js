import Client from './ApiBase';

// Users

export async function getUserById(id) {
  try {
    const result = await Client.get(`user/${id}`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
}

export async function searchUsers({ ids, limit, searchQuery }) {
  const exclude = ids?.join(',') || '';
  try {
    const result = await Client.get(
      `user/search?q=${searchQuery}&limit=${limit}&exclude=${exclude}`
    );
    return result;
  } catch (err) {
    console.log(err);
  }
}

// Players

export async function getAllPlayer() {
  const result = await Client.get('player');
  return result.data;
}

export async function registerPlayer(data) {
  try {
    const result = await Client.post(`player`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function editPlayer(userId, data) {
  try {
    const result = await Client.put(`player/${userId}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

//Clubs

export async function getAllClubs() {
  const result = await Client.get('club');
  return result.data;
}

export async function registerClub(data) {
  try {
    const result = await Client.post('club', { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function editClub(clubId, data) {
  try {
    const result = await Client.put(`club/${clubId}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

// Authentication

export async function login(data) {
  try {
    const result = await Client.post('login', { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function loggedUser() {
  try {
    const result = await Client.get('loggedUser');
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

// password reset

export async function requestResetPassword(data) {
  try {
    const result = await Client.post('requestResetPassword', { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function validateResetPasswordCode(data) {
  try {
    const result = await Client.post('validateResetPasswordCode', { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function resetPassword(userId, data) {
  try {
    const result = await Client.put(`resetPassword/${userId}`, { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

// Posts

export async function createPost(data) {
  try {
    const result = await Client.post('post', { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function getMyPosts(id) {
  try {
    const result = await Client.get(`post/user/${id}`);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function getMyFollowingsPosts(id) {
  try {
    const result = await Client.get(`post/followings/${id}`);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function getAllPosts() {
  try {
    const result = await Client.get(`post`);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

//Following

export async function follow(data) {
  try {
    const result = await Client.post('follow', { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function verifyFollow({ followerId, followedId }) {
  try {
    const result = await Client.get(`follow/checkFollow/${followerId}/${followedId}`);
    return result.data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function unFollow({ followerId, followedId }) {
  try {
    const result = await Client.delete(`follow/${followerId}/${followedId}`);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function getMyFollowers(id, query) {
  try {
    const result = await Client.get(`follow/followers/${id}?q=${query || ''}`);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function getMyFollowings(id, query) {
  try {
    const result = await Client.get(`follow/followings/${id}?q=${query || ''}`);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}

//sugesstions

export async function getSuggestions({ userId }) {
  try {
    const result = await Client.get(`follow/suggestions/${userId}`);
    return result.data;
  } catch (err) {
    console.error(err);
    return err;
  }
}
