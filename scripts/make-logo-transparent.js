const fs = require('fs');
const { PNG } = require('pngjs');

const inputPath = 'renderer/assets/icons/Logo.png';
const backupPath = 'renderer/assets/icons/Logo.original.png';

const buf = fs.readFileSync(inputPath);
const png = PNG.sync.read(buf);

if (!fs.existsSync(backupPath)) {
  fs.writeFileSync(backupPath, buf);
}

const { width, height, data } = png;

function idx(x, y) {
  return (width * y + x) * 4;
}

const c00 = idx(0, 0);
const bg = { r: data[c00], g: data[c00 + 1], b: data[c00 + 2] };

function isNearBg(i) {
  const dr = Math.abs(data[i] - bg.r);
  const dg = Math.abs(data[i + 1] - bg.g);
  const db = Math.abs(data[i + 2] - bg.b);
  return dr <= 8 && dg <= 8 && db <= 8;
}

const visited = new Uint8Array(width * height);
const queue = [];

function push(x, y) {
  const p = y * width + x;
  if (visited[p]) return;
  const i = idx(x, y);
  if (!isNearBg(i)) return;
  visited[p] = 1;
  queue.push([x, y]);
}

for (let x = 0; x < width; x += 1) {
  push(x, 0);
  push(x, height - 1);
}
for (let y = 0; y < height; y += 1) {
  push(0, y);
  push(width - 1, y);
}

let head = 0;
while (head < queue.length) {
  const [x, y] = queue[head];
  head += 1;
  const i = idx(x, y);
  data[i + 3] = 0;

  if (x > 0) push(x - 1, y);
  if (x < width - 1) push(x + 1, y);
  if (y > 0) push(x, y - 1);
  if (y < height - 1) push(x, y + 1);
}

fs.writeFileSync(inputPath, PNG.sync.write(png));
console.log(`Background removed. Pixels made transparent: ${queue.length}`);
