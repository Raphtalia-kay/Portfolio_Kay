const ContactUs = () => {
  return (
    <>
      <section id="contact" className=" bg-black px-[30px] sm:px-[100px] md:px-[120px] py-[20px] sm:py-[50px] text-white  ">
        <div className="flex flex-col items-center justify-center lg:mb-6">
          <h1 className="lg:pb-[6px] sm:text-[20px] md:text-[24px] lg:text-[26px]">05. What is Next?</h1>

          <div className="h-[0.5px] w-[200px] bg-gray-300 bg-opacity-50"></div>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center text-center sm:pt-[14px] md:pt-[10px]">
          <h1 className="sm:text-[24px] md:text-[30px] lg:text-[40px]">Get In Touch</h1>
          <p className="px-[8px] lg:px-[60px] py-[26px] md:py-[40px] text-[14px] lg:text-[16px]">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <button className="w-[100px] rounded-md bg-white px-[2px] py-[4px] text-[13px] text-black shadow-inner hover:bg-black hover:text-white hover:outline-dashed hover:outline-2 hover:outline-zinc-700 md:w-[140px] md:px-4 md:py-2 md:text-[12px] lg:w-[180px] lg:px-6 lg:py-3 lg:text-[14px]">
            Say Hi
          </button>
        </div>
        <div className="">
            <p className=" text-center pt-[200px] pb-[20px] text-[12px]  md:text-[13px]">Design built by Raphtalia K</p>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
