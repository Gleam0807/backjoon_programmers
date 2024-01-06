import Foundation

func solution(_ numbers: [Int]) -> Double {
    let sum = Double(numbers.reduce(0, +))
    return sum / Double(numbers.count)
}