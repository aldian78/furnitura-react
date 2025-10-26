import api from "./api-interceptor";

interface PaginationPayload {
    pagination: {
        currentPage: string;
        itemPerPage: string;
    };
}
const categoryService = {

    async CategoryList(payload: PaginationPayload) {
        const res = await api.post("/listCategory", payload);
        if (res.data?.code === "00") {
            return res.data;
        } else {
            throw new Error(res.data?.message || "Login gagal");
        }
    },
};

export default categoryService;
