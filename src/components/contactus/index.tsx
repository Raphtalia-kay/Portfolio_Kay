const ContactUs = () => {
  return (
    <>
      <section className="h-[650px] bg-black px-32 text-white  ">
        <div className="flex flex-col items-center justify-center lg:mb-6">
          <h1 className="lg:py-[10px] lg:text-[16px]">04. What is Next?</h1>

          <div className="h-[0.5px] w-[200px] bg-gray-300 bg-opacity-50"></div>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="lg:text-[40px]">Get In Touch</h1>
          <p className="px-[60px] py-[40px] lg:text-[16px]">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <button className="w-[180px] text-black rounded-md border-[1px] hover:border-slate-100 hover:bg-black hover:text-white transition-all duration-500 bg-white  px-6 py-3 shadow-inner ">
            Say Hi
          </button>
        </div>
        <div className="">
            <p className=" text-center pt-[300px]  text-[13px]">Design built by Raphtalia K</p>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
