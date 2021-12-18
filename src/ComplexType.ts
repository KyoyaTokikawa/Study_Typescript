/** 
 * 複合型：他のプリミティブ型、複合型自身を内部に含み、大きなデータを定義できるデータ型
 * 例 => 配列、オブジェクト、クラスを定義して作るインスタンス
 */

// 配列
// リテラルで定義できる
const aryYear: number[] = [2019, 2020, 2021];
const aryDiv           = ['tig', 'sig', 'saig', 'scig']; // 型は省略可能
console.log(aryYear);
console.log(aryDiv);
// 追加
aryYear.push(2022);
console.log(aryYear);
aryYear.push(2023, 2024);
console.log(aryYear);
// 取り出し
const firstYear: number = aryYear[0];
console.log(aryYear);
console.log(firstYear);

/** タプル
 * 配列の要素毎に違う型を定義できる。裏のデータ型は配列。
 * 違う型を入れるとエラー
 * readonly」で読み込み専用
 * 配列のインデックス毎に何を入れるか、名前は付けることはできない。
 */

const tplMovie: [string, number] = ['SAO', 2021];
// tplMovie[0] = 2022; エラー
console.log(tplMovie);
const r = 10;
const t = Math.PI * 0.5;
const pos: [number, number] = [r * Math.cos(r), r * Math.sin(r)];
console.log(pos);

// 3つは必ず要素があるタプル
const aryStr: [string, string, string[]] = ['トウカイテイオー', 'メジロマックイーン', ['エイシンフラッシュ']]
console.log(aryStr);

// 配列からデータの取り出し
const umamusume: string[] = ["トウカイテイオー", "メジロマックイーン", "ファインモーション", "メジロドーベル"];
// 旧: 一個ずつ
const member1: string = umamusume[1];
console.log(member1);
const member2: string = umamusume[0];
console.log(member2);

// 旧: 二番目移行
const other: string[] = umamusume.slice(1);
console.log(other);

// 新: まとめて
const [member3, member4] = umamusume;
console.log(member3);
console.log(member4);
// 新: 二番目移行
/** ...: 残余構文
 * 複数の要素がそこにあるかのように振る舞う。
 * 配列やオブジェクトの加工、関数呼び出しの引数リストにも使える
 */
const [,...other2] = umamusume;
console.log(other2);

// 配列の要素の存在チェック
// 旧: indexOf
const search: string = "トウカイテイオー";
if (umamusume.indexOf(search) !== -1)
{
    console.log(search);
}

// 新: includes
if (umamusume.includes(search))
{
    console.log(search);
}

// 配列の加工
const mejiros: string[] =
[
    "マックイーン",
    "ライアン",
    "ドーベル",
    "アルダン",
]

const _98世代: string[] =
[
    "スぺ",
    "グラス",
    "ウンス",
    "ングヘ",
    "エルコン"
]

// 旧: 3番目の要素を削除して、1つの要素を追加しつつ、他の配列と結合
console.log(mejiros);
mejiros.splice(2, 1, "ブライト");
console.log(mejiros);
let new_mejiros: string[] =
mejiros.concat(_98世代);
console.log(new_mejiros);

// 新: スプレッド構文
new_mejiros = [...mejiros.slice(0, 2), "ドーベル", ...mejiros.slice(3, 4), ..._98世代];
console.log(new_mejiros);
// 先頭削除ならこれでも可
[, ...new_mejiros] = [...mejiros];
console.log(new_mejiros);

// 配列のコピー
// 旧: Array.from
const copy: string[] = Array.from(mejiros);
console.log(copy);
// 新: スプレッド構文でコピー
const new_copy: string[] = [..._98世代];
console.log(new_copy);

// 配列のソート
/** sort()メソッドを使う
 * インプレースで配列を変更する。
 * 中の要素を文字列化して、辞書順でソートする
 */

mejiros.sort();
console.log(mejiros.sort());
console.log(mejiros);

const nums: number[] = [403, 10, 70, 400, 30]
nums.sort()
/** 
 * 数値が入っている場合、引数なしだと下記になる
 * [ 10, 30, 400, 403, 70 ]
*/
console.log(nums);
/** 
 * 比較関数を引数に渡し、
 * 0より小さい数値（左辺を左側に）、
 * 0（等価）、
 * 0より大きい数値（左辺を右側に移動）
 * を返すことで要素の並び替えのルールを設定できる。
 */

 const numbers = [30, 1, 200];
 numbers.sort((a, b) => a - b);
 // 1, 30, 200
 
 const stations = [
    {name: "池袋", users: 558623},
    {name: "新宿", users: 775386},
    {name: "渋谷", users: 366128},
    {name: "東京", users: 462589}
 ];
 // 駅の利用者数でソート
 stations.sort((a, b) => a.users - b.users);
 console.log(stations);

 // 複数条件
 const umamusumes = [
     { name: "ファインモーション", bust: 79 },
     { name: "ゴールドシチー", bust: 85 },
     { name: "メジロマックイーン", bust: 71 },
     { name: "サイレンススズカ", bust: 70 },
     { name: "メジロドーベル", bust: 83 },
     { name: "トウカイテイオー", bust: 77 },
 ]

 function cmpBust(a: number, b: number, c: string, d: string)
 {
    console.log("a: " + c + " : " + "b:" + d);
    console.log();
    return (a < b)? - 1: (a === b)? 0: 1; 
 }

 function cmpName(a: string, b: string)
 {
     return (a < b)? - 1: (a === b)? 0: 1; 
 }

 /**
  * いったん全て-1, 0, 1にしておいて、足し合わせて総合スコアを計算する
  */
 console.log("start");
 console.log(umamusumes);
 /** 
  * 2個目と3個目の要素を入れ替えた時の挙動が気持ち悪い
  * 3を入れ替え対象にして、2個目と比較して入れ替える
  * そのあと、2個目を入れ替え対象として3個目と比較している。実質同じ比較を2回している意味わからん。
  * なんで3個目から2個目に移動させられたら、2個目と3個目を再度比較してるのかわからん
  * */

 umamusumes.sort((a, b) =>{
     console.log("a: " + a.name + " : " + "b:" + b.name);
     const bustScore = cmpBust(a.bust, b.bust, a.name, b.name);
     const nameScore = cmpName(a.name, b.name);
     return bustScore * 2 + nameScore;
 });
 console.log(umamusumes);


 let array = [1, 4, 3, 8, 7, 6, 2, 5];

function insertion_sort(array: number[]) {
 for (let i = 1; i < array.length; i++) {
   let j;
   //挿入する値をいったん変数に保存
   let tmp = array[i];
   //整列ずみのどの部分に挿入するか、整列済みの分だけ整列済みの大きい方から順にループ
   for (j = i - 1; j >= 0; j--) {
       console.log(tmp + " : " + array[j]);
     //挿入する変数tmpが、整列済みの変数array[j]より大きい場合、そのままループから抜け出すbreak
     if (tmp > array[j]) {
       break;
     } else {
       //挿入する変数tmpが整列済みの変数array[j]より小さい場合、array[j]の添字が一個増えたところにarray[j]の値を保存。
       array[j + 1] = array[j];
     }
    }
    //breakした場合、挿入する値はarray[j+1]に
    array[j + 1] = tmp;
    console.log(array);
 }
}

insertion_sort(array);​

console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8]​