import Foundation

func solution(_ array:[Int]) -> Int {
    var dic = [Int:Int]()
    for i in array {
        if dic.keys.contains(i) {
            dic[i]! += 1
        } else {
            dic[i] = 1
        }
    }
    let maxCount = dic.filter{$0.value == dic.values.max()!}.keys
    return maxCount.count == 1 ? maxCount.first! : -1
}
