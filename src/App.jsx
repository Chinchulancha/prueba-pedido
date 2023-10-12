import { useState } from "react";

import burguersJSON from "./json/burguers.json";
import dessertsJSON from "./json/desserts.json";

import ShowFood from "./components/ShowFood";

function App() {
  const [cart, setCart] = useState([]);

  let textWSP = "";

  let finalWSP = "";

  const getFinalText = () => {
    cart.forEach((item) => {
      const name = item.name;
      const quantity = item?.quantity || null;

      if (quantity !== null) {
        textWSP = textWSP + `${name}: ${quantity} - `;
      } else {
        textWSP = textWSP + `${name} - `;
      }

      textWSP = textWSP.replace(/ /g, "%20");
    });

    finalWSP = `https://api.whatsapp.com/send?phone=5493412118620&text=Revisar%20Pedido%20|%20${textWSP}Muchas%20Gracias!`;

    console.log(finalWSP);

   
      // Add the following code to open the WhatsApp link in a new tab on mobile:
      window.open(finalWSP, "_blank");

      setCart([])
   
  };

  return (
    <div className="flex flex-col items-center pb-5">
      <section className="flex flex-col gap-y-5">
        <ShowFood
          json={burguersJSON}
          title={"Burguers"}
          cart={cart}
          setCart={setCart}
        />

        <ShowFood
          json={dessertsJSON}
          title={"Postres"}
          cart={cart}
          setCart={setCart}
        />
      </section>

      {finalWSP}

      <button
        onClick={getFinalText}
        className="bg-green-600 py-3 px-20 mt-5 font-bold"
      >
        Pedir
      </button>
    </div>
  );
}

export default App;
