import { faTrash, faPhone, faEnvelope, faMapMarkedAlt, faFile, faGlobeAmericas, faCode} from "@fortawesome/free-solid-svg-icons"
import { fab, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

const Icons = () => {
  return library.add(faTrash, faPhone, faEnvelope, faMapMarkedAlt, faLinkedinIn, faGithub, fab, faFile, faGlobeAmericas, faCode)
}

export default Icons;