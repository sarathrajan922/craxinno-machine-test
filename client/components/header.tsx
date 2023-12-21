/* eslint-disable @next/next/no-img-element */


const Header = () => {
    return (
      <header className="bg-white top-4 p-3 border-y flex w-full mb-0 items-center justify-between ">
        <div className="w-40 cursor-pointer">
          {/* img */}
          <img
            src="https://res.cloudinary.com/dk4darniv/image/upload/v1703006313/craxinno/craxinno_tos3w5.png"
            alt=""
          />
        </div>
        <div className="text-black w-40 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            data-slot="icon"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      </header>
    );
  };
  
  export default Header;