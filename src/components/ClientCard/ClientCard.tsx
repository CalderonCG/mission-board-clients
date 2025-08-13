import avatar from '/assets/Avatar.svg';
import './ClientCard.scss'
import type { ClientType } from '../../services/ClientServices';

function ClientCard({client} : {client: ClientType}) {
  return (
    <div className={`client ${client.status === 'Archived'? 'archived' :''}`}>
        <img className='client_avatar' 
        src={avatar} alt="avatar" />
        <div className='client_details'>
            <span className='client_name'>{client.name} 
                <div className={`client_${client.status}`}> {client.status}</div>
            </span>
            <p className='client_amount'>{client.projects} projects</p>
        </div>
    </div>
  )
}

export default ClientCard