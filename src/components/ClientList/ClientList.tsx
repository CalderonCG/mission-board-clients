import { use, useState } from "react";
import ClientCard from "../ClientCard/ClientCard";
import "./ClientList.scss";
import { getClients, type ClientType } from "../../services/ClientServices";

const clientPromise: Promise<ClientType[]> = getClients();

export function ClientList({
  filter, search
}: {
  filter: "All" | "Archived" | "Active" | "Prospective", search: string
}) {
  const Clients = use(clientPromise);
  let filteredList = Clients;
  if (filter !== "All") {
    filteredList = Clients.filter((client) => client.status === filter);
  }

  return (
    <div className="list">
      {search.trim() !== '' ? filteredList.filter((client) => client.name.toLowerCase().startsWith(search.toLowerCase())).map((client) => (
        <ClientCard client={client} key={client.id} />
      )) : filteredList.map((client) => (
        <ClientCard client={client} key={client.id} />
      )) }
    </div>
  );
}
