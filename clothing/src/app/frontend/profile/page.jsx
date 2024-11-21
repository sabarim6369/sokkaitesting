import { FaInstagram, FaFacebookF, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Profile = () => {
  return (
    
    <div className="min-h-screen flex flex-col bg-gray-50 pt-16"> 
      <main className="flex-grow flex flex-col items-center w-full px-4 sm:px-8">
        <h1 className="text-3xl font-bold mt-12 mb-8 tracking-wide text-gray-800 text-center">
          PROFILE
        </h1>

        <section className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 sm:p-10">
          <div className="flex flex-col md:flex-row justify-between items-center border-b pb-6 md:pb-8 mb-6 md:mb-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <img
                src="/profile-pic.png" 
                alt="User Avatar"
                className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-gray-300"
              />
              <div className="text-center md:text-left text-gray-800">
                <h2 className="text-xl sm:text-2xl font-bold">Eswar Nandha A</h2>
                <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">
                  6369489951
                </p>
                <p className="text-sm sm:text-base text-gray-500">
                  eswaranand1999@gmail.com
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-4 md:mt-0">
              <button className="py-2 px-6 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100">
                EDIT PROFILE
              </button>
              <button className="py-2 px-6 text-sm font-semibold text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-200">
                View Address
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="py-3 text-gray-800 font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg text-center shadow">
              Orders
            </button>
            <button className="py-3 text-gray-800 font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg text-center shadow">
              Cancelled
            </button>
            <button className="py-3 text-gray-800 font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg text-center shadow">
              About
            </button>
            <button className="py-3 text-gray-800 font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg text-center shadow">
              Contact
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-8 mt-8">
        <div className="flex flex-col items-center">
          {/* Footer Brand */}
          <h2 className="text-2xl font-semibold mb-2">SOKKAI</h2>
          <p className="text-gray-400 text-sm mb-6 text-center">Men Made Better</p>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
