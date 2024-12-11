import React, {useState, useEffect} from 'react';

function TicketPoolStatus(){
    //data from backend
    const [tickets, setTickets] = useState<number>(0);

    useEffect(() => {
        //FETCH TICKET COUNT
        fetch('http://localhost:8080/api/tickets')
        .then(response =>{
            if(!response.ok){
                throw new Error("network response was not ok");
            }
            return response.json();
        })
        .then(data =>{
            //data here will be the number of tickets
            setTickets(data);
        })

        .catch(error =>{
            console.error('There was a problem fetching ticket data:', error);
        });
    }, []);


    return(
        <div style={{ padding: '20px' }}>
      <h1>Ticket Pool Status</h1>
      <p>Current Tickets in Pool: {tickets}</p>
      <p>(This is a placeholder. You will later replace with real data from backend.)</p>
    </div>  
    );
}

export default TicketPoolStatus;