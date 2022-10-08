// array with the skills used

const codingLanguages = ["HTML", "CSS", "JavaScript"]
const usedSkillsText = document.querySelector(".used_skills");

if(codingLanguages.length === 1) {
    usedSkillsText.innerHTML = `This page was built using ${codingLanguages[0]}.`;
} else if (codingLanguages.length === 2) {
    usedSkillsText.innerHTML = `This page was built using: ${codingLanguages[0]} and ${codingLanguages[1]}.`;
} else if (codingLanguages.length === 0) {
    usedSkillsText.innerHTML = `This page was built by a miracle!`;
} else {
    let newText = 'This page was built using: ';
    for(i=0; i < codingLanguages.length-2; i++) {
        newText = `${newText} ${codingLanguages[i]},`;
    }
    newText = `${newText} ${codingLanguages[codingLanguages.length-2]} and ${codingLanguages[codingLanguages.length-1]}.`;
    usedSkillsText.innerHTML = newText; 
}