export interface MajorCredits {
  credits: number;
  __majorBrand: "major";
}

export interface MinorCredits {
  credits: number;
  __minorBrand: "minor";
}

export function sumMajorCredits(subjects1:MajorCredits, subjects2:MajorCredits): MajorCredits {
    return { credits: subjects1.credits + subjects2.credits, __majorBrand: "major" };
}

export function sumMinorCredits(subjects1: MinorCredits, subjects2: MinorCredits): MinorCredits {
    return { credits: subjects1.credits + subjects2.credits, __minorBrand: "minor" };
}