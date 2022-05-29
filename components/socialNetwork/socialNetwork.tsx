// React Js
import React from "react";

// Styles
import styles from "../../styles/socialNetwork/socialNetwork.module.css";

// Main component
let SocialNetwork = () => {
  return (
    <div className={styles.SocialNetworkWrapper}>
      <a
        href="https://www.facebook.com/Developer-LuisF3-231261368847638"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.SocialIconFacebook}></div>
      </a>
      <a
        href="https://www.instagram.com/developer_luisf3/?hl=es"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.SocialIconInstagram}></div>
      </a>
      <a
        href="https://www.tiktok.com/@developerluisf3"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.SocialIconTikTok}></div>
      </a>
      <a
        href="https://github.com/DeveloperLuisF3"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.SocialIconGitHub}></div>
      </a>
      <a
        href="https://www.youtube.com/channel/UCUe93GaLtWWz_c2vbhlFP9A"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.SocialIconYouTube}></div>
      </a>
    </div>
  );
};

export default SocialNetwork;
