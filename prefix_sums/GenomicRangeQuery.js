// GenomicRangeQuery
// Find the minimal nucleotide from a range of sequence DNA.
// Score: 100%

module.exports = function solution(S, P, Q) {
    var impactResults = [];
    var setImpactDict = function(seq) {
        var impactDict = { A: [0], C: [0], G: [0] };
        var A = 0;
        var C = 0;
        var G = 0;

        for(var i = 0; i < seq.length; i++) {
            switch(seq[i]) {
                case 'A':
                    A += 1;
                    break;
                case 'C':
                    C += 1;
                    break;
                case 'G':
                    G += 1;
                    break;
            }

            impactDict['A'].push(A);
            impactDict['C'].push(C);
            impactDict['G'].push(G);
        }

        return impactDict;
    };

    var impactDict = setImpactDict(S);

    for(var ii = 0; ii < P.length; ii++) {
        if(impactDict['A'][Q[ii] + 1] - impactDict['A'][P[ii]] > 0) {
            impactResults.push(1);
        } else if (impactDict['C'][Q[ii] + 1] - impactDict['C'][P[ii]] > 0) {
            impactResults.push(2);
        } else if (impactDict['G'][Q[ii] + 1] - impactDict['G'][P[ii]] > 0) {
            impactResults.push(3);
        } else {
            impactResults.push(4);
        }
    }

    return impactResults;
};
