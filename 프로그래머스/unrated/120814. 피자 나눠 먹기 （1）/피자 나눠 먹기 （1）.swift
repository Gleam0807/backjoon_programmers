import Foundation

func solution(_ n:Int) -> Int {
    if Double(n) / 7.0 > 1 { return (n % 7) == 0 ? (n / 7) : (n / 7) + 1 }
    return 1
}