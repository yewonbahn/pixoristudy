import React, { useState } from 'react';
import '../styles/index.css';
import { Howl, Howler } from 'howler';
import { PersonPinCircleSharp } from '@material-ui/icons';

const Square = (props) => {
console.log("in square: ", props)
  const [toggle, setToggle] = useState(false);

  const playSound = () => {
    setToggle(!toggle);
    var sound = new Howl({
      src: [props.sound],
      html5: true,
    });
    sound.play();
    Howler.volume(1);
    updatePattern(props.pattern)
  }

  function updatePattern(pattern){
    // props.pattern = props.pattern === 1 ? 0 : 1
    // console.log(props.pattern)

  }

  return (
    <td
      style={toggle ? { background: props.color, padding: '25px' } : { background: '#151515', padding: '25px' }}
      onClick={() => playSound(props.sound)}
    />
  )
}

export default Square;