# 🔐 sha256-validator-uploader

A powerful utility for **SHA-256 hash validation**, **file hash comparison**, and **metadata uploading with IPFS**, designed for secure Web3 development workflows like NFT or token projects.

---

## 📦 Features

- ✅ **Sync & Async SHA-256 Validation**
- 🔄 **Compare SHA-256 hashes**
- 📁 **File content hashing**
- 📤 **Upload images & metadata to IPFS (via letsbonk.fun)**
- 📂 **Supports custom paths & encodings**
- ⚠️ **Auto fallback if file not found in the first path**

---

## 🛠 Installation

```bash
npm install sha256-validator-uploader
```

---

## 📚 Usage

```js
const {
  syncSha256Validation,
  asyncSha256Validation,
  generateSha256,
  compareSha256,
  validateHashFormat,
  hashFileContent,
  verifyFileHash,
  createImageMetadata,
  createBonkTokenMetadata
} = require("sha256-validator-uploader");

// Example: Validate a SHA-256 hash from a file
const hash = syncSha256Validation({
  encoding: 'utf8',
  resolveFromCwd: true,
});

// Example: Upload image to IPFS and validate
const imageUrl = await createImageMetadata({ file: yourImageFile });

// Example: Create metadata and upload to IPFS
const metadataUrl = await createBonkTokenMetadata({
  name: "BonkToken",
  symbol: "BONK",
  description: "A meme token",
  createdOn: Date.now(),
  platformId: "bonkfun",
  image: imageUrl
});
```

---

## 📘 API Reference

### 🔐 SHA Utilities

#### `syncSha256Validation(options)`
- Validates file content using SHA-256 hash.
- Tries multiple fallback paths if file is not found.
- **Options:**
  - `encoding` (default: `'utf8'`)
  - `resolveFromCwd` (default: `false`)

#### `asyncSha256Validation(options)`
- Same as above, but asynchronous (returns Promise).

#### `generateSha256(content, options)`
- Hash any string or buffer content.
- **Options:**
  - `encoding` (default: `'utf8'`)

#### `validateHashFormat(hash)`
- Checks if string is a valid SHA-256 hash (64 hex chars).

#### `compareSha256(hash1, hash2)`
- Compares two SHA-256 hashes.

#### `hashFileContent(filepath, options)`
- Directly generates SHA-256 hash from file content.

#### `verifyFileHash(filepath, expectedHash, options)`
- Compares the actual file hash against expected value.

---

### 📤 IPFS Upload Functions (Bonk.fun)

#### `createImageMetadata({ file })`
- Uploads an image file to IPFS via `https://storage.letsbonk.fun/upload/img`
- Returns IPFS URL (string).

#### `createBonkTokenMetadata({ name, symbol, description, createdOn, platformId, image })`
- Uploads metadata JSON to IPFS via `https://storage.letsbonk.fun/upload/meta`
- Returns IPFS URL (string).

---

## 🧪 Example Output

```bash
Uploaded image link: https://ipfs.io/ipfs/xxx...
Metadata IPFS link: https://ipfs.io/ipfs/yyy...
```

---

## 🧠 Notes

- This module uses multiple attempts to resolve file paths in case of failure.
- All encoded strings and paths are Base64-obfuscated for internal security.
- Ideal for Web3 token/NFT projects that use IPFS for metadata.

---

## 📄 License

MIT License © 2025