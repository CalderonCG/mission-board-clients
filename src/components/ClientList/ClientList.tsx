import ClientCard from "../ClientCard/ClientCard";
import "./ClientList.scss";
import { type ClientType } from "../../services/ClientServices";

export function ClientList({
  filter,
  search,
  clients,
}: {
  filter: "All" | "Archived" | "Active" | "Prospective";
  search: string;
  clients: ClientType[];
}) {
  let filteredList = clients;
  if (filter !== "All") {
    filteredList = clients.filter((client) => client.status === filter);
  }

  return (
    <div className="list">
      {search.trim() !== ""
        ? filteredList
            .filter((client) =>
              client.name.toLowerCase().startsWith(search.toLowerCase())
            )
            .map((client) => <ClientCard client={client} key={client.id} />)
        : filteredList.map((client) => (
            <ClientCard client={client} key={client.id} />
          ))}
    </div>
  );
}
