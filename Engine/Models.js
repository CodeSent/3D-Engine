import {Vector3,Matrix4x4} from "./Vectors.js"
let CubeTriangles = [
    //South
    [new Vector3(0,0,0),new Vector3(0,1,0),new Vector3(1,1,0)],
    [new Vector3(0,0,0),new Vector3(1,1,0),new Vector3(1,0,0)],
    //East
    [new Vector3(1,0,0),new Vector3(1,1,0),new Vector3(1,1,1)],
    [new Vector3(1,0,0),new Vector3(1,1,1),new Vector3(1,0,1)],
    //North
    [new Vector3(1,0,1),new Vector3(1,1,1),new Vector3(0,1,1)],
    [new Vector3(1,0,1),new Vector3(0,1,1),new Vector3(0,0,1)],
    //West
    [new Vector3(0,0,1),new Vector3(0,1,1),new Vector3(0,1,0)],
    [new Vector3(0,0,1),new Vector3(0,1,0),new Vector3(0,0,0)],
    // Top
    [new Vector3(0,1,0),new Vector3(0,1,1),new Vector3(1,1,1)],
    [new Vector3(0,1,0),new Vector3(1,1,1),new Vector3(1,1,0)],
    //Bottom
    [new Vector3(1,0,1),new Vector3(0,0,1),new Vector3(0,0,0)],
    [new Vector3(1,0,1),new Vector3(1,0,1),new Vector3(1,0,0)]
]

class MeshTriangle {
    Vertex
    constructor(Vertex) {
        this.Vertex = Vertex
    }
}
class Mesh {
    Triangles
    constructor(TriangleCollection) {
        this.Triangles = []
        for (let i=0; i < TriangleCollection.length;i++) {
            this.Triangles[i] = new MeshTriangle(TriangleCollection[i])
        }
    }
} 

export {Mesh,CubeTriangles,MeshTriangle}