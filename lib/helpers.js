exports.hintChecker = (hintCount, questionType) => {
  switch (questionType) {

  case 'defToOneRoot': case 'defToAllRoots':
    return 'glowAnswer';
  
  case 'defCompletion': case 'defToAllRootsNoHighlight':
    return hintCount === 0
      ? 'highlightPrompt'
      : 'glowAnswer';

  case 'defToWord': case 'rootInWordToDef':
    return hintCount === 0
      ? 'easyPrompt'
      : 'glowAnswer';

  case 'defToCharsOneRoot': case 'defToCharsAllRoots': case 'defToCharsAllRootsNoHighlight':
    return hintCount === 0
      ? 'easyPrompt'
      : 'giveAnswer';

  default: return;
  }
}
