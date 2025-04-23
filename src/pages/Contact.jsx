const Contact = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>

      <p className="text-center text-gray-600 mb-12">
        Have questions? We’re here to help. Reach out to our support team and we'll get back to you as soon as possible.
      </p>

      <form className="space-y-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
