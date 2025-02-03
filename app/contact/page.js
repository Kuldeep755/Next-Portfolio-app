"use client"
import Image from "next/image";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Initialize AOS (Animate on Scroll) on component mount
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000, once: true });
    });
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center !bg-emerald-200 testBorder">
      <section
        className="bg-gray-800 pb-8 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] testBorder !h-[70%]"
        id="contact"
      >
        <div className="container px-5 pt-14">
          <h2
            className="title text-yellow-500 text-center"
            data-aos="fade-down"
          >
            Hire Me
          </h2>
          <h4
            className="subtitle text-center text-gray-300"
            data-aos="fade-down"
          >
            FOR YOUR PROJECTS
          </h4>
          <br />
          <div className="flex items-center flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
            <Image
              src={"/contact.svg"}
              width={400}
              height={400}
              alt="Contact SVG"
              data-aos="fade-right"
              className="max-w-sm mt-4 md:mt-0 md:max-w-xl md:block text-gray-950"
            />
            <div
              data-aos="fade-left"
              className="ml-4 border-2 border-yellow-700 max-w-md p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] bg-gray-950"
            >
              <div className="w-full max-w-md bg-gray-950 p-5">
                <h2 className="text-lg font-semibold text-gray-300 mb-2">
                  Contact details
                </h2>
                <address className="relative bg-gray-700 dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic flex space-x-2">
                  <div className="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
                    Name <br />
                    Email <br />
                    Phone
                  </div>
                  <div
                    id="contact-details"
                    className="space-y-2 text-yellow-600 font-medium leading-loose"
                  >
                    Kuldeep Jat <br />
                    jatkuldeep945@gmail.com <br />+91 8875522755
                  </div>
                </address>
              </div>

              <p className="leading-7 text-gray-300">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                relying on its meaning.
              </p>
              <br />
              <a
                href="mailto:test@example.com"
                className="btn !bg-yellow-700 !hover:bg-yellow-500 text-white px-6 py-2 rounded-lg"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
