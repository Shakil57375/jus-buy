import Image from "next/image";
import Link from "next/link";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#D35400] text-white py-12 pl-16 pr-4 flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0">
      <div className="flex flex-col space-y-4 basis-full lg:basis-1/3 items-start ">
        <div className="flex items-center">
          <Image
            src="/assets/footer_logo.png"
            alt="JusBuy Logo"
            width={268}
            height={91}
          />
        </div>
        <p className="text-sm leading-relaxed">
          Shop The Latest Trends At Our E-Commerce Store. Enjoy Fast Shipping,
          Secure Payments, And 24/7 Customer Support. Discover Unbeatable Deals
          On Fashion, Electronics, Home Essentials, And More. Shop Now!
        </p>
      </div>

      <div className="flex flex-col space-y-4 basis-full lg:basis-1/3 items-center">
        <h3 className="font-semibold text-2xl relative right-[6px]">Information</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col space-y-4 basis-full lg:basis-1/3 items-center">
        <h3 className="font-semibold text-2xl  relative right-9">Help & Support</h3>
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <MdOutlineEmail className="text-xl text-white" />
              <p className="font-medium">Email:</p>
              <p>shakil57375@gmail.com</p>
            </div>
            <p className="relative left-[5rem]">jusbuy@gmail.com</p>
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <MdOutlineLocalPhone className="text-xl text-white" />
              <p className="font-medium">Phone:</p>
              <p>+880 1814-265294</p>
            </div>
            <p className="relative left-[5rem]">(+1) (888) 785-3986</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
