import axios from "axios";

export async function searchUser(username) {
  try {
    return await axios.get(
      `https://3c64-92-184-106-43.ngrok.io/api/git/${username}`
    );
  } catch (error) {
    console.error(error);
  }
}
