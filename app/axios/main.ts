import api from "./middleware";

export const getProductbyId = async (id: string) => {
  const { data } = await api.get(`/product/getProducts/${id}`);
  return data;
};

export const getProducts = async (cat?: string) => {
  const { data } = await api.get(
    `/product/getProducts${cat ? "?cat=" + cat : ""}`
  );
  return data;
};

export const addProduct = async (product: any) => {
  const { data } = await api.post("/product/add", product);
  return data;
};

export const updateProduct = async ({
  id,
  product,
}: {
  id: string;
  product: any;
}) => {
  const { data } = await api.put(`/product/update/${id}`, product);
  return data;
};

export const deleteProduct = async (id: string) => {
  const { data } = await api.delete(`/product/remove/${id}`);
  return data;
};
