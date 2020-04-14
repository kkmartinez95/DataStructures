class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      connection => {
        if (connection !== vertex2) {
          return connection;
        }
      }
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      connection => {
        if (connection !== vertex1) {
          return connection;
        }
      }
    );
  }

  removeVertex(vertex) {
    // if you remove a Vertex, you must remove all connections(edges) to other vertecies!
    // while (this.adjacencyList[vertex].length) {
    //   const adjList = this.adjacencyList[vertex].pop();
    //   this.removeEdge(vertex, adjList);
    // }
    // delete this.adjacencyList[vertex];

    this.adjacencyList[vertex].forEach(connection => {
      this.removeEdge(vertex, connection);
    });
    delete this.adjacencyList[vertex];
  }

  DFSRecursive(startingNode) {
    // the input is a key or vertex
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    function helper(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return helper(neighbor);
        }
      });
    }

    helper(startingNode);

    return console.log(result), result;
  }
}

/*

** GRAPH TRAVERSAL!!

DFS PSEUDOCODE:
    => Base-case: if vertex is empty, return;
    => addvertex to results list
    => mark vertex as visited
    => for each neighbor in vertex's neighbors:
        if neighbor is not visited:
            recursively call DFS on neighbor
*/

let graph = new Graph();

// graph.addVertex("Kaitlyn");
// graph.addVertex("Jazsmin");
// graph.addVertex("emily");
// graph.addVertex("mom");
// graph.addVertex("jennifer");

// graph.addEdge("Kaitlyn", "emily");
// graph.addEdge("Kaitlyn", "Jazsmin");
// graph.addEdge("mom", "emily");
// graph.addEdge("mom", "jennifer");
// graph.addEdge("mom", "Kaitlyn");

// graph.removeEdge("Kaitlyn", "Jazsmin");
// graph.removeVertex("Kaitlyn");
// graph.DFSRecursive("emily");

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

graph.DFSRecursive("A");

console.log(graph);
