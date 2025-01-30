import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { addToCart, removeFromCart, deleteFromCart } from "../store/cartSlice";
import { BsCart4 } from "react-icons/bs";

function Cart() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    wantsChocolate: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  // Loading cart from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (savedCart.length > 0) {
      savedCart.forEach((item) => {
        dispatch(addToCart(item));
      });
    }
  }, [dispatch]);

  // Saving cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

    // Validate form inputs
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    console.log(cart);

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
  ${cart.map((item) => {
    return `  <tr>
    <td>${item.name}</td>
    <td>${item.amount}</td>
    <td><img src="${window.location.origin}${item.img}"/></td>
  </tr>`;
  })}
</table>`,
          to_name: "Osama",
          from_email: form.email,
          to_email: "osamagamal1611@gmail.com",
          message: `Phone: ${form.phone}, Address: ${form.address}, Message: ${
            form.message
          }, Wants Chocolate: ${form.wantsChocolate ? "Yes" : "No"}`,
        },
        "_qcbYCiPrcvMcT0Kp"
      )
      .then(
        () => {
          setLoading(false);
          alert("تم ارسال الاوردر بنجاح ");

          setForm({
            name: "",
            email: "",
            phone: "",
            address: "",
            message: "",
            wantsChocolate: false,
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const handleAddToCart = (item) => {
    localStorage.setItem(`image_${item.id}`, item.img); // Store image URL in localStorage
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        amount: 1,
        totalPrice: item.price,
        image: item.img,
      })
    );
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDeleteFromCart = (item) => {
    dispatch(deleteFromCart({ id: item.id }));
    localStorage.removeItem(`image_${item.id}`); // Remove image URL from localStorage
  };

  return (
    <div className="mb-20 text-gray-700">
      <h3 className="text-gray-700 text-3xl font-bold leading-9">My Cart</h3>
      <hr className="w-[90px] h-[5px] bg-red-400 border-none my-4 mb-4" />
      {cart.length === 0 ? (
        <div className="text-center flex items-center justify-center mt-16">
          <div className="w-[75%] shadow-category flex flex-col justify-center items-center gap-5 px-5 py-16 text-gray-700">
            <BsCart4 size={70} />
            <h3 className="text-3xl font-bold">Your cart feels lonely.</h3>
            <p className="text-lg">
              Your shopping cart lives to serve. Give it purpose - fill it with
              the fresh flowers and make it happy.
            </p>
            <Link
              to="/product"
              className="bg-red-500 text-white text-xl font-bold px-10 py-4 rounded-lg hover:scale-105 duration-100"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-[1fr] lg:grid-cols-[2fr_1fr] gap-10 pt-7 px-5">
          <div className="flex flex-col gap-4">
            <Link
              to="/product"
              className="text-md font-medium underline underline-offset-4 text-gray-600"
            >
              Back to Products
            </Link>
            {cart.map((item, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_4fr_2fr_1fr] bg-stone-100 p-5"
                >
                  <div
                    className="w-[70px] h-[70px] bg-cover bg-center bg-no-repeat bg-red-300"
                    style={{
                      backgroundImage: `url(${
                        localStorage.getItem(`image_${item.id}`) || item.img
                      })`,
                    }}
                  ></div>
                  <div className="flex flex-col justify-center gap-1">
                    <p className="text-lg font-medium">{item.name}</p>
                    <div className="flex gap-4 text-xs">
                      <p>X {item.amount}</p>
                      <div
                        className="underline underline-offset-4 font-medium cursor-pointer"
                        onClick={() => handleDeleteFromCart(item)}
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className=" flex justify-center items-center gap-4 bg-transparent border-solid border-[1px] border-gray-500 px-5 py-2 rounded-md">
                      <div
                        className="cursor-pointer text-xl font-medium px-2"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        -
                      </div>
                      <p className="text-md font-medium">{item.amount}</p>
                      <div
                        className="cursor-pointer text-xl font-medium px-2"
                        onClick={() => handleAddToCart(item)}
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="text-xl font-bold">
                      $ {item.amount * item.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white shadow-category rounded-xl w-[400px] flex flex-col gap-3 px-8 py-6"
          >
            <label className="flex flex-col">
              <span className="text-3xl font-bold text-center pt-8 pb-5">
                ادخل بياناتك
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="اسم صاحب الاوردر؟"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                style={{ color: "#000" }}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </label>

            <label className="flex flex-col">
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="العنوان؟"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                style={{ color: "#000" }}
              />
              {errors.address && (
                <span className="text-red-500 text-sm">{errors.address}</span>
              )}
            </label>

            <label className="flex flex-col">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="رقم التليفون؟"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                style={{ color: "#000" }}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </label>

            <label className="flex flex-col">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="اكتب رسالة مع الورود؟"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                style={{ color: "#000" }}
              ></textarea>
            </label>

            <label className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                name="wantsChocolate"
                checked={form.wantsChocolate}
                onChange={handleChange}
              />
              <span className="text-md">هل ترغب في شوكولاتة؟</span>
            </label>

            <button
              type="submit"
              className="flex justify-between text-xl font-bold text-white bg-red-500 w-full rounded-xl px-5 py-3 mt-4 hover:bg-red-600 transition-colors duration-100"
            >
              {loading ? "...يتم الارسال " : "طلب اوردر"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Cart;
