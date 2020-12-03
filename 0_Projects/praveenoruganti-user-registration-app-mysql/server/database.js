const server= require('./server');

exports.query = (sql) => {
    return new Promise((resolve, reject) => {
        server.connection.query(sql, null, function (err, results) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};