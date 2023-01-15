import axios from "axios";

export async function sendUserToDB(firebaseUser) {
  try {
    const { data } = await axios.post(
      `https://easybus-backend.vercel.app/api/v1/user/new`,
      {
        name: firebaseUser.displayName,
        email: firebaseUser.email,
      }
    );

    localStorage.setItem("easybus", data.token);
  } catch (err) {
    console.info(
      "Ignorable Error Sending User Data to DB",
      err.response.data.error
    );
  }
}
