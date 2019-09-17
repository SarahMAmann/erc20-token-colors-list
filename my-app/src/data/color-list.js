import React from 'react'

export const colors = [
    {name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE1', value: '#3374FF'},
	{name: 'EXAMPLE2', value: '#FF0000'},
	{name: 'EXAMPLE3', value: '#3374FF'},
	{name: 'EXAMPLE4', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
	{name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
	{name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
	{name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
	{name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
	{name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
	{name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
	{name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
	{name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
	{name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
	{name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
	{name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
	{name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
	{name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
	{name: 'EXAMPLE', value: '#FF0000'},
	{name: 'EXAMPLE', value: '#3374FF'},
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