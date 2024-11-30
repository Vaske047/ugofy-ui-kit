import '@testing-library/jest-dom/extend-expect'
import { getObjectKeys, countMissingKeys } from './utilities'
import defaults, { optionsKeys } from './ugofy/defaults'

const plainObject = {
  value1: 'hey',
  value2: 'there'
}

describe('Test theme utilities', () => {
  it('Sould return keys of plain object', () => {
    const plainKeys = ['NO_NEST.value1', 'NO_NEST.value2']
    expect(getObjectKeys(plainObject, 'NO_NEST')).toEqual(plainKeys)
  })

  it('Should return keys of nested object', () => {
    const nestedObject = {
      nestedObjValue: 'val1',
      nestedObjValue2: 'val2',
      nested: plainObject
    }
    const nestedKeys = [
      'NESTED.nestedObjValue',
      'NESTED.nestedObjValue2',
      'NESTED.nested',
      'NESTED.nested.value1',
      'NESTED.nested.value2'
    ]

    expect(getObjectKeys(nestedObject, 'NESTED')).toEqual(nestedKeys)
  })

  it('Should return keys of nested object', () => {
    const data = {
      color: 'color value',
      width: 'width value',
      nested: plainObject,
      thirdLevel: {
        thirdLevelNested: {
          thirdLevelKey1: 'Third level value 1',
          thirdLevelKey2: 'Third level value 2',
          thirdLevelKey3: 'Third level value 3'
        },
        thirdLevelNestedSecondary: plainObject
      }
    }
    const expectation = [
      'NESTED.color',
      'NESTED.width',
      'NESTED.nested',
      'NESTED.nested.value1',
      'NESTED.nested.value2',
      'NESTED.thirdLevel',
      'NESTED.thirdLevel.thirdLevelNested',
      'NESTED.thirdLevel.thirdLevelNested.thirdLevelKey1',
      'NESTED.thirdLevel.thirdLevelNested.thirdLevelKey2',
      'NESTED.thirdLevel.thirdLevelNested.thirdLevelKey3',
      'NESTED.thirdLevel.thirdLevelNestedSecondary',
      'NESTED.thirdLevel.thirdLevelNestedSecondary.value1',
      'NESTED.thirdLevel.thirdLevelNestedSecondary.value2'
    ]

    expect(getObjectKeys(data, 'NESTED')).toEqual(expectation)
  })

  it('Should return 1 missing key', () => {
    expect(countMissingKeys({ value1: 1 }, ['value1', 'value2'])).toEqual(1)
  })
  it('Should return 0 missing key', () => {
    expect(countMissingKeys(plainObject, ['value1', 'value2'])).toEqual(0)
  })

  it('Should return 0 missing key for defaults', () => {
    expect(countMissingKeys(defaults, optionsKeys)).toEqual(0)
  })

  it('Should return 3 missing key for defaults', () => {
    expect(countMissingKeys(defaults, [...optionsKeys, '1', '2', '3'])).toEqual(
      3
    )
  })
})
