import { isMobile } from "react-device-detect";

const MobileBanner = () => {
  if (isMobile) {
    return (
      <p className="bg-blue-400 dark:bg-blue-800 top-0 left-0 w-screen text-center text-lg p-4">
        Sorry, this site doesn&apos;t work on mobile 😿
      </p>
    );
  }

  return null;
};

export default MobileBanner;
