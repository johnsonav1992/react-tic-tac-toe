import { useState } from 'react'
import './App.css'
import Square from './Square.jsx'

function App() {
	const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', ''])
	const [player, setPlayer] = useState(true)

	function handleReset() {
		const squares = document.querySelectorAll('.square')
		squares.forEach(square => {
			square.classList.remove('no-click')
		})
		setSquares(['', '', '', '', '', '', '', '', ''])
		setPlayer(true)
	}

	function calculateWinner(arr) {
		const wins = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]

		for (let i = 0; i < wins.length; i++) {
			const [a, b, c] = wins[i]
			if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
				const squares = document.querySelectorAll('.square')
				squares.forEach(square => {
					square.classList.add('no-click')
				})
				return `${arr[a]} wins!`
			}
		}
		return `Who will win?`
	}

	return (
		<div className="app">
			<header>
				<h1>React Tic-Tac-Toe</h1>
				<img src="../favicon.ico" alt="" />
			</header>
			<div className="container">
				{squares.map((value, i) => {
					return (
						<Square
							squares={squares}
							setSquares={setSquares}
							player={player}
							setPlayer={setPlayer}
							squareValue={value}
							index={i}
						/>
					)
				})}
			</div>
			<span>{calculateWinner(squares)}</span>
			<button className="reset-btn" onClick={handleReset}>
				Reset
			</button>
		</div>
	)
}

export default App
