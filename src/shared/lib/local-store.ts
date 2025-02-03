export function setToLocalStorage(key: string, value: unknown): void {
	localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Retrieves a value from localStorage, parsing it as JSON and validating it with a type guard.
 * If parsing or validation fails, returns a default value.
 *
 * @template T The type of the value being retrieved.
 * @param key The key under which the value is stored in localStorage.
 * @param guard A type guard function that checks if a value is of type T.
 * @param defaultValue The default value to return if the stored value is not valid or doesn't pass the guard.  Defaults to null.
 * @returns The stored value (of type T) if it exists, is valid JSON, and passes the type guard. Otherwise, returns the defaultValue.
 */
export function getSafeLocalStoreItem<T>(key: string, guard: (value: unknown) => value is T, defaultValue: T): T {
	const storedValue = localStorage.getItem(key)
	if (storedValue) {
		try {
			const parsedValue = JSON.parse(storedValue)

			if (guard(parsedValue)) {
				return parsedValue
			}
		} catch (error) {
			console.error(`Error parsing or validating stored value for key "${key}"`, error)
		}
	}
	return defaultValue
}
