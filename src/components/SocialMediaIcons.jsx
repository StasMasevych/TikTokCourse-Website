import { SocialIcon } from 'react-social-icons';

const SocialMediaIcons = () => {
  return (
    <div className="my-10 flex justify-center gap-7 md:justify-start">
      <div
        className="transition duration-500 hover:opacity-50"
        /*  href="https://www.linkedin.com" */
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon
          network="tiktok"
          url="https://www.tiktok.com/@xomaa666"
          style={{ height: 46, width: 46 }}
        />
      </div>
      <div
        className="transition duration-500 hover:opacity-50"
        /* href="https://www.twitter.com" */
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon
          network="instagram"
          url="https://www.instagram.com/lollipop_beauty_uty/"
          style={{ height: 46, width: 46 }}
        />
      </div>
      {/* <div
        className="transition duration-500 hover:opacity-50"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon
          network="facebook"
          url="https://www.tiktok.com/@xomaa666"
          style={{ height: 46, width: 46 }}
        />
      </div> */}
      <div
        className="transition duration-500 hover:opacity-50"
        /*  href="https://www.instagram.com" */
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon
          network="telegram"
          url="https://t.me/homushkaa"
          style={{ height: 46, width: 46 }}
        />
      </div>
    </div>
  );
};

export default SocialMediaIcons;
