import { promises as fs } from 'fs';
import path from 'path';

async function globalTearDown(): Promise<void> {
  const filePath = path.resolve(__dirname, '../../playwright/.auth/user.json');
  try {
    await fs.writeFile(filePath, '', 'utf-8');
  } catch (error) {
    console.error(error);
  }
}

export default globalTearDown;
