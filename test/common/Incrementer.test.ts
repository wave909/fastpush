import { expect } from 'chai'
import { Incrementer } from '../../src/utils/increment/Incrementer'

describe(`patch increments`, () => {
  it(`should increment patch`, () => {
    const version = Incrementer.increment('0.0.0', 'patch')
    expect(version).to.equal('0.0.1')
  })

  it(`should be 10 when was be 9`, () => {
    const version = Incrementer.increment('0.0.9', 'patch')
    expect(version).to.equal('0.0.10')
  })

  it(`should increment patch and not modify minor or major`, () => {
    const version = Incrementer.increment('1.2.3', 'patch')
    expect(version).to.equal('1.2.4')
  })
})

describe(`minor increments`, () => {
  it(`should increment minor and reset patch`, () => {
    const version = Incrementer.increment('1.2.3', 'minor')
    expect(version).to.equal('1.3.0')
  })
})

describe(`major increments`, () => {
  it(`should increment major and reset minor and patch`, () => {
    const version = Incrementer.increment('1.2.3', 'major')
    expect(version).to.equal('2.0.0')
  })
})

describe(`corner cases incremenet`, () => {
  it(`should return null if input empty`, () => {
    const version = Incrementer.increment('', 'minor')
    expect(version).to.equal(null)
  })

  it(`should return null if input null`, () => {
    const version = Incrementer.increment(null, 'minor')
    expect(version).to.equal(null)
  })

  it(`should return null if input undefined`, () => {
    const version = Incrementer.increment(undefined, 'minor')
    expect(version).to.equal(null)
  })

  it(`should increment if version string bigger than 3 symbols`, () => {
    const version = Incrementer.increment('0.1.2.3', 'major')
    expect(version).to.equal('1.0.0.0')
  })
})

describe(`version migration`, () => {
  it(`should migrate from 4 digits to 3 digits`, () => {
    const version = Incrementer.tryMigrateVersion('1.2.3.4')
    expect(version).to.equal('1.2.3')
  })

  it(`should migrate from 2 digits to 3 digits`, () => {
    const version = Incrementer.tryMigrateVersion('1.2')
    expect(version).to.equal('1.2.0')
  })

  it(`should not migrate if contains not numbers`, () => {
    const version = Incrementer.tryMigrateVersion('1.2.a')
    expect(version).to.equal(null)
  })
})
