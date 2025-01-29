import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const sociales = [
  { icon: <FaGithub />, path: "https://github.com/Spek7ro" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/cristian-alvarado-712065209/" },
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
