export default function TipBox({ children, type = 'info' }) {
  const styles = {
    info: 'bg-blue-50 border-blue-400 text-blue-900',
    warning: 'bg-yellow-50 border-yellow-400 text-yellow-900',
    success: 'bg-green-50 border-green-400 text-green-900',
  }
  return <div className={`border-l-4 p-4 my-6 rounded ${styles[type]}`}>{children}</div>
}
