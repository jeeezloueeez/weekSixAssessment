const {shuffleArray} = require('./utils')

describe('Tests for Shuffle Array Functionality', ()=>{
    test('returns an array', ()=>{
        let shuffledArray = shuffleArray.res.data
        expect(typeof shuffleArray).toBe([])
    })
})