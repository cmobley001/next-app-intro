export default function LabWeek({ week, title, children }) {
  return (
    <div className="text-center">
      <h2 className="text-lg">
        This is Week #{week} for Lab "{title}"
      </h2>
      {children}
    </div>
  )
}
