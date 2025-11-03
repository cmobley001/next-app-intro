export default function LabWeek({ week, title, children }) {
  return (
    <div className="text-center">
      <h2 className="text-lg">
        This is Week <span className="font-bold">#{week}</span> for Lab <span className="font-bold">{title}</span>
      </h2>
      {children}
    </div>
  )
}
