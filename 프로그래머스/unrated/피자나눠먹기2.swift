import Foundation

func solution(_ n: Int) -> Int {
    return (1...).first { (6 * $0) % n == 0 }! // filter : 만족하는 요소만 모아서 return 즉 6 * $0 % n == 0을 만족하는 요소만 모아서 반환해줍니다
}
