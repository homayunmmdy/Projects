import { UserData } from '@/models/UserData'
import FormWrapper from './FormWrapper/FormWrapper'

type UserFormProps = UserData & {
    updateFields : (fileds : Partial<UserData> ) => void
    //Partial : object containing some or all of the properties of  UserData
}

const UserForm = ({
    firstName ,
    lastName ,
    age ,
    updateFields ,
}: UserFormProps) => {
  return (
    <div>
      <FormWrapper title="User Details">
      <label>First Name</label>
      <input type='text'
      autoFocus 
      required
      value={firstName}
      onChange={e => updateFields({ firstName : e.target.value})}
      />
      <label>Last Name</label>
      <input type='text' 
      autoFocus
      required
      value={lastName}
      onChange={e => updateFields({ lastName : e.target.value})}
      />
      <label>Age</label>
      <input 
      type='number'
      required
      min={1} 
      value={age}
      onChange={e => updateFields({ age : e.target.value })}
      />
      </FormWrapper>
    </div>
  )
}

export default UserForm
