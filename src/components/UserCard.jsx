import React from "react";
import  styles from "../css/UserCard.module.css"
function UserCard({name,age,description}){


   return(
 <div className={styles.UserCard}>
<h2>My name:{name}</h2>
<h3>My age:{age}</h3>
<p>my description:{description}</p>
 </div>
   ) ;
}
export default UserCard;
