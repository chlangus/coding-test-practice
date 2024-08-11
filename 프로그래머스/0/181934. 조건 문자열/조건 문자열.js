function solution(ineq, eq, n, m) {
    var answer = 0;
    if(eq=== '='){
        if(ineq === '>') return n >= m ? 1 : 0;    
        else return n <= m ? 1 : 0;
    }else {
        if(ineq === '>') return n > m ? 1 : 0;    
        else return n < m ? 1 : 0;
        
    }
    return answer;
}