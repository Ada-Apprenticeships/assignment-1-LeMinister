class Node {
  constructor(text, timestamp, author) {
    this.text = text;
    this.timestamp = timestamp;
    this.author = author;
    this.next = null;
  }
}

function createLinkedList(posts) {
  // Step 1: Check if posts is a valid array with at least one element
  if (!Array.isArray(posts) || posts.length === 0) {
    return null;  // Return null for empty lists
  }

  let head = null;
  let tail = null;

  // Step 2: Iterate through each post and validate its structure
  posts.forEach(post => {
    if (typeof post.text !== "string" || !post.text.trim()) {
      throw new Error("Each post must have a non-empty 'text' property.");
    }
    if (typeof post.timestamp !== "string" || isNaN(Date.parse(post.timestamp))) {
      throw new Error("Each post must have a valid 'timestamp' property.");
    }
    if (typeof post.author !== "string" || !post.author.trim()) {
      throw new Error("Each post must have a non-empty 'author' property.");
    }

    const newNode = new Node(post.text, post.timestamp, post.author);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  });

  return head;
}

function searchSocialMediaFeed(feed, keyword) {
  // Step 1: Handle the case where the feed is empty
  if (!feed) return [];  // Return empty array for empty feed

  const results = [];
  const normalizedKeyword = keyword.toLowerCase();  // Normalize the keyword for case-insensitive search

  let currentNode = feed;
  while (currentNode !== null) {
    const normalizedText = currentNode.text.toLowerCase();  // Normalize post text for case-insensitive search
    if (normalizedText.includes(normalizedKeyword)) {
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
