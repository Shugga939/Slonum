import './DropdownListItem.scss'
import { FC, useEffect, useRef, useState } from 'react';

interface DropdownListItemProps {
  title: string,
  spoiler: string
}

const DropdownListItem :FC<DropdownListItemProps> = ({title, spoiler}) => {

  const buttonRef = useRef <HTMLButtonElement>(null)
  const spoilerRef = useRef <HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  const toggleState = ()=> {

    if (show) {
      setShow(false)
      spoilerRef.current!.style.height = `${0}px`
      
    } else {
      setShow(true)
      spoilerRef.current!.style.height = `${spoilerRef.current?.scrollHeight}px`
    }
  }

  useEffect(()=> {

  },[])

  return (
    <div className="dropdownListItem">
      <button 
        className="dropdownListItem__head" 
        ref={buttonRef}
        onClick={toggleState}
      >
        <span className="dropdownListItem__title">
          {title}
        </span>
        <span className= {show?
          "dropdownListItem__state dropdownListItem__state--opened"
          :
          "dropdownListItem__state dropdownListItem__state--closed"
        }/>
      </button>
      <div className="dropdownListItem__spoiler" ref={spoilerRef}>
        <p className="dropdownListItem__text">
          {spoiler}
        </p>
      </div>
    </div>
  );
}

export default DropdownListItem;
