"use client";

import React from "react";

import { companies } from "@/data";

const Companies = () => {
  return (
    <section id="testimonials" className="py-20">

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-8"
                />
                <p className="md:w-24 w-20 text-center">{company.name}</p>
              </div>
            </React.Fragment>
          ))}
      </div>
    </section>
  );
};

export default Companies;
