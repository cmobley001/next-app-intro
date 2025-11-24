export function useMDXComponents(components) {
  return {
    // Customize MDX components here
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-4 mt-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-3 mt-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-2 mt-4">{children}</h3>,
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
    li: ({ children }) => <li className="ml-4">{children}</li>,
    a: ({ href, children }) => (
      <a href={href} className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
    code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>,
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
    ),
    ...components,
  }
}
