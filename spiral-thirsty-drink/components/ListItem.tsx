import * as React from 'react'
import Link from 'next/link'
// import { ListItem } from '../types'

type Props = {
  name: string,
  image: string,
  details: object
}

const ListItem : React.FC<Props> = props => {
  const { name, image, details } = props;
  console.log(image)
  return (
    <li>
      <Link style={listStyles} href={`/drinks/${name}`}>
        <div style={listStyles}>
          <img style={imgStyles} src={image}/>
          <p style={textStyles}>{name}</p>
          <div style={arrowStyles}/>
        </div>
      </Link>
    </li>
  )
};

const arrowStyles = {
  transform: 'rotate(45deg)',
  borderTop: '2px solid gray',
  borderRight: '2px solid gray',
  height: 15,
  width: 15
};

const listStyles = {
  height: 60,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  borderTop: '2px solid gray'
}

const imgStyles = {
  height: 40,
  width: 40,
  borderRadius: 50,
  margin: 10,
  marginRight: 15
}

const textStyles = {
  fontSize: 17
}

export default ListItem;
