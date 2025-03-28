import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto flex flex-col lg:flex-row my-10">
      <div className="w-full lg:w-1/3">
        <h1
          className="text-3xl font-extrabold text-primary ml-5 sticky top-10"
          data-aos="fade-left"
        >
          Send us an inquiry without any obligation.
        </h1>
        <div
          className="border-b border-2 border-primary mt-10 w-[220px] ml-5"
          data-aos="fade-left"
        ></div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full lg:w-2/3 px-5 lg:px-0"
      >
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block font-semibold text-primary">Name *</label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Write your name"
              className="w-full p-2 bg-[#eee] rounded-md text-primary placeholder:text-[#9a9797]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold text-primary">
              Last Name *
            </label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Write your last name"
              className="w-full p-2 bg-[#eee] rounded-md text-primary placeholder:text-[#9a9797]"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold text-primary">Position</label>
            <input
              {...register("position")}
              placeholder="Write your job position"
              className="w-full p-2 bg-[#eee] rounded-md text-primary placeholder:text-[#9a9797]"
            />
          </div>

          <div>
            <label className="block font-semibold text-primary">
              Company *
            </label>
            <input
              {...register("company", { required: "Company name is required" })}
              placeholder="Write your company's name"
              className="w-full p-2 bg-[#eee] rounded-md text-primary placeholder:text-[#9a9797]"
            />
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold text-primary">
              E-mail Address *
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Write your e-mail address"
              className="w-full p-2 bg-[#eee] rounded-md text-primary placeholder:text-[#9a9797]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold text-primary">
              Country <span className="ml-5">Phone number *</span>
            </label>
            <div className="flex items-center gap-2">
              <select className="p-2 bg-[#eee] text-[#9a9797] rounded-md">
                <option value="+385">+385</option>
                <option value="+384">+384</option>
                <option value="+383">+383</option>
                <option value="+382">+382</option>
                <option value="+381">+381</option>
              </select>
              <input
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
                placeholder="Write your phone number"
                className="w-full p-2 bg-[#eee] rounded-md text-primary placeholder:text-[#9a9797]"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold text-primary">
              How did you learn about us?
            </label>
            <select
              {...register("source")}
              className="w-full p-2 bg-[#eee] rounded-md text-primary "
            >
              <option>Choose where you heard about our services</option>
              <option value="recomondetion">Recomondetion</option>
              <option value="online-search">
                Online Search (Google, Yahoo...)
              </option>
              <option value="advertisement">Advertisement</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-primary">
              Question or Message *
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Please write any questions you might have"
              className="w-full p-2 bg-[#eee] focus:border-primary rounded-md text-primary placeholder:text-[#9a9797]"
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("agree", { required: "You must agree to continue" })}
            />
            <label>
              I agree with being contacted regarding my message. Find more
              information in our{" "}
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
            </label>
          </div>
          {errors.agree && (
            <p className="text-red-500 text-sm">{errors.agree.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white p-3 rounded-4xl text-lg font-medium"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
