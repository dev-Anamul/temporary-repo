class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      let cur = word[i];

      if (!node.children[cur]) {
        node.children[cur] = new TrieNode();
      }
      node = node.children[cur];
    }
    node.endOfWord = true;
  }

  search(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      let cur = word[i];
      if (!node.children[cur]) return false;

      node = node.children[cur];
    }

    return node.endOfWord;
  }
}

const trie = new Trie();
trie.insert("anamul");
trie.insert("jibon");
trie.insert("anam");
trie.insert("haque");
trie.insert("arif");

console.log(trie.search("arif"));
console.log(trie.search("anam"));

console.log(trie);
