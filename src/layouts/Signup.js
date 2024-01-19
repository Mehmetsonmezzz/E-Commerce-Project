import axios from "axios";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });
  const history = useHistory();
  // const onFormSubmit = (formData) => {
  //   console.log(formData);
  // };
  const onFormSubmit = async (formData) => {
    try {
      const {
        passwordConfirmation,
        storeName,
        storeBankAccount,
        storePhone,
        storeTaxID,
        role_id,
        ...rest
      } = formData;
      const storeData =
        role_id === "store"
          ? {
              name: formData.storeName,
              phone: formData.storePhone,
              tax_no: formData.storeTaxID,
              bank_account: formData.storeBankAccount,
            }
          : {};

      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/signup",
        { ...rest, store: storeData }
      );

      if (response.status === 201) {
        console.log("Kayıt başarıyla tamamlandı");
        alert(
          "You need to click the link in the email to activate your account!"
        );
        // Yönlendirme işlemi
        history.push("/previous-page");
      } else {
        console.error("Kayıt sırasında bir hata oluştu");
        alert("An error occurred during registration");
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
      alert("An error occurred during registration");
    }
  };

  return (
    <div className=" bg-[#252B42] h-screen flex items-center justify-center border border-solid border-blue-500 p-4 ">
      <form
        className="flex flex-col w-1/3 items-left text-center border border-solid border-blue-500 p-4 gap-2"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <label className="font-bold text-[#737373]">Name</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          {...register("name", {
            required: "Name is required",

            minLength: { value: 3, message: "min 3 character" },
          })}
          placeholder="Name"
        />
        {errors["name"] && (
          <p
            role="alert"
            className="ml-3 text-sm font-bold text-red-600 tracking-wide"
          >
            *{errors["name"].message}
          </p>
        )}
        <label
          className="block mb-2 text-sm font-bold text-[#737373]"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="Email"
          {...register("email", {
            required: "Please enter your email!",
            pattern: {
              value:
                /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email address!",
            },
          })}
        />
        {errors.email && (
          <p role="alert" className="text-sm text-red-500">
            *{errors.email.message}
          </p>
        )}
        <label className="font-bold text-[#737373]">Password</label>
        <input
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          {...register("password", {
            required: { value: true, message: "password required" },
            min: 8,
            pattern: {
              value:
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-]).+$/,
              message:
                "Password needs to be min 8 character including numbers, lower case, upper case and special chars!",
            },
          })}
          placeholder="Enter your password"
        />{" "}
        {errors.password && (
          <p role="alert" className="text-sm text-red-500">
            *{errors.password.message}
          </p>
        )}
        <label className="font-bold text-[#737373]">Confirm Password</label>
        <input
          id="passwordConfirmation"
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="Enter your password"
          {...register("passwordConfirmation", {
            validate: (value) => {
              return watch("password") === value || "Password does not match.";
            },
          })}
        />
        {errors["passwordConfirmation"] && (
          <p
            role="alert"
            className="ml-3 text-sm font-bold text-red-600 tracking-wide"
          >
            {errors["passwordConfirmation"].message}
          </p>
        )}
        <label className="font-bold text-[#737373]">Role</label>
        <select
          {...register("role_id", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        >
          <option value="">Select...</option>
          <option value="admin">Admin</option>
          <option value="store">Store</option>
          <option value="customer">customer</option>
        </select>
        {watch("role_id") === "store" && (
          <>
            <label className="font-bold text-[#737373]">Store Name</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              {...register("storeName", {
                required: { value: true, message: "Store name is required!" },
                minLength: { value: 3, message: "min 3 character" },
              })}
            />
            {errors.storeName && (
              <p role="alert" className="text-sm text-red-500">
                *{errors.storeName.message}
              </p>
            )}
            <label className="font-bold text-[#737373]">Store Phone</label>
            <input
              type="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              {...register("storePhone", {
                required: { value: true, message: "Store phone is required!" },
              })}
            />{" "}
            {errors.storePhone && (
              <p role="alert" className="text-sm text-red-500">
                *{errors.storePhone.message}
              </p>
            )}
            <label className="font-bold text-[#737373]">Store Tax ID</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              {...register("storeTaxID", {
                required: {
                  value: true,
                  message: "Store tax number is required!",
                },
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: "Please enter valid tax ID!",
                },
              })}
            />
            {errors.storeTaxID && (
              <p role="alert" className="text-sm text-red-500">
                *{errors.storeTaxID.message}
              </p>
            )}
            <label className="font-bold text-[#737373]">
              Store Bank Account
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              {...register("storeBankAccount", {
                required: {
                  value: true,
                  message: "Iban required'",
                },
                pattern: {
                  value:
                    /^TR\d{2}\s?(\d{4}\s?){1}(\d{1})(\d{3}\s?)(\d{4}\s?){3}(\d{2})\s?$/,
                  message: "Please enter valid IBAN!",
                },
              })}
            />{" "}
            {errors.storeBankAccount && (
              <p role="alert" className="text-sm text-red-500">
                *{errors.storeBankAccount.message}
              </p>
            )}
          </>
        )}
        <button type="submit" disabled={!isValid} className=" bg-blue-500 h-12">
          Send
        </button>
      </form>
    </div>
  );
};

export default Signup;
