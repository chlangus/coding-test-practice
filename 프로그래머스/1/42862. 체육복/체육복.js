function solution(n, lost, reserve) {
     const reserveSet = new Set(reserve.filter(r => !lost.includes(r)));
  const lostSet = new Set(lost.filter(l => !reserve.includes(l)));

  // 체육복을 빌려줄 수 있는 경우 처리
  for (let student of Array.from(reserveSet).sort((a, b) => a - b)) {
    if (lostSet.has(student - 1)) {
      lostSet.delete(student - 1);
    } else if (lostSet.has(student + 1)) {
      lostSet.delete(student + 1);
    }
  }

  // 전체 학생 수에서 체육복을 빌리지 못한 학생 수를 빼줌
  return n - lostSet.size;
}