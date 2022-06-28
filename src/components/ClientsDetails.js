import React, { Components} from "react";

class ClientDetails extends Componets{
    constructor(props){
        super(props)

        this.state = {
            clients: []
        }

    }

    render(){
        return(

            <div>
                <h2 className="text-center"> Employes List</h2>

                <thead>
                    <tr>
                        <th>Clients First Name </th>
                        <th>Clients Last Name </th>
                        <th>Clients Email Id </th>
                        <th>Actions</th>

                    </tr>
                </thead>

            </div>
        )
    }



}

export default ClientDetails