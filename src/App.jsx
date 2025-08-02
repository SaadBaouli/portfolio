import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import SkillDetail from './pages/SkillDetail';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill/:slug" element={<SkillDetail />} />
      </Routes>
      <Toaster position="bottom-right" richColors closeButton />
      <Footer />
    </div>
  );
}

export default App;





























// import { useEffect, useRef, useState } from 'react'

// export default function App() {
//   const canvasRef = useRef(null)
//   const [names, setNames] = useState([])
//   const [nameInput, setNameInput] = useState('')
//   const [angle, setAngle] = useState(0)
//   const [spinning, setSpinning] = useState(false)
//   const [winner, setWinner] = useState('')
//   const size = 400
//   const arc = names.length ? (2 * Math.PI) / names.length : 0
//   const colors = useRef([])

//   const generateColors = () => {
//     colors.current = names.map(() =>
//       `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`
//     )
//   }

//   const drawWheel = () => {
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')
//     ctx.clearRect(0, 0, size, size)
//     if (names.length === 0) return

//     ctx.save()
//     ctx.translate(size / 2, size / 2)
//     ctx.rotate(angle)

//     for (let i = 0; i < names.length; i++) {
//       ctx.beginPath()
//       ctx.fillStyle = colors.current[i]
//       ctx.moveTo(0, 0)
//       ctx.arc(0, 0, size / 2, i * arc, (i + 1) * arc)
//       ctx.fill()

//       ctx.save()
//       ctx.rotate((i + 0.5) * arc)
//       ctx.translate(size / 3, 0)
//       ctx.rotate(Math.PI / 2)
//       ctx.fillStyle = '#fff'
//       ctx.font = 'bold 14px sans-serif'
//       ctx.textAlign = 'center'
//       ctx.fillText(names[i], 0, 0)
//       ctx.restore()
//     }

//     ctx.restore()
//   }

//   useEffect(() => {
//     if (names.length > 0) {
//       generateColors()
//       drawWheel()
//     }
//   }, [names, angle])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const list = nameInput
//       .split('\n')
//       .map((n) => n.trim())
//       .filter((n) => n !== '')
//     if (list.length === 0) {
//       alert('🛑 Veuillez entrer au moins un nom.')
//       return
//     }
//     setNames(list)
//     setWinner('')
//     setAngle(0)
//     setSpinning(false)
//   }

//   const spin = () => {
//     if (spinning || names.length < 1) return
//     setSpinning(true)
//     setWinner('')
//     let start = null
//     const totalSpinAngle = Math.random() * (2 * Math.PI) + 6 * 2 * Math.PI
//     const duration = 4000

//     const animate = (timestamp) => {
//       if (!start) start = timestamp
//       const progress = timestamp - start
//       const t = Math.min(progress / duration, 1)
//       const easeOut = 1 - Math.pow(1 - t, 4)
//       const easedAngle = totalSpinAngle * easeOut
//       setAngle(easedAngle)

//       if (progress < duration) {
//         requestAnimationFrame(animate)
//       } else {
//         setSpinning(false)

//         const winningIndex =
//           names.length -
//           Math.floor((easedAngle % (2 * Math.PI)) / arc) % names.length

//         setWinner(names[winningIndex])
//       }
//     }

//     requestAnimationFrame(animate)
//   }

//   const removeWinner = () => {
//     setNames((prev) => prev.filter((n) => n !== winner))
//     setWinner('')
//     setAngle(0)
//   }

//   const closeWinner = () => {
//     setWinner('')
//   }

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-gray-900 text-white p-6 gap-6 items-start">
      
//       {/* GAUCHE - ROUE */}
//       <div className="flex flex-col items-center w-full md:w-2/3 relative">
//         <h1 className="text-3xl font-bold text-yellow-400 mb-2">🎡 Roue des Noms</h1>

//         {/* FLECHE */}
//         <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[30px] border-l-transparent border-r-transparent border-b-red-500 absolute top-0 left-1/2 -translate-x-1/2 z-10"></div>

//         {/* CANVAS */}
//         <canvas
//           ref={canvasRef}
//           width={size}
//           height={size}
//           className="rounded-full shadow-2xl bg-black mt-6"
//         />

//         {/* SPIN */}
//         {names.length > 0 && (
//           <button
//             onClick={spin}
//             disabled={spinning}
//             className={`mt-6 px-6 py-3 rounded-xl font-bold text-lg transition-all ${
//               spinning
//                 ? 'bg-gray-600 cursor-not-allowed'
//                 : 'bg-yellow-500 hover:bg-yellow-600 text-black'
//             }`}
//           >
//             {spinning ? '⏳ En train de tourner...' : '🎯 Lancer la roue'}
//           </button>
//         )}

//         {/* GAGNANT */}
//         {winner && (
//           <div className="mt-6 text-center">
//             <div className="text-3xl font-bold text-green-400 animate-bounce mb-4">
//               🏆 Gagnant : {winner}
//             </div>
//             <div className="flex gap-4 justify-center">
//               <button
//                 onClick={closeWinner}
//                 className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl"
//               >
//                 Fermer
//               </button>
//               <button
//                 onClick={removeWinner}
//                 className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-xl"
//               >
//                 Supprimer
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* DROITE - INPUT */}
//       <div className="w-full md:w-1/3">
//         <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//           <label className="text-lg font-semibold mb-1 text-white">🧾 Entrez les noms (un par ligne) :</label>
//           <textarea
//             rows="12"
//             value={nameInput}
//             onChange={(e) => setNameInput(e.target.value)}
//             placeholder="Ex:\nAhmed\nFatima\nYoussef"
//             className="w-full p-3 rounded-xl text-black resize-none outline-none"
//           ></textarea>
//           <button
//             type="submit"
//             className="mt-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl"
//           >
//             ✅ Enregistrer les noms
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }







// import { useState, useEffect } from 'react'
// import './index.css'

// const emojis = ['🐶', '🐱', '🐻', '🐼', '🦁', '🐸']
// const shuffledEmojis = [...emojis, ...emojis].sort(() => Math.random() - 0.5)

// export default function App() {
//   const [cards, setCards] = useState([])
//   const [flippedCards, setFlippedCards] = useState([])
//   const [currentPlayer, setCurrentPlayer] = useState(1)
//   const [scores, setScores] = useState({ 1: 0, 2: 0 })
//   const [message, setMessage] = useState('')
//   const [animateApp, setAnimateApp] = useState(false)
//   const [gameStarted, setGameStarted] = useState(false)

//   useEffect(() => {
//     startGame()
//   }, [])

//   const startGame = () => {
//     const reshuffled = [...emojis, ...emojis].sort(() => Math.random() - 0.5)
//     const initialized = reshuffled.map((emoji, i) => ({
//       id: i,
//       emoji,
//       flipped: false,
//       matched: false,
//     }))
//     setCards(initialized)
//     setScores({ 1: 0, 2: 0 })
//     setFlippedCards([])
//     setCurrentPlayer(1)
//     setMessage('')
//     setGameStarted(true)

//     setTimeout(() => setGameStarted(false), 1500)
//   }

//   useEffect(() => {
//     if (flippedCards.length === 2) {
//       const [first, second] = flippedCards
//       const match = cards[first].emoji === cards[second].emoji

//       setTimeout(() => {
//         const updated = cards.map((card, i) => {
//           if (i === first || i === second) {
//             return { ...card, flipped: match, matched: match }
//           }
//           return card
//         })

//         setCards(updated)
//         setFlippedCards([])

//         if (match) {
//           setMessage('🎉 Bonne paire !')
//           setAnimateApp(true)
//           setScores((prev) => ({
//             ...prev,
//             [currentPlayer]: prev[currentPlayer] + 1
//           }))

//           setTimeout(() => {
//             setMessage('')
//             setAnimateApp(false)
//           }, 2000)
//         } else {
//           setCurrentPlayer(currentPlayer === 1 ? 2 : 1)
//         }
//       }, 900)
//     }
//   }, [flippedCards])

//   const handleFlip = (index) => {
//     if (
//       flippedCards.length < 2 &&
//       !cards[index].flipped &&
//       !cards[index].matched
//     ) {
//       const updated = [...cards]
//       updated[index].flipped = true
//       setCards(updated)
//       setFlippedCards([...flippedCards, index])
//     }
//   }

//   return (
//     <div
//       className={`min-h-screen flex flex-col items-center justify-center px-4 py-10 transition-all duration-700
//         ${animateApp ? 'animate-pulse bg-green-100' : 'bg-gradient-to-br from-rose-200 via-purple-300 to-indigo-400'}`}
//     >
//       {/* Header */}
//       <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">🐾 Memory Game - Animaux</h1>

//       {/* Scores */}
//       <div className="flex gap-12 text-xl text-white font-semibold mb-4">
//         <p>👤 Joueur 1: <span className="font-bold">{scores[1]}</span></p>
//         <p>👤 Joueur 2: <span className="font-bold">{scores[2]}</span></p>
//       </div>

//       {/* Turn Info */}
//       <div className="text-white mb-4 text-lg">
//         🎯 Tour de: <span className="underline font-bold">Joueur {currentPlayer}</span>
//       </div>

//       {/* Message centrale */}
//       {message && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
//           <div className="bg-green-600 text-white text-3xl px-10 py-6 rounded-2xl shadow-2xl animate-bounce">
//             {message}
//           </div>
//         </div>
//       )}

//       {/* Cards Grid */}
//       <div className="grid grid-cols-4 gap-4 mt-4">
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             onClick={() => handleFlip(index)}
//             className={`
//               w-24 h-24 text-4xl flex items-center justify-center rounded-2xl cursor-pointer
//               transition-transform duration-500 transform shadow-xl border-2 border-white
//               ${card.flipped || card.matched ? 'bg-white scale-110' : 'bg-gray-600 hover:scale-105'}
//               ${gameStarted ? 'animate-fade-in' : ''}
//             `}
//             style={{ animationDelay: `${index * 60}ms` }}
//           >
//             {card.flipped || card.matched ? card.emoji : '❓'}
//           </div>
//         ))}
//       </div>

//       {/* Reset Button */}
//       <button
//         onClick={startGame}
//         className="mt-10 px-6 py-2 bg-indigo-800 text-white rounded-xl shadow-lg hover:bg-indigo-900 transition-all"
//       >
//         🔄 Réinitialiser le jeu
//       </button>
//     </div>
//   )
// }

