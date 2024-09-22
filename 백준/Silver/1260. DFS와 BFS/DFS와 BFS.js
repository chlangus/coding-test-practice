const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
[N, M, V] = input.shift().split(" ").map(Number);

let dfs_answer = [];
let bfs_answer = [];
let dfs_visited = Array(N + 1).fill(0);
let bfs_visited = Array(N + 1).fill(0);
// 깊이우선
const dfs = (start) => {
  dfs_answer.push(start); // 방문 노드 추가
  dfs_visited[start] = 1; // 방문 표시
  for (i of graph[start]) {
    if (!dfs_visited[i]) dfs(i);
  }
};

// 너비우선
const bfs = (start) => {
  const q = [];

  q.push(start);
  bfs_answer.push(start);
  bfs_visited[start] = 1;
  while (q.length) {
    const c = q.shift();
    graph[c].forEach((i) => {
      if (!bfs_visited[i]) {
        q.push(i);
        bfs_answer.push(i);
        bfs_visited[i] = 1;
      }
    });
  }
};

let graph = [...new Array(N + 1)].map(() => []);

for (let i = 0; i < +M; i++) {
  [s, e] = input[i].split(" ").map(Number);
  graph[s].push(e);
  graph[e].push(s);
}
graph.forEach((items) => items.sort((a, b) => a - b));

dfs(V);
console.log(dfs_answer.join(' '));
bfs(V);
console.log(bfs_answer.join(' '));
