import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#D35400] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0">
        
        <div className="flex flex-col space-y-4 w-full lg:w-1/3">
          <div className="flex items-center">
            <Image
              src="/assets/footer_logo.png" 
              alt="JusBuy Logo"
              width={150}
              height={50}
            />
          </div>
          <p className="text-sm leading-relaxed">
            Shop The Latest Trends At Our E-Commerce Store. Enjoy Fast Shipping, Secure Payments, 
            And 24/7 Customer Support. Discover Unbeatable Deals On Fashion, Electronics, 
            Home Essentials, And More. Shop Now!
          </p>
        </div>
        
        <div className="flex flex-col space-y-4 w-full lg:w-1/3">
          <h3 className="font-semibold text-lg">Information</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact Us</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col space-y-4 w-full lg:w-1/3">
          <h3 className="font-semibold text-lg">Help & Support</h3>
          <div>
            <p className="font-medium">Email:</p>
            <p>shakil57375@gmail.com</p>
            <p>jusbuy@gmail.com</p>
          </div>
          <div>
            <p className="font-medium">Phone:</p>
            <p>(+1) (888) 750-6866</p>
            <p>(+1) (888) 785-3986</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
