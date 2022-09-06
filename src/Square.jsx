import React from 'react'

function Square(props) {
	function handleClick() {
		if (!props.squareValue) {
			if (props.player === true) {
                props.squares.splice(props.index, 1, "X")
                props.setSquares(props.squares)
                props.setPlayer(!props.player)
			} else {
                props.squares.splice(props.index, 1, "O")
                props.setSquares(props.squares)
                props.setPlayer(!props.player)
            }
		}
	}

	return <div className='square' onClick={handleClick}>
        {props.squareValue === 'O' ? <img src="../react.svg" alt="react-logo" /> : props.squareValue}
    </div>
}

export default Square
