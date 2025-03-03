import { Button } from "@/components/ui/button"
import { PartyPopper } from "lucide-react"

export default function Home() {
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
          {/* Button with gradient */}
          <a
            href="mailto:dean@example.com?subject=My%20Desperate%20Plea%20for%20Attendance!%20%F0%9F%98%85&body=Dear%20Dean%2C%0A%0AI%20hope%20your%20day%20is%20less%20chaotic%20than%20my%20attendance%20record%2C%20which%20looks%20like%20a%20haunted%20house%E2%80%94full%20of%20absences%20and%20eerie%20silence.%20%F0%9F%91%BB%F0%9F%8F%9A%0A%0ALife%20has%20been%20a%20relentless%20series%20of%20unfortunate%20events.%20My%20alarm%20clock%20has%20become%20my%20sworn%20enemy%20%F0%9F%95%B0%F0%9F%A7%A8%2C%20and%20my%20pet%20goldfish%20has%20seen%20more%20therapists%20than%20I%20can%20count.%20%F0%9F%90%A0%F0%9F%9B%B0%20It%27s%20like%20the%20universe%20is%20conspiring%20against%20my%20presence%20in%20class.%0A%0ASo%2C%20here%20I%20am%2C%20on%20my%20knees%2C%20begging%20for%20a%20chance%20to%20bring%20my%20attendance%20back%20from%20the%20dead.%20I%20promise%20to%20be%20more%20punctual%20than%20the%20Grim%20Reaper%20%F0%9F%8F%B1%EF%B8%8F%20and%20as%20dedicated%20as%20a%20zombie%20to%20brains.%20%F0%9F%A7%9F%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%A7%A0%0A%0AThanks%20for%20considering%20my%20desperate%20plea%20for%20mercy.%20%F0%9F%99%8F%F0%9F%98%84%0A%0AYours%20in%20desperation%2C%0A%5BYour%20Full%20Name%5D%0A%5BYour%20Roll%20Number%5D%0A%5BYour%20Email%20Address%5D%0A%5BYour%20Phone%20Number%5D%0A"

            className="block w-full"
          >
            <Button
              size="lg"
              className="w-full text-lg py-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white border-4 border-white shadow-lg transition-all duration-300 hover:scale-105 rounded-full font-bold"
            >
              GET FREE ATTENDANCE NOW!
            </Button>
          </a>

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

