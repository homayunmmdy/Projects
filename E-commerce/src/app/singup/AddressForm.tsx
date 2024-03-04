import { AddressData } from "@/models/AddressData"
import FormWrapper from "./FormWrapper/FormWrapper"

type AddressFormProps = AddressData & {
    updateFields : (fileds : Partial<AddressData> ) => void
    //Partial : object containing some or all of the properties of  AddressData
}

const AddressForm = ({
    street,
    city,
    state,
    zip,
    updateFields,
}:AddressFormProps) => {
  return (
    <div>
      <FormWrapper title="Addres Form">
        <label >Street</label>
        <input type="text"
        autoFocus 
        required
        value={street}
        onChange={e => updateFields({street : e.target.value})}
        />
        <label >City</label>
        <input type="text"
        autoFocus 
        required
        value={city}
        onChange={e => updateFields({city : e.target.value})}
        />
        <label >State</label>
        <input type="text"
        autoFocus 
        required
        value={state}
        onChange={e => updateFields({ state : e.target.value})}
        />
        <label >Zip</label>
        <input type="text"
        autoFocus 
        required
        value={zip}
        onChange={e => updateFields({zip : e.target.value})}
        />
      </FormWrapper>
    </div>
  )
}

export default AddressForm
