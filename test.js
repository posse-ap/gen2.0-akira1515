class Ball {
    constructor(_p, _v, _r){
        this.p = _p; //ボールの中心の位置ベクトル
        this.v = _v; //ボールの速度ベクトル
        this.r = _r; //ボールの半径
    }
}

//ボールを作る
let ball = new Ball(
    new Vec2(200, 300),
    new Vec2(240, -60),
    35
);


function draw(){
    // ボールを移動させる
    ball.p = ball.p.add(ball.v.mul(1/60));

    // ボールが左端か右端にきたら反射
    if((ball.p.x < 15)||(ball.p.x > 385)){
        ball.v.x = -ball.v.x;
    }

    if((ball.p.y < 15)||(ball.p.y > 385)){
        ball.v.y = -ball.v.y;
    }
    //ボールとブロックの衝突判定
    for(let block of blocks){
    let d = block.p.sub(ball.p).mag(); //距離
    if (d < (ball.r+block.r)){
        //ぶつかっていたら、ボールの速度を反射させる
        let w = ball.p.sub(block.p);
        let r = ball.v.reflect(w);
        ball.v = r;
        //ブロックを消す
        blocks.splice(blocks.indexOf(block), 1);
        }
    }
}