const ShowFood = ({ json, title, cart, setCart }) => {
    const addToCart = ({ name }) => {
        // Verificar si el producto esta en el carrito
    
        const existingProduct = cart.find((item) => item.name === name);
    
        if (existingProduct) {
          if (!existingProduct.quantity) {
            existingProduct.quantity = 1;
          }
    
          existingProduct.quantity = existingProduct.quantity + 1;
    
          return;
        }
    
        // Agrega el nuevo elemento al carrito
        cart.push({ name });
    
        // Actualiza el estado del carrito
        setCart(cart);
      };
    

  return (
    <div className="w-full p-9 flex flex-col items-center">
      <h2 className="text-2xl md:text-5xl mb-10">{title}</h2>

      <div className="px-[10%] md:px-0 flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-10">
        {json.map(({ name, img }, index) => (
          <div key={index}>
            <section className="flex flex-col">
              <h3 className="text-center">{name}</h3>
              <img src={img} alt={name} width="240" />

              <button
                onClick={() => addToCart({ name })}
                className="w-[70%] m-auto text-center bg-red-500 py-2 rounded"
              >
                Agregar
              </button>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowFood;
