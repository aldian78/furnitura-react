import api from "./api-interceptor";
import { setToken, clearToken } from "../utils/auth";

interface PaginationPayload {
    categoryId: string;
    materials: string;
    minPrice: number;
    maxPrice: number;
    pagination: {
        currentPage: string;
        itemPerPage: string;
    };
}
const productService = {

    async ProductList(payload: PaginationPayload) {
        const res = await api.post("/listProduct", payload);
        if (res.data?.code === "00") {
        return res.data;
        } else {
        throw new Error(res.data?.message || "Login gagal");
        }
    },

    async MaterialsList() {
        const res = await api.get("/list/materials");
        if (res.data?.code === "00") {
        return res.data;
        } else {
        throw new Error(res.data?.message);
        }
    },
};


export default productService;
