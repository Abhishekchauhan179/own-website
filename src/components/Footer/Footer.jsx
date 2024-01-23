import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAywMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcCAwYIBAX/xABEEAACAQMCAwUDCQMJCQAAAAAAAQIDBBEFIQYSMQdBUWGBEyJxCBQWMkJSkaGxksHSIzNVVoKUoqPwFxgkRIOywtHx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKP+AAAAAAAAAAAExjKTSissjuybfacsOWntnq+8DGpT9njL37/IwGc9WAAAAAAAAAAAf5ACWnF4ZD2JbbeWAy9iAAAAAAEtJRT8QIAAAAAAF1WegfV46AAAABK6rzPo1CxudNu6tnf0J0Lmk8TpT2lF4zv6MD5gWdo/YxqusaXa6jZaxpk6F1TU6b/lOj/s9fLuPt/2Ca9/S+mf5n8IFSAtv/YJr39L6Z/mfwmqt2DcSR/mdS0mp4qU6kX/ANjAqkI6fiPgDibhtOepaZU+br/mKLVSn6uP1fVI5yNPm37ugGEIufQ3R5YQ97fP5kbUcJd5qk23kCHjOwAAABAAGAAAAAAAAAAAAAEpZz5bgd92L8LriLi2lcXMOax01q4q5W0p59yPq1n4Rx3nYfKE4VxKhxNaQ64o3eF1+7L934Fg9lvDEeF+Eba3nFfOrhe3uJL70l09Fheh0OuaXb61pF1pt3FOjcU3B+XmBT/yeuKU1ccMXc1lZuLPP+OH/l+0Xeuh48ktR4L4txF+zvtNucxb6PD/AEktvgy1ofKBp8q5+Gp5xvi9X8AF3ApP/eBof1bq/wB8X8B9Ondvmm1blQ1HRLq2pN49pSrKry+bWI/lkC4JxjKEoyinFrDTWUylO1zszpUrOvr3DlH2fs053VpBe7y9XOK7vNFxaZf2uqWNvfWFeNe1rx56dSHSSPqmouElKKcWsNNZygPEMt9+4g6XtG0BcNcYajptOOLdVPa2+2F7OfvRXpnl9DmgAAAAAAAAABlCMpdMYW+4GIN8cUo5aUll7PvNLay8LCfcBAAAAAAM7YJX+sF2av2Xuh2S27jbpa3bZva3urnfMvepbLO0cbfeiB3PZBxT9JeFKSrz5r6yxQrp9Xj6svVfnk7pdDyn2T8VfRXi23q3FXl0+8aoXWXtGL+rP+y98+HN4nqxdAKP+UPwu/8AhuJrSnssW93hdPuSf6fgUee0de0q31zR7zS7yObe6pOnLxWejXmnhr4Hj7XNKuND1e70u7jiva1XCT+94NeTWGviB+eFI7DS+zXirV9Ot9QsNPjVtriHNSmq8Vlfjt8D9Kx7G+MbmvGnWtKFtTb96rVrxaj6LLYHe/JuvLmpomr2dVt21C4hKll9HJPmS/ZT9S4X0Of4H4WteENBo6XaTdWSk6levJJOrUeMyx3LZJLuSXXq+gfQDzn8oyEVxrZST96WnQyv+pU/16FVnddtWsQ1jj++9jKMqNlGNpGS73HLl/jlJehwoDIyAAAHeABmqcsKWMI2vCeOalttutwNUKbnu3sbJONJOOMvHVmMqq5eWHd49xrbz1APfcgAAAANlOCfvTliPf4ipU5o8sI4iax0AsLsU4W+kHFULu6p81jpuK089J1PsR/Hf08z044xnBxkuaLWGmuqKw7MdV4R4V4Tt7WrxBpivav8tdP5xHPO+7r3LC9Drvp7wl/WPTP7xH/2B5z7UeGHwvxbc21OGLS4ft7d9Pdb3Xo9i9Ox7if6ScJUYV6nNe2OKFbPWSX1Zeq/Q5ftm1Dhbibhj22n67ptXUrGXtKMIXEeapF7Sit933+nmVz2R8Trhri6hKtPlsr3FC48Fn6svR/qB6nbeVhMpT5QnC3NC34ltKb5o4o3WPD7Mv3F2xacU00011Rx3azqllpfA+o/PoRqK4h7GlSb+vN9Pw6gV/8AJ54oa+c8M3dTbe4s8vp9+K/KX7ReR4t0PVLjRtXtNStJ8te2qqpF+OO79T0JHtt4TdpGrUd57ZxTlRjQbafhnoBZr3Rwfajx5Q4S0mdC2qQnrFxHFvTz/Np/bl8O7xK/4p7dLy4pSocNWLtFLb51dYlUXwgvdT822vIqS+vLi/uatzeV6levVlzVKtSXNKb8WBqqy58zlNylJ5k5PLb72awAAAXVeIBG6nSw8yx4rJMYRhiUtn1Nc6jk+gGUqn2eq8TUAAAAAAAGsdQS3kgAAABOCAAJWMbkAD1H2OcV/SXhWnTuanNf2DVCvl7yX2J+q2+KZU/blxStb4memWtTms9Nbp7dJ1ftP06ficpwbxbqHCN/Xu9Oabr206E4Sfu5a92WPGMsPz3XefhSqSqSlOrJznJ5blu2+9gYGVODk8d3e/AxXXc2zqprkguWH5sDW0lJpPK7mQAAAJwBAAAlt97yQAAAAAAAAAAAAAzjBtZ6Lx8TKFLbM9vAidTuiseKAmo4xhyd5qDAAAAAAAAAAAzhTct8pLxAxjFt4X/w2xUYxy+jDao+79rxNTeW/MA+uxAAAAmPXcCAS+pAGU48s+XOfMxAAAAAboQUfek1t3YNO6ZLbaS7l0AzqVHJ7PY1gAAAt2AAAAAAAABsp03PdvCMnOMFiG/7jUpNZw8Z6kAMgAAAAAAAAAAAAAAAmTyyAAABmoNptdF3gY4YTx0Ns3COY9/kzSAAAAAACckAAAAAAABvIAAAAAAAAAAAAAABlFJzwbJS91bL8CABrb3IAAAACUtmQAAAAAAAHtgAAAAAJQAB9SAAP//Z"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/abhishekchauhan179/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024
            <a
              href="https://myporttfolio.netlify.app/"
              className="hover:underline"
            >
              <span> Abhishek Chauhan</span>
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link
              to="https://www.facebook.com/profile.php?id=100006883844130"
              className="text-gray-500 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </Link>
            
            <Link
              to="https://github.com/Abhishekchauhan179/"
              className="text-gray-500"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link to="www.linkedin.com/in/abhishek-chauhan-46b704ab" className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              <span className="sr-only">LinkedIn account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
