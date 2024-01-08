import Foundation

func solution(_ n: Int) -> Int {
    return (1...).first { (6 * $0) % n == 0 }! // first : 만족하는 첫번째 요소 tuple로 return
}
