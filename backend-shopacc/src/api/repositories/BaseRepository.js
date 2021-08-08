const db = require('../../adapter/mysqlClient');

class BaseRepository {
  constructor(table) {
    this.table = table;
    this.db = db;
  }



  list(sql) {
    return new Promise((resolve, reject) => {
      this.db.query(sql, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  show(id) {
    const sql = `SELECT t.* FROM ${this.table} t WHERE t.id=${id} LIMIT 1`;

    return new Promise((resolve, reject) => {
      db.query(sql, (err, rows) => {
        if (err) reject(err);
        else if (rows.length === 1) {
          resolve(rows[0]);
        } else {
          resolve(null);
        }
      });
    });
  }

  detail(id) {
    const sql = `SELECT t.* FROM ${this.table} t WHERE t.id=${id} LIMIT 1`;

    return new Promise((resolve, reject) => {
      db.query(sql, (err, rows) => {
        if (err) reject(err);
        else if (rows.length === 1) {
          resolve({ data: rows[0] });
        } else {
          resolve({ data: null });
        }
      });
    });
  }

  create(params) {
    const now_date = new Date();
    params.created_date = now_date;

    const sql = `INSERT INTO ${this.table} SET ?`;

    return new Promise((resolve, reject) => {
      this.db.query(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  update(id, params) {
    const now_date = new Date();
    params.updated_date = now_date;

    const sql = `UPDATE ${this.table} SET ? WHERE id=${id}`;
    console.log(sql);
    return new Promise((resolve, reject) => {
      this.db.query(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(rows);
        }
      });
    });
  }

  updateMulti(params) {
    const now_date = new Date();
    params.updated_at = now_date;

    const sql = `UPDATE ${this.table} SET ? WHERE id=${id}`;

    return new Promise((resolve, reject) => {
      this.db.query(sql, params, (err, rows) => {
        if (err) reject(err);
        else {
          resolve(rows);
        }
      });
    });
  }

  delete(id) {
    const now_date = new Date();
    const params = {
      is_delete: 1,
      updated_date: now_date,
      // updated_by
    };

    const sql = `UPDATE ${this.table} SET ? WHERE id=${id}`;

    return new Promise((resolve, reject) => {
      this.db.query(sql, params, (err, rows) => {
        if (err) reject(err);
        else {
          resolve(rows);
        }
      });
    });
  }

  nestQuery(query) {
    const sql = `
      coalesce(
        (
          SELECT array_to_json(array_agg(row_to_json(x)))
          FROM (${query}) x
        ),
        '[]'
      )
    `;
    console.log(sql);

    return sql;
  }

  getCountFiltered(sql) {
    return new Promise((resolve, reject) => {
      this.db.query(sql, (err, rows) => {
        if (err) reject(err);
        else {
          resolve(rows[0].total);
        }
      });
    });
  }
  
  pagination() {
    let sql = ''
    sql = this.stringSelect;
    sql += ` LIMIT ${this.limit}`;
    sql += ` OFFSET ${this.offset}`;

    this.reset();
    return sql;
  }
}

module.exports = BaseRepository;
