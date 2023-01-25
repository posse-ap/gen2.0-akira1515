function setup(){
    createCanvas(400, 400);
    for(let i=0; i<12; i++){
        let p = new Vec2((i%4)*90+50 , floor(i/4)*50+50);
        blocks.push(new Block(p, 20));
    }
}

// // ボールの位置ベクトルの成分
// let ballPx = 100;
// // let ballPy = 200;
// // ボールの速度ベクトルの成分
// let ballVx = 120;
// let ballVy = 60;

// function draw(){
//     // ボールを移動させる
//     ballPx = ballPx + ballVx/60;
//     ballPy = ballPy + ballVy/60;

//     if ((ballPx < 15)||(ballPx > 385)){
//         ballVx = -ballVx;
//     }

//     if (ballPy < 15){
//         ballVy = -ballVy;
//     }
//     // 描画
//     background(220);
//     circle(ballPx, ballPy, 30);
// }


class Vec2 {
    constructor(_x, _y){
        this.x = _x;
        this.y = _y;
    }
    // このベクトルと、引数のベクトルbの和を計算
    add(b){
        let a = this;
        return new Vec2(a.x+b.x, a.y+b.y);
    }
    // このベクトルを実数s倍したベクトルを計算
    mul(s){
        let a = this;
        return new Vec2(s*a.x, s*a.y);   
    }
    //このベクトルの大きさを求める
    mag(){
        let a =this;
        return sqrt(a.x**2 + a.y**2);
    }
    //このベクトルと引数のベクトルbの差を求める
    sub(b){
        let a =this;
        return new Vec2(a.x-b.x, a.y-b.y);
    }
    //このベクトルを正規化したベクトルを求める
    norm(){
        let a = this;
        return a.mul(1/a.mag());
    }
    //このベクトルと引数のベクトルbの、ドット積(内積)を求める
    dot(b){
        let a = this;
        return a.x*b.x + a.y*b.y;
    }
    //このベクトルの反射ベクトルを求める
    //wは、法線ベクトルとする。
    reflect(w){
        let v = this;
        let cosTheta = v.mul(-1).dot(w) / (v.mul(-1).mag() * w.mag());
        let n = w.norm().mul(v.mag() * cosTheta);
        let r = v.add(n.mul(2)); 
        return r;
    }
}

class Ball {
    constructor(_p, _v, _r){
        this.p = _p; //ボールの中心の位置ベクトル
        this.v = _v; //ボールの速度ベクトル
        this.r = _r; //ボールの半径
    }
}

class Block{
    constructor(_p, _r){
        this.p = _p;　//ブロックの中心の位置ベクトル
        this.r = _r; //ブロックの半径
    }
}

class Paddle{
    constructor(_p, _r){
        this.p = _p;　//パドルの中心の位置ベクトル
        this.r = _r; //パドルの半径
    }
}

//ブロックを作る
let blocks = [];

//パドルを作る
let paddle = new Paddle(new Vec2(200, 320), 30);

//ボールを作る
let ball = new Ball(
    new Vec2(200, 300),
    new Vec2(240, -60),
    15
);
let ball2 = new Ball(
    new Vec2(200, 300),
    new Vec2(240, 60),
    30
);
let ball3 = new Ball(
    new Vec2(200, 300),
    new Vec2(240, 60),
    10
);
let ball4 = new Ball(
    new Vec2(200, 300),
    new Vec2(-240, -60),
    20
);
let ball5 = new Ball(
    new Vec2(200, 300),
    new Vec2(-240, 60),
    5
);
//ボールを配列化
let balls = [ball, ball2, ball3, ball4, ball5];

function draw(){
    // var random = Math.floor( Math.random() * 5 );
    // console.log(random);

    for(let i=0; i<balls.length; i++){
    // ボールを移動させる
    balls[i].p = balls[i].p.add(balls[i].v.mul(1/60));

    // ボールが左端か右端にきたら反射
    if((balls[i].p.x < 15)||(balls[i].p.x > 385)){
        balls[i].v.x = -balls[i].v.x;
    }

    if((balls[i].p.y < 15)||(balls[i].p.y > 385)){
        balls[i].v.y = -balls[i].v.y;
    }
    //ボールとブロックの衝突判定
    for(let block of blocks){
    let d = block.p.sub(balls[i].p).mag(); //距離
    if (d < (balls[i].r+block.r)){
        //ぶつかっていたら、ボールの速度を反射させる
        let w = balls[i].p.sub(block.p);
        let r = balls[i].v.reflect(w);
        balls[i].v = r;
        //ブロックを消す
        blocks.splice(blocks.indexOf(block), 1);
        }
    }
    //パドルの操作
    paddle.p.x = mouseX;
    //ボールとパドルの衝突判定
    let d = paddle.p.sub(balls[i].p).mag(); //距離
    if (d < (balls[i].r+paddle.r)){
        //ぶつかっていたら、ボールの速度を反射させる
        let w = balls[i].p.sub(paddle.p);
        let r = balls[i].v.reflect(w);
        balls[i].v = r;
        //めりこみ防止
        balls[i].p = paddle.p.add(w.norm().mul(balls[i].r + paddle.r));
    }


    // 画面を塗りつぶす（消去）
    background(220);
    //ボールを描画
    
    for(let i=0; i<balls.length; i++){
    circle(balls[i].p.x, balls[i].p.y, 2*balls[i].r);
    }
    //ブロックを描画
    for(let b of blocks){
        circle(b.p.x, b.p.y, 2*b.r);
    }
    //パドルを描画
    circle(paddle.p.x, paddle.p.y, 2*paddle.r);
    }
}