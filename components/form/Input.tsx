import cx from '~/lib/cx'

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

  const classNames = cx(
    'px-4 py-2 mt-2 border rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800 text-gray-200 border-gray-600',
    error ? 'border-red-500' : undefined
  )

  return (
    <div className={cx('flex flex-col', className)}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-[#E0ECEB]">
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
          className={classNames}
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
          className={classNames}
          {...props}
        />
      )}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
