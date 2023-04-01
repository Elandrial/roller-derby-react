import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default function registerIcons(){
    // This exports the whole icon packs for Brand and Solid.
    library.add(fab, fas);
}