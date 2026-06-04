'use client'

import { useEffect, useId, useRef, useState } from 'react'

type AddressSuggestion = {
  label: string
  lat: string
  lon: string
}

type AddressLookupFieldProps = {
  name?: string
  required?: boolean
}

export default function AddressLookupField({ name = 'address', required = false }: AddressLookupFieldProps) {
  const listboxId = useId()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    function handlePointerDown(event: MouseEvent): void {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [])

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    if (query.trim().length < 3) {
      setSuggestions([])
      setIsOpen(false)
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    debounceRef.current = setTimeout(async () => {
      try {
        const response = await fetch(`/api/address/search?q=${encodeURIComponent(query.trim())}`)
        const data = (await response.json()) as { results?: AddressSuggestion[] }
        const nextSuggestions = data.results ?? []
        setSuggestions(nextSuggestions)
        setIsOpen(nextSuggestions.length > 0)
        setActiveIndex(-1)
      } catch {
        setSuggestions([])
        setIsOpen(false)
      } finally {
        setIsLoading(false)
      }
    }, 300)

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [query])

  function selectSuggestion(suggestion: AddressSuggestion): void {
    setQuery(suggestion.label)
    setSuggestions([])
    setIsOpen(false)
    setActiveIndex(-1)
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (!isOpen || suggestions.length === 0) {
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((index) => (index + 1) % suggestions.length)
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((index) => (index <= 0 ? suggestions.length - 1 : index - 1))
    }

    if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault()
      selectSuggestion(suggestions[activeIndex])
    }

    if (event.key === 'Escape') {
      setIsOpen(false)
      setActiveIndex(-1)
    }
  }

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-sm font-semibold text-white" htmlFor={`${name}-input`}>
        Service address
        <input
          id={`${name}-input`}
          type="text"
          name={name}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => {
            if (suggestions.length > 0) {
              setIsOpen(true)
            }
          }}
          onKeyDown={handleKeyDown}
          required={required}
          autoComplete="street-address"
          placeholder="Start typing your street address"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          className="mt-1 h-11 w-full rounded-md border border-brand-border bg-brand-bg px-3 text-sm text-white placeholder:text-slate-400"
        />
      </label>
      {isLoading ? <p className="mt-1 text-xs text-slate-400">Looking up addresses...</p> : null}
      {isOpen ? (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute z-20 mt-1 max-h-48 w-full overflow-auto rounded-md border border-brand-border bg-brand-surface py-1 shadow-lg"
        >
          {suggestions.map((suggestion, index) => (
            <li key={`${suggestion.lat}-${suggestion.lon}-${index}`} role="option" aria-selected={index === activeIndex}>
              <button
                type="button"
                className={`w-full px-3 py-2 text-left text-sm text-slate-200 hover:bg-brand-bg ${
                  index === activeIndex ? 'bg-brand-bg text-white' : ''
                }`}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => selectSuggestion(suggestion)}
              >
                {suggestion.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
