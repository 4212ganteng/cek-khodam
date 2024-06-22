"use client";

import { Accordion } from "flowbite-react";
import { Khodam } from "../type/khodam";




export function CustomAccordion({ userName, name, description }: Khodam) {



    return (


        <Accordion className="my-10 overflow-y-auto">
            <Accordion.Panel>
                <Accordion.Title className="capitalize">{userName} kamu memiliki khodam  <span className="text-lg font-serif font-bold">{name}</span></Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 ">
                        khodam {description}
                    </p>

                </Accordion.Content>
            </Accordion.Panel>

        </Accordion>
    );

}
