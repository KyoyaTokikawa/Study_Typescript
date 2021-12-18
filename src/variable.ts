const fairy_name = "曼珠沙華";

// 変更がある変数はlet
// 三項演算子をつかえばconstにもできる
let fairy_name2;
const mode = "slack";
if (mode == "slack")
{
    fairy_name2 = "ラグドール";
}
else if (mode == 'twitter')
{
    fairy_name2 = "タピオカ";
} 

console.log(fairy_name);
console.log(fairy_name2);

// error
// undefinedVar = 10

// 変数の型定義
let fairy_name3: string;
// error
// fairy_name3 = 123;

// 代入の場合は右辺のデータ型が自動で設定される。=>型推論
// 文字列型
let title = "フェアリースフィア";

// any型⇒なんでも入る。
let address;

// any型の指定
let address2: any;

// 型の複数指定
// 数字か文字列
let birthday: number | string;

birthday = 1109
birthday = "十一月九日"

// nullOKになってる？
birthday = null;
console.log(birthday);

// 特定の文字列に限定する機能 Union Type 合併型
let favoriteFood: "ハンバーグ" | "チョコレート";
// error
// favoriteFood = "ハンバーガー";
type PointRate = 8 | 10 | 20;
// error
// let point: PointRate = 12;

// 型と値の合併型
let BirthYear: number | "昭和" | "平成";
BirthYear = 1995;
BirthYear = "平成";

// 変数の巻き上げ
// 
function letFunction() {
    // error
    // console.log(`巻き上げテスト ${v}`);
    // let v = "test";
}

letFunction();

// 変数のスコープ
// 昔 これやばいだろ
for (var i = 0; i < 10; i++)
{
    // do something
}
console.log(i);

for (let d = 0; d < 10; d++)
{
    // do something
}
// error
// console.log(d);

function code() {
    // この中だけで有効
    const store: string = "小売店";
}