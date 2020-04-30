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

function rnaTranscription(dna){
    let rna = "";
    for(let nucleotide of dna){
        switch(nucleotide){
            case "G":
            rna += "C";
                break;
            case "C":
            rna += "G";
                break;
            case "T":
                rna += "A";
                break;
            case "A":
                rna += "U";
                break
            default:
                // console.log("Does not exist!");
                throw new Error('Nucleotide ${nucleotide} Unknown!') //throw的意思代表 我不懂得處理, 你幫我處理它, 但function它就不會幫你處理
        }
    }
    return rna;
}

console.log(rnaTranscription("GCTAATGCTAGTCAGT"));
//以上為第一種寫法

//以下為另一種寫法, 較佳
function rnaTranscriptionWithObj(dna){
    const mapping = {
        "G":"C",
        "C":"G",
        "T":"A",
        "A":"U"
    }
    let rna = "";
    for(let nucleotide of dna){
        if(! (nucleotide in mapping)){
            throw new Error('Nucleotide ${nucleotide} Unknown!')
        }
        rna += mapping[nucleotide];
    }
    return rna;
}

console.log(rnaTranscriptionWithObj("GCTAATGCTAGTCAGT"));