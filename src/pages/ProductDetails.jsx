import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import emailjs from "@emailjs/browser";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.flowers.flowers);
  const product = products.find((item) => item.id.toString() === id);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    wantsChocolate: false,
    heliumBalloon: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  if (!product) {
    return (
      <h2 className="text-center text-xl text-red-500">Product Not Found</h2>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        amount: 1,
        image: product.image,
      })
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.address.trim()) newErrors.address = "Address is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    // Sending email via EmailJS
    emailjs
      .send(
        "service_aebdr1n",
        "template_18a32ri",
        {
          from_name: form.name,
          cart: `<table>
  <tr>
    <th>Name</th>
    <th>Amount</th>
    <th>Image</th>
  </tr>
  <tr>
    <td>${product.name}</td>
    <td>1</td>
    <td><img src="${window.location.origin}${product.image}" alt="${product.name}" style="max-width: 100px;" /></td>
  </tr>
</table>`,
          to_name: "Osama",
          from_email: form.email,
          to_email: "osamagamal1611@gmail.com",
          message: `Phone: ${form.phone}, Address: ${form.address}, Message: ${
            form.message
          }, Wants Chocolate: ${
            form.wantsChocolate ? "Yes" : "No"
          }, Helium Balloon: ${form.heliumBalloon || "No Balloon Selected"}`,
        },
        "_qcbYCiPrcvMcT0Kp"
      )
      .then(
        () => {
          setLoading(false);
          alert("Order has been successfully sent.");
          setForm({
            name: "",
            email: "",
            phone: "",
            address: "",
            message: "",
            wantsChocolate: false,
            heliumBalloon: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="product-details-container flex flex-col items-center justify-center p-6 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
      <div
        className="w-full max-w-md h-[300px] bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="flex flex-col items-center text-center gap-4 mt-6">
        <p className="text-lg text-gray-500 line-through">
          {product.price + 200} EGP
        </p>
        <h3 className="text-2xl font-bold text-red-500 bg-red-100 p-3 rounded-lg">
          Price: {product.price} EGP
        </h3>
        <p className="text-md text-gray-700">
          <span className="font-semibold">Description:</span>{" "}
          {product.description}
        </p>
        <p className="text-md text-gray-700">
          <span className="font-semibold">Details:</span> {product.details}
        </p>
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl w-full max-w-md flex flex-col gap-4 p-8"
      >
        <h3 className="text-2xl font-bold text-center">Order This Product</h3>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )}

        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone}</span>
        )}

        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
        />
        {errors.address && (
          <span className="text-red-500 text-sm">{errors.address}</span>
        )}

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
        ></textarea>

        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">Chocolates</span>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="wantsChocolate"
              checked={form.wantsChocolate}
              onChange={handleChange}
              className="focus:ring-2 focus:ring-red-500"
            />
            <span>Ferrero Rocher or similar (+LE 400)</span>
          </label>
        </div>

        <select
          name="heliumBalloon"
          value={form.heliumBalloon}
          onChange={handleChange}
          className="border p-3 rounded-md focus:ring-2 focus:ring-red-500"
        >
          <option value="">No Balloon / Choose Balloon</option>
          <option value="Congratulations">Congratulations (+ LE 200)</option>
          <option value="I Love You">I Love You (+ LE 200)</option>
          <option value="Baby Boy">Baby Boy (+ LE 200)</option>
          <option value="Baby Girl">Baby Girl (+ LE 200)</option>
          <option value="Birthday">Birthday (+ LE 200)</option>
        </select>

        {errors.heliumBalloon && (
          <span className="text-red-500 text-sm">{errors.heliumBalloon}</span>
        )}

        <button
          type="submit"
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
        >
          {loading ? "Sending..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}

export default ProductDetails;
