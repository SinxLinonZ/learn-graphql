import { Injectable } from '@nestjs/common';
import Database from 'better-sqlite3';
import { join } from 'path';
import { writeFileSync } from 'fs';

@Injectable()
export class DbService {
  private db: Database.Database;

  constructor() {
    const dbPath = join(process.cwd(), 'src/db.sqlite');
    if (!dbPath) {
      writeFileSync(dbPath, '');
      console.log('Database initialized at', dbPath);
    }
    this.db = new Database(dbPath, { verbose: console.log });
    this.db.pragma('journal_mode = WAL');
    console.log('Resetting database...');
    this.resetDb();
  }

  resetDb() {
    this.db.exec(`
      DROP TABLE IF EXISTS posts;
      DROP TABLE IF EXISTS users;

      CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
      );

      CREATE TABLE posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(id)
      );

      INSERT INTO users (name, email) VALUES
        ('John Doe', 'john@example.com'),
        ('Jane Doe', 'jane@example.com');

      INSERT INTO posts (userId, title, content) VALUES
        (1, 'First Post', 'This is the first post.'),
        (1, 'Second Post', 'This is the second post.'),
        (2, 'Hello World', 'Hello world from Jane!');
    `);
  }

  // Users
  getUsers() {
    return this.db.prepare('SELECT * FROM users').all();
  }

  getUserById(id: number) {
    return this.db.prepare('SELECT * FROM users WHERE id = ?').get(id);
  }

  createUser(name: string, email: string) {
    const stmt = this.db.prepare(
      'INSERT INTO users (name, email) VALUES (?, ?)',
    );
    const info = stmt.run(name, email);
    return this.getUserById(info.lastInsertRowid as number);
  }

  getPostsByUserId(userId: number) {
    return this.db.prepare('SELECT * FROM posts WHERE userId = ?').all(userId);
  }

  // Posts
  getPostById(id: number) {
    return this.db.prepare('SELECT * FROM posts WHERE id = ?').get(id);
  }

  getPosts() {
    return this.db.prepare('SELECT * FROM posts').all();
  }

  createPost(userId: number, title: string, content: string) {
    const stmt = this.db.prepare(
      'INSERT INTO posts (userId, title, content) VALUES (?, ?, ?)',
    );
    const info = stmt.run(userId, title, content);
    return this.getPostById(info.lastInsertRowid as number);
  }
}
