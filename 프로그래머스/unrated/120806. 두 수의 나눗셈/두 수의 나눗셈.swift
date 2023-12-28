import Foundation

func solution(_ num1:Int, _ num2:Int) -> Int {
    guard num2 != 0 else { return 0 }

    let result = (num1 * 1000) / num2

    return result
}