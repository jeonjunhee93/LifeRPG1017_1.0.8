
import React, { useState } from 'react';

const LifeRPG = () => {
  const [equippedWeapon, setEquippedWeapon] = useState(null);

  const handleEquip = () => {
    setEquippedWeapon('/public/images/weapon_common.png');
  };

  return (
    <div style={{ position: 'relative', width: '300px' }}>
      <img
        src="/public/images/knight.png"
        alt="silhouette"
        style={{ width: '100%' }}
      />
      {equippedWeapon && (
        <img
          src={equippedWeapon}
          alt="weapon"
          style={{
            position: 'absolute',
            top: '50%',
            left: '60%',
            width: '60px',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      <button onClick={handleEquip}>Equip Weapon</button>
    </div>
  );
};

export default LifeRPG;
