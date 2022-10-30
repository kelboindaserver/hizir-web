import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationPin} from "@fortawesome/free-solid-svg-icons";
function Footer(){
 return <div className="bg-dark">
     <div className="site-container py-5">
         <div className="mb-6 items-center flex flex-col">
             <FontAwesomeIcon className="text-4xl mb-6 text-light-blue" icon={faLocationPin} />
             <iframe className="rounded max-w-[250px] max-h-[250px] md:max-w-[800px] md:max-h-[600px]"
                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12031.076689448495!2d28.809129!3d41.074038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x941d8ab65906ca56!2zSMSxesSxciBWaW7Dpw!5e0!3m2!1str!2str!4v1667151271781!5m2!1str!2str"
                 width="800" height="600"  allowFullScreen="" loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"></iframe>
         </div>
         <div>
         </div>
     </div>
 </div>
}
export default Footer