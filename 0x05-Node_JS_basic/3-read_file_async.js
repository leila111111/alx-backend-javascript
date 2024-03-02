const fs = require('fs');

async function countStudents(path) {
  if (await fs.existsSync(path)) {
    const names = {};
    const fields = {};
    const fileread = await fs.readFileSync(path, 'utf8');
    const filelines = fileread.toString().trim().split('\n');
    console.log(`Number of students: ${filelines.length - 1}`);

    filelines.slice(1).forEach((str) => {
      const rec = str.split(',');
      const field = rec.pop();
      fields[field] = Object.prototype.hasOwnProperty.call(fields, field) ? fields[field] + 1 : 1;
      names[field] = Object.prototype.hasOwnProperty.call(names, field)
        ? [...names[field], rec[0]]
        : [rec[0]];
    });
    for (const [key, val] of Object.entries(fields)) {
      const str = names[key].join(', ');
      console.log(`Number of students in ${key}: ${val}. List: ${str}`);
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
