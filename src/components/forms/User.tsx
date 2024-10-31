import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import Input from "../Input";
import Button from "../Buttons";


type UserFormState = {
    name: string,
    lastname: string,
}
const InitialValue: UserFormState = {
    name: '',
    lastname: '',
}

export default function UserForm() {
    const [form, setForm] = useState(InitialValue);
    // funcion que no retorna nada
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log(form);
  }
  
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof UserFormState; // name puede ser solo name o last name ahora
    setForm({...form, [name]: e.target.value}) // validamos que sea name o lastname
  }
//   nos da error, agregamos un fragment
  return (
    <>
        <Input name='name' placeholder='Nombre' handleChange={handleChange}/>
        <Input name='lastname' placeholder='Apellido' handleChange={handleChange}/>

        <Button handleClick={handleClick}>Chau mundo</Button>
    </>
  )
}