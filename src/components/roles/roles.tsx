'use client';

import AgentsInfo from '@/types/AgentsInfo';
import ValorantApiRequest from '@/types/ValorantApiRequest';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Roles() {
  const [agents, setAgents] = useState<AgentsInfo[]>([]);
  const topAgents: string[] = ['117ed9e3-49f3-6512-3ccf-0cada7e3823b', '8e253930-4c05-31dd-1b6c-968525494517', '22697a3d-45bf-8dd7-4fec-84a9e28c69d7'];
  useEffect(() => {
    async function getData() {
      const agentData = await Promise.all(
        topAgents.map(async agentId => {
          const res = await fetch(`https://valorant-api.com/v1/agents/${agentId}`);
          const data = await res.json();
          return data.data;
        })
      );
      setAgents(agentData);
    }

    getData();
  }, []);

  return (
    <div className='bg-[#232225] mt-10 p-14'>
      <h1 className='font-bold text-white text-3xl p-4'>Top Agents</h1>
      <div className='flex bg-gradient-to-r from-[#09C25A] min-w-80 h-36 rounded border-l-8 border-[#05EE07] items-center'>
        <ul className='flex gap-5 justify-center px-5'>
          {agents.map(agent => (
            <div>
              <li key={agent.uuid} className='border-2 rounded border-[#05EE07] bg-[#232225] mt-3'>
                <Image src={agent.displayIcon} alt={agent.displayName} width={100} height={100} />
              </li>
              <p className='text-center font-bold text-white'>{agent.displayName}</p>
            </div>
          ))}
    
        </ul>
      </div>
    </div>
  );
}