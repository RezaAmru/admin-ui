import React, { useState } from "react";

function UserCard(props) {
  const { name, email, street, city, ...rest } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div className="rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md">
      <h2 className="mb-2 text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {street},{city}
      </p>

      {/* Menampilkan data tambahan dari rest */}
      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600">
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}

      <button
        type="button"
        className={`mt-4 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors ${
          clicked ? "bg-green-400" : "bg-gray-600"
        }`}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default UserCard;
