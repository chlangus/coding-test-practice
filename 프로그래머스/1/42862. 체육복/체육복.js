function solution(n, lost, reserve) {
    // 잃어버린애가 체육복을 갖고있을때는 어디에도 없는것과 동일
    const lostSet = new Set(lost.filter((lostStudent) => !reserve.includes(lostStudent)));
    const reserveSet = new Set(reserve.filter((reserveStudent) => !lost.includes(reserveStudent)));
    
    // 체육복 빌려주는 경우
    Array.from(reserveSet).sort((a, b) => a - b).forEach(reserveStudent =>{
        if(lostSet.has(reserveStudent-1)) lostSet.delete(reserveStudent-1);
        else if(lostSet.has(reserveStudent+1)) lostSet.delete(reserveStudent+1);
    })
    
    // 잃어버린애들 빼주기
    return n - lostSet.size
}