import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';


const CustomersDetails = ({ customers }) => {
    const [view, setView] = useState(false);
    const [newAmount, setNewAmount] = useState("");
    const [customer, setCustomer] = useState("");

    const history = useHistory(); 

    const changeView = () => {
        setView(!view);
    };
    // const strDate = new Date(customers.updatedDate);

    const strDate = new Date(customers.updatedDate);
    const deleteCustomer = (name) => {
      axios
        .delete(`http://localhost:5000/api/flousi/deleteOne/${name}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    
    };
    const changeAmount = (name) => {
        axios
            .put(`http://localhost:5000/api/flousi/put/${name}`, {
                credit: newAmount,
                customerName: customer,
            })
            .then((response) => {
                console.log(response);
                history.push("/customers"); 
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="cusomer-detail">
            {/* ... */}
            <button onClick={() => deleteCustomer(customers.customerName)}>Delete</button>
            <p>Updated Date: {strDate.toDateString()}</p>
            <Link to="/customers">Back to Customers</Link>
        </div>
    );
};

export default CustomersDetails;
