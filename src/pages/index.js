import { Inter } from "next/font/google"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [seek, setSeek] = useState(0)

  return (
    <main className={`flex flex-col p-24 ${inter.className}`}>
      <div className="text-sm flex">
        <p className="border border-gray-300/10 bg-gray-400/10 rounded-xl p-4">
          Test Video playback &#34;jumps&#34;
        </p>
      </div>

      <div className="mb-32 grid md:grid-cols-[200px,1fr] mt-14">
        <div>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Go to{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <ul>
            {jumps.map((jump) => (
              <li
                key={jump.value}
                className="m-0 text-sm opacity-50 hover:opacity-100 hover:cursor-pointer"
                onClick={() => setSeek(jump.value)}
              >
                {jump.label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <iframe
            id="ytplayer"
            type="text/html"
            width="720"
            height="405"
            src={`https://www.youtube.com/embed/QtNop60dkN4?autoplay=1&start=${seek}`}
            allowFullScreen
          />
        </div>
      </div>
    </main>
  )
}
const jumps = [
  {
    label: "5:00",
    value: 5 * 60,
  },
  {
    label: "10:00",
    value: 10 * 60,
  },
  {
    label: "15:00",
    value: 15 * 60,
  },
  {
    label: "20:00",
    value: 20 * 60,
  },
  {
    label: "25:00",
    value: 25 * 60,
  },
  {
    label: "30:00",
    value: 30 * 60,
  },
]
