import {Vector2, Vector3,Matrix4x4} from "./Vectors.js"
import {Projection} from "./Projection.js"
import {Mesh,CubeTriangles,MeshTriangle} from "./Models.js"

class Calculations {
    
}

class Engine {
    Screen 
    Context
    FramesPerSecond
    DrawWidth
    NormalizedVector 
    DeltaTime
    
    Frame

    constructor(ScreenId,FPS=30,Fov=90,DW=2) {
        this.Screen = document.getElementById(ScreenId)
        this.FramesPerSecond = FPS
        this.Screen.width = window.innerWidth
        this.Screen.height = window.innerHeight
        let Context = this.Screen.getContext("2d")
        this.Context = Context
        this.DrawWidth = DW || 1
        this.NormalizedVector = new Vector2((window.innerWidth/2),(window.innerHeight/2))
        
        this.ProjectionInstance = new Projection(Fov,this.Screen.width,this.Screen.height)
        this.Frame = 0
        this.cube = new Mesh(CubeTriangles)

        //var MatrixTest = 
       // new Matrix4x4
        //( 1,0,0,0,
       //   0,1,0,0,
        //  0,0,1,0,
        //  0,0,0,1 )
        //console.info(MatrixTest,this.Projection)
        
        //this.DrawPolygon(new Vector2(0,-20),new Vector2(20,20), new Vector2(-20,20))
        this.Loop()
    }
    DrawMesh(Mesh){
      let TriProject = []
      for (let i=0;i<Mesh.Triangles.length;i++) {
        let Tri = Mesh.Triangles[i]
        console.info(CubeTriangles)
        Tri.Vertex[0].Z += 1.0; Tri.Vertex[1].Z += 1.0 ; Tri.Vertex[2].Z += 1.0;
        let P1 = this.ProjectionInstance.Matrix.MultiplyWithVector(Tri.Vertex[0])
        let P2 = this.ProjectionInstance.Matrix.MultiplyWithVector(Tri.Vertex[1])
        let P3 = this.ProjectionInstance.Matrix.MultiplyWithVector(Tri.Vertex[2])
        console.info("Triangle ",i," :",P1.X,P1.Y,P1.Z)
        TriProject[i] = new MeshTriangle([P1,P2,P3])
      }
      for (let i=0;i < TriProject.length;i++) {
        let Tri = TriProject[i]
        let P1 =Tri.Vertex[0]
        let P2 =Tri.Vertex[1]
        let P3 =Tri.Vertex[2]
        Tri.Vertex[0].X += 1.0; Tri.Vertex[0].Y += 1.0;
        Tri.Vertex[1].X += 1.0; Tri.Vertex[1].Y += 1.0;
        Tri.Vertex[2].X += 1.0; Tri.Vertex[2].Y += 1.0;

        console.info(this.Screen.width,this.Screen.height,"Screen Height")

        Tri.Vertex[0].X *= (0.5* this.Screen.width) ; Tri.Vertex[0].Y *= (0.5* this.Screen.height);
        Tri.Vertex[1].X *= (0.5* this.Screen.width) ; Tri.Vertex[1].Y *= (0.5* this.Screen.height);
        Tri.Vertex[2].X *= (0.5* this.Screen.width) ; Tri.Vertex[2].Y *= (0.5* this.Screen.height);
    }
      
      this.DrawPolygonColection(TriProject)
    }

    Update() {
        this.Context.clearRect(0,0,this.Screen.width,this.Screen.height)
        this.DrawMesh(this.cube)

        this.Frame +=1 

        console.info("FrameUpdated!"," Frame:", this.Frame)
    }
    async Loop() {
        while (true) {
            this.Update()
            await new Promise(r=> setTimeout(r,5000))
        }
    }
    DrawPolygonColection(Collection) {
        //console.info(Collection)
        for (let i=0;i < Collection.length;i++) {
            let Tri = Collection[i]
            let P1 =Tri.Vertex[0]
            let P2 =Tri.Vertex[1]
            let P3 =Tri.Vertex[2]

            //console.info("Triangle ",i," :",P1.X,P1.Y,P1.Z)
            this.DrawPolygon(P1,P2,P3)
        }
    }
    DrawLine(Origin,Destination) {
        this.Context.beginPath()
        this.Context.moveTo(Origin.X,Origin.Y)
        this.Context.lineTo(Destination.X,Destination.Y)
        this.Context.stroke()
        
    }
    DrawPolygon(Point_1,Point_2,Point_3) {
        var P1 = new Vector2(Point_1.X 
            //+ this.NormalizedVector.X 
            ,Point_1.Y 
            //+ this.NormalizedVector.Y
            )
        var P2 = new Vector2(Point_2.X 
            //+ this.NormalizedVector.X 
            ,Point_2.Y 
            //+ this.NormalizedVector.Y
            )
        var P3 = new Vector2(Point_3.X 
            //+ this.NormalizedVector.X 
            ,Point_3.Y 
            //+ this.NormalizedVector.Y
            )
        //console.info(P1,P2,P3,this.NormalizedVector)
        this.DrawLine(P1,P2)
        this.DrawLine(P2,P3)
        this.DrawLine(P3,P1)
    }
}

var HTML_Engine = new Engine("EngineScreen",60,90,2);

//alert("3D Engine has been initiazed");