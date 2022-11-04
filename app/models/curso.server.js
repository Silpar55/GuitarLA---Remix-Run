export async function getCurso() {
  // const respuesta = await fetch(
  //   `https://powerful-escarpment-88216.herokuapp.com/api/curso?populate=imagen`
  // );
  const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
  return await respuesta.json();
}
