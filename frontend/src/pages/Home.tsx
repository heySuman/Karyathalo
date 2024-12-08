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
        <div className="border rounded my-6">
          <img src={Dashbaord} alt="dashboard picture" />
        </div>
      </div>
    </>
  );
}
