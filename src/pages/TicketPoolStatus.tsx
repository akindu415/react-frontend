import React, {useState, useEffect} from 'react';

function TicketPoolStatus(){
    // data to be set from the backend.
    //setting a place holder for now 

    const [tickets, setTickets] = useState<number>(0);

    useEffect(()=>{
        //fetch the data from the backend)
        const inerval = setInterval(()=>{
            setTickets((prev) => prev + 1);
        },1000);

        return () => clearInterval(inerval);
    },[]);

    return(
        <div style={{ padding: '20px' }}>
      <h1>Ticket Pool Status</h1>
      <p>Current Tickets in Pool: {tickets}</p>
      <p>(This is a placeholder. You will later replace with real data from backend.)</p>
    </div>  
    );
}

export default TicketPoolStatus;