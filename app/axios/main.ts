import api from "./middleware";

export const getProductbyId = async (id: string) => {
  const { data } = await api.get(`/product/getProducts/${id}`);
  return data;
};

export const getProducts = async () => {
  const { data } = await api.get("/product/getProducts");
  return data;
};
