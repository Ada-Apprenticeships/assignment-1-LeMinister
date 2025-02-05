class Node {
  constructor(text, timestamp, author) {
    this.text = text;
    this.timestamp = timestamp;
    this.author = author;
    this.next = null; //next node should be empty
  }
}

function createLinkedList(posts) {
  // checks to see if the list is empty or not
  if (!Array.isArray(posts) || posts.length === 0) {
    return null;  // Return null for empty lists
  }

  let head = null;
  let pointer = null;

  // checks the formatting of each post
  posts.forEach(post => {
    if (typeof post.text !== "string" || !post.text.trim()) {
      throw new Error("Each post must have a writing");
    }
    if (typeof post.timestamp !== "string" || isNaN(Date.parse(post.timestamp))) {
      throw new Error("invalid timestamp.");
    }
    if (typeof post.author !== "string" || !post.author.trim()) {
      throw new Error("Each post must have an'author.");
    }

    const newNode = new Node(post.text, post.timestamp, post.author);
    if (!head) {
      head = newNode;
      pointer = newNode;
    } else {
      pointer.next = newNode;
      pointer = newNode;
    }
  });

  return head;
}

function searchSocialMediaFeed(feed, keyword) {
  // checks for an emoty feed
  if (!feed) return []; 

  const results = [];
  const sensitiveWord = keyword.toLowerCase();  // use to make the keyword not case sensetive

  let currentNode = feed;
  while (currentNode !== null) {
    const sensitiveText = currentNode.text.toLowerCase();  // used in order to not make search case sensetive
    if (sensitiveText.includes(sensitiveWord)) {
      results.push({
        text: currentNode.text,
        timestamp: currentNode.timestamp,
        author: currentNode.author
      });
    }
    currentNode = currentNode.next;
  }

  return results;
}



export {createLinkedList, searchSocialMediaFeed};
// had to remove 'default' because of structure