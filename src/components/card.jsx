import { useEffect, useState } from "react";

function Card() {
  const [data, setData] = useState([]);

  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main>
        {data.map((el, index) => {
          return (
            <div className="car">
              <div className="DivImg">
                <img src={el.photo} key={index}></img>
              </div>
              <div className="DivText">
                {el.superHost ? (
                  <p className="parr1">
                    <strong>SuperHost</strong> {el.type}
                    {" " + el.beds + " beds"}
                    {" " + el.rating}
                    <span class="material-symbols-outlined">star</span>
                    <h3 className="tit">
                      <strong>{el.title}</strong>
                    </h3>
                  </p>
                ) : (
                  <p className="parr2">
                    {el.type}
                    {" " + el.beds + " beds"}
                    {" " + el.rating}
                    <span class="material-symbols-outlined">star</span>
                    <h3 className="tit">
                      <strong>{el.title}</strong>
                    </h3>
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default Card;
