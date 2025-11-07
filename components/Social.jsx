import Link from "next/link";
import { FaLinkedin, FaGithub, FaCloud  } from "react-icons/fa";

const sociales = [
  { icon: <FaGithub />, path: "https://github.com/Spek7ro" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/cristian-alvarado-712065209/" },
  { icon: <FaCloud  />, path: "https://www.skills.google/public_profiles/579dd235-1ecd-468b-9d63-0514088676d4" },
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
