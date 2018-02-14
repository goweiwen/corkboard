import getYouTubeID from "get-youtube-id";

function getErrorTile(message) {
  return { type: "markdown", text: message };
}

export function getNewTile(type) {
  switch (type) {
    case "markdown":
      return { type, text: "Hello, world!" };
    case "youtube":
      return { type, videoId: "A9PKAHRs5ds" };
    default:
      return getErrorTile("Invalid tile type");
  }
}

export function cleanTile(tile) {
  const { type } = tile;
  switch (type) {
    case "markdown":
      return { type, text: tile.text };
    case "youtube":
      return { type, videoId: getYouTubeID(tile.videoId) || tile.videoId };
    default:
      return getErrorTile("Invalid tile type");
  }
}
