/**
 * Graph is a collection of vertices (nodes)
 * and their edge (connection)
 * there are 2 ways to represent a graph
 *
 * Regarding the adjacency we have directed (subcriptiosn, follow
 * relationship: e.g Instagram) and undirected (friends connection, e.g: Facebook)
 *
 * We also have weighted (each adjacency has a value, e.g: the map
 * with each route has a length) and unweighted
 *
 * 1. Adjacency list: We have the list of all
 * the vertices, each item is a list of all the other
 * veretexes it connected to. Takes less space but longer to query
 * 2. Adjacency matrix: 2 directions table with each
 * axis is a list of all the vertices, the correspond
 * value in each cell is either true (connected) or false (not connected)
 * takes more space and query faster
 * We are going to implement Adjacency List
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  _keys() {
    return Object.keys(this.adjacencyList);
  }

  addVertex(name) {
    if (this._keys().indexOf(name) === -1) this.adjacencyList[name] = [];
  }
}
//Undirected graph
class UnweightedGraph extends Graph {
  constructor() {
    super();
  }

  addEdge(i, j) {
    if (this._keys().indexOf(i) !== -1 && this._keys().indexOf(j) !== -1) {
      this.adjacencyList[i].push(j);
      this.adjacencyList[j].push(i);
    }
  }

  removeEdge(i, j) {
    if (this._keys().indexOf(i) !== -1 && this._keys().indexOf(j) !== -1) {
      this.adjacencyList[i] = this.adjacencyList[i].filter(
        (item) => item !== j
      );
      if (this.adjacencyList[i].length === 0) delete this.adjacencyList[i];
      this.adjacencyList[j] = this.adjacencyList[j].filter(
        (item) => item !== i
      );
      if (this.adjacencyList[j].length === 0) delete this.adjacencyList[j];
    }
  }

  removeVertex(vertex) {
    if (this._keys().indexOf(vertex) !== -1) {
      const adjacencies = this.adjacencyList[vertex];
      for (let i = 0; i < adjacencies.length; i++) {
        const key = adjacencies[i];
        this.adjacencyList[key] = this.adjacencyList[key].filter(
          (item) => item !== vertex
        );
      }
      delete this.adjacencyList[vertex];
    }
  }

  // Depth First, with recursive
  traverseDFS(startVertex) {
    const results = [];
    const visited = {};
    function helper(vertex, _this) {
      if (!visited[vertex]) {
        results.push(vertex);
        visited[vertex] = true;
        if (_this.adjacencyList[vertex].length) {
          _this.adjacencyList[vertex].forEach((item) => helper(item, _this));
        }
      }
      return;
    }
    helper(startVertex, this);
    return results;
  }

  // Breadth First, with iterative
  traverseBFS(startVertex) {
    const results = [];
    const queue = [];
    let visited = {};
    queue.push(startVertex);
    while (queue.length) {
      let item = queue.shift();
      if (!visited[item]) {
        visited[item] = true;
        results.push(item);
        if (this.adjacencyList[item]) {
          this.adjacencyList[item].forEach((i) => queue.push(i));
        }
      }
    }
    return results;
  }
}

// const graph = new UnweightedGraph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('F');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');
// graph.addEdge('D', 'F');
// graph.addEdge('E', 'F');

// console.log(graph.traverseBFS('A'));
// console.log(graph.traverseDFS('A'));

module.exports = Graph;
