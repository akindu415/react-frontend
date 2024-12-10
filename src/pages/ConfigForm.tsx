import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function ConfigForm() {
    const navigate = useNavigate();

    //state to store form data
    const [formData, setFormData] = useState({
        totalTickets: 0,
        ticketReleaserate: 0,
        ticketsPerRelease: 0,
        customerRetrievalRate: 0,
        maxTicketCapacity: 0,
        numberOfVendors: 0,
        numberOfCustomers: 0,
  });

  // Handle input changes: update the corresponding state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: parseInt(value, 10) || 0, // ensure numbers
    }));
  };

  //for now, just log the data and navigate to next page when submitted
  const handleSUbmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('configuration Submitted:', formData);
    navigate('/status');
  };

  return (
    <div style={{ padding: '20px' }}>
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
            name="ticketReleaseRate"
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
          <label>Customer Retrieval Rate (ms): </label>
          <input
            type="number"
            name="customerRetrievalRate"
            value={formData.customerRetrievalRate}
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