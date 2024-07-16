import { describe, test, expect } from "vitest";
import { findMentorForModule, getRandomNumber, possibleMentorsForModule } from "./1-find-mentors";
import { getActiveClasses, getPeopleOfClass } from "./2-class-list";

describe("prep exersice 3", () => {

    test('Return an array of strings with mentors that can teach a module', () => {
        const input = 'using-apis'
        const expected = ['Stas', 'Andrej', 'Yash', 'Collin']
        const result = possibleMentorsForModule(input)
        expect(result.length).toBe(4)
        expect(result[0]).toBe(expected[0])
        expect(result[1]).toBe(expected[1])
        expect(result[2]).toBe(expected[2])
        expect(result[3]).toBe(expected[3])
    })

    test('returns a random mentor name string given a module', () => {
        const input = 'javascript'
        const result = findMentorForModule(input)
        expect(typeof result).toBe('string')
        expect(result.length > 1).toBe(true)
    })

    test('getRandomNumber returns a random number', () => {
        const result = getRandomNumber(7)
        expect(typeof result).toBe('number')
        expect(result < 8).toBe(true)
    })

    test('Given a class returns an array of participant objects',  () => {
        const input = 'class34'
        const expected =  [{ name: 'Rob', role: 'student' }, { name: 'Shriyans', role: 'mentor' }]
        const result = getPeopleOfClass(input)
        expect(JSON.stringify(expected)).toBe(JSON.stringify(result))
    })

    test('Get active classes returns an object', () => {
        const result = getActiveClasses()
        expect(result).toBeDefined()
    })
})