import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io5";

export default function Footer() {
  return (
    <div className="bg-fuchsia-200 w-full px-8 xl:px-20 py-10">
      <div className="flex flex-col gap-8 xl:gap-0 xl:flex-row justify-between">
        {/* company info */}
        <div>
          <div className="w-28 h-20 flex justify-center items-center">
            <svg
              width="88"
              height="62"
              viewBox="0 0 88 62"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-fuchsia-900 w-10"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.4242 1.02833C52.4431 -0.652282 57.9211 -0.261194 62.653 2.11555L84.323 12.9999C87.6075 14.6497 88.9389 18.6619 87.2966 21.9615C85.6543 25.261 81.6603 26.5984 78.3757 24.9486L56.7058 14.0642C55.1285 13.272 53.3025 13.1416 51.6295 13.7018L17.8451 25.0146C11.6432 27.0914 11.8352 35.9697 18.1212 37.7739L55.3 48.4449C58.3579 49.3225 61.4017 47.016 61.4017 43.8214C61.4017 41.1657 59.2587 39.0129 56.615 39.0129H54.7525C51.0803 39.0129 48.1033 36.0223 48.1033 32.3333C48.1033 28.6443 51.0803 25.6538 54.7525 25.6538H56.615C66.6032 25.6538 74.7001 33.7877 74.7001 43.8214C74.7001 55.8915 63.1997 64.6059 51.6467 61.2899L14.4678 50.6189C-4.3899 45.2065 -4.96615 18.5714 13.6398 12.3411L47.4242 1.02833Z"
              />
            </svg>
          </div>
          <div>
            <p className="text-fuchsia-900">Streetname 13</p>
            <p className="text-fuchsia-900">3366BF, Eindhoven</p>
            <p className="text-fuchsia-900">Netherlands</p>
            <p className="text-fuchsia-900">+31611223344</p>
            <p className="text-fuchsia-900">info@companyname.nl</p>
          </div>
        </div>
        {/* seo column */}
        <div>
          <h4 className="text-fuchsia-900 mb-4">SEO Column</h4>
          <div className="flex flex-col gap-2">
            <p className="text-fuchsia-500">First page</p>
            <p className="text-fuchsia-500">Second page</p>
            <p className="text-fuchsia-500">Third page</p>
            <p className="text-fuchsia-500">Fourth page</p>
            <p className="text-fuchsia-500">Fifth page</p>
          </div>
        </div>
        <div>
          <h4 className="text-fuchsia-900 mb-4">SEO Column</h4>
          <div className="flex flex-col gap-2">
            <p className="text-fuchsia-500">First page</p>
            <p className="text-fuchsia-500">Second page</p>
            <p className="text-fuchsia-500">Third page</p>
            <p className="text-fuchsia-500">Fourth page</p>
            <p className="text-fuchsia-500">Fifth page</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-8 my-10">
        <IoLogoFacebook className="w-6 h-6 fill-fuchsia-900" />
        <IoLogoTwitter className="w-6 h-6 fill-fuchsia-900" />
        <IoLogoPinterest className="w-6 h-6 fill-fuchsia-900" />
        <IoLogoInstagram className="w-6 h-6 fill-fuchsia-900" />
        <IoLogoLinkedin className="w-6 h-6 fill-fuchsia-900" />
        <IoLogoYoutube className="w-6 h-6 fill-fuchsia-900" />
      </div>
      <div className="flex flex-col xl:flex-row justify-between">
        <p className="text-xs text-fuchsia-900 mb-4 xl:mb-0">
          © 2024 Gesundheit
        </p>
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-8">
          <p className="text-xs text-fuchsia-900">Privacy</p>
          <p className="text-xs text-fuchsia-900">Disclaimer</p>
          <p className="text-xs text-fuchsia-900">Terms and conditions</p>
        </div>
      </div>
    </div>
  );
}
