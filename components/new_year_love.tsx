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
  Clock,
  Gift,
  Moon,
  Sun,
  MessageCircleHeart,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { InteractiveTree } from "./interactive-tree"

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
    title: "Our First Date",
    description: "The day my world changed forever.",
    date: "Feb 14, 2024",
    color: "bg-red-400",
  },
  {
    title: "That Rainy Night",
    description: "Dancing in the street like nobody was watching.",
    date: "May 22, 2024",
    color: "bg-blue-400",
  },
  {
    title: "Summer Sunsets",
    description: "Watching the sky turn pink while holding your hand.",
    date: "Aug 10, 2024",
    color: "bg-orange-400",
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

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-4 justify-center py-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-3 w-16 h-16 flex items-center justify-center text-2xl font-bold text-primary shadow-sm border border-white/50">
            {value}
          </div>
          <span className="text-[10px] uppercase tracking-widest text-primary/60 mt-1 font-semibold">{unit}</span>
        </div>
      ))}
    </div>
  )
}

export function NewYearLoveApp() {
  const [step, setStep] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [showSurprise, setShowSurprise] = useState(false)
  const [quizIndex, setQuizIndex] = useState(0)
  const [score, setScore] = useState(0)
  const { toast } = useToast()

  const nextStep = () => {
    setStep((s) => s + 1)
    setShowSurprise(false)
  }
  const prevStep = () => setStep((s) => s - 1)

  const steps = ["Intro", "Memories", "Letter", "Promises", "Quiz", "2026"]

  return (
    <div
      className={`relative min-h-screen overflow-hidden flex flex-col items-center p-4 transition-colors duration-500 ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-background text-foreground"}`}
    >
      <nav className="fixed top-6 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
        {steps.map((label, i) => (
          <button
            key={label}
            onClick={() => setStep(i)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              step === i ? "bg-primary text-white scale-110" : "hover:bg-primary/10 text-primary/60"
            }`}
          >
            {label}
          </button>
        ))}
        <div className="w-[1px] h-4 bg-primary/20 mx-2" />
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 hover:bg-primary/10 rounded-full transition-colors text-primary"
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
              className={`${isDarkMode ? "text-primary/10" : "text-primary/20"} fill-current`}
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
                    className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border-2 border-primary z-30 w-48"
                  >
                    <p className="text-sm font-bold text-primary">
                      I have a million reasons to love you, but let's start with this website! 🎁
                    </p>
                  </motion.div>
                )}
              </div>
              <h1 className="text-5xl font-bold text-primary tracking-tight">Hey Pookie...</h1>
              <p className="text-xl opacity-70 leading-relaxed font-medium">
                Every leaf on this tree is a heartbeat I have for you. Ready for our 2026?
              </p>
              <Button
                onClick={nextStep}
                size="lg"
                className="rounded-full px-12 py-8 text-xl bg-primary hover:scale-105 transition-transform shadow-xl shadow-primary/20"
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
            className="z-10 w-full max-w-4xl space-y-8 mt-24"
          >
            <div className="text-center space-y-2">
              <h2 className="text-4xl font-bold text-primary flex items-center justify-center gap-3 italic">
                <Camera className="text-accent animate-pulse" /> Our Sweetest Memories
              </h2>
              <p className="opacity-60 italic">Click the memories to see a special note!</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {MEMORIES.map((memory, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Card className="overflow-hidden border-none shadow-xl bg-white/60 backdrop-blur-sm group">
                    <div
                      className={`h-40 ${memory.color} flex items-center justify-center text-white relative overflow-hidden`}
                    >
                      <Heart
                        className="absolute -right-4 -bottom-4 opacity-20 scale-150"
                        size={100}
                        fill="currentColor"
                      />
                      <Clock size={40} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold text-primary/60 tracking-widest uppercase">{memory.date}</span>
                      <h3 className="text-xl font-bold mt-1 text-primary">{memory.title}</h3>
                      <p className="text-foreground/70 mt-2 text-sm italic">{memory.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" onClick={prevStep} className="rounded-full">
                Back
              </Button>
              <Button onClick={nextStep} className="rounded-full px-8 bg-primary shadow-lg shadow-primary/20">
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
            className="z-10 w-full max-w-2xl"
          >
            <Card className="p-8 md:p-16 border-none shadow-2xl pookie-gradient relative overflow-hidden rounded-[2.5rem]">
              <div className="absolute top-8 right-8 text-primary/10">
                <Heart size={180} fill="currentColor" />
              </div>
              <h2 className="text-4xl font-bold mb-8 text-primary italic font-serif">My Dearest Pookie,</h2>
              <div className="text-xl text-foreground/80 leading-relaxed space-y-6 font-medium italic">
                <p>
                  As the clock ticks closer to 2026, I looked back at every memory we made. You are the light that turns
                  my grey days into pink ones.
                </p>
                <p>
                  Every "I love you" from you feels like a new beginning. I promise to hold your hand through every
                  season of this coming year, just like I did in the last.
                </p>
                <p className="text-primary font-bold">You are my forever and always.</p>
              </div>
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-primary/10">
                <Button variant="ghost" onClick={prevStep} className="rounded-full">
                  <ArrowLeft className="mr-2" /> Back
                </Button>
                <Button onClick={nextStep} className="rounded-full px-8 bg-primary">
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
            className="z-10 w-full max-w-2xl space-y-8"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-primary flex items-center justify-center gap-3">
                <Sparkles className="text-yellow-500" /> 7 Sacred Promises <Sparkles className="text-yellow-500" />
              </h2>
              <p className="text-foreground/60 mt-2 italic">These are etched in my heart for 2026...</p>
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
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                      {i + 1}
                    </div>
                    <p className="text-lg italic font-medium text-foreground/90 leading-snug">{promise}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center pt-10">
              <Button
                onClick={nextStep}
                size="lg"
                className="rounded-full px-16 py-8 text-xl bg-primary shadow-xl shadow-primary/20"
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
            className="z-10 w-full max-w-md"
          >
            <Card className="p-10 border-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white/90 backdrop-blur-xl rounded-[2rem]">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stars className="text-primary" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-primary">How well do you know us?</h2>
                <p className="text-sm text-foreground/50 mt-1">
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
                      className="justify-start py-8 px-6 text-md rounded-2xl border-2 border-muted hover:border-primary hover:bg-primary/5 bg-transparent transition-all active:scale-95"
                      onClick={() => {
                        if (i === QUIZ_QUESTIONS[quizIndex].correct) {
                          setScore((s) => s + 1)
                          toast({ title: "Yes! You're my smart pookie! ❤️" })
                        } else {
                          toast({ title: "I'll forgive you because you're cute! 🥺", variant: "destructive" })
                        }

                        if (quizIndex < QUIZ_QUESTIONS.length - 1) {
                          setQuizIndex((q) => q + 1)
                        } else {
                          nextStep()
                        }
                      }}
                    >
                      <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3 text-sm font-bold group-hover:bg-primary/20">
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
            className="z-10 text-center space-y-10 mt-20"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="cursor-pointer"
                onClick={() => toast({ title: "Unlimited Kisses Sent! 💋" })}
              >
                <Heart
                  size={200}
                  className="text-primary fill-current filter drop-shadow-[0_0_30px_rgba(255,100,100,0.4)]"
                />
              </motion.div>
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
                <Sparkles className="absolute -top-10 -right-10 text-yellow-400 w-16 h-16" />
              </motion.div>
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}>
                <Stars className="absolute -bottom-10 -left-10 text-accent w-16 h-16" />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg animate-bounce">
                <MessageCircleHeart size={24} />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-6xl md:text-8xl font-black text-primary tracking-tighter italic">HAPPY 2026!</h2>
              <div className="bg-white/30 dark:bg-white/10 backdrop-blur-sm p-6 rounded-3xl inline-block border border-white/20">
                <p className="text-2xl font-serif italic opacity-80">
                  "To many more years of being your favorite person."
                </p>
              </div>
              <div className="text-lg font-bold text-primary/60 tracking-widest uppercase">
                Pookie Quiz Master Level: {score}/{QUIZ_QUESTIONS.length}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 pt-10">
              <Button
                onClick={() => setStep(0)}
                size="lg"
                variant="outline"
                className="rounded-full px-12 border-primary text-primary hover:bg-primary/10"
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
