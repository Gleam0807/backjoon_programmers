import Foundation

func solution(_ array:[Int]) -> Int {
    let sortArray = array.sorted()
    let middleIdx = array.count / 2
    
    return array.count % 2 == 1 ? sortArray[middleIdx] : sortArray[middleIdx - 1]
}