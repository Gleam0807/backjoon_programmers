import Foundation

func solution(_ n: Int) -> Int {
    return (1...).first { (6 * $0) % n == 0 }!
}
