import { CustomButton } from "@/components/custom-components/CustomButton";
import { Header } from "@/components/custom-components/Header";
import Dashbaord from "@/assets/dashboard.png";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-2/3 mx-auto p-5 my-10">
        <div className="text-center">
          <h1 className="font-extrabold text-4xl">
            Connect with talents from Nepal
          </h1>
          <p className="w-2/3 mx-auto text-gray-500 py-2">
            Explore skilled talents and professionals, delivering high-quality
            solutions tailored to your needs. Elevate your experience with
            top-tier collaboration and services.
          </p>
          <CustomButton>Browse talents</CustomButton>
        </div>
        <div className="border rounded-md my-6 shadow-md overflow-hidden">
          <img src={Dashbaord} alt="dashboard picture" />
        </div>
      </div>

      <div className="w-2/3 mx-auto p-5 my-10">
        <h2 className="font-bold text-xl mb-6">Browse talents by category</h2>
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="px-7 py-5 border rounded-md hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out ">
            Design & Creative
          </div>
          <div className="px-7 py-5 border rounded-md hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out ">
            Sales & Marketing
          </div>
          <div className="px-7 py-5 border rounded-md hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out ">
            Finance & Accounting
          </div>
          <div className="px-7 py-5 border rounded-md hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out ">
            Engineering & Architecture
          </div>
          <div className="px-7 py-5 border rounded-md hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out ">
            Admin & Customer Support
          </div>
          <div className="px-7 py-5 border rounded-md hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out ">
            Writing & Translation
          </div>
          <div className="px-7 py-5 border rounded-md hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out ">
            Development & IT
          </div>
          <div className="px-7 py-5 border rounded-md hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out ">
            AI Services
          </div>
        </div>
      </div>

      <div className="w-2/3 mx-auto my-10 flex gap-2">
        <div className="p-5 bg-slate-50 rounded-xl">
          <h2 className="font-semibold text-3xl mb-6 ">For Client</h2>
          <p className="my-6">
            Meet clients you’re excited to work with and take your career or
            business to new heights.
          </p>
          <CustomButton>Find talents</CustomButton>
        </div>

        <div className="bg-[#0042C6] w-1/2 rounded-xl"></div>
      </div>

      <div className="w-2/3 mx-auto my-10 flex gap-2">
        <div className="bg-[#0042C6] w-1/2 rounded-xl"></div>
        <div className=" bg-slate-50 p-5 rounded-xl">
          <h2 className="font-semibold text-3xl mb-6">For Freelancers</h2>
          <p className="my-6">
            Work with the largest network of independent professionals and get
            things done—from quick turnarounds to big transformations.
          </p>
          <CustomButton>Find clients</CustomButton>
        </div>
      </div>

      <footer className="w-2/3 mx-auto p-5 my-10 rounded-xl bg-[#0042C6] text-white">
        <div className="flex justify-between">
          <div>
            <h2 className="my-6">For Clients</h2>
            <ul>
              <li>How to hire</li>
              <li>Find talents</li>
              <li>Contracts</li>
            </ul>
          </div>
          <div>
            <h2 className="my-6">For Freelancer</h2>
            <ul>
              <li>How to find work</li>
              <li>Find clients</li>
              <li>Contracts</li>
            </ul>
          </div>
          <div>
            <h2 className="my-6">Resources</h2>
            <ul>
              <li>About us</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div>
            <h2 className="my-6">Resources</h2>
            <ul>
              <li>About us</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Blogs</li>
            </ul>
          </div>
        </div>

        <div className="my-6">© 2024 Karyathalo</div>
      </footer>
    </>
  );
}
