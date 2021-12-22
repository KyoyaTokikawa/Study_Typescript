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

//  umamusumes.sort((a, b) =>{
//      console.log("a: " + a.name + " : " + "b:" + b.name);
//      const bustScore = cmpBust(a.bust, b.bust, a.name, b.name);
//      const nameScore = cmpName(a.name, b.name);
//      return bustScore * 2 + nameScore;
//  });
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

insertion_sort(array);

console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8]​

// 非破壊のソートはないので、元の配列を変更せずにソート後の結果を得る場合、
// スプレッド構文を使用する。
const sorted = [...umamusumes].sort((a, b) => a.bust - b.bust);
console.log(umamusumes);
console.log(sorted);

/** ループはfor ... ofを使う
 * ループの書き方は大きくわけて3通りある。
 * C言語由来のループは昔からあるがループ変数が必要。
 * forEach()はその後ES5で追加されました。
 * その後は言語仕様のアップデートとともにfor ... of構文が追加された。
 * この構文はArray, Set, Map、Stringなどの繰り返し可能（iterable）オブジェクトに対してループする。
 * 配列の場合で、インデックス値が欲しい場合は、entries()メソッドを使う。
*/

let iterable: string[] = ["ライスシャワー", 'ミホノブルボン', "マチマチカネタンホイザ"];


// C言語由来のループ　最速　※但し、ゲームの1フレームごとに数万要素のループをするケースなど以外は、気にする必要はない。
for (let i: number = 0; i < iterable.length; i++)
{
    let val = iterable[i];
    console.log(val);
}

// forEach()
iterable.forEach(val => {
    console.log(val);
});

// forEach() index
iterable.forEach((val, index) => {
    console.log(val, index);
});


// for of インデックスがとれる
/** Typescriptだと速度の弱点はない。
 * TypeScriptを使っていると、ES5への出力の場合型情報を見て、 Array 型の for ... of ループの場合、
 * 旧来の最速の for ループのJavaScriptコードが生成されるで、速度上のペナルティがまったくない状態で、
 * 最新の構文が使えるメリットがある。
 * また、ChromeなどのJavaScriptエンジンの場合は、同一の型の要素だけを含む配列の場合、特別な最適化を行う。
 */
for (const[i, value] of iterable.entries())
{
    console.log(i, value);
}

// iterableとイテレーター
/** entries() indexとvalueのタプルを返すイテレーターを返す。
 * next()メソッドを持つイテレータオブジェクトを返すメソッド。
 * nest() -> 配列の要素と、終了したかどうかを、booleanで返す。
 */
 const a = ["a", "b", "c"];
 const b = [[0, "a"], [1, "b"], [2, "c"]];
 
 // この2つの結果は同じ
 for (const [i, v] of a.entries()) { console.log(i, v); }
 for (const [i, v] of b) { console.log(i, v); }

 /**
  * bのような二重配列を作ればイテレータは必要ない。
  * 要素数が増えると前処理が増える。
  * イテレータ要素を返すオブジェクトを使って、全コピーを防ぐ。
  */

/**
 * オブジェクトにループの要素を取り出すメソッド（@@iterator）があるオブジェクトはiterableなオブジェクト。
 * 繰り返し処理に対する約束事なので「iterableプロトコル」と呼ばる。
 * このメソッドはイテレータを返す。
 * 配列は、 @@iterator 以外にも、 keys() 、 values() 、 entries() と、イテレータを返すメソッドが合計4つある。
 * for...ofループなどは、このプロトコルにしたがってループを行う。 
 * 分割代入や、スプレッド構文などがこのiterableプロトコルを土台に提供されている。
 * Array, Set, Map、String　などのオブジェクトがこのプロトコルを提供している。
 */

// イテレータはループするときには問題ないが、任意の位置の要素へのアクセスなどは不便。
// イテレータから配列に変換したい場合は Array.from() メソッドか、スプレッド構文が使える。

let names: string[] = Array.from(iterable);
names = [...iterable];

/** 読み込み専用の配列
 * constは再代入をさせないガードにはなるが、変更不可にはできない。
 * 変更不可にするには、「readonly」もしくはリテラルの後ろに「as const」をつける。
 */

// 型につける場合
const ReadOnly: readonly number[] = [100, 10, 40, 89];

// 値やリテラルにつける場合
const ReadOnlyValue = [10, 340, 60] as const;

names[names.length + 1] = "10";
// コンパイルエラー
// ReadOnly[ReadOnly.length + 1] = 1;
// ReadOnlyValue[ReadOnlyValue.length + 1] = 1;

/**
 * 読み込み専用の配列は普通の変更可能な配列よりは厳しい制約となる。
 * 変更可能な配列は、readonlyな配列の変数や引数には渡すことができる。
 * 逆に読み込み専用の配列を変更可能な配列の変数に格納したり関数の引数に渡したりしようとするとエラーになる。
 */

const ReadOnlyArray: readonly number[] = [1, 2, 3];
const MutableArray: number[] = [4, 5, 6];

function AcceptMutableArray(num: number[])
{ }

// OK
// readonly <- mutable
const ReadOnlyVar: readonly number[] = MutableArray;

// OK
// readonly <- readonly
const ReadOnlyVar2: readonly number[] = ReadOnlyArray;

// NG
// mutable <- readonly
// const MutableVar: number[] = ReadOnlyArray;

// OK
AcceptMutableArray(MutableArray);

// NG
// AcceptMutableArray(ReadOnlyArray);

/** readonlyを使うかはプロジェクト次第
 * 内部的には同じ配列なので、型アセーションでキャストすればmutableにできる。
 * プログラムの安全性が下がる。
 * 使うか使わないかの二択。
 * 但し、外部ライブラリは使ってないことのほうが多いので、接点では使わざるを得なくなる。
 */

const ChangeMutable: number[] = ReadOnlyArray as number[];
AcceptMutableArray(ReadOnlyArray as number[]);

/** * 配列のようで配列でない、ちょっと配列なオブジェクト
 * TypeScriptがメインターゲットとしてるブラウザ環境では、配列に似たオブジェクトがある。
 * HTMLのDOMを操作したときに得られる、HTMLCollectionと、NodeList。
 * 前者はdocument.formsなどでフォームを取得してきたときにも得られる。
 * どちらも.lengthで長さが取得でき、インデックスアクセスができるため、一見配列のようだが、
 * 配列よりもメソッドがかなり少なくなっている。
 * ・forEach()
 * NodeList　ある
 * HTMLCollection　なし
 * ・map()やsome()
 * どちらもなし
 * 
 * どちらもイテレータは利用できるので下記は使用可。
 * for .. ofループ
 * スプレッド構文
 * Array.from()で配列に変換してから各種配列のメソッドを利用
 */

/** オブジェクト
 * オブジェクトは、JavaScriptのコアとなるデータ。
 * クラスなどを定義しないで、気軽にまとまったデータを扱うときに使う。
 * オブジェクトへのアクセスは文字列。
 * キー名が変数などで使える文字だけで構成されている場合、名前をそのまま記述できるが、
 * 空白文字やマイナスなどを含む場合にはダブルクオートやシングルクオートでくくる。
 * キー名に変数を書く場合は [ ] でくくる。
 */

/** usecase
 * Webサービスのリクエストやレスポンス
 * 関数のオプショナルな引数
 * 複数の情報を返す関数
 * 複数の情報を返す非同期処理
 */

const key = 'name';

const obj = {
    [key]: "メジロマックイーン", // keyが変数
    Height: 159, // 通常
    'weight- ': "微増（現在必死に調整中）", // -、スペースを含む
};

// 参照は、「.名前」もしくは「[名前]」
console.log(obj.Height);
console.log(obj[key]);

/** JSON
 * オブジェクトがよく出てくる文脈
 * データ交換用フォーマット
 * JavaScriptでネイティブで扱える。
 * 
 * JSONをパースすると、オブジェクトと配列で階層構造になったデータができる。
 * 通信用ライブラリでは、パース済の状態で帰ってきたりする。
 */

// 最初の引数にオブジェクトや配列、文字列などを入れる
// 2つめの引数はデータ変換をしたいときの変換関数（ログ出力からパスワードをマスクしたいなど）
//   省略可能。通常はnull
// 3つめは配列やオブジェクトでインデントするときのインデント幅
//   省略可能。省略すると改行なしの1行で出力される
const json: string = JSON.stringify(obj, null, 2);
console.log(json);
// 複製されてでてくる。もとのobjとは別物
const obj2: string = JSON.parse(json);
console.log(obj);
console.log(obj2);

/**
 * JSONはJavaScript/TypeScriptのオブジェクト定義よりもルールが厳密。
 * キーは必ずダブルクオートでくくらなければならず、配列やオブジェクトの末尾に不要なカンマがあるとエラー。
 * その場合はJSON.parse()の中で SyntaxError 例外が発生。
 * JSONレスポンスを期待しているウェブサービスの時に、サーバー側でエラーが発生して、
 * Forbidden という文字列が帰ってきた場合（403エラー時のボディ）にも発生。
 */

/** オブジェクトからデータの取り出し
 * 分割代入でまとめて取り出せる。
 * 要素がなかった時に、デフォルト値を設定したり、指定された要素以外のオブジェクトを抜き出すことが可能。
 * まとめて取り出す場合の変数名は、必ずオブジェクトのキーになる。
 */

// 旧: 一個ずつ取り出す

var name_mc = obj[key];
var weight_mc = obj["weight- "];
// 存在しない場合はデフォルト値を設定 そもそもコンパイル通らん
// 多分、通信でjson受け取った時用かな
// var age = obj.age ? obj.age : 3;

// 新: まとめて取り出し。デフォルト値も設定可能
const smallAnimal = {
    name_: "小動物",
    favorite: "小籠包"
  };

// デフォルト値の設定ができん
// 新: まとめて取り出し。デフォルト値も設定可能
// const {name, favorite, age=3} = smallAnimal;
// 新: name以外の要素の取り出し
// const {name, ...other} = smallAnimal;

/**
 * ES2020でオプショナルチェイニングが追加された。
 * TypeScriptでも3.7から導入された。
 * TypeScriptでは、変数の型として、文字列だけでなく、場合によっては無効な値としてnullやundefinedが入る可能性がある、
 * といったバリエーションを持たせることができる。
 * 例えば次の定義はsmallAnimal自身がオブジェクト、もしくはnullとなりえ、
 * favoriteというメンバーもundefinedになりえるという意味になる。
 * この場合、深い階層にアクセスする場合は、一つずつ、nullやundefinedになりえるところでチェックを行っていた。
 * &&演算子が、一つでも途中にfalseyな値があると評価を止める、
 * そうでなければ最後の値を返すという挙動を持っているため、それを活用したコーディングが行われていた。
 * オプショナルチェイニングは同じことを実現する演算子として?.が導入された。
 * 途中でnullish（nullかundefined）な値があると、式全体の評価結果がundefinedになる。
 */

// 旧
var name_: string = obj && obj[key] && obj[key].toUpperCase(); // 大文字を取得
console.log(name_);
// 新
const nmae_2: string = obj?.[key]?.toUpperCase();
console.log(nmae_2);

// オブジェクト要素の加工
const Lstspica = [
    {
        name: "スペシャルウィーク"
    },
    {
        name: "サイレンススズカ"
    },
    {
        name: "ダイワスカーレット"
    },
    {
        name: "トウカイテイオー"
    },
    {
        name: "メジロマックイーン"
    }
];

// これがないと、オブジェクトをforで回せない
interface StringKeyObject {
    [Key: string]: string;
}

const spica: StringKeyObject =
{
    name: "スペシャルウィーク"
}
const rigil: StringKeyObject = {
    rival: "グラスワンダー",
    legtypee: "差し",
    distance: "マイル"
};

// 最古
var MostOldCopy = [{}];
for (var MostOldkey in Lstspica)
{
    if(Lstspica.hasOwnProperty(MostOldkey))
    {
        MostOldCopy[MostOldkey] = Lstspica[MostOldkey]
    }
}
console.log(Lstspica);
console.log(MostOldCopy);

// 旧: Object.assign()
const OldCopy = Object.assign({}, rigil);
console.log(OldCopy);

// 新 スプレッド構文
const NewCopy = {...rigil};
console.log(NewCopy); // { name: 'グラスワンダー', regtypee: '差し', distance: 'マイル' }
const [, ...NewCopy_] = [...Lstspica];
console.log(NewCopy_);
//   [
//     { name: 'サイレンススズカ' },
//     { name: 'ダイワスカーレット' },
//     { name: 'トウカイテイオー' },
//     { name: 'メジロマックイーン' }
//   ]
const Copy_Train = [...Lstspica.slice(0,2),...Lstspica.slice(3, 4)];
console.log(Copy_Train); //[ { name: 'スペシャルウィーク' }, { name: 'サイレンススズカ' }, { name: 'トウカイテイオー' } ]

console.log("merged");
//最古: オブジェクトをマージ
var MostOldMerged: StringKeyObject = {};
for (var key1 in spica)
{
    if(spica.hasOwnProperty(key1))
    {
        MostOldMerged[key1] = spica[key1]
    }
}

for (var key2 in rigil)
{
    if(rigil.hasOwnProperty(key2))
    {
        MostOldMerged[key2] = rigil[key2];
    }
}
console.log(MostOldMerged);

// 旧: Object.assign()
const Oldmerged = Object.assign({}, spica, rigil);
console.log(Oldmerged);

// 新: スプレッド構文
const NewMerged = {...spica, ...rigil};
console.log(NewMerged);

/**DictionaryはオブジェクトではなくMapを使う
 * ES2015で、単なる配列以外にも、Map/Setなどが増えた。
 * 子供のデータをフラットにたくさん入れられるデータ構造。
 * 配列と同じiterableなので、同じ流儀でループ可能。
 * 古のコードはオブジェクトを、他言語の辞書やハッシュのようにつかっていたが、今時はMapを使う。
 * 他の言語のようにリテラルで簡単に初期化できない。
 * キーと値を簡単に取り出してループでき、キーだけでループ（for (const key of map.keys())）,
 * 値だけでループ（for (const value of map.values())）も使える。
 * キーにnumberも使える。
 * オブジェクトは、データベースでいうところのレコード（1つのオブジェクトはいつも固定の名前がある）として使い、
 * Map はキーが可変の連想配列で、値の型が常に一定というケースで使うと良い。
 * WeakMapや WeakSetという弱参照のキャッシュに使えるコレクションもあり、
 * ブラウザで使えるウェブアクセスのFetchAPIのHeadersクラスも似たAPIを提供している。
*/

// 旧: オブジェクトを辞書代わりにする
var OldDic: StringKeyObject = {
    "スぺ": "長距離",
    "グラス": "中距離"
};

for (var Key in OldDic)
{
    console.log(Key);
    if(OldDic.hasOwnProperty(key))
    {
        console.log(Key + ":" + OldDic[Key]);
    }
}

// 新: Mapを利用
// ``<キーの型、 値の型>`` で明示的に型を指定すると
// ``set()`` 時に型違いのデータを入れようとするとチェックでき、
// ループなどで値を取り出しても型情報が維持される

const map = new Map<number, StringKeyObject>([
    [1, {name: "スペシャルウィーク"}],
    [2, {name: "グラスワンダー"}],
    [3, {name: "キングヘイロー"}],
    [5, {name: "セイウンスカイ"}],
    [4, {name: "エルコンドルパサー"}]
]);

for (const [Key, value] of map)
{
    console.log(`${Key} : ${value.name}`);
}

/**読み込み専用のオブジェクト
 * readonlyキーワードではなく、型ユーティリティのReadonly<>を使う。
 * 型を定義しておく必要がある。
 * フィールドごとにreadonlyを付与することも可能。
 * あるいは、型ではなく、値の最後にas constを付与する。
*/

type User = {
    name: string;
    legtype: string;
}

const U: Readonly<User> = {name: "グラスワンダー", legtype: "mile"};
const R = {name: "グラスワンダー", legtype: "mile"} as const;
// NG
// R.legtype = "long";

/**まとめ
 * Javaと比べると、TypeScriptで実装する場合、同じようなものを実装する場合にもクラス定義の数は減る。
 * ちょっとしたデータを格納するデータ構造などは、これらの型を使って定義なしで使うことが多い。
 * TypeScriptを使えば、型推論やインラインでの明示的な型定義によって、これらの型でもきちんとしたチェックが行われるようになる。
*/