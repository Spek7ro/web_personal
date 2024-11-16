import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const sociales = [
  { icon: <FaGithub />, path: "https://github.com/Spek7ro" },
  { icon: <FaLinkedin />, path: "#" },
  { icon: <FaTwitter />, path: "#" },
];

const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {sociales.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyle}>
          {item.icon}
        </Link>;
      })}
    </div>
  );
};

export default Social;
