interface Props {
  label?: string
  name: string
  type?: string
  placeholder?: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  error?: string
  className?: string
}

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export const Input: React.FC<Props> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  className,
  ...props
}) => {
  const isTextArea = type === 'textarea'

  return (
    <div className={classNames('flex flex-col', className)}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
        </label>
      )}
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classNames(
            'px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600',
            error ? 'border-red-500' : undefined
          )}
          rows={5}
          {...props}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classNames(
            'px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600',
            error ? 'border-red-500' : undefined
          )}
          {...props}
        />
      )}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
