/**
 * Dijkstra is an algo helps find the shortest path between 2 vertices
 */

const Graph = require('./graph');
const PriorityQueue = require('./priority-queue');

/**
 * Simple weighted graph, which for the sake
 * of simplicity, we ignore remove edge and vertex
 */
class WeightedGraph extends Graph {
  constructor() {
    super();
  }

  addEdge(i, j, weight) {
    if (this._keys().indexOf(i) !== -1 && this._keys().indexOf(j) !== -1) {
      this.adjacencyList[i].push({ node: j, weight });
      this.adjacencyList[j].push({ node: i, weight });
    }
  }

  //Dijkstra algorithm
  Dijkstra(startVertex, endVertex) {
    //Initial state
    const distances = {};
    const previous = {};
    const nodes = new PriorityQueue();
    let result = [];

    let smallest;

    for (let key in this.adjacencyList) {
      if (key === startVertex) {
        distances[key] = 0;
        nodes.enqueue(key, 0);
      } else {
        distances[key] = Infinity;
        nodes.enqueue(key, Infinity);
      }
      previous[key] = null;
    }

    //as long as there still need to visit
    while (nodes.values.length) {
      //smallest is the node with the shortest path and we not visited yet
      smallest = nodes.dequeue().val;
      if (smallest === endVertex) {
        // DONE, WE NEED TO BUILD PATH
        let previousNode = previous[smallest];
        result.push(smallest);
        while (previousNode) {
          result.push(previousNode);
          previousNode = previous[previousNode];
        }
        result = result.reverse();
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let nextNode of this.adjacencyList[smallest]) {
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          //nextNeighbor is the neighbor of smallest
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to nextNeighbor
            distances[nextNeighbor] = candidate;
            //updating the previous node to the nextNeighbor
            previous[nextNeighbor] = smallest;
            //enqueue the priority queue with updated distances
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return result;
  }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
console.log(graph.Dijkstra('A', 'E'));
