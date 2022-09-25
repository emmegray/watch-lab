import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import style from './Searchbar.module.scss'

export default function Searchbar({
  className=""
}) {
  return (
    <div className={`${style.Searchbar} ${className} me-4`}>
      <input type="text" />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
}
