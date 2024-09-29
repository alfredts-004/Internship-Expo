"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function Opportunity() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <section className="m-5 py-20" id="opportunity">
                <h1 className="heading m-8">
                    Internship  {"   "}
                    <span className="text-purple">Opportunity</span>
                </h1>
                <AnimatePresence>
                    {active && typeof active === "object" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 h-full w-full z-10"
                        />
                    )}
                </AnimatePresence>
                <AnimatePresence>   
                    {active && typeof active === "object" ? (
                        <div className="fixed inset-0 grid place-items-center z-[100]">
                            {/* Close button is removed for mobile and large screens */}
                            <motion.div
                                layoutId={`card-${active.title}-${id}`}
                                ref={ref}
                                className="md:w-[600px] w-[300px] max-w-[90%] h-auto max-h-[90%] sm:max-h-[80%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl "
                            >
                                <div className="flex items-start gap-4 p-4">
                                    <motion.div layoutId={`image-${active.title}-${id}`}>
                                        <Image
                                            priority
                                            width={80}
                                            height={80}
                                            src={active.src}
                                            alt={active.title}
                                            className="w-20 h-20 rounded-lg object-cover object-top"
                                        />
                                    </motion.div>
                                    <div className="flex flex-col">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-auto pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    ) : null}
                </AnimatePresence>

                {/* Card list in grid */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
                    {cards.map((card, index) => (
                        <motion.div
                            layoutId={`card-${card.title}-${id}`}
                            key={`card-${card.title}-${id}`}
                            onClick={() => setActive(card)}
                            className="p-4 flex items-start gap-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                        >
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={80}
                                    height={80}
                                    src={card.src}
                                    alt={card.title}
                                    className="w-20 h-20 rounded-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="flex flex-col">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.title}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </ul>
            </section>
        </>
    );
}

const cards = [
    {
        id: "internship-1",
        description: "Embedos Engineering",  // Company name
        title: "Embedded Systems Intern",
        src: "/embedos_engineering_logo.jpeg",
        ctaText: "Apply Now",
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSd37sCPuYNQ3TzXncKs2JDWm7HtFow9VmdOt48k4RC9SNZMZQ/viewform",
        content: () => {
            return (
                <p>
                    Stipend: 5000<br />
                    Location: Santacruz West<br />
                    Key Responsibilities:<br />
                    - Hardware design (analog/digital interfacing, networking OSI model).<br />
                    - Microprocessor programming, PCB design, RTOS, Linux, Kernel programming.<br />
                    - Programming languages: Python, C, C++ for embedded systems. Experience with debugging embedded devices.
                </p>
            );
        },
    },
    {
        id: "internship-2",
        description: "Embedos Engineering",  // Company name
        title: "Web App Dev Intern",
        src: "/embedos_engineering_logo.jpeg",
        ctaText: "Apply Now",
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSd37sCPuYNQ3TzXncKs2JDWm7HtFow9VmdOt48k4RC9SNZMZQ/viewform",
        content: () => {
            return (
                <p>
                    Stipend: 5000<br />
                    Location: Santacruz West<br />
                    Key Responsibilities:<br />
                    - Backend development using Node.js or Flask.<br />
                    - Frontend development: React.js, Vue.js, HTML, CSS, JavaScript.
                </p>
            );
        },
    },
    {
        id: "internship-3",
        description: "Embedos Engineering",  // Company name
        title: "Mobile App Dev Intern",
        src: "/embedos_engineering_logo.jpeg",
        ctaText: "Apply Now",
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSd37sCPuYNQ3TzXncKs2JDWm7HtFow9VmdOt48k4RC9SNZMZQ/viewform",
        content: () => {
            return (
                <p>
                    Stipend: 5000<br />
                    Location: Santacruz West<br />
                    Key Responsibilities:<br />
                    - Mobile app development using Flutter.
                </p>
            );
        },
    },
    {
        id: "internship-4",
        description: "Embedos Engineering",  // Company name
        title: "Cloud Engineering Intern",
        src: "/embedos_engineering_logo.jpeg",
        ctaText: "Apply Now",
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSd37sCPuYNQ3TzXncKs2JDWm7HtFow9VmdOt48k4RC9SNZMZQ/viewform",
        content: () => {
            return (
                <p>
                    Stipend: 5000<br />
                    Location: Santacruz West<br />
                    Key Responsibilities:<br />
                    - Experience with cloud platforms: Azure, AWS, Digital Ocean.
                </p>
            );
        },
    },
    {
        id: "internship-5",
        description: "Embedos Engineering",  // Company name
        title: "Industrial Comm. Intern",
        src: "/embedos_engineering_logo.jpeg",
        ctaText: "Apply Now",
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSd37sCPuYNQ3TzXncKs2JDWm7HtFow9VmdOt48k4RC9SNZMZQ/viewform",
        content: () => {
            return (
                <p>
                    Stipend: 5000<br />
                    Location: Santacruz West<br />
                    Key Responsibilities:<br />
                    - Proficiency with industrial protocols like Modbus, CAN Bus, OPC UA, CODESYS, BACnet.
                </p>
            );
        },
    },
    {
        id: "internship-6",
        description: "Embedos Engineering",  // Company name
        title: "Version Control Specialist",
        src: "/embedos_engineering_logo.jpeg",
        ctaText: "Apply Now",
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSd37sCPuYNQ3TzXncKs2JDWm7HtFow9VmdOt48k4RC9SNZMZQ/viewform",
        content: () => {
            return (
                <p>
                    Stipend: 5000<br />
                    Location: Santacruz West<br />
                    Key Responsibilities:<br />
                    - Understanding of version control systems like Git, Bitbucket.<br />
                    - Experience with open-source software documentation and versioning.
                </p>
            );
        },
    },
];
