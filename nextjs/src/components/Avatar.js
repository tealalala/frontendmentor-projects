// import Image from "./Image";
import Image from "next/image";

export default function Avatar({name, subtitle, imageUrl}) {
  return (
    <div className="avatar">
      <div className="image">
        <Image src={imageUrl} width='32px' height='32px' />
      </div>
      <div className="details">
        <p className="name">{name}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
