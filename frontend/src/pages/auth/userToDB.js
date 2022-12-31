import axios from "axios";

export async function sendUserToDB(firebaseUser) {
  try {
    const { data } = await axios.post(`http://localhost:5000/api/v1/user/new`, {
      name: firebaseUser.displayName,
      email: firebaseUser.email,
    });
    console.info("User Data sent to DB", data);
    localStorage.setItem("easybus", data.token);
  } catch (err) {
    console.info(
      "Ignorable Error Sending User Data to DB",
      err.response.data.error
    );
  }
}
