import axios from "axios";
import { API_URL } from "./authService.jsx";

export async function goalService() {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`${API_URL}/goals`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data?.data?.[0] ?? {};
  } catch (error) {
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg || "Gagal mengambil data goals",
    };
  }
}
