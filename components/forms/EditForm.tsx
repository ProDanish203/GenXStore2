"use client";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AlertCircle, Loader2, Save, Trash2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "@/app/axios/main";

export const EditForm = ({ data }: any) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    title: data.title,
    desc: data.desc,
    cat: data.cat,
    sarPrice: data.price[0].rate,
    sarOldPrice: data.price[0].oldRate,
    aedPrice: data.price[1].rate,
    aedOldPrice: data.price[1].oldRate,
    omrPrice: data.price[2].rate,
    omrOldPrice: data.price[2].oldRate,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

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

    // Validate prices
    if (!formData.sarPrice) newErrors.sarPrice = "SAR price is required";
    if (!formData.aedPrice) newErrors.aedPrice = "AED price is required";
    if (!formData.omrPrice) newErrors.omrPrice = "OMR price is required";

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

      const res = await mutateAsync({ id: data._id, product: formData });

      if (res) {
        toast.success("Product updated successfully");
        router.push("/admin");
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Something went wrong");
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
          <h2 className="text-xl font-bold text-white">Update Product</h2>
          <p className="text-rose-100 text-sm">
            Edit the details of your product
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Product Images */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">
              Product Images
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {data.images.map((img: string, i: number) => (
                <div key={i} className="relative group">
                  <div className="aspect-square rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={formData.title}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

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
                <option value="perfumes">Perfume</option>
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
                  htmlFor="sarPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  SAR Price <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    SAR
                  </span>
                  <input
                    id="sarPrice"
                    type="text"
                    placeholder="0.00"
                    className={`pl-12 pr-4 py-2.5 rounded-lg w-full border ${
                      errors.sarPrice
                        ? "border-rose-500 bg-rose-50"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent`}
                    value={formData.sarPrice}
                    name="sarPrice"
                    onChange={handleChange}
                  />
                </div>
                {errors.sarPrice && (
                  <p className="mt-1 text-sm text-rose-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.sarPrice}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="sarOldPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  SAR Old Price{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    SAR
                  </span>
                  <input
                    id="sarOldPrice"
                    type="text"
                    placeholder="0.00"
                    className="pl-12 pr-4 py-2.5 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    value={formData.sarOldPrice}
                    name="sarOldPrice"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="aedPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  AED Price <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    AED
                  </span>
                  <input
                    id="aedPrice"
                    type="text"
                    placeholder="0.00"
                    className={`pl-12 pr-4 py-2.5 rounded-lg w-full border ${
                      errors.aedPrice
                        ? "border-rose-500 bg-rose-50"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent`}
                    value={formData.aedPrice}
                    name="aedPrice"
                    onChange={handleChange}
                  />
                </div>
                {errors.aedPrice && (
                  <p className="mt-1 text-sm text-rose-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.aedPrice}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="aedOldPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  AED Old Price{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    AED
                  </span>
                  <input
                    id="aedOldPrice"
                    type="text"
                    placeholder="0.00"
                    className="pl-12 pr-4 py-2.5 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    value={formData.aedOldPrice}
                    name="aedOldPrice"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="omrPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  OMR Price <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    OMR
                  </span>
                  <input
                    id="omrPrice"
                    type="text"
                    placeholder="0.00"
                    className={`pl-12 pr-4 py-2.5 rounded-lg w-full border ${
                      errors.omrPrice
                        ? "border-rose-500 bg-rose-50"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent`}
                    value={formData.omrPrice}
                    name="omrPrice"
                    onChange={handleChange}
                  />
                </div>
                {errors.omrPrice && (
                  <p className="mt-1 text-sm text-rose-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.omrPrice}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="omrOldPrice"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  OMR Old Price{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    OMR
                  </span>
                  <input
                    id="omrOldPrice"
                    type="text"
                    placeholder="0.00"
                    className="pl-12 pr-4 py-2.5 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    value={formData.omrOldPrice}
                    name="omrOldPrice"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-rose-600 hover:bg-rose-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <Save className="h-5 w-5 mr-2" />
                  Update Product
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin")}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium transition-colors duration-200"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={() => {
                if (
                  confirm(
                    "Are you sure you want to delete this product? This action cannot be undone."
                  )
                ) {
                  console.log("Delete product:", data._id);
                }
              }}
              className="sm:ml-auto bg-white border border-red-500 text-red-500 hover:bg-red-50 py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
            >
              <Trash2 className="h-5 w-5 mr-2" />
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
