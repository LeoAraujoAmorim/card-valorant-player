 "use client";

import AgentsInfo from "@/types/AgentsInfo";
import ValorantApiRequest from "@/types/ValorantApiRequest";
import Image from "next/image";
import { useEffect, useState } from "react"




export default function Roles() {
    const [valorant, setValorant] = useState<AgentsInfo[]>([]);
    const topAgents: string[] = ["117ed9e3-49f3-6512-3ccf-0cada7e3823b","8e253930-4c05-31dd-1b6c-968525494517","22697a3d-45bf-8dd7-4fec-84a9e28c69d7"]
    useEffect(() => {

        async function getData() {
            const agents: AgentsInfo[] = []
            topAgents.map(async a => {
                const res =  await fetch(`https://valorant-api.com/v1/agents/${a}`)
                const data: ValorantApiRequest = await res.json()
                agents.push(data.data)
                console.log(valorant)
              
            })       

        }
        getData();
    }, []);

    return (
        <div className="bg-zinc-950 mt-10 p-14">
            <h1 className="font-bold text-white text-3xl p-4">ROLES</h1>
            <div className="bg-gradient-to-r from-[#09C25A] min-w-80 h-36 rounded border-l-8 border-[#05EE07]">
                <p className="font-bold text-2xl p-4 text-white">S</p>
                <ul>

                    {valorant.map((vava) => (
                        <li key={vava.uuid}><Image src={vava.displayIcon} alt="sdasdiua" width={200} height={200}/></li>
                    ))}

                </ul>


            </div>
        </div>
    )
}

