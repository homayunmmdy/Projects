import { AccountData } from "@/models/AccountData"
import FormWrapper from "./FormWrapper/FormWrapper"

type AccountFormProps = AccountData & {
    updateFields : (fileds : Partial<AccountData> ) => void
    //Partial : object containing some or all of the properties of  AccountData
}

const AccountForm = ({
    email ,
    password , 
    updateFields,
}: AccountFormProps) => {
  return (
    <div>
      <FormWrapper title="Account">
        <label >Email</label>
        <input type="email" 
        autoFocus 
        required
        value={email}
        onChange={e => updateFields({ email : e.target.value})}
        />
        <label >password</label>
        <input type="password" 
        autoFocus 
        required
        value={password}
        onChange={e => updateFields({password : e.target.value})}
        />
      </FormWrapper>
    </div>
  )
}

export default AccountForm
