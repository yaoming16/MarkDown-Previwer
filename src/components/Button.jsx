import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize } from '@fortawesome/free-solid-svg-icons'

function Button({ elementFC, setElementFC }) {

  return (
    <button
      type="button"
      className="bg-red"
      onClick={() => setElementFC(!elementFC)} >
      <FontAwesomeIcon icon={faMaximize} />
    </button>
  )
}

export default Button;  