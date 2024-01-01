import Image from "next/image"

import profileImage from "./assets/images/profile-photo.png"

export const runtime = "edge"

export default function Home() {
  return (
    <div className="mx-auto flex h-[70vh] flex-col items-center justify-center gap-6 border-gray-200 pb-16 dark:border-gray-700">
      <div className="mx-auto w-[80px] sm:mb-0 sm:w-[176px]">
        <Image
          alt="Golamrabbi Azad"
          height={500}
          width={500}
          src={profileImage}
          sizes="30vw"
          priority
          className="h-full w-full rounded-full object-contain"
        />
      </div>

      <div className="ml-4 flex flex-col pr-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-black drop-shadow-md md:text-5xl dark:text-white dark:drop-shadow-md">
          Hi! I&apos;m Rabbi.
        </h1>
        <h2 className="mt-3 text-xl text-gray-700 dark:text-gray-200">
          I&apos;m a Software Engineer with experience in <br />
          <span className="text-md">
            web development & 🐞 an OSS Contributor.
          </span>
        </h2>
      </div>

      <div className="ml-4 text-center">
        <p className="mb-16 text-xl text-gray-600 dark:text-gray-400">
          I talk about TypeScript, Next.js, React.js, and JavaScript ecosystems.
        </p>
      </div>

      {/* <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        Featured Posts
      </h3> */}
    </div>
  )
}
