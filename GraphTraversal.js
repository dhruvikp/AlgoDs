class Graph {
    constructor() {
        this.adjancencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjancencyList[vertex]) {
            this.adjancencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {

        if(!this.adjancencyList[vertex1]) {
            this.addVertex(vertex1);
        }

        if(!this.adjancencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjancencyList[vertex1].push(vertex2);
        this.adjancencyList[vertex2].push(vertex1);
    }

    bfs(start) {

        const queue = [start];
        const result = [];
        const visited = new Set();
        visited.add(start);

        while(queue.length) {
            const vertex = queue.shift();   
            result.push(vertex);
            this.adjancencyList[vertex].forEach(neighbor => {
                if(!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','D');
graph.addEdge('C','E');
graph.addEdge('D','E');

console.log("BFS Traversal starting from 'A' is: ", graph.bfs('A'));


