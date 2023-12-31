import Foundation

func gcd(_ a: Int, _ b: Int) -> Int {
    if a % b == 0 {
        return b
    }
    return gcd(b, a % b)
}

func solution(_ numer1:Int, _ denom1:Int, _ numer2:Int, _ denom2:Int) -> [Int] {
    var gcdF = gcd((denom1 * numer2 + denom2 * numer1), denom1 * denom2)
    return [(denom1 * numer2 + denom2 * numer1) / gcdF, (denom1 * denom2) / gcdF]
}