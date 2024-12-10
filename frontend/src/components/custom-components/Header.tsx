import { NavLink } from "react-router";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <>
      <header className="lg:w-2/3 m-auto p-5 sticky top-0 border-b bg-white">
        <nav className="flex items-center gap-12">
          <NavLink to={"/"} className={"text-2xl font-bold text-[#0042C6]"}>
            Karyathalo
          </NavLink>

          <ul className="hidden sm:flex items-center justify-center gap-4">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-md underline underline-offset-4 text-[#0042C6]"
                  : "text-md"
              }
            >
              Find talents
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "text-md underline underline-offset-4 text-[#0042C6]"
                  : "text-md"
              }
            >
              Find work
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "text-md underline underline-offset-4 text-[#0042C6]"
                  : "text-md"
              }
            >
              Why Karyathalo
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "text-md underline underline-offset-4 text-[#0042C6]"
                  : "text-md"
              }
            >
              FAQs
            </NavLink>

            <NavLink to={"/about"}>
              <Button
                className="w-[100px] text-md font-normal rounded-3xl text-[#0042C6] hover:text-[#0042C6]"
                variant={"outline"}
              >
                Login
              </Button>
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};
