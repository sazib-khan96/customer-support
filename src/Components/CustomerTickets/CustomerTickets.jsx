import React, { use } from 'react';
import Customar from '../Customar/Customar'

const CustomerTickets = ({customarData}) => {
    const Data = use(customarData)
    
    return (
        <div>
            {
                Data.map(customar => <Customar key={customar.id} customar={customar}></Customar> )
            }
        </div>
    );
};

export default CustomerTickets;