import React, { forwardRef } from 'react'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'

interface InputProps<T extends FieldValues> {
  placeholder: string
  error?: string
  field?: ControllerRenderProps<T>
}

const Input = forwardRef<
  HTMLInputElement,
  InputProps<ControllerRenderProps<Omit<FieldValues, 'ref'>>>
>(({ placeholder, error, ...field }, ref) => {
  return (
    <div className="grid grid-cols-1">
      <div className="relative">
        <input
          ref={ref}
          id={placeholder}
          type="text"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          {...field}
        />
        <label
          htmlFor={placeholder}
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3.5 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {placeholder}
        </label>
      </div>
      {error ? (
        <p className="text-sm text-red-600 font-light">{error}</p>
      ) : null}
    </div>
  )
})
export default Input
