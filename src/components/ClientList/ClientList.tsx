import { use, useState } from "react";
import ClientCard from "../ClientCard/ClientCard";
import "./ClientList.scss";
import { getClients, type ClientType } from "../../services/ClientServices";

const clientPromise: Promise<ClientType[]> = getClients();

export function ClientList({
  filter,
}: {
  filter: "All" | "Archived" | "Active" | "Prospective";
}) {
  const Clients = use(clientPromise);
  let filteredList = Clients;
  if (filter !== "All") {
    filteredList = Clients.filter((client) => client.status === filter);
  }

  return (
    <div className="list">
      {filteredList.map((client) => (
        <ClientCard client={client} key={client.id} />
      ))}
    </div>
  );
}
