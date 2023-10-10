class Vector3 {
    X
    Y
    Z
    W
    Magnitude
    constructor(X=0,Y=0,Z=0) {
        this.X = X;this.Y = Y;this.Z=Z;
        this.Magnitude = Math.sqrt(X^2+Y^2+Z^2)
        this.W = 1
    }
    Values() {
        return this.X , this.Y, this.Z
    }
}

class Matrix4x4 {
    contents
    constructor(...content) {
        this.contents = []
        for (let Row = 1;Row < 5; Row++) {
            this.contents[Row-1] = []
            for (let Column = 1;Column < 5; Column++) {
                this.contents[Row-1][Column-1] = 0
            }
        }
        //console.info(this.contents)
        for (let Row = 0 ; Row < (4*4);Row++) {
            this.contents[Math.floor((Row)/4)][Row%4] = content[Row]
        }
    }
    MultiplyWithVector(Vector = new Vector3(0,0,0)) {
        var x = (Vector.X * this.contents[0][0]) + (Vector.Y * this.contents[1][0]) + (Vector.Z * this.contents[2][0]) + this.contents[3][0]
        var y = (Vector.X * this.contents[0][1]) + (Vector.Y * this.contents[1][1]) + (Vector.Z * this.contents[2][1]) + this.contents[3][1]
        var z = (Vector.X * this.contents[0][2]) + (Vector.Y * this.contents[1][2]) + (Vector.Z * this.contents[2][2]) + this.contents[3][2]
        var W = (Vector.X * this.contents[0][3]) + (Vector.Y * this.contents[1][3]) + (Vector.Z * this.contents[2][3]) + this.contents[3][3]
        
        if (W != 0) {
            x/= W; y/= W; z/=W
        }

        let NewVector = new Vector3(x,y,z)
        return NewVector
    }
}

class Vector2 {
    X
    Y
    Magnitude
    constructor(X=0,Y=0) {
        this.X = X;this.Y = Y;
        this.Magnitude = Math.sqrt(X^2+Y^2)
    }
    Values() {
        return this.X , this.Y
    }
}

export  {Vector2 , Vector3,Matrix4x4};