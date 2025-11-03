import LabWeek from './LabWeek'

export default function Hero() {
  return (
    <>
      <div className="mb-6 min-h-[300px]">
        <h1 className="text-2xl font-bold text-center mt-6 gap-y-2 p-6">My First React Page</h1>
        <LabWeek week="10" title="Next.js Introduction">
          <p className="mt-2">
            Github repo:{' '}
            <a href="https://github.com/cmobley001/next-app-intro" target="_blank">
              https://github.com/cmobley001/next-app-intro
            </a>
          </p>
        </LabWeek>
      </div>
    </>
  )
}
