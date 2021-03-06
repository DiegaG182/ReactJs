import {useCartContext} from '../context/CartContext';
import { Button } from '@mui/material';


const UserForm = ({createOrder}) =>{

    const {handleForm, userData, cartList} = useCartContext();
    
    
    return (
        <form onKeyUp={handleForm} onSubmit={createOrder} hidden={cartList.length > 0 ? false : true}>
            <legend className="form-legend">Ingresá tus datos</legend>
            <div>
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" name="name" placeholder="Diego" defaultValue={userData.name}/>
            </div>
            <div>
                <label htmlFor="surname" className="form-label">Apellido</label>
                <input type="text" name="surname" placeholder="Gacia" defaultValue={userData.surname}/>
            </div>
            <div>
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="text" name="phone" placeholder="91185466352" defaultValue={userData.phone}/> 
                <p>Ingresá tu número de celular con el código de área, sin el 0 ni el 15.</p>
            </div>
            <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" placeholder="mail@tuemail.com" defaultValue={userData.email}/>
            </div>
            <div>
                <label htmlFor="reemail" className="form-label">Revalidar Email</label>
                <input type="email" name="reemail" placeholder="mail@tuemail.com" defaultValue={userData.reemail}/>
            </div>
            <Button color="secondary" variant="contained" type="submit" 
            disabled={(userData.reemail === userData.email && 
            userData.name.length > 0 && 
            userData.surname.length > 0 &&
            userData.phone.length > 0 &&   
            userData.email.length > 0) ? false : true}
            >Comprar</Button>
        </form>
    )
}

export default UserForm;