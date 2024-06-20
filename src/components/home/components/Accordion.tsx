"use client";

import { Accordion } from "flowbite-react";
import { useKhodam } from "../hooks/useKhodam";


export function CustomAccordion() {
    const { myKhodam, user } = useKhodam()
    console.log(user);


    return (


        <Accordion>
            <Accordion.Panel>
                <Accordion.Title>{user} kamu memiliki khodam  {myKhodam.name}</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        khodam {myKhodam.description}
                    </p>

                </Accordion.Content>
            </Accordion.Panel>

        </Accordion>
    );

}
