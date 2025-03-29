import { classnames } from "./classnames"

describe('classnames', () => {
    test('with first argument only', () => {
        expect(classnames('someClass')).toBe('someClass')
    })
    
    test('with additions array', () => {
        const result = 'someClass class1 class 2'
        expect(classnames('someClass', {}, ['class1', 'class 2'])).toBe(result)
    })

    test('with onle rights mods', () => {
        const result = 'someClass class1 visible scrollable'
        expect(classnames(
            'someClass', 
            { visible: true, scrollable: true },
            ['class1']))
            .toBe(result)
    })

    test('with right and wrong mods', () => {
        const result = 'someClass class1 visible'
        expect(classnames(
            'someClass', 
            { visible: true, scrollable: false },
            ['class1']))
            .toBe(result)
    })

    test('with undefind mod', () => {
        const result = 'someClass class1 visible scrollable'
        expect(classnames(
            'someClass', 
            { visible: true, scrollable: true },
            ['class1']))
            .toBe(result)
    })

})