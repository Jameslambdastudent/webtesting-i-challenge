const { expect, test } = require('@jest/globals');
const enhancer = require('./enhancer.js');

const tire = {name: "Tire", enhancement: 12, durability: 40}
const rim = {name: "Rim", enhancement: 20, durability: 60}
const donut = {name: "Donut", enhancement: 15, durability: 40}

// test away!
test ("testing repair", () => {
    expect(enhancer.repair(tire).durability).toBe(100)
})

test('testing success', () => {
    expect(enhancer.success(tire).enhancement).toBe(13)
    expect(enhancer.success(rim).enhancement).toBe(20)
    expect(enhancer.success(donut).enhancement).toBe(16)
})

test('testing durability failure', () => {
    expect(enhancer.fail(tire).durability).toBe(35)
    expect(enhancer.fail(rim).durability).toBe(50)
    expect(enhancer.fail(donut).durability).toBe(30)
})

test('testing enhancement failure', () => {
    expect(enhancer.fail(tire).enhancement).toBe(12)
    expect(enhancer.fail(rim).enhancement).toBe(19)
    expect(enhancer.fail(donut).enhancement).toBe(15)
})

test('testing modified name', () => {
    expect(enhancer.get(tire).name).toBe("[+12] Tire")
    expect(enhancer.get(rim).name).toBe("[+20] Rim")
    expect(enhancer.get(donut).name).toBe("[+15] Donut")
})