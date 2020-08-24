// Exercise 1: RNA Transcription

// Given a DNA strand, write a function to return its RNA complement (per RNA transcription).

// Both DNA and RNA strands are a sequence of nucleotides.

// The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

// The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:
/*
DNA 	RNA
G 	C
C 	G
T 	A
A 	U
*/

function rnaTranscription(dna) { // 入來的東西是 dna
    let rna = "";
    /* 而要砌 RNA, 必須要有一個 result, 該 result 通常在 for loop 的外面, 為甚麼呢?
     * 因為我在外面 declare, 該 for loop 會先運行, 不會重新 assign 一個新的
     * 所以當 for loop 運行, 需要該 result, let rna = ""; 去接收所有得出的結果
     */
    for (let nucleotide of dna) {
        switch (nucleotide) {
            case "G": //第一個版本是 G
                rna += "C"; //將 G 變成 C
                break; // 每處理完一個版本, 必須加上 break; 停止該次運作
            case "C":
                rna += "G"; //將 C 變成 G
                break;
            case "T":
                rna += "A"; //將 T 變成 A
                break;
            case "A":
                rna += "U"; //將 A 變成 U
                break
            default:
                // switch 必須在最後寫上 default, 因為當任何情況都不可行的時候, 就是 Default
                // console.log("Does not exist!");
                throw new Error(`Nucleotide ${nucleotide} Unknown!`)
                    //throw的意思代表 我不懂得處理, 你幫我處理它, 但function它就不會幫你處理
        }
    }
    return rna; //當所有以上的版本都處理完畢, 必須加上 return rna
}

console.log(rnaTranscription("GCTAATGCTAGTCAGT"));
//以上為第一種寫法


//以下為另一種寫法, 較佳
function rnaTranscriptionWithObj(dna) { //為何是一個 obj 呢? 因為會使用 obj 來運作該編碼的要求
    const mapping = {
        //以下方式是一個 mapping (影射), 即是將 "G" 變成 "C"
        "G": "C",
        "C": "G",
        "T": "A",
        "A": "U"
    }
    let rna = "";
    for (let nucleotide of dna) {
        if (!(nucleotide in mapping)) { //如果 nucleotide 不是在 mapping 入面的就運行下面的編碼 
            throw new Error(`Nucleotide ${nucleotide} Unknown!`)
        }
        rna += mapping[nucleotide];
        // 可以通過 mapping by 該物件 nucleotide, 這是加返落去的
        // 即是將 mapping 拿回相對應的 nucleotide 的東西
    }
    return rna;
}

console.log(rnaTranscriptionWithObj("GCTAATGCTAGTCAGT"));