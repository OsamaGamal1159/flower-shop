import React from "react";
import bg_contact from "../assets/bg-contact.jpg";

function Contact() {
  return (
    <div>
      <div className="mb-20 mx-4 md:mx-40 gap-16 text-gray-800 flex flex-col md:grid md:grid-cols-2 md:items-center">
        <div
          className="w-full h-[300px] md:h-[520px] bg-cover bg-center bg-no-repeat bg-red-300 rounded-2xl"
          style={{ backgroundImage: `url(${bg_contact})` }}
        ></div>
        <div className="flex flex-col justify-center gap-5 bg-red-100 shadow-category p-5 md:pl-10 h-auto md:h-[400px] rounded-2xl">
          <h3 className="text-4xl md:text-5xl font-bold text-red-400">
            Contact Us
          </h3>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Our Store</h3>
            <p>
              250 Street,
              <br />
              Maadi, Degla Square,
              <br />
              near Thakanat El Maadi Metro Station, in front of Crédit Agricole
              Egypt Bank.
            </p>
            <p>
              Tel: ⁦+20 10 30152903⁩
              <br />
              Email: ahemdFlowers@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
