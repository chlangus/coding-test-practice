function solution(numbers) {
    const sortedArray = numbers.map((item)=> ''+item).sort((a,b)=>(b+a)-(a+b)).join('');
    return sortedArray[0] === '0' ? '0' : sortedArray;
}