// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Heart,
//   Stars,
//   Sparkles,
//   ArrowRight,
//   ArrowLeft,
//   Camera,
//   Gift,
//   Moon,
//   Sun,
//   MessageCircleHeart,
//   Rocket,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { useToast } from "@/hooks/use-toast"
// import { InteractiveTree } from "./interactive-tree"

// const PROMISES = [
//   "I promise to always be your safe place and your home.",
//   "I promise to listen to your silence just as much as your words.",
//   "I promise to never stop choosing you, every single day.",
//   "I promise to support your wildest dreams with everything I have.",
//   "I promise to be the one who makes you laugh when you want to cry.",
//   "I promise to grow with you, through every season of life.",
//   "I promise to love you more tomorrow than I do today.",
// ]

// // UPDATED: Added your specific memories and image paths
// const MEMORIES = [
//   {
//     title: "The Beginning",
//     description: "March 3, 2024 - Where our beautiful journey officially started.",
//     date: "Mar 3, 2024",
//     image: "/our_first.jpeg", // Make sure this file is in your public folder
//     color: "bg-red-400",
//   },
//   {
//     title: "Hanuman Mandir",
//     description: "Finding peace, home, and blessings in your presence.",
//     date: "Spiritual Date",
//     image: "/hanuman_mandir.jpeg",
//     color: "bg-orange-400",
//   },
//   {
//     title: "Engifest Magic",
//     description: "The music didn't matter. Holding your hand the whole time did.",
//     date: "Engifest '24",
//     image: "/photo2.jpg",
//     color: "bg-blue-400",
//   },
//   {
//     title: "First Kiss & Akshardham",
//     description: "Dec 19, 2024 - A magical mix of passion and peace.",
//     date: "Dec 19, 2024",
//     image: "/photo3.jpg",
//     color: "bg-pink-400",
//   },
// ]

// const QUIZ_QUESTIONS = [
//   {
//     question: "Will you be mine for forever?",
//     options: ["Yes, forever!", "Always and forever", "No doubt about it", "In every lifetime"],
//     correct: 0,
//   },
//   {
//     question: "Will you always be loyal to me?",
//     options: ["Only to you", "My heart is yours", "Cross my heart", "Absolutely always"],
//     correct: 0,
//   },
//   {
//     question: "Will you promise to be my pookie for the rest of our lives?",
//     options: ["I pinky promise", "Yes, my love", "Of course", "Forever pookie"],
//     correct: 0,
//   },
// ]

// function Countdown() {
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date().getTime()
//       // Updated target to next year since currently it's "2026 New Year" in context
//       const target = new Date("Jan 1, 2027 00:00:00").getTime() 
//       const distance = target - now

//       setTimeLeft({
//         days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
//         hours: Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
//         minutes: Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
//         seconds: Math.max(0, Math.floor((distance % (1000 * 60)) / 1000)),
//       })
//     }, 1000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="flex gap-4 justify-center py-4">
//       {Object.entries(timeLeft).map(([unit, value]) => (
//         <div key={unit} className="text-center">
//           <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-3 w-16 h-16 flex items-center justify-center text-2xl font-bold text-primary shadow-sm border border-white/50">
//             {value}
//           </div>
//           <span className="text-[10px] uppercase tracking-widest text-primary/60 mt-1 font-semibold">{unit}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

// export function NewYearLoveApp() {
//   const [step, setStep] = useState(0)
//   const [isDarkMode, setIsDarkMode] = useState(false)
//   const [showSurprise, setShowSurprise] = useState(false)
//   const [quizIndex, setQuizIndex] = useState(0)
//   const [score, setScore] = useState(0)
//   const { toast } = useToast()

//   const nextStep = () => {
//     setStep((s) => s + 1)
//     setShowSurprise(false)
//   }
//   const prevStep = () => setStep((s) => s - 1)

//   const steps = ["Intro", "Memories", "Letter", "Promises", "Quiz", "2026"]

//   return (
//     <div
//       className={`relative min-h-screen overflow-hidden flex flex-col items-center p-4 transition-colors duration-500 ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-background text-foreground"}`}
//     >
//       <nav className="fixed top-6 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 px-6 py-2 rounded-full flex items-center gap-2 shadow-lg overflow-x-auto max-w-[90vw]">
//         {steps.map((label, i) => (
//           <button
//             key={label}
//             onClick={() => setStep(i)}
//             className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
//               step === i ? "bg-primary text-white scale-110" : "hover:bg-primary/10 text-primary/60"
//             }`}
//           >
//             {label}
//           </button>
//         ))}
//         <div className="w-[1px] h-4 bg-primary/20 mx-2" />
//         <button
//           onClick={() => setIsDarkMode(!isDarkMode)}
//           className="p-2 hover:bg-primary/10 rounded-full transition-colors text-primary"
//         >
//           {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
//         </button>
//       </nav>

//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute animate-float-heart"
//             style={{
//               left: `${Math.random() * 100}%`,
//               animationDuration: `${Math.random() * 10 + 10}s`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           >
//             <Heart
//               size={Math.random() * 24 + 12}
//               className={`${isDarkMode ? "text-primary/10" : "text-primary/20"} fill-current`}
//             />
//           </div>
//         ))}
//       </div>

//       <AnimatePresence mode="wait">
//         {step === 0 && (
//           <>
//             <InteractiveTree />
//             <motion.div
//               key="intro"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 1.2, opacity: 0 }}
//               className="z-10 text-center space-y-6 max-w-md mt-20"
//             >
//               <div className="relative group inline-block">
//                 <div className="w-64 h-64 flex items-center justify-center">
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
//                     <Countdown />
//                   </div>
//                 </div>

//                 <motion.div
//                   whileHover={{ rotate: [0, -10, 10, 0] }}
//                   className="absolute -top-4 -right-4 bg-yellow-400 p-3 rounded-2xl shadow-lg cursor-pointer z-20"
//                   onClick={() => setShowSurprise(!showSurprise)}
//                 >
//                   <Gift className="text-white" />
//                 </motion.div>
//                 {showSurprise && (
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border-2 border-primary z-30 w-48"
//                   >
//                     <p className="text-sm font-bold text-primary">
//                       I have a million reasons to love you, but let's start with this website! 🎁
//                     </p>
//                   </motion.div>
//                 )}
//               </div>
//               <h1 className="text-5xl font-bold text-primary tracking-tight">Hey Pookie...</h1>
//               <p className="text-xl opacity-70 leading-relaxed font-medium">
//                 Every leaf on this tree is a heartbeat I have for you. Ready for our 2026?
//               </p>
//               <Button
//                 onClick={nextStep}
//                 size="lg"
//                 className="rounded-full px-12 py-8 text-xl bg-primary hover:scale-105 transition-transform shadow-xl shadow-primary/20"
//               >
//                 Start Our Journey <Rocket className="ml-2 animate-bounce" />
//               </Button>
//             </motion.div>
//           </>
//         )}

//         {step === 1 && (
//           <motion.div
//             key="memories"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -50, opacity: 0 }}
//             className="z-10 w-full max-w-6xl space-y-8 mt-24 px-4"
//           >
//             <div className="text-center space-y-2">
//               <h2 className="text-4xl font-bold text-primary flex items-center justify-center gap-3 italic">
//                 <Camera className="text-accent animate-pulse" /> Our Sweetest Memories
//               </h2>
//               <p className="opacity-60 italic">From March 2024 to Forever...</p>
//             </div>
            
//             {/* UPDATED GRID FOR 4 MEMORIES */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {MEMORIES.map((memory, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.2 }}
//                 >
//                   <Card className="overflow-hidden border-none shadow-xl bg-white/60 backdrop-blur-sm group h-full">
//                     {/* UPDATED: Image Rendering */}
//                     <div
//                       className={`h-48 ${memory.color} relative overflow-hidden`}
//                     >
//                        <img 
//                         src={memory.image} 
//                         alt={memory.title}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                        />
//                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
//                     </div>
//                     <div className="p-6">
//                       <span className="text-xs font-bold text-primary/60 tracking-widest uppercase">{memory.date}</span>
//                       <h3 className="text-xl font-bold mt-1 text-primary">{memory.title}</h3>
//                       <p className="text-foreground/70 mt-2 text-sm italic">{memory.description}</p>
//                     </div>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//             <div className="flex justify-center gap-4">
//               <Button variant="ghost" onClick={prevStep} className="rounded-full">
//                 Back
//               </Button>
//               <Button onClick={nextStep} className="rounded-full px-8 bg-primary shadow-lg shadow-primary/20">
//                 Next Step <ArrowRight className="ml-2" />
//               </Button>
//             </div>
//           </motion.div>
//         )}

//         {step === 2 && (
//           <motion.div
//             key="letter"
//             initial={{ scale: 0.95, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ x: -100, opacity: 0 }}
//             className="z-10 w-full max-w-2xl px-4"
//           >
//             <Card className="p-8 md:p-16 border-none shadow-2xl pookie-gradient relative overflow-hidden rounded-[2.5rem]">
//               <div className="absolute top-8 right-8 text-primary/10">
//                 <Heart size={180} fill="currentColor" />
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary italic font-serif">My Dearest Love,</h2>
              
//               {/* UPDATED: Love Letter Content */}
//               <div className="text-lg md:text-xl text-foreground/80 leading-relaxed space-y-6 font-medium italic h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary/20">
//                 <p>
//                   Happy New Year, 2026. As I watch the calendar change, I’m overwhelmed by how fast time has flown. It feels surreal that we are walking into another year together.
//                 </p>
//                 <p>
//                   It’s been almost two years since our journey started on <strong>March 3, 2024</strong>. Looking back, I realize that the best parts of my past are all the moments I’ve spent with you.
//                 </p>
//                 <p>
//                   I still think about those early memories that built us—finding peace with you at the <strong>Hanuman Mandir</strong> and that night at <strong>Engifest</strong>, where I held your hand through the whole function. I knew even then that I never wanted to let go.
//                 </p>
//                 <p>
//                   And now, looking back at <strong>December 19, 2024</strong>, over a year has passed since that magical day—our first kiss and that walk through Akshardham. That day wasn't just a moment; it was the foundation of everything we have now.
//                 </p>
//                 <p>
//                     Thank you for sticking by my side. Here’s to us, and to the lifetime ahead.
//                 </p>
//                 <p className="text-primary font-bold mt-4">Yours forever,</p>
//               </div>

//               <div className="flex justify-between items-center mt-8 pt-8 border-t border-primary/10">
//                 <Button variant="ghost" onClick={prevStep} className="rounded-full">
//                   <ArrowLeft className="mr-2" /> Back
//                 </Button>
//                 <Button onClick={nextStep} className="rounded-full px-8 bg-primary">
//                   Continue <ArrowRight className="ml-2" />
//                 </Button>
//               </div>
//             </Card>
//           </motion.div>
//         )}

//         {step === 3 && (
//           <motion.div
//             key="promises"
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             className="z-10 w-full max-w-2xl space-y-8 px-4"
//           >
//             <div className="text-center">
//               <h2 className="text-4xl font-bold text-primary flex items-center justify-center gap-3">
//                 <Sparkles className="text-yellow-500" /> 7 Sacred Promises <Sparkles className="text-yellow-500" />
//               </h2>
//               <p className="text-foreground/60 mt-2 italic">These are etched in my heart for 2026...</p>
//             </div>
//             <div className="grid gap-4">
//               {PROMISES.map((promise, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ x: -30, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: i * 0.15 }}
//                 >
//                   <Card className="p-5 bg-white/40 backdrop-blur-sm border-none shadow-sm hover:shadow-md transition-all flex items-center gap-6 group rounded-2xl">
//                     <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
//                       {i + 1}
//                     </div>
//                     <p className="text-lg italic font-medium text-foreground/90 leading-snug">{promise}</p>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//             <div className="flex justify-center pt-10">
//               <Button
//                 onClick={nextStep}
//                 size="lg"
//                 className="rounded-full px-16 py-8 text-xl bg-primary shadow-xl shadow-primary/20"
//               >
//                 I Promise Forever <Heart className="ml-2 fill-current" />
//               </Button>
//             </div>
//           </motion.div>
//         )}

//         {step === 4 && (
//           <motion.div
//             key="quiz"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="z-10 w-full max-w-md px-4"
//           >
//             <Card className="p-10 border-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white/90 backdrop-blur-xl rounded-[2rem]">
//               <div className="text-center mb-8">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Stars className="text-primary" size={32} />
//                 </div>
//                 <h2 className="text-2xl font-bold text-primary">How well do you know us?</h2>
//                 <p className="text-sm text-foreground/50 mt-1">
//                   Question {quizIndex + 1} of {QUIZ_QUESTIONS.length}
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <div className="text-xl font-bold text-center mb-6 leading-tight italic">
//                   "{QUIZ_QUESTIONS[quizIndex].question}"
//                 </div>
//                 <div className="grid gap-3">
//                   {QUIZ_QUESTIONS[quizIndex].options.map((opt, i) => (
//                     <Button
//                       key={i}
//                       variant="outline"
//                       className="justify-start py-8 px-6 text-md rounded-2xl border-2 border-muted hover:border-primary hover:bg-primary/5 bg-transparent transition-all active:scale-95 whitespace-normal h-auto"
//                       onClick={() => {
//                         if (i === QUIZ_QUESTIONS[quizIndex].correct) {
//                           setScore((s) => s + 1)
//                           toast({ title: "Yes! You're my smart pookie! ❤️" })
//                         } else {
//                           toast({ title: "I'll forgive you because you're cute! 🥺", variant: "destructive" })
//                         }

//                         if (quizIndex < QUIZ_QUESTIONS.length - 1) {
//                           setQuizIndex((q) => q + 1)
//                         } else {
//                           nextStep()
//                         }
//                       }}
//                     >
//                       <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3 text-sm font-bold group-hover:bg-primary/20 shrink-0">
//                         {String.fromCharCode(65 + i)}
//                       </span>
//                       {opt}
//                     </Button>
//                   ))}
//                 </div>
//               </div>
//             </Card>
//           </motion.div>
//         )}

//         {step === 5 && (
//           <motion.div
//             key="final"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="z-10 text-center space-y-10 mt-20 px-4"
//           >
//             <div className="relative inline-block">
//               <motion.div
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   rotate: [0, 5, -5, 0],
//                 }}
//                 transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//                 className="cursor-pointer"
//                 onClick={() => toast({ title: "Unlimited Kisses Sent! 💋" })}
//               >
//                 <Heart
//                   size={200}
//                   className="text-primary fill-current filter drop-shadow-[0_0_30px_rgba(255,100,100,0.4)]"
//                 />
//               </motion.div>
//               <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
//                 <Sparkles className="absolute -top-10 -right-10 text-yellow-400 w-16 h-16" />
//               </motion.div>
//               <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}>
//                 <Stars className="absolute -bottom-10 -left-10 text-accent w-16 h-16" />
//               </motion.div>
//               <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg animate-bounce">
//                 <MessageCircleHeart size={24} />
//               </div>
//             </div>

//             <div className="space-y-6">
//               <h2 className="text-6xl md:text-8xl font-black text-primary tracking-tighter italic">HAPPY 2026!</h2>
//               <div className="bg-white/30 dark:bg-white/10 backdrop-blur-sm p-6 rounded-3xl inline-block border border-white/20">
//                 <p className="text-2xl font-serif italic opacity-80">
//                   "To many more years of being your favorite person."
//                 </p>
//               </div>
//               <div className="text-lg font-bold text-primary/60 tracking-widest uppercase">
//                 Pookie Quiz Master Level: {score}/{QUIZ_QUESTIONS.length}
//               </div>
//             </div>

//             <div className="flex flex-col items-center gap-4 pt-10">
//               <Button
//                 onClick={() => setStep(0)}
//                 size="lg"
//                 variant="outline"
//                 className="rounded-full px-12 border-primary text-primary hover:bg-primary/10"
//               >
//                 Relive the Magic 🔄
//               </Button>
//               <p className="text-sm opacity-40 italic">I love you more than words can say.</p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }



// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Heart,
//   Stars,
//   Sparkles,
//   ArrowRight,
//   ArrowLeft,
//   Camera,
//   Gift,
//   Moon,
//   Sun,
//   MessageCircleHeart,
//   Rocket,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { useToast } from "@/hooks/use-toast"
// import { InteractiveTree } from "./interactive-tree"

// const PROMISES = [
//   "I promise to always be your safe place and your home.",
//   "I promise to listen to your silence just as much as your words.",
//   "I promise to never stop choosing you, every single day.",
//   "I promise to support your wildest dreams with everything I have.",
//   "I promise to be the one who makes you laugh when you want to cry.",
//   "I promise to grow with you, through every season of life.",
//   "I promise to love you more tomorrow than I do today.",
// ]

// // UPDATED: Adjusted Memory 3 and 4 to match the Metro photos
// const MEMORIES = [
//   {
//     title: "The Beginning",
//     description: "March 3, 2024 - The day our beautiful journey officially started.",
//     date: "Mar 3, 2024",
//     image: "/our_first.jpeg", 
//     color: "bg-red-400",
//   },
//   {
//     title: "Hanuman Mandir",
//     description: "Finding peace, home, and blessings in your presence.",
//     date: "Spiritual Date",
//     image: "/hanuman_mandir.jpeg",
//     color: "bg-orange-400",
//   },
//   {
//     title: "Metro Diaries",
//     description: "Long rides, endless talks, and holding hands on our commute.",
//     date: "Metro Dates",
//     image: "/photo2.jpg",
//     color: "bg-blue-400",
//   },
//   {
//     title: "Metro Moments",
//     description: "Even a simple metro ride becomes a romantic date with you.",
//     date: "Cute Commutes",
//     image: "/photo3.jpg",
//     color: "bg-pink-400",
//   },
// ]

// const QUIZ_QUESTIONS = [
//   {
//     question: "Will you be mine for forever?",
//     options: ["Yes, forever!", "Always and forever", "No doubt about it", "In every lifetime"],
//     correct: 0,
//   },
//   {
//     question: "Will you always be loyal to me?",
//     options: ["Only to you", "My heart is yours", "Cross my heart", "Absolutely always"],
//     correct: 0,
//   },
//   {
//     question: "Will you promise to be my pookie for the rest of our lives?",
//     options: ["I pinky promise", "Yes, my love", "Of course", "Forever pookie"],
//     correct: 0,
//   },
// ]

// function Countdown() {
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date().getTime()
//       // Counting down to Midnight, Jan 1, 2026
//       const target = new Date("Jan 1, 2026 00:00:00").getTime() 
//       const distance = target - now

//       if (distance < 0) {
//          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
//       } else {
//          setTimeLeft({
//             days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//             hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//             minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//             seconds: Math.floor((distance % (1000 * 60)) / 1000),
//           })
//       }
//     }, 1000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="flex gap-4 justify-center py-4">
//       {Object.entries(timeLeft).map(([unit, value]) => (
//         <div key={unit} className="text-center">
//           <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-3 w-16 h-16 flex items-center justify-center text-2xl font-bold text-primary shadow-sm border border-white/50">
//             {value}
//           </div>
//           <span className="text-[10px] uppercase tracking-widest text-primary/60 mt-1 font-semibold">{unit}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

// export function NewYearLoveApp() {
//   const [step, setStep] = useState(0)
//   const [isDarkMode, setIsDarkMode] = useState(false)
//   const [showSurprise, setShowSurprise] = useState(false)
//   const [quizIndex, setQuizIndex] = useState(0)
//   const [score, setScore] = useState(0)
//   const { toast } = useToast()

//   const nextStep = () => {
//     setStep((s) => s + 1)
//     setShowSurprise(false)
//   }
//   const prevStep = () => setStep((s) => s - 1)

//   const steps = ["Intro", "Memories", "Letter", "Promises", "Quiz", "2026"]

//   return (
//     <div
//       className={`relative min-h-screen overflow-hidden flex flex-col items-center p-4 transition-colors duration-500 ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-background text-foreground"}`}
//     >
//       <nav className="fixed top-6 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 px-6 py-2 rounded-full flex items-center gap-2 shadow-lg overflow-x-auto max-w-[90vw]">
//         {steps.map((label, i) => (
//           <button
//             key={label}
//             onClick={() => setStep(i)}
//             className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
//               step === i ? "bg-primary text-white scale-110" : "hover:bg-primary/10 text-primary/60"
//             }`}
//           >
//             {label}
//           </button>
//         ))}
//         <div className="w-[1px] h-4 bg-primary/20 mx-2" />
//         <button
//           onClick={() => setIsDarkMode(!isDarkMode)}
//           className="p-2 hover:bg-primary/10 rounded-full transition-colors text-primary"
//         >
//           {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
//         </button>
//       </nav>

//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute animate-float-heart"
//             style={{
//               left: `${Math.random() * 100}%`,
//               animationDuration: `${Math.random() * 10 + 10}s`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           >
//             <Heart
//               size={Math.random() * 24 + 12}
//               className={`${isDarkMode ? "text-primary/10" : "text-primary/20"} fill-current`}
//             />
//           </div>
//         ))}
//       </div>

//       <AnimatePresence mode="wait">
//         {step === 0 && (
//           <>
//             <InteractiveTree />
//             <motion.div
//               key="intro"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 1.2, opacity: 0 }}
//               className="z-10 text-center space-y-6 max-w-md mt-20"
//             >
//               <div className="relative group inline-block">
//                 <div className="w-64 h-64 flex items-center justify-center">
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
//                     <Countdown />
//                   </div>
//                 </div>

//                 <motion.div
//                   whileHover={{ rotate: [0, -10, 10, 0] }}
//                   className="absolute -top-4 -right-4 bg-yellow-400 p-3 rounded-2xl shadow-lg cursor-pointer z-20"
//                   onClick={() => setShowSurprise(!showSurprise)}
//                 >
//                   <Gift className="text-white" />
//                 </motion.div>
//                 {showSurprise && (
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border-2 border-primary z-30 w-48"
//                   >
//                     <p className="text-sm font-bold text-primary">
//                       I have a million reasons to love you, but let's start with this website! 🎁
//                     </p>
//                   </motion.div>
//                 )}
//               </div>
//               <h1 className="text-5xl font-bold text-primary tracking-tight">Hey Aanchal...</h1>
//               <p className="text-xl opacity-70 leading-relaxed font-medium">
//                 Every leaf on this tree is a heartbeat I have for you. Ready for our 2026?
//               </p>
//               <Button
//                 onClick={nextStep}
//                 size="lg"
//                 className="rounded-full px-12 py-8 text-xl bg-primary hover:scale-105 transition-transform shadow-xl shadow-primary/20"
//               >
//                 Start Our Journey <Rocket className="ml-2 animate-bounce" />
//               </Button>
//             </motion.div>
//           </>
//         )}

//         {step === 1 && (
//           <motion.div
//             key="memories"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -50, opacity: 0 }}
//             className="z-10 w-full max-w-6xl space-y-8 mt-24 px-4"
//           >
//             <div className="text-center space-y-2">
//               <h2 className="text-4xl font-bold text-primary flex items-center justify-center gap-3 italic">
//                 <Camera className="text-accent animate-pulse" /> Our Sweetest Memories
//               </h2>
//               <p className="opacity-60 italic">From March 2024 to Forever...</p>
//             </div>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {MEMORIES.map((memory, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.2 }}
//                 >
//                   <Card className="overflow-hidden border-none shadow-xl bg-white/60 backdrop-blur-sm group h-full">
//                     <div
//                       className={`h-48 ${memory.color} relative overflow-hidden`}
//                     >
//                        <img 
//                         src={memory.image} 
//                         alt={memory.title}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                        />
//                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
//                     </div>
//                     <div className="p-6">
//                       <span className="text-xs font-bold text-primary/60 tracking-widest uppercase">{memory.date}</span>
//                       <h3 className="text-xl font-bold mt-1 text-primary">{memory.title}</h3>
//                       <p className="text-foreground/70 mt-2 text-sm italic">{memory.description}</p>
//                     </div>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//             <div className="flex justify-center gap-4">
//               <Button variant="ghost" onClick={prevStep} className="rounded-full">
//                 Back
//               </Button>
//               <Button onClick={nextStep} className="rounded-full px-8 bg-primary shadow-lg shadow-primary/20">
//                 Next Step <ArrowRight className="ml-2" />
//               </Button>
//             </div>
//           </motion.div>
//         )}

//         {step === 2 && (
//           <motion.div
//             key="letter"
//             initial={{ scale: 0.95, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ x: -100, opacity: 0 }}
//             className="z-10 w-full max-w-2xl px-4"
//           >
//             <Card className="p-8 md:p-16 border-none shadow-2xl pookie-gradient relative overflow-hidden rounded-[2.5rem]">
//               <div className="absolute top-8 right-8 text-primary/10">
//                 <Heart size={180} fill="currentColor" />
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary italic font-serif">My Dearest Aanchal,</h2>
              
//               <div className="text-lg md:text-xl text-foreground/80 leading-relaxed space-y-6 font-medium italic h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary/20">
//                 <p>
//                   Happy New Year, 2026. As I watch the calendar change, I’m overwhelmed by how fast time has flown. It feels surreal that we are walking into another year together.
//                 </p>
//                 <p>
//                   It’s been almost two years since our journey started on <strong>March 3, 2024</strong>. Looking back, I realize that the best parts of my past are all the moments I’ve spent with you.
//                 </p>
//                 <p>
//                   I still think about those early memories that built us—finding peace with you at the <strong>Hanuman Mandir</strong> and that night at <strong>Engifest</strong>, where I held your hand through the whole function. I knew even then that I never wanted to let go.
//                 </p>
//                 <p>
//                   And now, looking back at <strong>December 19, 2024</strong>, over a year has passed since that magical day—our first kiss and that walk through Akshardham. That day wasn't just a moment; it was the foundation of everything we have now.
//                 </p>
//                 <p>
//                     Thank you for sticking by my side. Here’s to us, and to the lifetime ahead.
//                 </p>
//                 <p className="text-primary font-bold mt-4">Yours forever,<br/>Prakhar</p>
//               </div>

//               <div className="flex justify-between items-center mt-8 pt-8 border-t border-primary/10">
//                 <Button variant="ghost" onClick={prevStep} className="rounded-full">
//                   <ArrowLeft className="mr-2" /> Back
//                 </Button>
//                 <Button onClick={nextStep} className="rounded-full px-8 bg-primary">
//                   Continue <ArrowRight className="ml-2" />
//                 </Button>
//               </div>
//             </Card>
//           </motion.div>
//         )}

//         {step === 3 && (
//           <motion.div
//             key="promises"
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             className="z-10 w-full max-w-2xl space-y-8 px-4"
//           >
//             <div className="text-center">
//               <h2 className="text-4xl font-bold text-primary flex items-center justify-center gap-3">
//                 <Sparkles className="text-yellow-500" /> 7 Sacred Promises <Sparkles className="text-yellow-500" />
//               </h2>
//               <p className="text-foreground/60 mt-2 italic">These are etched in my heart for 2026...</p>
//             </div>
//             <div className="grid gap-4">
//               {PROMISES.map((promise, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ x: -30, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: i * 0.15 }}
//                 >
//                   <Card className="p-5 bg-white/40 backdrop-blur-sm border-none shadow-sm hover:shadow-md transition-all flex items-center gap-6 group rounded-2xl">
//                     <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
//                       {i + 1}
//                     </div>
//                     <p className="text-lg italic font-medium text-foreground/90 leading-snug">{promise}</p>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//             <div className="flex justify-center pt-10">
//               <Button
//                 onClick={nextStep}
//                 size="lg"
//                 className="rounded-full px-16 py-8 text-xl bg-primary shadow-xl shadow-primary/20"
//               >
//                 I Promise Forever <Heart className="ml-2 fill-current" />
//               </Button>
//             </div>
//           </motion.div>
//         )}

//         {step === 4 && (
//           <motion.div
//             key="quiz"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="z-10 w-full max-w-md px-4"
//           >
//             <Card className="p-10 border-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white/90 backdrop-blur-xl rounded-[2rem]">
//               <div className="text-center mb-8">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Stars className="text-primary" size={32} />
//                 </div>
//                 <h2 className="text-2xl font-bold text-primary">How well do you know us?</h2>
//                 <p className="text-sm text-foreground/50 mt-1">
//                   Question {quizIndex + 1} of {QUIZ_QUESTIONS.length}
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <div className="text-xl font-bold text-center mb-6 leading-tight italic">
//                   "{QUIZ_QUESTIONS[quizIndex].question}"
//                 </div>
//                 <div className="grid gap-3">
//                   {QUIZ_QUESTIONS[quizIndex].options.map((opt, i) => (
//                     <Button
//                       key={i}
//                       variant="outline"
//                       className="justify-start py-8 px-6 text-md rounded-2xl border-2 border-muted hover:border-primary hover:bg-primary/5 bg-transparent transition-all active:scale-95 whitespace-normal h-auto"
//                       onClick={() => {
//                         if (i === QUIZ_QUESTIONS[quizIndex].correct) {
//                           setScore((s) => s + 1)
//                           toast({ title: "Yes! You're my smart pookie! ❤️" })
//                         } else {
//                           toast({ title: "I'll forgive you because you're cute! 🥺", variant: "destructive" })
//                         }

//                         if (quizIndex < QUIZ_QUESTIONS.length - 1) {
//                           setQuizIndex((q) => q + 1)
//                         } else {
//                           nextStep()
//                         }
//                       }}
//                     >
//                       <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3 text-sm font-bold group-hover:bg-primary/20 shrink-0">
//                         {String.fromCharCode(65 + i)}
//                       </span>
//                       {opt}
//                     </Button>
//                   ))}
//                 </div>
//               </div>
//             </Card>
//           </motion.div>
//         )}

//         {step === 5 && (
//           <motion.div
//             key="final"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="z-10 text-center space-y-10 mt-20 px-4"
//           >
//             <div className="relative inline-block">
//               <motion.div
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   rotate: [0, 5, -5, 0],
//                 }}
//                 transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//                 className="cursor-pointer"
//                 onClick={() => toast({ title: "Unlimited Kisses Sent! 💋" })}
//               >
//                 <Heart
//                   size={200}
//                   className="text-primary fill-current filter drop-shadow-[0_0_30px_rgba(255,100,100,0.4)]"
//                 />
//               </motion.div>
//               <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
//                 <Sparkles className="absolute -top-10 -right-10 text-yellow-400 w-16 h-16" />
//               </motion.div>
//               <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}>
//                 <Stars className="absolute -bottom-10 -left-10 text-accent w-16 h-16" />
//               </motion.div>
//               <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg animate-bounce">
//                 <MessageCircleHeart size={24} />
//               </div>
//             </div>

//             <div className="space-y-6">
//               <h2 className="text-6xl md:text-8xl font-black text-primary tracking-tighter italic">HAPPY 2026!</h2>
//               <div className="bg-white/30 dark:bg-white/10 backdrop-blur-sm p-6 rounded-3xl inline-block border border-white/20">
//                 <p className="text-2xl font-serif italic opacity-80">
//                   "To many more years of being your favorite person."
//                 </p>
//               </div>
//               <div className="text-lg font-bold text-primary/60 tracking-widest uppercase">
//                 Pookie Quiz Master Level: {score}/{QUIZ_QUESTIONS.length}
//               </div>
//             </div>

//             <div className="flex flex-col items-center gap-4 pt-10">
//               <Button
//                 onClick={() => setStep(0)}
//                 size="lg"
//                 variant="outline"
//                 className="rounded-full px-12 border-primary text-primary hover:bg-primary/10"
//               >
//                 Relive the Magic 🔄
//               </Button>
//               <p className="text-sm opacity-40 italic">I love you more than words can say.</p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }





"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Heart,
  Stars,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Camera,
  Gift,
  Moon,
  Sun,
  MessageCircleHeart,
  Rocket,
} from "lucide-react"
import { InteractiveTree } from "./interactive-tree"

// --- INTERNAL COMPONENTS (Fixed to work without extra files) ---

const Button = ({ children, onClick, className, variant, size, ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full text-sm font-bold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
  const variants = {
    default: "bg-pink-600 text-white hover:bg-pink-700 shadow-lg hover:scale-105",
    outline: "border-2 border-pink-200 bg-transparent hover:bg-pink-50 text-pink-600",
    ghost: "hover:bg-pink-100 text-pink-600",
  }
  // @ts-ignore
  const selectedVariant = variants[variant] || variants.default
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${selectedVariant} ${className} h-12 px-6`} {...props}>
      {children}
    </button>
  )
}

const Card = ({ children, className }: any) => (
  <div className={`rounded-3xl border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
)

// --- MAIN APP ---

const PROMISES = [
  "I promise to always be your safe place and your home.",
  "I promise to listen to your silence just as much as your words.",
  "I promise to never stop choosing you, every single day.",
  "I promise to support your wildest dreams with everything I have.",
  "I promise to be the one who makes you laugh when you want to cry.",
  "I promise to grow with you, through every season of life.",
  "I promise to love you more tomorrow than I do today.",
]

const MEMORIES = [
  {
    title: "The Beginning",
    description: "March 3, 2024 - The day our beautiful journey officially started.",
    date: "Mar 3, 2024",
    image: "/our_first.jpeg", 
    color: "bg-red-400",
  },
  {
    title: "Hanuman Mandir",
    description: "Finding peace, home, and blessings in your presence.",
    date: "Spiritual Date",
    image: "/hanuman_mandir.jpeg",
    color: "bg-orange-400",
  },
  {
    title: "Metro Diaries",
    description: "Long rides, endless talks, and holding hands on our commute.",
    date: "Metro Dates",
    image: "/photo2.jpg",
    color: "bg-blue-400",
  },
  {
    title: "Metro Moments",
    description: "Even a simple metro ride becomes a romantic date with you.",
    date: "Cute Commutes",
    image: "/photo3.jpg",
    color: "bg-pink-400",
  },
]

const QUIZ_QUESTIONS = [
  {
    question: "Will you be mine for forever?",
    options: ["Yes, forever!", "Always and forever", "No doubt about it", "In every lifetime"],
    correct: 0,
  },
  {
    question: "Will you always be loyal to me?",
    options: ["Only to you", "My heart is yours", "Cross my heart", "Absolutely always"],
    correct: 0,
  },
  {
    question: "Will you promise to be my pookie for the rest of our lives?",
    options: ["I pinky promise", "Yes, my love", "Of course", "Forever pookie"],
    correct: 0,
  },
]

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date("Jan 1, 2026 00:00:00").getTime() 
      const distance = target - now

      if (distance < 0) {
         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
         setTimeLeft({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-4 justify-center py-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-3 w-16 h-16 flex items-center justify-center text-2xl font-bold text-pink-600 shadow-sm border border-white/50">
            {value}
          </div>
          <span className="text-[10px] uppercase tracking-widest text-pink-600/60 mt-1 font-semibold">{unit}</span>
        </div>
      ))}
    </div>
  )
}

export function NewYearLoveApp() {
  const [step, setStep] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showSurprise, setShowSurprise] = useState(false)
  const [quizIndex, setQuizIndex] = useState(0)
  const [score, setScore] = useState(0)

  // Replaced toast with simple alert since we removed the hook
  const handleQuizAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
       setScore((s) => s + 1)
       // Optional: alert("Correct! ❤️") 
    } else {
       // Optional: alert("Wrong but I still love you! 🥺")
    }

    if (quizIndex < QUIZ_QUESTIONS.length - 1) {
      setQuizIndex((q) => q + 1)
    } else {
      nextStep()
    }
  }

  const nextStep = () => {
    setStep((s) => s + 1)
    setShowSurprise(false)
  }
  const prevStep = () => setStep((s) => s - 1)

  const steps = ["Intro", "Memories", "Letter", "Promises", "Quiz", "2026"]

  return (
    <div
      className={`relative min-h-screen overflow-hidden flex flex-col items-center p-4 transition-colors duration-500 ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-pink-50 text-slate-900"}`}
    >
      <nav className="fixed top-6 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 px-6 py-2 rounded-full flex items-center gap-2 shadow-lg overflow-x-auto max-w-[90vw]">
        {steps.map((label, i) => (
          <button
            key={label}
            onClick={() => setStep(i)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              step === i ? "bg-pink-600 text-white scale-110" : "hover:bg-pink-600/10 text-pink-600/60"
            }`}
          >
            {label}
          </button>
        ))}
        <div className="w-[1px] h-4 bg-pink-600/20 mx-2" />
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 hover:bg-pink-600/10 rounded-full transition-colors text-pink-600"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Heart
              size={Math.random() * 24 + 12}
              className={`${isDarkMode ? "text-pink-600/10" : "text-pink-600/20"} fill-current`}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <>
            <InteractiveTree />
            <motion.div
              key="intro"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              className="z-10 text-center space-y-6 max-w-md mt-20"
            >
              <div className="relative group inline-block">
                <div className="w-64 h-64 flex items-center justify-center">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
                    <Countdown />
                  </div>
                </div>

                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="absolute -top-4 -right-4 bg-yellow-400 p-3 rounded-2xl shadow-lg cursor-pointer z-20"
                  onClick={() => setShowSurprise(!showSurprise)}
                >
                  <Gift className="text-white" />
                </motion.div>
                {showSurprise && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border-2 border-pink-600 z-30 w-48"
                  >
                    <p className="text-sm font-bold text-pink-600">
                      I have a million reasons to love you, but let's start with this website! 🎁
                    </p>
                  </motion.div>
                )}
              </div>
              <h1 className="text-5xl font-bold text-pink-600 tracking-tight">Hey Aanchal...</h1>
              <p className="text-xl opacity-70 leading-relaxed font-medium">
                Every leaf on this tree is a heartbeat I have for you. Ready for our 2026?
              </p>
              <Button
                onClick={nextStep}
                size="lg"
                className="rounded-full px-12 py-8 text-xl bg-pink-600 hover:scale-105 transition-transform shadow-xl shadow-pink-600/20"
              >
                Start Our Journey <Rocket className="ml-2 animate-bounce" />
              </Button>
            </motion.div>
          </>
        )}

        {step === 1 && (
          <motion.div
            key="memories"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="z-10 w-full max-w-6xl space-y-8 mt-24 px-4"
          >
            <div className="text-center space-y-2">
              <h2 className="text-4xl font-bold text-pink-600 flex items-center justify-center gap-3 italic">
                <Camera className="text-pink-400 animate-pulse" /> Our Sweetest Memories
              </h2>
              <p className="opacity-60 italic">From March 2024 to Forever...</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MEMORIES.map((memory, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Card className="overflow-hidden border-none shadow-xl bg-white/60 backdrop-blur-sm group h-full">
                    <div
                      className={`h-48 ${memory.color} relative overflow-hidden`}
                    >
                       <img 
                        src={memory.image} 
                        alt={memory.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       />
                       <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold text-pink-600/60 tracking-widest uppercase">{memory.date}</span>
                      <h3 className="text-xl font-bold mt-1 text-pink-600">{memory.title}</h3>
                      <p className="text-slate-700 mt-2 text-sm italic">{memory.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" onClick={prevStep} className="rounded-full">
                Back
              </Button>
              <Button onClick={nextStep} className="rounded-full px-8 bg-pink-600 shadow-lg shadow-pink-600/20">
                Next Step <ArrowRight className="ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="letter"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="z-10 w-full max-w-2xl px-4"
          >
            <Card className="p-8 md:p-16 border-none shadow-2xl bg-gradient-to-br from-pink-50 to-white relative overflow-hidden rounded-[2.5rem]">
              <div className="absolute top-8 right-8 text-pink-600/10">
                <Heart size={180} fill="currentColor" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-pink-600 italic font-serif">My Dearest Aanchal,</h2>
              
              <div className="text-lg md:text-xl text-slate-800 leading-relaxed space-y-6 font-medium italic h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-pink-600/20">
                <p>
                  Happy New Year, 2026. As I watch the calendar change, I’m overwhelmed by how fast time has flown. It feels surreal that we are walking into another year together.
                </p>
                <p>
                  It’s been almost two years since our journey started on <strong>March 3, 2024</strong>. Looking back, I realize that the best parts of my past are all the moments I’ve spent with you.
                </p>
                <p>
                  I still think about those early memories that built us—finding peace with you at the <strong>Hanuman Mandir</strong> and that night at <strong>Engifest</strong>, where I held your hand through the whole function. I knew even then that I never wanted to let go.
                </p>
                <p>
                  And now, looking back at <strong>December 19, 2024</strong>, over a year has passed since that magical day—our first kiss and that walk through Akshardham. That day wasn't just a moment; it was the foundation of everything we have now.
                </p>
                <p>
                    Thank you for sticking by my side. Here’s to us, and to the lifetime ahead.
                </p>
                <p className="text-pink-600 font-bold mt-4">Yours forever,<br/>Prakhar</p>
              </div>

              <div className="flex justify-between items-center mt-8 pt-8 border-t border-pink-600/10">
                <Button variant="ghost" onClick={prevStep} className="rounded-full">
                  <ArrowLeft className="mr-2" /> Back
                </Button>
                <Button onClick={nextStep} className="rounded-full px-8 bg-pink-600">
                  Continue <ArrowRight className="ml-2" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="promises"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="z-10 w-full max-w-2xl space-y-8 px-4"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-pink-600 flex items-center justify-center gap-3">
                <Sparkles className="text-yellow-500" /> 7 Sacred Promises <Sparkles className="text-yellow-500" />
              </h2>
              <p className="text-slate-600 mt-2 italic">These are etched in my heart for 2026...</p>
            </div>
            <div className="grid gap-4">
              {PROMISES.map((promise, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <Card className="p-5 bg-white/40 backdrop-blur-sm border-none shadow-sm hover:shadow-md transition-all flex items-center gap-6 group rounded-2xl">
                    <div className="w-12 h-12 rounded-2xl bg-pink-600/10 flex items-center justify-center text-pink-600 font-black text-xl shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                      {i + 1}
                    </div>
                    <p className="text-lg italic font-medium text-slate-800 leading-snug">{promise}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center pt-10">
              <Button
                onClick={nextStep}
                size="lg"
                className="rounded-full px-16 py-8 text-xl bg-pink-600 shadow-xl shadow-pink-600/20"
              >
                I Promise Forever <Heart className="ml-2 fill-current" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="quiz"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="z-10 w-full max-w-md px-4"
          >
            <Card className="p-10 border-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white/90 backdrop-blur-xl rounded-[2rem]">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-pink-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stars className="text-pink-600" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-pink-600">How well do you know us?</h2>
                <p className="text-sm text-slate-400 mt-1">
                  Question {quizIndex + 1} of {QUIZ_QUESTIONS.length}
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-xl font-bold text-center mb-6 leading-tight italic">
                  "{QUIZ_QUESTIONS[quizIndex].question}"
                </div>
                <div className="grid gap-3">
                  {QUIZ_QUESTIONS[quizIndex].options.map((opt, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className="justify-start py-8 px-6 text-md rounded-2xl border-2 border-slate-100 hover:border-pink-600 hover:bg-pink-50 bg-transparent transition-all active:scale-95 whitespace-normal h-auto"
                      onClick={() => handleQuizAnswer(i === QUIZ_QUESTIONS[quizIndex].correct)}
                    >
                      <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-3 text-sm font-bold group-hover:bg-pink-200 shrink-0">
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div
            key="final"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="z-10 text-center space-y-10 mt-20 px-4"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="cursor-pointer"
                onClick={() => alert("Unlimited Kisses Sent! 💋")}
              >
                <Heart
                  size={200}
                  className="text-pink-600 fill-current filter drop-shadow-[0_0_30px_rgba(255,100,100,0.4)]"
                />
              </motion.div>
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
                <Sparkles className="absolute -top-10 -right-10 text-yellow-400 w-16 h-16" />
              </motion.div>
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}>
                <Stars className="absolute -bottom-10 -left-10 text-pink-400 w-16 h-16" />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 bg-pink-600 text-white p-3 rounded-full shadow-lg animate-bounce">
                <MessageCircleHeart size={24} />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-6xl md:text-8xl font-black text-pink-600 tracking-tighter italic">HAPPY 2026!</h2>
              <div className="bg-white/30 dark:bg-white/10 backdrop-blur-sm p-6 rounded-3xl inline-block border border-white/20">
                <p className="text-2xl font-serif italic opacity-80">
                  "To many more years of being your favorite person."
                </p>
              </div>
              <div className="text-lg font-bold text-pink-600/60 tracking-widest uppercase">
                Pookie Quiz Master Level: {score}/{QUIZ_QUESTIONS.length}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 pt-10">
              <Button
                onClick={() => setStep(0)}
                size="lg"
                variant="outline"
                className="rounded-full px-12 border-pink-600 text-pink-600 hover:bg-pink-600/10"
              >
                Relive the Magic 🔄
              </Button>
              <p className="text-sm opacity-40 italic">I love you more than words can say.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
