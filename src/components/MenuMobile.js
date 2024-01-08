import React, { useState } from 'react';
import publicarbtn from "../assets/menumobile/publicarbtn.svg"
import homebtn from "../assets/menumobile/homebtn.svg"
import searchbtn from "../assets/menumobile/searchbtn.svg"
import notificationsbtn from "../assets/menumobile/notificationsbtn.svg"
import profilebtn from "../assets/menumobile/profilebtn.svg"
import homebtnG from "../assets/menumobile/homebtnG.svg"
import searchbtnG from "../assets/menumobile/searchbtnG.svg"
import notificationsbtnG from "../assets/menumobile/notificationsbtnG.svg"
// import profilebtnG from "../assets/menumobile/profilebtnG.svg"
import { Link, useLocation } from 'react-router-dom';

const MenuMobile = () => {
   const location = useLocation();
   const [page] = useState(location.pathname.replace("/", ""));
   let homebtnsrc =homebtn;
   let searchbtnsrc = searchbtn;
   let notificationsbtnsrc = notificationsbtn;
   let profilebtnsrc = profilebtn;

   switch(page){
      case '/':
         homebtnsrc=homebtnG;
         break
      case 'search-page':
         searchbtnsrc=searchbtnG;
         break
      case 'notifications-page':
         notificationsbtnsrc=notificationsbtnG;
         break
      // case 'profile-page':
      //    profilebtnsrc=profilebtnG;
      // break
      default:
         homebtnsrc=homebtn;
         searchbtnsrc=searchbtn;
         notificationsbtnsrc=notificationsbtn;
         profilebtnsrc=profilebtn;

   }
 
  return (
     <div className="menumobile">
     <Link to={'/publicar-page'}><img src={publicarbtn} className='publicarbtn' alt='publicar'/></Link> 


<div className='menumobilebtns'>
<Link to={'/'}><img src={homebtnsrc} className='homebtn' alt='home'/></Link>
   <Link to={'/search-page'}><img src={searchbtnsrc} className='searchbtn' alt='pesquisar'/></Link>
</div>

<span></span>

   <div className='menumobilebtns'>

   <Link to={'/notifications-page'}><img src={notificationsbtnsrc} className='notificationsbtn' alt='notificações'/></Link>
   <Link to={'#'}><img src={profilebtnsrc} className='profilebtn' alt='perfil'/></Link>
</div>

 
     </div>
  );
 };

export default MenuMobile;
