import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function ConfigForm() {
    const navigate = useNavigate();

    //state to store form data
    const [formData, setFormData] = useState({
        totalTickets: '',
        ticketReleaserate: '',
        ticketsPerRelease: '',
        customerRetrievalRate: '',
        maxTicketCapacity: '',
        numberOfVendors: '',
        numberOfCustomers: '',
  });

  // Handle input changes: update the corresponding state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: parseInt(value, 10) || 0, // ensure numbers
    }));
  };

  //when the form is sumbitted handlesubmit runs
  //it sends an post request to the backend with the form data
  const handleSUbmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/api/config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if(response.ok){
      const savedConfig = await response.json();
      console.log('config saved:', savedConfig);
    

    //navigate to status page
      navigate('/status');
  }else{
    console.error('failed to save config');
  }
};

  return (
    <div style={{ padding: '20px'}}>
      <h1>System Configuration</h1>
      <form onSubmit={handleSUbmit}>
        <div>
          <label>Total Tickets: </label>
          <input
            type="number"
            name="totalTickets"
            value={formData.totalTickets}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Ticket Release Rate (ms): </label>
          <input
            type="number"
            name="ticketReleaserate"
            value={formData.ticketReleaserate}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Tickets Per Release: </label>
          <input
            type="number"
            name="ticketsPerRelease"
            value={formData.ticketsPerRelease}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label>Max Ticket Capacity: </label>
          <input
            type="number"
            name="maxTicketCapacity"
            value={formData.maxTicketCapacity}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Customer Retrieval Rate (ms): </label>
          <input
            type="number"
            name="customerRetrievalRate"
            value={formData.customerRetrievalRate}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Number of Vendors: </label>
          <input
            type="number"
            name="numberOfVendors"
            value={formData.numberOfVendors}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Number of Customers: </label>
          <input
            type="number"
            name="numberOfCustomers"
            value={formData.numberOfCustomers}
            onChange={handleChange}
          />
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>Start</button>
      </form>
    </div>
  );

}
export default ConfigForm;