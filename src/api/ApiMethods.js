import { Client } from './ApiBase';

// Users

export async function getUserById(id) {
  try {
    const result = await Client.get(`user/${id}`);
    return result.data;
  } catch (err) {
    console.error('getUserById', err);
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
    console.error('searchUsers', err);
  }
}

export async function editUser(userId, data) {
  try {
    const result = await Client.put(`user/${userId}`, { ...data });
    return result;
  } catch (err) {
    console.error('editUser', err);
    return err;
  }
}

export async function changePassword(userId, data) {
  try {
    const result = await Client.put(`user/changePassword/${userId}`, { ...data });
    console.log('TESTTESTETSTESTESTETS');
    return result;
  } catch (err) {
    console.error('changePassword', err);
    return err;
  }
}

// Players

export async function getAllPlayer() {
  try {
    const result = await Client.get('player');
    return result.data;
  } catch (err) {
    console.error('getAllPlayer', err);
  }
}

export async function getFilteredPlayers(params) {
  try {
    const result = await Client.get('player/filter', { params });
    return result;
  } catch (err) {
    console.error('getFilteredPlayers', err);
  }
}

export async function registerPlayer(data) {
  try {
    const result = await Client.post(`player`, { ...data });
    return result;
  } catch (err) {
    console.error('registerPlayer', err);
    return err;
  }
}

export async function editPlayer(userId, data) {
  try {
    const result = await Client.put(`player/${userId}`, { ...data });
    return result;
  } catch (err) {
    console.error('editPlayer', err);
    return err;
  }
}

//Clubs

export async function getAllClubs() {
  try {
    const result = await Client.get('club');
    return result.data;
  } catch (err) {
    console.error('getAllClubs', err);
    return err;
  }
}

export async function registerClub(data) {
  try {
    const result = await Client.post('club', { ...data });
    return result;
  } catch (err) {
    console.error('registerClub', err);
    return err;
  }
}

export async function editClub(clubId, data) {
  try {
    const result = await Client.put(`club/${clubId}`, { ...data });
    return result;
  } catch (err) {
    console.error('editClub', err);
    return err;
  }
}

// Authentication

export async function login(data) {
  try {
    const result = await Client.post('login', { ...data });
    return result;
  } catch (err) {
    console.error('login', err);
    return err;
  }
}

export async function loggedUser() {
  try {
    const result = await Client.get('loggedUser');
    return result;
  } catch (err) {
    console.error('loggedUser', err);
    return err;
  }
}

// password reset

export async function requestResetPassword(data) {
  try {
    const result = await Client.post('requestResetPassword', { ...data });
    return result;
  } catch (err) {
    console.error('requestResetPassword', err);
    return err;
  }
}

export async function validateResetPasswordCode(data) {
  try {
    const result = await Client.post('validateResetPasswordCode', { ...data });
    return result;
  } catch (err) {
    console.error('validateResetPasswordCode', err);
    return err;
  }
}

export async function resetPassword(userId, data) {
  try {
    const result = await Client.put(`resetPassword/${userId}`, { ...data });
    return result;
  } catch (err) {
    console.error('resetPassword', err);
    return err;
  }
}

// Posts

export async function createPost(data) {
  try {
    const result = await Client.post('post', { ...data });
    return result;
  } catch (err) {
    console.error('createPost', err);
    return err;
  }
}

export async function getMyPosts(id) {
  try {
    const result = await Client.get(`post/user/${id}`);
    return result;
  } catch (err) {
    console.error('getMyPosts', err);
    return err;
  }
}

export async function getMyFollowingsPosts(id) {
  try {
    const result = await Client.get(`post/followings/${id}`);
    return result;
  } catch (err) {
    console.error('getMyFollowingsPosts', err);
    return err;
  }
}

export async function getAllPosts() {
  try {
    const result = await Client.get(`post`);
    return result;
  } catch (err) {
    console.error('getAllPosts', err);
    return err;
  }
}

export async function updatePost(data, id) {
  try {
    const result = await Client.put(`post/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error('updatePost', err);
    return err;
  }
}

export async function deletePost(id) {
  try {
    const result = await Client.delete(`post/${id}`);
    return result;
  } catch (err) {
    console.error('deletePost', err);
    return err;
  }
}

//Following

export async function follow(data) {
  try {
    const result = await Client.post('follow', { ...data });
    return result;
  } catch (err) {
    console.error('follow', err);
    return err;
  }
}

export async function verifyFollow({ followerId, followedId }) {
  try {
    const result = await Client.get(`follow/checkFollow/${followerId}/${followedId}`);
    return result.data;
  } catch (err) {
    console.error('verifyFollow', err);
    return err;
  }
}

export async function unFollow({ followerId, followedId }) {
  try {
    const result = await Client.delete(`follow/${followerId}/${followedId}`);
    return result;
  } catch (err) {
    console.error('unFollow', err);
    return err;
  }
}

export async function getMyFollowers(id, query) {
  try {
    const result = await Client.get(`follow/followers/${id}?q=${query || ''}`);
    return result;
  } catch (err) {
    console.error('getMyFollowers', err);
    return err;
  }
}

export async function getMyFollowings(id, query) {
  try {
    const result = await Client.get(`follow/followings/${id}?q=${query || ''}`);
    return result;
  } catch (err) {
    console.error('getMyFollowings', err);
    return err;
  }
}

//sugesstions

export async function getSuggestions({ userId }) {
  try {
    const result = await Client.get(`follow/suggestions/${userId}`);
    return result.data;
  } catch (err) {
    console.error('getSuggestions', err);
    return err;
  }
}

// likes

export async function getPostLikes(postId) {
  try {
    const result = await Client.get(`like/${postId}`);
    return result.data;
  } catch (err) {
    console.error('getPostLikes', err);
    return err;
  }
}

export async function likePost(data) {
  try {
    const result = await Client.post(`like`, { ...data });
    return result.data;
  } catch (err) {
    console.error('getPostLikes', err);
    return err;
  }
}

export async function checkIfLiked(data) {
  try {
    const result = await Client.post(`like/check`, { ...data });
    return result.data;
  } catch (err) {
    console.error('getPostLikes', err);
    return err;
  }
}

export async function unlikePost(data) {
  try {
    const result = await Client.post(`like/unlike`, { ...data });
    return result.data;
  } catch (err) {
    console.error('getPostLikes', err);
    return err;
  }
}

//comments

export async function getPostComments(postId) {
  try {
    const result = await Client.get(`comment/${postId}`);
    return result.data;
  } catch (err) {
    console.error('getPostComments', err);
    return err;
  }
}

export async function createComment(data) {
  try {
    const result = await Client.post(`comment`, { ...data });
    return result.data;
  } catch (err) {
    console.error('createComment', err);
    return err;
  }
}

export async function deleteComment(id) {
  try {
    const result = await Client.delete(`comment/${id}`);
    return result.data;
  } catch (err) {
    console.error('deleteComment', err);
    return err;
  }
}

// chat

export async function getMyChats(userId) {
  try {
    const result = await Client.get(`chat/${userId}`);
    return result.data;
  } catch (err) {
    console.error('getMyChats', err);
    return err;
  }
}

export async function getChatById(chatId, userId) {
  try {
    const result = await Client.get(`chat/${chatId}/${userId}`);
    return result.data;
  } catch (err) {
    console.error('getChatById', err);
    return err;
  }
}

export async function createChat(data) {
  try {
    const result = await Client.post(`chat`, { ...data });
    return result.data;
  } catch (err) {
    console.error('createChat', err);
    return err;
  }
}

export async function newChatMessage(data, chatId) {
  try {
    const result = await Client.post(`chat/${chatId}`, { ...data });
    return result.data;
  } catch (err) {
    console.error('newChatMessage', err);
    return err;
  }
}

export async function deleteChat(chatid) {
  try {
    const result = await Client.delete(`chat/${chatid}`);
    return result.data;
  } catch (err) {
    console.error('deleteChat', err);
    return err;
  }
}

export async function deleteChatMessage(chatid, messageid) {
  try {
    const result = await Client.delete(`chat/${chatid}/${messageid}`);
    return result.data;
  } catch (err) {
    console.error('deleteChat', err);
    return err;
  }
}

// vacancies

export async function getMyVacancies(clubId) {
  try {
    const result = await Client.get(`vacancy/club/${clubId}`);
    return result.data;
  } catch (err) {
    console.error('getMyVacancies', err);
    return err;
  }
}

export async function getMyFollowingsVacancies(clubId) {
  try {
    const result = await Client.get(`vacancy/followings/${clubId}`);
    return result;
  } catch (err) {
    console.error('getMyVacancies', err);
    return err;
  }
}

export async function createVacancy(data) {
  try {
    const result = await Client.post(`vacancy`, { ...data });
    return result;
  } catch (err) {
    console.error('createVacancy', err);
    return err;
  }
}

export async function updateVacancy(data, id) {
  try {
    const result = await Client.put(`vacancy/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error('updateVacancy', err);
    return err;
  }
}

export async function deleteVacancy(vacancyId) {
  try {
    const result = await Client.delete(`vacancy/${vacancyId}`);
    return result;
  } catch (err) {
    console.error('deleteVacancy', err);
    return err;
  }
}

export async function applyToVacancy(data) {
  try {
    const result = await Client.post(`vacancy-application`, { ...data });
    return result;
  } catch (err) {
    console.error('applyToVacancy', err);
    return err;
  }
}

export async function getVacancyApplications(vacancyId) {
  try {
    const result = await Client.get(`vacancy-application/${vacancyId}`);
    return result.data;
  } catch (err) {
    console.error('getVacancyApplications', err);
    return err;
  }
}

export async function updateApplication(data, id) {
  try {
    const result = await Client.put(`vacancy-application/${id}`, { ...data });
    return result;
  } catch (err) {
    console.error('updateApplication', err);
    return err;
  }
}

// TEAM

export async function getNoTeamPlayers(query) {
  try {
    const result = await Client.get(`/team/no-team-players?q=${query || ''}`);
    return result;
  } catch (err) {
    console.error('getNoTeamPlayers', err);
    return err;
  }
}

export async function getMyTeamPlayers(clubId) {
  try {
    const result = await Client.get(`/team/${clubId}`);
    return result;
  } catch (err) {
    console.error('getMyTeamPlayers', err);
    return err;
  }
}

export async function addPlayerToTeam(data) {
  try {
    const result = await Client.post('/team', { ...data });
    return result;
  } catch (err) {
    console.log('addPlayerToTeam', err);
    return err;
  }
}

export async function deleteTeamPlayer(teamPlayerId) {
  try {
    const result = await Client.delete(`team/${teamPlayerId}`);
    return result;
  } catch (err) {
    console.error('deleteTeamPlayer', err);
    return err;
  }
}

//Bookmark

export async function bookmark(data) {
  try {
    const result = await Client.post('bookmark', { ...data });
    return result;
  } catch (err) {
    console.error('bookmark', err);
    return err;
  }
}

export async function getMyBookmarks(id, params) {
  try {
    const result = await Client.get(`bookmark/${id}`, { params });
    return result;
  } catch (err) {
    console.error('getMyBookmarks', err);
    return err;
  }
}

export async function unBookmark(id) {
  try {
    const result = await Client.delete(`bookmark/${id}`);
    return result;
  } catch (err) {
    console.error('unBookmark', err);
    return err;
  }
}

export async function isBookmarked(params) {
  try {
    const result = await Client.get(`bookmark/isBookmarked`, { params });
    return result.data;
  } catch (err) {
    console.error('isBookmarked', err);
    return err;
  }
}

// Reports

export async function report(data) {
  try {
    const result = await Client.post('post-report', { ...data });
    return result;
  } catch (err) {
    console.error('report', err);
    return err;
  }
}

// Ads

export async function getActiveAds() {
  try {
    const result = await Client.get(`ad/active`);
    return result;
  } catch (err) {
    console.error('getActiveAds', err);
    return err;
  }
}

export async function incrementClicks(id) {
  try {
    const result = await Client.put(`ad/inc-clicks/${id}`);
    return result;
  } catch (err) {
    console.error('incrementClicks', err);
    return err;
  }
}

export async function incrementViews(id) {
  try {
    const result = await Client.put(`ad/inc-views/${id}`);
    return result;
  } catch (err) {
    console.error('incrementViews', err);
    return err;
  }
}
