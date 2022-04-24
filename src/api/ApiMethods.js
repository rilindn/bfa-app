import Client from './ApiBase';

// Players

export async function getAllPlayer() {
  const result = await Client.get('player');
  return result.data;
}

export async function registerPlayer(data) {
  try {
    const result = await Client.post('player', { ...data });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
}
