import { Link } from "react-router-dom"
import classes from "../cssPages/Profile.module.css"
function  ProfilePage(){
    return(
        <> 
           {/**controlla se è loggato e se lo è mostra i dati utente, altrimenti mostra 2 tasti uno per fare il login e uno per registrarsi */}

           <h2>CIAO TIZIO</h2> {/**prendi il nome dell'utente e aggiungi una lista dei suoi dati */}
           <h2>SEMBRA CHE AL MOMENTO TU NON ABBIA FATTO IL LOGIN</h2>

           <div className={classes["button-container"]}>
           <Link to="/login">
            <button className={classes["login-btn"]}>LOGIN</button>
            </Link>
            <Link to="/signup">
            <button className={classes["register-btn"]}>REGISTRATI</button>
            </Link>
           </div>
        </>
    )

}
export default ProfilePage;