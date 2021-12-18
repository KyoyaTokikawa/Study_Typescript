import {Decimal} from "decimal.js"
import {BigNumber} from "bignumber.js"
import { sign } from "crypto";
    
    // boolean
// 数字のゼロ(負の値)、空文字、null、undefined、NaNを変換すると「false」、それ以外は「true」

console.log(true);
console.log(false);
const flag: boolean = true;

// 変換
console.log(flag.toString()); // true or false
console.log(String(flag));    // これでも可
console.log(Number(flag));    // 1 or 0

let notEmpty: boolean = Boolean("test string");
console.log(notEmpty);
const flagStr: string = 'true';
const flag1 = flagStr === 'true';
console.log(flag1)
const str = "not empty string"
const isEmpty = !str;
notEmpty = !!str;
console.log(isEmpty);
console.log(notEmpty);

// 最大
console.log(Number.MAX_SAFE_INTEGER);
// 最小
console.log(Number.MIN_SAFE_INTEGER);
// 範囲チェック
console.log(Number.isSafeInteger(50000000));

console.log(10.5);
console.log(128);
console.log(0b11); //0b=>2進数
console.log(0o777); // 0o=>8進数
console.log(0xf7); //0x=>16進数

const year: number = 2019;

console.log(year.toString());
console.log(year.toString(2)); // toStringの引数で2~36進数にできる
console.log(year.toString(3));
console.log(year.toString(4));
console.log(year.toString(36));

console.log(Boolean(year)); // 0以外はtrue

console.log(parseInt("010")); // 文字列はparseIntで10進数/16進数変換
console.log(parseInt("011", 8)); // 二つ目の引数で進数指定
console.log(Number(true)); // boolean型はNumber関数で0/1になる

// 組込の数値は2種類
// 混ぜて計算はできない
/** number 64ビットの浮動小数点数 */
/** bigint 桁数制限のない整数 (後ろにnを付ける) ※"target": "extent"を指定しないと使えない。*/

const a = 0.1;
const b = 0.2;
/** 正確な計算が必要な時は、「decimal.js」などの外部ライブラリを使用する */
// -> 0.30000000000000004
console.log(a + b);

/** decimal.js の例 */
const dec: Decimal = new Decimal(0.2);
const dec2: Decimal = new Decimal(0.1);
/** 足し算 */
console.log(dec.plus(dec2));
/** 引き算 */
console.log(dec.minus(dec2));

/** bignumber.js のほうがいいらしい
 * decimal.js は最低限の計算機能のみ
 */
// bignumber.js サンプル
const decb: BigNumber = new BigNumber(0.1);
const decb1: BigNumber = new BigNumber(0.2);
const result: BigNumber = decb.plus(decb1);
/** これで結果のみ表示 */
console.log(result.toNumber());

// 演算子
// ** でべき乗

const num1: number = 1;
const num2: number = 1.3;
console.log(num2|0);
console.log(~~num2);

// 特殊な数値
const special: number = Infinity; // 無限大
const special1: number = NaN; // 数字でない

// Mathオブジェクト
// Typescriptで数値計算を行う場合に使う関数や定数のオブジェクト

const ary:Array<number> = [10, 30, 40, 121, 4203, 40, 729, 9587, 50]
// 複数の値の中で最大値
console.log(Math.max(10, 50, 75, 99, 100));
// 複数の値の中で最小値
console.log(Math.min(10, 50, 75, 99, 100));
// 配列の最大値
console.log(Math.max(...ary));
// 配列の最小値
console.log(Math.min(...ary));

// 乱数生成
console.log(Math.random()); // 0-1未満
console.log(Math.random() * 10); //0-9

// 整数変換
let num: number = 0;
const x: number = 10.89
// 絶対値
num = Math.abs(x);
console.log("Math.abs " + num);
// x以上の最小の整数を返す
num = Math.ceil(x);
console.log("Math.ceil: " + num);
// x以下の最大の整数を返す
num = Math.floor(x);
console.log("Math.floor: " + num);
// xに近時の単精度不動小数点を返す
num = Math.fround(x);
console.log("Math.fround: " + num);
// xを四捨五入して、近似の整数を返す
num = Math.round(x);
console.log("Math.round: " + num);
// xが正なら1、負なら-1、0なら0を返す。
num = Math.sign(x);
console.log("Math.sign: " + num);
// xの小数点以下を切り捨てた値を返す。
num = Math.trunc(x);
console.log("Math.trunc: " + num);
// xを2進数32ビット整数値で表した数の先頭の0の個数を返す
num = Math.clz32(x);
console.log("Math.clz32:" + num);
// 32ビット同士の整数の乗算の結果を返す。超えた範囲は切り捨てられる。主にビット演算と一緒に使う。
const y: number = 20;
num = Math.imul(x, y);
console.log(num);

// 平方根
console.log("平方根");
// 1/2の平方根の定数
num = Math.SQRT1_2;
console.log("Math.SQRT1_2 = " + num);
// 2の平方根の定数
num = Math.SQRT2;
console.log("Math.SQRT2 = " + num);
// xの立方根
num = Math.cbrt(x);
console.log("Math.cbrt(x) = " + num);
// 引数の数値の二乗和の平方根
num = Math.hypot(x, y, 10, 3);
console.log("Math.hypot(x, y, 10, 3) = " + num);
// xの平方根
num = Math.sqrt(x);
console.log("Math.sqrt(x) = " + num);

// 対数
console.log("対数");
// 自然対数の底(ネイピア数)
num = Math.E;
console.log("Math.E = " + num);
// 10の自然対数
num = Math.LN10;
console.log("Math.LN10 = " + num);
// 2の自然対数
num = Math.LN2;
console.log("Math.LN2 = " + num);
// 10を底としたeの対数
num = Math.LOG10E;
console.log("Math.LOG10E = " + num);
// 2を底としたeの対数
num = Math.LOG2E;
console.log("Math.LOG2E = " + num);
// Math.E ** x
num = Math.exp(x);
console.log("Math.exp(x) = " + num);
// Math.exp(x) - 1
num = Math.expm1(x);
console.log("Math.expm1(x) = " + num);
// xの自然対数
num = Math.log(x);
console.log("Math.log(x) = " + num);
// 1 + xの自然対数
num = Math.log1p(x);
console.log("Math.log1p(x) = " + num);
// xの10を底とした対数
num = Math.log10(x);
console.log("Math.log10(x) = " + num);
// xの2を底とした対数
num = Math.log2(x);
console.log("Math.log2(x) = " + num);

// string
// シングルクォート、ダブルクォート、バッククォートでくくる

const teio: string = "トウカイテイオー";
console.log(teio);
const McQeen: string = 'メジロマックイーン';
console.log(McQeen);
// バッククォートは複数行OK
const EatMcQeen: string = `メジロマックイーン:
ぱくぱくですわ`;
console.log(EatMcQeen);

// 他のデータへの変換
console.log(parseInt('0110', 10));
console.log(Boolean(teio));

//他のデータをstringに変換
const numyear: number = 2022;
// numberはtoStringの引数で2進数-36進数にできる
console.log(numyear.toString(2));
// boolean型をtrue/falseの文字列に変換
console.log((true).toString());
// こちらでも可
console.log(String(false));

// 文字コードの正規化
// アルファベットの全角半角、等を統一する。
const strChar: string = "ＡＢＣｱｲｳｴｵ㍻";
const compareChar: string = "ABCアイウエオ平成";
console.log(strChar);
console.log(strChar.normalize("NFKC"));
console.log(strChar.normalize("NFKC") == compareChar);

// 正規形は次の4通り
/**
 *  Kがついているものがきれいにする方
 * Dは、濁音の記号とベースの文字を分割するときの方法、
 * Cは結合するときの方法になります。
 * macOSの文字コードがNFKDなので、たまにmacOSのChromeでGoogle Spreadsheetを使うと、コピペだかなんだかのタイミングで
 * このカタカナの濁音が2文字に分割された文字列が挿入されることがある。
 * NFKC をつかっておけば問題はない。
 */

/**
 * 正規化をこのルールに従って行うと、
 * ユーザーに「全角数字で入力する」ことを強いるような、
 * かっこ悪いUIをなくすことがでる。
 * ユーザーの入力はすべてバリデーションの手前で正規化すると良いでしょう。
 */

/** ただし、長音、ハイフンとマイナス、漢数字の１、横罫線など、
 * 字形が似ているものの意味としても違うものはこの正規化でも歯が立たないので、別途対処が必要です。
 */

// 文字列の結合
// old
console.log("[McQeen]: " + McQeen);
// new テンプレートリテラルを使う
console.log(`[McQeen]: ${McQeen}`);

// 文字列の事前処理
/** テンプレートリテラルに関数を指定して、文字列を加工する処理を挟む
 * usecase 翻訳
 * テンプレートリテラルの前に置かれた関数は、最初に文字列の配列がきて、
 * その後はプレースホルダの数だけ引数が付く構造になっている。
 *  文字列の配列は、プレースホルダに挟まれた部分のテキストになる。
 */

const tag = (texts: TemplateStringsArray, ...values: string[]): string =>{
    if (!values?.[0])
    {
        return 'おしるこ';
    }
    return values.map((value, index) => texts[index] + value)
            .concat(texts.slice(values.length))
            .join("")
}

const pakupaku = tag`${McQeen}:ぱくぱくですわ。`
console.log(pakupaku);
const GoldCity: string = ''
const osiruko = tag`${GoldCity}:ぱくぱくですわ。`
console.log(osiruko);

// undefined　と　null
/**
 * undefined: 未定義やまだ値が代入されていない変数を参照したり、
 * オブジェクトの未定義の属性に触ると帰ってくる値。
 * TypeScriptはクラスなどで型定義を行い、コーディングがしやすくなるとよく宣伝されますが、
 * 「 undefined に遭遇するとわかっているコードを事前にチェックしてくれる」ということがその本質
 *  tsconfig.json で strict: true もしくは strictNullChecks: true でチェックできる。
 *  ? を変数名の最後に付与すると、省略可能
 */
 function print(name: string, age?: number) {
    console.log(`name: ${name}, age: ${age || 'empty'}`);
}

/**
 *  意図せずうっかりな「未定義」が undefined であれば、意図をもって「これは無効な値だ」と設定するのが null
 *  ただし、Javaと違って、気軽に null を入れることはできない。
 *  変数の章でも紹介した、「AもしくはBのデータが格納できる」という合併型（Union Type）の型宣言ができるので、これをつかって null を代入。
 *  TypeScriptでは「これは無効な値をとる可能性がありますよ」というのは意識して許可しなければならない。
 */
// stringかnullを入れられるという宣言をしてnullを入れる
let favaoriteGame: string | null = null;

/**
 * undefined と null は別のもの
 * コンパイラオプションで 
 * compilerOptions.strict: true
 *  もしくは、 
 * compilerOptions.strictNullChecks: true
 *  の場合は、 null 型の変数に undefined を入れようとしたり、その逆をするとエラー。
 */