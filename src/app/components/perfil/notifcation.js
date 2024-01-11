// components/NotificationSettings.js
import { useState } from 'react';

const NotificationSettings = () => {
  const [receivePromotions, setReceivePromotions] = useState(true);

  return (
    <div className="container mx-auto mt-3">
      <h1 className="text-2xl font-serif mb-9 text-center">Configuración de Notificaciones</h1>

      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="text-center">
          <label className="mr-4" htmlFor="promotions">Recibir promociones de colecciones:</label>
        </div>
        <div className="text-center">
          <input
            type="checkbox"
            id="promotions"
            checked={receivePromotions}
            onChange={() => setReceivePromotions(!receivePromotions)}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
        </div>

        <div className="text-center">
          <label className="mr-4" htmlFor="promotions">Recibir promociones de estampados:</label>
        </div>
        <div className="text-center">
          <input
            type="checkbox"
            id="promotions"
            checked={receivePromotions}
            onChange={() => setReceivePromotions(!receivePromotions)}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
        </div>

      </div>
    </div>
  );
};

export default NotificationSettings;
