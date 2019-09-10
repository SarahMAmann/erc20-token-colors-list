import React from 'react'

export const colors = [
    {name: 'EXAMPLE', value: '#FF0000'},
    {name: 'EXAMPLE', value: '#3374FF'},
]

export function getColorFromString(nameKey, myArray) {
    if (!myArray) {
		return null
	}
	for (const color of myArray) {
		if (color.name === nameKey) {
			return color.value
		}
	}
}

// const color = 'FLO'
// const resultObject = getColorFromString(color, colors)