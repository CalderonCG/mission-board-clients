import { use } from "react";

export type ClientType = {
  id: number;
  name: string;
  status: "Active" | "Prospective" | "Archived";
  projects: number;
};



export const getClients = async (): Promise<ClientType[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch('/assets/clients.json')

  return res.json();
};
