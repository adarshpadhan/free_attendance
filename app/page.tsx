"use client"

import { Button } from "@/components/ui/button"
import { PartyPopper } from "lucide-react"
import { useCallback } from "react"

export default function Home() {
  // Handle button click with JavaScript instead of using an href
  const handleButtonClick = useCallback(() => {
    const emailAddress = "dean@university.edu"
    const subject = "My Desperate Plea for Attendance! 😅"
    const body =
      "Dear Dean,\n\n" +
    "I hope your day is less chaotic than my attendance record, which looks like a haunted house—full of absences and eerie silence. 👻🏚️\n\n" +
    "Life has been a relentless series of unfortunate events. My alarm clock has become my sworn enemy ⏰🧨, and my pet goldfish has seen more therapists than I can count. 🐠🛋️ It's like the universe is conspiring against my presence in class.\n\n" +
    "So, here I am, on my knees, begging for a chance to bring my attendance back from the dead. I promise to be more punctual than the Grim Reaper ⏱️ and as dedicated as a zombie to brains. 🧟‍♂️🧠\n\n" +
    "Thanks for considering my desperate plea for mercy. 🙏😄\n\n" +
    "Yours in desperation,\n" +
    "[Your Full Name]\n" +
    "[Your Roll Number]\n" +

    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open the email client programmatically
    window.location.href = mailtoUrl
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 p-4">
      <div className="max-w-md w-full bg-white/20 backdrop-blur-md rounded-[32px] p-8 shadow-xl border border-white/30">
        {/* Title with party poppers in a single line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <PartyPopper className="w-8 h-8 text-yellow-300" />
          <h1 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">Free Attendance!</h1>
          <PartyPopper className="w-8 h-8 text-yellow-300" />
        </div>

        <p className="text-xl text-white text-center mb-8">
          Click the magical button below and never worry about attendance again!
        </p>

        <div className="relative">
          {/* Button with onClick handler instead of href */}
          <Button
            size="lg"
            className="w-full text-lg py-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white border-4 border-white shadow-lg transition-all duration-300 hover:scale-105 rounded-full font-bold cursor-pointer"
            onClick={handleButtonClick}
          >
            GET FREE ATTENDANCE NOW!
          </Button>

          {/* Decorative sparkles */}
          <div className="absolute -top-3 -left-3 w-6 h-6 text-yellow-300 rotate-12">★</div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 text-yellow-300 -rotate-12">★</div>
        </div>

        <p className="mt-8 text-white/80 text-center text-sm">
          One click is all it takes to solve your attendance problems!
        </p>
      </div>
    </div>
  )
}

