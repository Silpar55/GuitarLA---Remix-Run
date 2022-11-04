import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de guitarras, blog de musica",
  };
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preload", href: imagen, as: "image" },
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel
            dolorem impedit corrupti, similique tempore fugiat at fuga animi
            quod corporis odio exercitationem rem distinctio quis. Enim
            explicabo unde suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel
            dolorem impedit corrupti, similique tempore fugiat at fuga animi
            quod corporis odio exercitationem rem distinctio quis. Enim
            explicabo unde suscipit? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorem officiis quas a minus consequuntur
            laudantium velit? Consectetur obcaecati quo saepe natus, impedit
            sunt eum laudantium, debitis magni hic soluta eos?
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
