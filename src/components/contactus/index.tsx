const ContactUs = () => {
  return (
    <>
      <section className="h-[1200px] bg-black px-32 text-white">
        <div className="flex flex-col items-center justify-center lg:mb-6">
          <h1 className="lg:py-[10px] lg:text-[16px]">04. What is Next?</h1>

          <div className="h-[0.5px] w-[200px] bg-gray-300 bg-opacity-50"></div>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="lg:text-[28px]">Get In Touch</h1>
          <p className="px-[60px] py-[30px] lg:text-[16px]">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <button className="w-[180px] rounded-md bg-black bg-opacity-10 px-6 py-3 shadow-2xl">
            Say Hi
          </button>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
