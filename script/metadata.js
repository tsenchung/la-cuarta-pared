export class Metadata {
  all = new Set();
  articles = new Set();
  recentArticles = new Set();

  metadataFound(metadata) {
    this.all.add(metadata);
    if (metadata.category == "article") {
      this.articles.add(metadata);
      if (metadata.placement == "regular") {
        this.recentArticles.add(metadata);
      }
    }
  }

  render() {
    const code = `
    export const all = ${JSON.stringify(Array.from(this.all))};
    export const articles = ${JSON.stringify(Array.from(this.articles))};
    export const recentArticles = ${JSON.stringify(Array.from(this.recentArticles))};
    `
    return code;
  }
}