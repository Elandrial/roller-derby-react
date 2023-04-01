import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
/**
 * Registers the Font Awesome libraries to be used by the system by keyword rather than hard coding the results (when dynamic, it's not predictable what is needed)
 */
export default function registerIcons(){
    // This exports the whole icon packs for Brand and Solid.
    library.add(fab, fas);
}