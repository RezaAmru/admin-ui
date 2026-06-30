import axios from "axios";

export const API_URL = "https://jwt-auth-eight-neon.vercel.app";

export async function loginService(email, password) {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: "Login gagal" };
  }
}

export async function logoutService() {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.post(
      `${API_URL}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg || "Logout gagal",
    };
  }
}
