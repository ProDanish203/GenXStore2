"use client";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { UploadWidget } from "../helpers/UploadWidget";
import { PlusCircle, X, AlertCircle, Loader2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "@/app/axios/main";

export const ProductForm = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    cat: "leather-gloves",
    usPrice: "",
    usOldPrice: "",
    gbpPrice: "",
    gbpOldPrice: "",
    cadPrice: "",
    cadOldPrice: "",
    euPrice: "",
    euOldPrice: "",
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = "Product title is required";
    if (!formData.desc.trim())
      newErrors.desc = "Product description is required";
    if (!img || img.length === 0)
      newErrors.img = "At least one image is required";

    // Validate prices
    if (!formData.usPrice) newErrors.usPrice = "US price is required";
    if (!formData.gbpPrice) newErrors.gbpPrice = "GBP price is required";
    if (!formData.cadPrice) newErrors.cadPrice = "CAD price is required";
    if (!formData.euPrice) newErrors.euPrice = "EU price is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    try {
      setLoading(true);
      const data = await mutateAsync({
        formData,
        img,
      });

      if (data) {
        toast.success("Product added successfully");
        setImg([]);
        // Reset form
        setFormData({
          title: "",
          desc: "",
          cat: "leather-gloves",
          usPrice: "",
          usOldPrice: "",
          gbpPrice: "",
          gbpOldPrice: "",
          cadPrice: "",
          cadOldPrice: "",
          euPrice: "",
          euOldPrice: "",
        });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-rose-500 to-rose-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">Add New Product</h2>
          <p className="text-rose-100 text-sm">
            Fill in the details to add a new product to your inventory
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">
              Basic Information
            </h3>

            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Product Title <span className="text-rose-500">*</span>
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter product title"
                required
                autoComplete="off"
                className={`px-4 py-2.5 rounded-lg w-full border ${
                  errors.title
                    ? "border-rose-500 bg-rose-50"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent`}
                value={formData.title}
                name="title"
                onChange={handleChange}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-rose-500 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.title}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="desc"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Product Description <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="desc"
                rows={4}
                placeholder="Enter product description"
                required
                autoComplete="off"
                className={`px-4 py-2.5 rounded-lg resize-none w-full border ${
                  errors.desc ? "border-rose-500 bg-rose-50" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent`}
                value={formData.desc}
                name="desc"
                onChange={handleChange}
              ></textarea>
              {errors.desc && (
                <p className="mt-1 text-sm text-rose-500 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.desc}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="cat"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category <span className="text-rose-500">*</span>
              </label>
              <select
                id="cat"
                required
                name="cat"
                value={formData.cat}
                onChange={handleChange}
                className="px-4 py-2.5 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                <option value="men-watch">Men's watch</option>
                <option value="women-watch">Women's watch</option>
                <option value="couple-watch">Couple's watch</option>
                <option value="jacket">Jacket</option>
                <option value="leather-gloves">Leather gloves</option>
              </select>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">
              Pricing Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="usPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  US Price <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    $
                  </span>
                  <input
                    id="usPrice"
                    type="text"
                    placeholder="0.00"
                    className={`pl-8 pr-4 py-2.5 rounded-lg w-full border ${
                      errors.usPrice
                        ? "border-rose-500 bg-rose-50"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent`}
                    value={formData.usPrice}
                    name="usPrice"
                    onChange={handleChange}
                  />
                </div>
                {errors.usPrice && (
                  <p className="mt-1 text-sm text-rose-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.usPrice}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="usOldPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  US Old Price <span className="text-gray-400">(Optional)</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    $
                  </span>
                  <input
                    id="usOldPrice"
                    type="text"
                    placeholder="0.00"
                    className="pl-8 pr-4 py-2.5 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    value={formData.usOldPrice}
                    name="usOldPrice"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="gbpPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  GBP Price <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    £
                  </span>
                  <input
                    id="gbpPrice"
                    type="text"
                    placeholder="0.00"
                    className={`pl-8 pr-4 py-2.5 rounded-lg w-full border ${
                      errors.gbpPrice
                        ? "border-rose-500 bg-rose-50"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent`}
                    value={formData.gbpPrice}
                    name="gbpPrice"
                    onChange={handleChange}
                  />
                </div>
                {errors.gbpPrice && (
                  <p className="mt-1 text-sm text-rose-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.gbpPrice}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="gbpOldPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  GBP Old Price{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    £
                  </span>
                  <input
                    id="gbpOldPrice"
                    type="text"
                    placeholder="0.00"
                    className="pl-8 pr-4 py-2.5 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    value={formData.gbpOldPrice}
                    name="gbpOldPrice"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="cadPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  CAD Price <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    C$
                  </span>
                  <input
                    id="cadPrice"
                    type="text"
                    placeholder="0.00"
                    className={`pl-10 pr-4 py-2.5 rounded-lg w-full border ${
                      errors.cadPrice
                        ? "border-rose-500 bg-rose-50"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent`}
                    value={formData.cadPrice}
                    name="cadPrice"
                    onChange={handleChange}
                  />
                </div>
                {errors.cadPrice && (
                  <p className="mt-1 text-sm text-rose-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.cadPrice}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="cadOldPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  CAD Old Price{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    C$
                  </span>
                  <input
                    id="cadOldPrice"
                    type="text"
                    placeholder="0.00"
                    className="pl-10 pr-4 py-2.5 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    value={formData.cadOldPrice}
                    name="cadOldPrice"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="euPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  EU Price <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    €
                  </span>
                  <input
                    id="euPrice"
                    type="text"
                    placeholder="0.00"
                    className={`pl-8 pr-4 py-2.5 rounded-lg w-full border ${
                      errors.euPrice
                        ? "border-rose-500 bg-rose-50"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent`}
                    value={formData.euPrice}
                    name="euPrice"
                    onChange={handleChange}
                  />
                </div>
                {errors.euPrice && (
                  <p className="mt-1 text-sm text-rose-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.euPrice}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="euOldPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  EU Old Price <span className="text-gray-400">(Optional)</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    €
                  </span>
                  <input
                    id="euOldPrice"
                    type="text"
                    placeholder="0.00"
                    className="pl-8 pr-4 py-2.5 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    value={formData.euOldPrice}
                    name="euOldPrice"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">
              Product Images
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Images <span className="text-rose-500">*</span>
              </label>

              <div className="flex flex-wrap gap-4 mb-2">
                {img.length > 0 ? (
                  img.map((image: any, index: number) => (
                    <div
                      key={index}
                      className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-300"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        className="absolute top-1 right-1 bg-rose-500 text-white rounded-full p-0.5"
                        onClick={() =>
                          setImg(img.filter((_, i) => i !== index))
                        }
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="w-full p-8 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500">
                    <PlusCircle className="h-10 w-10 mb-2 text-gray-400" />
                    <p className="text-sm">No images uploaded yet</p>
                  </div>
                )}
              </div>

              <div className="mt-2">
                <UploadWidget setImg={setImg} />
                {errors.img && (
                  <p className="mt-2 text-sm text-rose-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.img}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Adding Product...
                </>
              ) : (
                <>
                  <PlusCircle className="h-5 w-5 mr-2" />
                  Add Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
