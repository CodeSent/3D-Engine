import {Vector2, Vector3,Matrix4x4} from "./Vectors.js"

class Projection {
    AcseptRatio
    FOV
    ZFar
    ZNear
    Q

    Matrix

    constructor(Fov,W,H) {
        this.AcseptRatio = (H/W)
        this.FOV = 1/(Math.tan(Fov/2))
        this.ZFar = 1000.0
        this.ZNear = 0.1
        this.Q = this.ZFar/(this.ZFar-this.ZNear)
        var a = this.AcseptRatio
        var f = this.FOV
        var q = this.Q
        var z = (this.ZNear * this.ZFar)/(this.ZFar-this.ZNear)
        this.Matrix = new Matrix4x4(
            a*f,0,  0,   0,
            0,  f,  0,   0,
            0,  0,  q,   1,
            0 , 0,  z,   0
        )
    }
}

export {Projection}